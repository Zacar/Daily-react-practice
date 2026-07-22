const SliderInput = ({
  title,
  state,
  min,
  max,
  onChange,
  labelMin,
  labelMax,
  underlineTitle,
}) => {
  return (
    <div>
      <span className="title">{title}</span>
      {state && (
        <span className="title" style={{ textDecoration: "underline" }}>
          {underlineTitle}
        </span>
      )}
      <div>
        <input
          type="range"
          min={min}
          max={max}
          className="slider"
          value={state}
          onChange={onChange}
        />
        <div className="labels">
          <label>{labelMin ?? min}</label>
          <b>{state}</b>
          <label>{labelMax ?? max}</label>
        </div>
      </div>
    </div>
  );
};

export default SliderInput;
