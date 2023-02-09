import { useState } from "react";
/* we defaulted the usestate to an empty string because that how we want our note to start out 
- onchange will handle the change the user will make
- target.value is the value of what the user will 
-16 {notetext} gives us more controle on what the text value is 
-12 the dunction onclick will update the state of the new note 
this will allow the child class from app.js to save the note*/

const AddNote = ({handleAddNote}) => {
    const [noteText , setNoteText] = useState('');
    const handleChange =(event)=> {
        setNoteText(event.target.value);
    };
    const handleSaveClick =() =>{
        /*this handle note will be triggered when the user will want to save a new note */
      handleAddNote(noteText);
      //this method helps create new empty note 
      setNoteText('');
      //this method is to not let people safe empty notes
     /*  if(noteText.trim().length>0){
        handleAddNote(noteText);
      } */
    }
    return (
        <div className='note new'>
            <textarea 
                rows ='8'
                cols ='10'
                placeholder='Type to add a note...'
                value={noteText}
                onChange={handleChange}
           ></textarea>
            <div className='note-footer'>
                <small> </small>
                <button className ='save'onClick={handleSaveClick}>save</button>
            </div>
        </div>
    );
};
export default AddNote;