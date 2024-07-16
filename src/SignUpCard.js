import React from "react";
import "./SignUpCard.css";

const SignUpCard = () => {
  return (
    <div className="signup-card">
      <h2>Want to check out this file? Sign up or Log in</h2>
      <button className="google-button">Continue with Google</button>
      <div className="divider">or</div>
      <input type="email" placeholder="EMAIL" />
      <input type="password" placeholder="PASSWORD" />
      <label className="subscribe">
        <input type="checkbox" />
        Subscribe to Figma tips and updates*
      </label>
      <button className="create-account">Create account</button>
      <p>
        By clicking "Create account" or "Continue with Google", you agree to the
        <a href="https://www.figma.com/terms/"> Figma TOS </a> and
        <a href="https://www.figma.com/privacy/"> Privacy Policy</a>.
      </p>
      <p>
        *By opting in, you are consenting to receive product, service, and
        events updates from Figma. You can unsubscribe at any time.
      </p>
      <a href="/" className="single-sign-on">
        Use single sign-on
      </a>
      <a href="/" className="log-in">
        Already have an account? Log in
      </a>
    </div>
  );
};

export default SignUpCard;
