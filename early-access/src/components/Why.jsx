import { FaMoneyBillWave, FaTools, FaClock, FaMobileAlt, FaShoppingCart, FaBolt, FaSync } from "react-icons/fa";
import "./styles/Why.css";

const Why = () => {
  return (
    <div className="why-container">
      <h2>Why LandingPRO?</h2>
      <div className="why-grid">
        <div className="why-item">
          <FaMoneyBillWave className="why-icon" />
          <h3>Affordable</h3>
          <p>No expensive subscriptions. Get a professional landing page at a low cost.</p>
        </div>

        <div className="why-item">
          <FaSync className="why-icon" />
          <h3>One-time Purchase</h3>
          <p>Pay once and own your landing page forever. Edit anytime without extra fees.</p>
        </div>

        <div className="why-item">
          <FaTools className="why-icon" />
          <h3>Easy to Customize</h3>
          <p>Choose colors, layouts, and branding that match your unique style.</p>
        </div>

        <div className="why-item">
          <FaMobileAlt className="why-icon" />
          <h3>Mobile Friendly</h3>
          <p>Your landing page will look great on any device, ensuring more conversions.</p>
        </div>

        <div className="why-item">
          <FaShoppingCart className="why-icon" />
          <h3>Built-in Payments</h3>
          <p>Seamlessly integrate with payment options and start selling instantly.</p>
        </div>

        <div className="why-item">
          <FaBolt className="why-icon" />
          <h3>Fast & Secure</h3>
          <p>Enjoy a lightning-fast experience with top-notch security for your visitors.</p>
        </div>
      </div>
    </div>
  );
};

export default Why;
