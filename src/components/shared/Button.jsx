import PropTypes from "prop-types";

const Button = ({ buttonText }) => {
  return (
    <div>
      <button className="btn bg-[#D2AB69] border-none shadow-none">
        {buttonText}
      </button>
    </div>
  );
};
Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
};

export default Button;
