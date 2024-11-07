import { useContext } from "react";
import { LanguageContext } from "../../utils/LanguageContext";

const FloatingWhatsappButton = () => {
    const { content } = useContext(LanguageContext);

    return (
        <a
            id="wpp-floating-btn"
            href={content.whatsapp.link}
            rel="noopener noreferrer"
            target="_blank"
            title={content.whatsapp.header}
        >
            <div>
                <div className="avatar">
                    <div className="animatedCircle"></div>
                    <img
                        id="whatsappImg"
                        loading="lazy"
                        width="28px"
                        height="28px"
                        decoding="async"
                        data-nimg="1"
                        src="/images/discord.svg"
                        alt="WhatsApp Logo"
                        style={{ color: "transparent" }}
                    />
                </div>
                <div className="tooltipDiv">
                    <h2>{content.whatsapp.header}</h2>
                    <h3>{content.whatsapp.description}</h3>
                </div>
            </div>

        </a>
    );
}
export default FloatingWhatsappButton;