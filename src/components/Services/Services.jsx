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
                <p id="section-subtitle">💡 O que posso criar para você?</p>

                <div className="service-cards-container">
                    <ServiceCard icon={<Bot />} />
                </div>
            </div>
        </section>
     );
});
 
export default Services;