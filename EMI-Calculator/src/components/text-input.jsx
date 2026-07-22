const TextInput = ({ title, state, setState }) => {
  return (
    <div>
      <span className="title">{title}</span>
      <input
        type="number"
        value={state}
        onChange={(e) => setState(e.target.value)}
        placeholder={title}
      />
    </div>
  );
};

export default TextInput;
