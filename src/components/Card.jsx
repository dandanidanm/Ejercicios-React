import PropTypes from "prop-types";
import "./Card.css";

const Card = ({ lang, img, fcolor, scolor }) => {
  return (
    <div
      className="container__card"
      style={{
        background: `linear-gradient(to left, ${fcolor}, ${scolor})`
      }}
    >
      <img src={img} alt={lang} />
      <h3>{lang}</h3>
    </div>
  );
};

// validacion de datos de los prop del padre en este ejemplo se esperan string en los props del padre
Card.propTypes = {
  lang: PropTypes.string,
  img: PropTypes.string,
  fcolor: PropTypes.string,
  scolor: PropTypes.string
};

export default Card;
