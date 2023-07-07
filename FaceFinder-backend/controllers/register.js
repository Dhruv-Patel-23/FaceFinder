const handleRegister = (req, res, db, bcrypt) => {
  const { email, name, password } = req.body;
  if(!email || !name || !password){
   return res.status(400).json("invalid submittion")
  }
  else{
    const saltRounds = 10; // Number of salt rounds for bcrypt

  // Generate the hashed password using bcrypt
  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      res.status(500).json("Error creating user");
    } else {
      // Insert the user's login information into the 'login' table
      db("login")
        .insert({
          hash: hash,
          email: email,
        })
        .returning("email")
        .then((loginEmail) => {
          // Insert the user's information into the 'users' table
          return db("users")
            .returning("*")
            .insert({
              email: loginEmail[0].email,
              name: name,
              joined: new Date(),
            })
            .then((user) => {
              res.json(user[0]);
            });
        })
        .catch((err) => {
          res.status(400).json("Unable to register");
        });
    }
  });
  }
  
};

module.exports={
  handleRegister: handleRegister,
};
