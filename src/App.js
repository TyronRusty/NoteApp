import {useState} from 'react';
import {nanoid} from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';

const App =() =>{
/*WE are making an arrays of notes to keep them , array because we are working with a list of notes 
and state because they need to change, the use state was imported after creation 
pof the note const  useState() will  hold item in the array because we need to know whate note is it
*/
const [notes , setNotes] = useState([
  {
  /* the id will help us later when deleting notes the nanoid was imported after creation */
  id:nanoid(),
  text: 'this is my first note',
  date:'13/04/2021',
  /* the id ,text and date are all consider object maybe of type useState
  we will copied that few times  */
},
{/* this is the second note */
  id:nanoid(),
  text: 'this is my second note',
  date:'21/04/2021',
},
{ /* this is the the 3rd note */
  id:nanoid(),
  text: 'this is my third note',
  date:'28/04/2021',
},
{ /* this is the the 4th note */
  id:nanoid(),
  text: 'this is my fourth note',
  date:'30/04/2021',
},
]);
const [searchText , setSearchText] = useState('');
/*this is going to accept a value that the user will add 
we will then pass addNote has a prop on line
47 by create an handeAddnote to hold that value | go to add in the notelist after here */
const addNote = (text)=>{
  /* new date for each notes this date obj will be use has 'date.tolocale line 45' */
  const date = new Date();
  /* new note will handle txt passed by users */
  const newNote ={
    id:nanoid(),
    text: text,
    date: date.toLocaleDateString() 
  } 
  /* this is an array with existing note but we will had the saved note a the end of it
  it is done because it bad to mutate states in react, it a new one instead of updateing the hold */
  const newNotes =[...notes , newNote];
  setNotes(newNotes) /* this will render at call and update the data */
};

/*we will pass the notelist "notes"(line10)variable to the NotessList (line34)component below 
the NotesList component will render each notes| notes = {notes, created on line 10}
go to noteslist.js after here */
/* The deleteNote will take the id of the note to be deleted,the filter function helps 
remove the note of id same to the one that was passed in, will pass the note down the component tree
in the notelist we will craete a new prop to add it */
const deleteNote =(id) =>{
  const newNotes = notes.filter((note)=> note.id !== id);
  setNotes(newNotes);
}
/*the notes.filter below will go through the notes and return notes that contains
words searched by users */
  return (
  <div className='container'>
    <Header  />
   <Search handleSearchNote={setSearchText}/>
    <NotesList
     notes={notes.filter((note)=>
         note.text.toLowerCase().includes(searchText)
         )}
     handleAddNote={addNote}
     handleDeleteNote={deleteNote}
     />
     

  </div>
  
  );
};
export default App;