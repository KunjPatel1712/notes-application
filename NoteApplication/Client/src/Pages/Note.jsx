import axios from "axios";
import React, { useEffect, useState } from "react";
import NoteCard from "../Navbar/NoteCard";

const BASEURL = import.meta.env.VITE_BASEURL;

const Note = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const [data, setData] = useState([]);

  const getDataFromServer = async () => {
    try {
      const res = await axios.get(
        `${BASEURL}/api/note/getnotes/${currentUser._id}`,
        {
          withCredentials: true,
        }
      );
      console.log("Notes fetched successfully:", res.data);
      setData(res.data);
    } catch (error) {
      console.error("There was an error fetching notes!", error);
    }
  };

  useEffect(() => {
    if (currentUser?._id) {
      getDataFromServer();
    }
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Notes</h1>
      <div className="d-flex flex-wrap gap-3 justify-content-center">
        {data.length > 0 ? (
          data.map((el) => (
            <NoteCard
              key={el._id}
              noteId={el._id}
              title={el.title}
              content={el.content}
              image={el.image}
              onDelete={getDataFromServer} // 👈 pass refresh method
            />
          ))
        ) : (
          <p>No notes found.</p>
        )}
      </div>
    </div>
  );
};

export default Note;
