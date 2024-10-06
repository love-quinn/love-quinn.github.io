import React, { useContext, useState, useEffect } from "react";
import { LanguageContext } from "../../utils/LanguageContext";

const Testimonials = React.forwardRef(function Testimonials(props, ref) {
  const { content } = useContext(LanguageContext);

  // Array of testimonials with different titles, images, and content
  const testimonials = [
    {
      title: "Amazing Service",
      avatar: "/images/carol_avatar.png",
      name: "Carolina Cruz",
      content:
        "Web developer with several quality projects, he helped me a lot with his skills, knowledge and experience in software development",
    },
    {
      title: "Incredible Support",
      avatar: "/images/cherry.jpeg",
      name: "Jaianne Farias",
      content:
        "Lucas foi fundamental para o desenvolvimento de projetos com excelência, sempre demonstrando comprometimento e proatividade.",
    },
    {
      title: "Highly Professional",
      avatar: "/images/marcilio.jpeg",
      name: "Gabriel Marcílio",
      content:
        "Desenvolveu soluções robustas e eficientes, sempre com um olhar atento para detalhes e prazos. Além das habilidades técnicas, Lucas também é ótimo em colaborar e compartilhar conhecimentos.",
    },
  ];

  // State to track the current testimonial
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cycle through testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % content.testimonials.length
      );
    }, 7500); // Change every 5 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, [testimonials.length]);

  const currentTestimonial = content.testimonials[currentIndex];

  return (
    <section id="testimonials" className="" ref={ref}>
      <div className="testimonials">
        <div className="testimonial_header">
          <div className="flex-col">
            <h2 id="testimonial-title">{currentTestimonial.title}</h2>
            <img
              id="testimonial-avatar"
              src={currentTestimonial.avatar}
              alt={currentTestimonial.name}
            ></img>
            <div className="flex">
              <h6 className="testimonials-title">{currentTestimonial.name}</h6>
              <div className="badge-div">
                <img
                  id="checked-badge"
                  src="/images/badge-check.svg"
                  alt="verified badge"
                />
              </div>
            </div>
          </div>
          <div className="testimonials-content">
            <div className="text-box">
              <h6 className="poppins-thin">“{currentTestimonial.content}”</h6>
            </div>
          </div>
        </div>
        <div className="indicator">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`circle ${currentIndex === index ? "active" : ""}`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
});

Testimonials.displayName = "Testimonials";
export default Testimonials;
