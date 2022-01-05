import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [pass, setPss] = useState("");
  const [nameErr, setNameErr] = useState(false);
  const [passErr, setpassErr] = useState(false);

  const handleName = (e) => {
    setName(e.target.value)
    setNameErr(false)
  }
  const handlePass = (e) => {
    setPss(e.target.value)
    setpassErr(false)
  }
  const handleClick = () => {
    if (name && pass) {
      const data = {
        username: name,
        password: pass,
      }
      if (name === "admin" && pass === "1234") {
        axios.post('http://localhost:8080/user/login', data)
          .then(function (response) {
            if (response && response.data) {
              if (response.data === "logged in") {
                navigate('/Admin')

              }
              else {
                alert("wrong credentials.")
              }
            }

          })
          .catch(function (error) {
            console.log(error)
          })
      } else {
        axios.post('http://localhost:8080/user/login', data)
          .then(function (response) {
            if (response && response.data) {
              if (response.data === "logged in") {
                navigate('/services')
              }
              else {
                alert("wrong credentials.")
              }
            }

          })
          .catch(function (error) {
            console.log(error)
          })
      }

    }
    else if (name) {
      setpassErr(true);
      setNameErr(false);
    }
    else if (pass) {
      setNameErr(true);
      setpassErr(false);
    }
    else {
      setpassErr(true);
      setNameErr(true);
    }

  }
  return (
    <div>
      <h1 className='title1a'>LOGIN</h1>
      <div className="loginForm">
        <div className='name'>
          <label>Username</label>
          <input type="text" placeholder='  Enter Username' value={name} onChange={handleName} /><br></br>
          {nameErr && <span>Enter valid name</span>}
          <br />
          <label>Password</label>
          <input type="password" placeholder='password' value={pass} onChange={handlePass} /><br></br>
          {passErr && <span>Enter valid password</span>}
        </div>
        <br />

        <button className="Btn" onClick={handleClick}>Submit</button>
      </div>


    </div>
  )
}

export default Login;