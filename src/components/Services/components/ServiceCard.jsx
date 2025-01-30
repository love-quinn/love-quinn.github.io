import PropTypes from 'prop-types';

const ServiceCard = ({ icon, title, services }) => {
    return ( 
        <div id="service-card-container">
            <div id="card-logo">
                {icon}
                <h1 id='card-title'>{title}</h1>
            </div>
            {services.map((service, index) => (
                <div id="card-content" key={index}>
                    <h2>{service.title}</h2>
                    <p>{service.description}</p>
                </div>
            ))}
        </div>
     );
}

ServiceCard.propTypes = {
    icon: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    services: PropTypes.array.isRequired
};
 
export default ServiceCard;