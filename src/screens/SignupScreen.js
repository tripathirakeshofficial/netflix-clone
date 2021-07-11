import React from "react";
import "./SignupScreen.css";

function SignupScreen() {
  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input placeholder="email" type="email" />
        <input placeholder="password" type="password" />
        <button type="submit">Sign In</button>
        <h4>
          <span className="signupScreen_gray">New to Netflix? </span>
          <span className="signupScreen_link">Sign Up now.</span>
        </h4>
      </form>
    </div>
  );
}

export default SignupScreen;
