import "./styles/About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <div className="about-content">
        <div className="about-text">
          <p>
            Welcome to <strong>LandingPRO</strong>, where we help LinkedIn creators and entrepreneurs
            build their own customized landing pages. Instead of relying on expensive third-party
            tools, we offer a simple and cost-effective solution with built-in payment integration.
          </p>
          <p>
            Whether you're selling products, offering services, or building your brand, our platform
            allows you to create a landing page that reflects your style and preferences.
          </p>
          <p>
            Sign up today and take control of your online presence!
          </p>
        </div>
        <div className="about-image">
          <img src="/assets/landing.jpg" alt="LandingPRO Platform" />
        </div>
      </div>
    </div>
  );
};

export default About;
