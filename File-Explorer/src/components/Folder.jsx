const Folder = ({ explorer }) => {
  return (
    <div style={{ marginTop: 5 }}>
      <div>
        <span>📁{explorer.name}</span>
      </div>

      <div>
        {explorer.items.map((exp) => {
          return <span>{exp.name}</span>;
        })}
      </div>
    </div>
  );
};

export default Folder;
