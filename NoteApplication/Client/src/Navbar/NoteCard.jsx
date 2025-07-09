import axios from "axios";
import React from "react";

const BASEURL = import.meta.env.VITE_BASEURL;

const NoteCard = ({ noteId, title, content, image }) => {

  const handleDelete = async () => {
    try {
      const res = await axios.delete(`${BASEURL}/api/note/delete/${noteId}`, {
        withCredentials: true,
      });
      console.log("Note deleted successfully:", res.data);
      alert("Note deleted successfully");
    } catch (error) {
      console.error("There was an error deleting the note!", error);
      alert("Failed to delete note.");
    }
  };

  return (
    <div className="card mb-4 shadow-sm" style={{ width: "18rem" }}>
      <img
        src={image}
        className="card-img-top"
        alt={title}
        style={{ height: "150px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
        <button className="btn btn-danger w-100 mt-2" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
