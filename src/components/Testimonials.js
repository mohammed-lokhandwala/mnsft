import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      image: "maksir.jpg",
      text: "Murtaza is truly a master at personal branding. His innovative strategies are both practical and highly effective, creating a noticeable and lasting impact in no time at all.",
      name : "Mak Sir"
    },
    {
      image: "affan.jpg",
      text: "Murtaza is amazing when it comes to personal branding. He really knows how to help you stand out in the market in a way that feels genuine, just real impactful results.",
      name: "Affan botawala"
    },
    {
      image: "sakina.jpg",
      text: "Murtaza takes all the stress out of content creation. From concepts to editing, he handles everything. Just a couple of videos, and my DMs were flooded..",
      name: "Sakina poonawala"
    }
  ];

  return (
    <div className="testimonials-section">
        <div></div>
      <h2>Testimonials</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <img src={testimonial.image} alt={`Person ${index + 1}`} />
            <div className="black">
            <h3>{testimonial.name}</h3>
            <p>{testimonial.text}</p>
            </div>
          

          </div>
        ))}
      </div>

      <div className='headings'>
   <h3 className='stats-headline'>Let’s Work Together</h3>
   <p>If you're ready to level up your brand, whether through organic growth,
personal branding, or persuasive video ads, MNFST Agency is your go-to
partner. We’re here to help you cut through the noise, reach your audience,
and convert followers into customers..</p>
   </div>

      <div className="text-container">
    <a href="https://api.whatsapp.com/send?phone=918849493915&text=Murtaza%20can%20I%20know%20more%20about%20your%20services%20%3F">   <button className="text-button">Text Murtaza</button></a>
    </div>
    </div>
  );
};

export default Testimonials;
//https://api.whatsapp.com/send?phone=918849493915&text=Murtaza%20can%20I%20know%20more%20about%20your%20services%20%3F