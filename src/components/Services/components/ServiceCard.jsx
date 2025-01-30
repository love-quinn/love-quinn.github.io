import PropTypes from 'prop-types';

const ServiceCard = ({ icon }) => {
    return ( 
        <div id="service-card-container">
            <div id="card-logo">
                {icon}
                <h1>Bots</h1>
            </div>
        </div>
     );
}

ServiceCard.propTypes = {
    icon: PropTypes.element.isRequired
};
 
export default ServiceCard;