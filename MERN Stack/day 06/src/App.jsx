import React, { useState } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";



const App = () => {
  const [userDetails, setUserDetails] = useState([]);
  const [toggle, settoggle] = useState(true);

  function toggleHandler() {
    settoggle(!toggle)
  }

  const submitHanlder = (e) => {
    e.preventDefault()
    const data = {
      name: e.target.userName.value,
      email: e.target.userEmail.value,
      password: e.target.userPassword.value,
      contact: e.target.userNumber.value
    }
    if (!data.name || !data.email || !data.password || !data.contact) {
      alert("All field Required")
      return
    }

    e.target.reset()
    setUserDetails([...userDetails, data])


  }


  function deleteHanlder(deleteIndex) {
    const newData = userDetails.filter(
      (d, i) => {
        return i != deleteIndex ? true : false
      }
    )

    setUserDetails(newData)
  }
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-4">
          <h2 className="text-center mb-4">User Form</h2>
          <form onSubmit={submitHanlder} className="mb-4">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input type="text" name="userName" className="form-control" id="name" placeholder="Enter your name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input type="email" name="userEmail" className="form-control" id="email" placeholder="Enter your email" />
            </div>
            <div className="mb-3">
              <label htmlFor="number" className="form-label">
                Number
              </label>
              <input type="text" name="userNumber" className="form-control" id="number" placeholder="Enter your number" />
            </div>
            <div className="mb-3 position-relative">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type={toggle ? "password" : "text"}
                name="userPassword" className="form-control" id="password" placeholder="Enter your password" />
              <div className="position-absolute fs-3 bottom-0 end-0">
                {
                  toggle ?
                    <IoEyeSharp onClick={toggleHandler} />
                    :
                    <FaEyeSlash onClick={toggleHandler} />

                }


              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>

        <div className="col-8">
          <h3 className="text-center mb-4">User Data</h3>
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Number</th>
                <th>Password</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {
                userDetails.map(
                  (data, index) => {
                    return (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                        <td>{data.contact}</td>
                        <td>{data.password}</td>
                        <td onClick={() => deleteHanlder(index)} className="bg-danger text-dark">Delete</td>
                      </tr>
                    )
                  }
                )
              }


            </tbody>
          </table>
        </div>

      </div>

    </div>
  );
};

export default App;
