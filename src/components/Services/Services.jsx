import React, { useContext } from "react";
import { LanguageContext } from "../../utils/LanguageContext";
import ServiceCard from "./components/ServiceCard";
import { getCategoryIcon } from "../../utils/icons";

const Services = React.forwardRef(function Services(props, ref) {
  const { content } = useContext(LanguageContext);

  return (
    <section className="services" id="services" ref={ref}>
      <div id="services-container">
        <div id="section-text">
          <p id="section-title">{content.services.mainText}</p>
          <p id="section-subtitle">💡{content.services.highlightText}</p>
        </div>
        <div id="service-cards-container">
          {content.services.cards.map((cardContent, index) => (
            <ServiceCard
              key={index}
              classBgColor={cardContent.classBgColor}
              icon={getCategoryIcon(cardContent.icon)}
              title={cardContent.title}
              services={cardContent.content}
            //   isCurrent={index === 1} // Set the first card as the current card
            />
          ))}
        </div>
      </div>
    </section>
  );
});

export default Services;