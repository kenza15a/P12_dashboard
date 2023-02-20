import "./title.css";
import PropTypes from "prop-types";

function Title({ name }) {
  return (
    <div className="header">
      <h1 className="title">
        Bonjour <span className="red-title"> {name}</span>
      </h1>
      <h3 className="sub-title">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </h3>
    </div>
  );
}
Title.propTypes = {
  name: PropTypes.string,
};
export default Title;
