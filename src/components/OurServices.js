import React from "react";
import "./OurServices.css";

const OurServices = () => {
  const services = [
    {
      title: "Ads Creation:",
      description: "We handle your social media presence to increase engagement and visibility.",
      features: [
        { text: "We design ads that do more than grab attention—they drive results.", icon: "icon1.png" },
        { text: "From strategy to execution, we ensure your ads resonate with the right audience.", icon: "icon2.png" },
        { text: "Innovative, impactful, and ROI-focused—your brand deserves nothing less.", icon: "icon3.png" },
      ],
    },
    {
      title: "Content Creation:",
      description: "We create high-quality content tailored to your brand's needs.",
      features: [
        { text: "Tell your brand’s story with compelling content that engages and inspires.", icon: "icon1.png" },
        { text: "From blogs to visuals, we create content that captures hearts and drives action.", icon: "icon2.png" },
        { text: "Your message, your voice—crafted with precision for maximum impact.", icon: "icon3.png" },
      ],
    },
    {
      title: "Personal Branding:",
      description: "Maximize ROI with data-driven ad campaigns across platforms.",
      features: [
        { text: "We help you stand out with a personal brand that reflects your true essence.", icon: "icon1.png" },
        { text: "Be memorable, be authentic—our strategies position you as a leader in your space.", icon: "icon2.png" },
        { text: "Transform your presence into influence with expert personal branding solutions.", icon: "icon3.png" },
      ],
    },
  ];

  return (
    <div className="services-container">
      <h2 className="services-header">Our Services</h2>
      <div className="services-cards">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <ul className="service-features">
              {service.features.map((feature, idx) => (
                <li key={idx} className="feature-item">
                  <img
                    src={feature.icon}
                    alt={`Feature Icon ${idx + 1}`}
                    className="feature-icon"
                  />
                  {feature.text}
                </li>
              ))}
            </ul>
            <button className="service-button">Book a call</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
