import React,{useContext} from "react";
import noteContext from "../context/notes/noteContext";


const Noteitem = (props) => {
    const context = useContext(noteContext)

    const { deleteNote } = context;
  const { note,updateNote } = props;
  return (
    <div className="col-md-3 my-3">
      <div className="card">
        <div className="card-body">
          <div className="d-flex align-item-center">
            <h5 className="card-title">{note.title}</h5>
      
            <img src="delete.png" alt="delete" onClick={()=>{deleteNote(note._id);props.showAlert("Deleted successfully","success");}} />
            <img src="edit.png" alt="edit" onClick={()=>{updateNote(note)}} />
          </div>

          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
