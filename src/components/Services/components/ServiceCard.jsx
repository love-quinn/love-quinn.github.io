import PropTypes from 'prop-types';

const ServiceCard = ({ icon, title, services, classBgColor }) => {
  const borderColor = classBgColor === 'bots' ? '#1B395D' :
                      classBgColor === 'websites' ? '#371B5D' :
                      classBgColor === 'apps' ? '#405D1B' : '#000';

  return (
    <div id="service-card-container" style={{ '--border-color': borderColor, border: `2px solid var(--border-color)` }}>
      <div id="card-logo" className={classBgColor}>
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
  classBgColor: PropTypes.string,
  services: PropTypes.array.isRequired,
  isCurrent: PropTypes.bool,
};

export default ServiceCard;