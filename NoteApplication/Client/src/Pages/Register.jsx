import axios from 'axios';
import React from 'react';

const BASEURL=import.meta.env.VITE_BASEURL
const Register = () => {
    const [formData, setformData] = React.useState('');

    const handleChange = (e) => {
        setformData(pre=>({
            ...pre,
            [e.target.name]: e.target.value
        }));
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
        const res= await axios.post(BASEURL+"/api/user/register", formData)
          console.log('Registration successful:', res.data);
          alert("Registration successful");
          window.location.href = '/login'; 
        } catch (error) {
          console.error('There was an error in registration!', error);
          alert("There was an error in registration!"); 
        }
    }
  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="bg-white p-4 rounded shadow w-100" style={{ maxWidth: '400px' }}>
        <h2 className="text-center text-primary mb-4">Register</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
             <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              name='name'
                onChange={handleChange}
            />
            <label htmlFor="exampleInputEmail1" className="form-label  mt-3">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name='email'
               onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name='password'
               onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
