import axios from 'axios'
import React, {  useState } from 'react'

const BASEURL = import.meta.env.VITE_BASEURL;
const AddNote = () => {

  const [formData, setFormData] = useState({
    title: "",
    content: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData); // check in console before API call

    try {
      const res = await axios.post(`${BASEURL}/api/note/create`, formData ,{
        withCredentials: true, 
      });
      console.log("Note saved:", res.data);
      alert("Note created successfully!");
      setFormData({ title: "", content: "" }); // reset form
    } catch (err) {
      console.error("Error creating note:", err);
      alert("Error creating note!");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center" >Add Note</h2>
      <form onSubmit={handleSubmit} style={{width: "50%", margin: "auto"}}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Content</label>
          <textarea
            className="form-control"
            rows="5"
            placeholder="Enter content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
    </div>
  );
};

  


export default AddNote