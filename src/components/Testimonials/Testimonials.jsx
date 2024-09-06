import React, { useContext } from "react";
import { LanguageContext } from "../../utils/LanguageContext";

const Testimonials = React.forwardRef(function Testimonials(props, ref) {
  const { content } = useContext(LanguageContext);
  return (
    <section id="testimonials" className="" ref={ref}>
      <div className="testimonials">
        <div className="testimonial_header">
          <div className="flex-col">
            <h2 id="testimonial-title">{content.testimonials.title}</h2>
            <img id="testimonial-avatar" src="/images/carol_avatar.png" alt="carol_cruz"></img>
            <div className="flex">
                <h6 className="testimonials-title">Carolina Cruz</h6>
                <div className="badge-div">
                    <img id="checked-badge" src="/images/badge-check.svg"/>
                </div>
            </div>
          </div>
          <div className="testimonials-content">
            <h6 className="poppins-thin">
            “{content.testimonials.content}”
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
});

Testimonials.displayName = "Testimonials";
export default Testimonials;
