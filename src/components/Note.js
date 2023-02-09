import { MdDeleteForever} from 'react-icons/md';
/*we will get the id , text and date that were passed in notelist.js */
const Note = ({id , text , date , handleDeleteNote}) => {

    return ( 
    <div className='note'> 
    <span>{text}</span>
    <div className='note-footer'>
    <small>{date}</small>
        <MdDeleteForever 
        onClick={()=> handleDeleteNote(id)} 
        className ='delete-icon' size ='1.3em'/>
    </div>
    </div>
    );

};
export default Note;