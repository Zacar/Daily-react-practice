import Note from "./note";

const Notes = ({ notes = [], setNotes = () => {} }) => {
  return (
    <div>
      {notes.map((note) => {
        return <Note key={note.id} content={note.text}></Note>;
      })}
    </div>
  );
};

export default Notes;
