import React, { useContext } from "react";
import { LanguageContext } from "../../utils/LanguageContext";
import ServiceCard from "./components/ServiceCard";
import { Bot } from "lucide-react";

const Services = React.forwardRef(function Services(props, ref) {
    // eslint-disable-next-line no-unused-vars
    const { content } = useContext(LanguageContext);

    return ( 
        <section className="services" id="services" ref={ref}>
            <div id="services-container">
                <p id="section-title">Services</p>
                <p id="section-subtitle">💡{content.services.highlightText}</p>

                <div id="service-cards-container">
                        <ServiceCard 
                            icon={<Bot size={38} />} 
                            title={content.services.title} 
                            services={content.services.content}
                        />
                </div>
            </div>
        </section>
     );
});
 
export default Services;