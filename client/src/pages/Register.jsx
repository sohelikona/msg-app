import { React, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import logo from '../assets/logo.svg'
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import { registerRoute } from '../utils/APIRoutes';

// import { register } from '../../../server/controller/usersController';

const Register = () => {
  const navigate = useNavigate()



  const [values, setValues] = useState({
    username: "",
    email: '',
    password: '',
    confirmPassword: ''
  })

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    draggable: true,
    theme: "light",
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      // console.log("in validation", register)
    const { password, username, email} = values;
      const {data} = await axios.post(registerRoute, {
        username,
        email, 
        password,
      })
      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      }
      if (data.status === true) {
        localStorage.setItem('chat-app-user', JSON.stringify(data.user))
        navigate("/")
      }
      console.log("Navigating to Chat");
    }
  }
 
  const handleValidation = () => {
    const { password, confirmPassword, username, email } = values;
    if (password !== confirmPassword) {
      toast.error("password and confirm password should be same.", 
      toastOptions
      );
      return false;
    } else if (username.length < 3) {
      toast.error("Username should be greater then 3 characters😋", 
      toastOptions
      )
      return false;
    } else if (password.length < 8) {
      toast.error("Your password sucks. Choose a password greater then 8 characters😋", 
      toastOptions
      )
      return false;
    } else if (email === '') {
      toast.error("email is required🦾", toastOptions)
      return false;
    }
    return true;
  }
 
  useEffect(() => {
    if (localStorage.getItem('chat-app-user')) {
      navigate("/");
    }
  }, []);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]:event.target.value})

  }
  return (
    <>
      <FormContainer>
        <form onSubmit={(event) => handleSubmit(event)} encType='multipart/form-data'>
          <div className="brand">
            
            <div className='text-wrapper'>Blink</div>
          </div>
          <input 
            type='text' 
            placeholder='Username' 
            name='username' 
            onChange={(e) => handleChange(e)}/>
          <input 
            type='email' 
            placeholder='Email' 
            name='email' 
            onChange={(e) => handleChange(e)}/>
          <input 
            type='password' 
            placeholder='Password😎😎😘' 
            name='password' 
            onChange={(e) => handleChange(e)}/>
          <input 
            type='password' 
            placeholder='confirm password' 
            name='confirmPassword' 
            onChange={(e) => handleChange(e)}/>

     
       
              

            <button type='submit' >Create User</button>
            <span>already have an account? &nbsp; <Link to='/login' className='link'>Login</Link></span>
        </form>
      </FormContainer>
      <ToastContainer />
    </>
  )
}


const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #22272e;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 5rem;
    }
    h1 {
      color: white;
      text-transform: uppercase;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #22272e;
    border-radius: 2rem;
    padding: 5rem;
    box-shadow: 5px 5px 7px 4px rgba(0, 0, 0, 0.5);
  }
  input {
    background-color: transparent;
    padding: 1rem;
    border: none;
    border-radius: 0.4rem;
    color: #5f5f5f;
    width: 100%;
    font-size: 1rem;
    box-shadow: 5px 5px 10px  rgba(0, 0, 0, 0.7);
    &:focus {
      border: 0.1rem solid #555555;
      outline: none;
    }
  }
  button {
    background-color: #1a1f24;
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.7);
    &:hover {
      background-color: #343e47;
    }
  }
  span {
    color: white;
    text-transform: uppercase;
    a {
      color: white;
      text-decoration: none;
      font-weight: bold;
    }
    .link {
      text-decoration: underline;
    } 
  }
`;
export default Register
