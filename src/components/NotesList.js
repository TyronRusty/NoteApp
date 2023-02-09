import Note from './Note';
import AddNote from './AddNote';
//passing the notes created from notes.js on line 34 here 
/* the map fonction will help loop on our list and render the notes component ,we will*/ /*put on the return function below*/ /*line 10 we passed the function to the map function, the map function is passing the current note
to the function and for each function we will render a not component, yes THE FUNCTION
DOING THIS IS CALLED NOTE LOL  */ 
const NotesList = ({notes , handleAddNote , handleDeleteNote}) => (
  <div className='notes-list'>

    {notes.map((note) =>(
/* we want to pass the notes form each notes as props instead of hard coding them.
 this function will do that  after here got to the note.js
 the addnote is placed on 21 so that it will flow nicely with the rest of the notes*/
    <Note 
    id={note.id} 
    text={note.text} 
    date={note.date} 
    handleDeleteNote ={handleDeleteNote}
    />
    ))}
    <AddNote handleAddNote={handleAddNote}/>
  
  </div>
);
export default NotesList;