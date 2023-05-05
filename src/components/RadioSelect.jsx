import '../styles/popup.scss';

function RadioSelect(props) {
    const { index, isSelected, children, handleRadioCheck } = props;
    return (
      <div className="single-radio">
        {children}
        <span
          className={`circle ${index === isSelected ? "bgWhite" : ""}`}
          onClick={() => handleRadioCheck(index)}
        ></span>
      </div>
    );
  };

export default RadioSelect;