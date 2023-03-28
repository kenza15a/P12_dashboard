import "./title.css";
import PropTypes from "prop-types";
/**
 *
 * @param { String } name the name of the current user
 * @returns { HTMLElement } the Title
 */
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
  name: PropTypes.string.isRequired,
};
export default Title;
