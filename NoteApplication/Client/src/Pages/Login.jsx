import axios from "axios";
import React from "react";

const BASEURL = import.meta.env.VITE_BASEURL;

const Login = () => {
  const [formData, setformData] = React.useState({});

  const handleChange = (e) => {
    setformData((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BASEURL}/api/user/signin`, formData ,{
        withCredentials: true, // this is used when a backend requires cookies for authentication
      });
      console.log("Login successful:", res.data);
      localStorage.setItem("currentUser", JSON.stringify(res?.data?.user));
      alert("Login successful");
    } catch (error) {
      console.error("There was an error logging in!", error);
      alert("There was an error logging in!");
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div
        className="bg-white p-4 rounded shadow w-100"
        style={{ maxWidth: "400px" }}
      >
        <h2 className="text-center text-primary mb-4">Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={handleChange}
              value={formData.email || ""}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={handleChange}
              value={formData.password || ""}
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
