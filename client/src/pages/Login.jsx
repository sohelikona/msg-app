
import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import chat from "../assets/chat.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginRoute } from "../utils/APIRoutes";

export default function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({ username: "", password: "" });
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  useEffect(() => {
    if (localStorage.getItem('chat-app-user')) {
      navigate("/");
    }
  }, []);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleValidation = () => {
    const { username, password } = values;
    if (username === "") {
      toast.error("Email and Password is required.", toastOptions);
      return false;
    } else if (password === "") {
      toast.error("Email and Password is required.", toastOptions);
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      // console.log("in validation", register)
      const { username, password } = values;
      const { data } = await axios.post(loginRoute, {
        username,
        password,
      });
      console.log('Server Response:', data);
      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      }
      if (data.status === true) {
        localStorage.setItem('chat-app-user', JSON.stringify(data.user));

        navigate("/");

      }
    }
  };

  return (
    <>
      <FormContainer>
        <form action="" onSubmit={(event) => handleSubmit(event)}>
          <div className="brand">
            
            <div className='text-wrapper'><i>KONA</i></div>
          </div>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={(e) => handleChange(e)}
            min="3"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <button type="submit">Log In</button>
          <span>
            Don't have an account ? <Link to="/register" className="link">Sign up</Link>
          </span>
        </form>
      </FormContainer>
      <ToastContainer />
    </>
  );
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

