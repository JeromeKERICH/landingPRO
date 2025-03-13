import { useState } from "react";
import SignupForm from "./SignUpForm";
import "./styles/Hero.css";

const Hero = () => {
  const [showSignup, setShowSignup] = useState(false);

  return (
    <div className="hero-container">
      <h1>Ditch the Expensive Tools<br></br> <span>Build Your Own Landing Page</span></h1>
        
      <p>
        Stop relying on expensive third-party tools. Get a custom landing page 
        with built-in payment integration and full control over your brand.
      </p>
      <button onClick={() => setShowSignup(!showSignup)} className="cta-button">
        {showSignup ? "Close" : "Get Early Access"}
      </button>

      {showSignup && <SignupForm />}
    </div>
  );
};

export default Hero;
