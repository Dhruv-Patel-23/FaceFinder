import React from "react";
import Logo from "../Logo/Logo";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <div className="h-25">
        <nav className="flex justify-between">
          <Logo />
          <strong
            onClick={() => onRouteChange("signout")}
            className="f3 link dim black underline pa3 pointer"
          >
            Sign Out
          </strong>
        </nav>
      </div>
    );
  } else {
    return (
      <div className="h-25">
        <nav style={{ display: "flex", justifyContent: "flex-end" }}>
          <strong
            onClick={() => onRouteChange("signin")}
            className="f3 link dim black underline pa3 pointer"
          >
            Sign In
          </strong>
          <strong
            onClick={() => onRouteChange("register")}
            className="f3 link dim black underline pa3 pointer"
          >
            Register
          </strong>
        </nav>
      </div>
    );
  }
};

export default Navigation;
