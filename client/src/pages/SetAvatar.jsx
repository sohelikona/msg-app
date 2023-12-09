import { React, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import loader from '../assets/loader.gif'
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import { setAvatarRoute } from '../utils/APIRoutes';
import { Buffer } from 'buffer';


const SetAvatar = () => {

    const api = "https://api.multiavatar.com/45678945";
    const navigate = useNavigate();
    const [ avatars, setAvatars ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true)
    const [ selectedAvatar, setSelectedAvatar ] = useState(undefined);
    const toastOptions = {
      position: "bottom-right",
      autoClose: 8000,
      draggable: true,
      theme: "dark",
    }
  

    useEffect(() => {
      if (!localStorage.getItem("chat-app-user"))
        navigate("/login");
    }, []);

    const setProfilePicture = async () => {
      if (selectedAvatar === undefined) {
          toast.error("Please select an avatar", toastOptions);
      } else {
          const user = await JSON.parse(localStorage.getItem("chat-app-user"));
          user.id = user._id;

  
          if (user.id) { // Ensure that user.id is defined
              const avatarId = user.id; // Use user.id as the avatarId
              const avatarUrl = `${setAvatarRoute}/${avatarId}`; // Construct the URL
  
              const { data } = await axios.post(avatarUrl, {
                  image: avatars[selectedAvatar],
              });

  
              if (data.isSet) {
                  user.isAvatarImageSet = true;
                  user.avatarImage = data.image;
                  localStorage.setItem("chat-app-user", JSON.stringify(user));
                  navigate('/');
              } else {
                  toast.error("Error setting avatar, please try again", toastOptions);
              }
          } else {
              console.error("User ID is undefined. Check the user data.");
          }
      }
  };
  


    useEffect(() => {
      const fetchData = async () => {
        const data = [];
        for (let i = 0; i < 4; i++) {
          try {
            const response = await axios.get(`${api}/${Math.round(Math.random() * 1000)}`);
            const buffer = new Buffer(response.data);
            data.push(buffer.toString("base64"));
            // data.push(`data:image/svg+xml;base64, ${buffer.toString("base64")}`);
          } catch (error) {
            // Handle errors, e.g., show an error message or log the error.
            console.error("Error fetching image:", error);
          }
        }
        setAvatars(data);
        setIsLoading(false);
      };
      fetchData();
    }, []);
    

  return (
    <>
    {
      isLoading ? <Container>
        <img src={loader} alt='loader' className='loader' />
      </Container> : (

    <Container>
      <div className="title-container">
        <h1>Pick an avatar as your profile picture</h1>
      </div>
      <div className="avatars">{
        avatars.map((avatar, index) => {
          return (
            <div key={index} className={`avatar ${
              selectedAvatar === index ? "selected" : ""
            }`}>
              <img src={`data:image/svg+xml;base64, ${avatar}`} alt='avatar'
              onClick={() => setSelectedAvatar(index)} />
            <div className="greendot"></div>
            </div>
          )
        })
      }</div>
      <button className='submit-btn' onClick={setProfilePicture}>Set As profile picture</button>
    </Container>
     )
}
    <ToastContainer />
    </>
  )
}

const Container = styled.div`

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 3rem;
background-color: #131324;
height: 100vh;
width: 100vw;

.loader {
  max-inline-size: 100%;
}

.title-container {
  h1 {
    color: white;
  }
}
.avatars {
  display: flex;
  gap: 2rem;

  .avatar {
    border: 0.4rem solid transparent;
    padding: 0.4rem;
    border-radius: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s ease-in-out;
    img {
      height: 6rem;
      // transition: 0.5s ease-in-out;
    }
  }
  .selected {
    border: 0.4rem solid #4e0eff;
  }
}
.submit-btn {
  background-color: #4e0eff;
  color: white;
  padding: 1rem 2rem;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 0.4rem;
  font-size: 1rem;
  text-transform: uppercase;
  &:hover {
    background-color: #4e0eff;
  }
}
`;

export default SetAvatar











// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import styled from 'styled-components';
// import loader from '../assets/loader.gif';
// import defaultAvatar from '../assets/defaultImg.png'; 
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { setAvatarRoute } from '../utils/APIRoutes';

// const SetAvatar = () => {
//   const [file, setFile] = useState(null);
//   const [avatarImage, setAvatarImage] = useState(defaultAvatar);
//   const [userId, setUserId] = useState()
//   const navigate = useNavigate();

//   const handleUpload = (e) => {
//     const selectedFile = e.target.files[0];
//     setFile(selectedFile);

//     // Display the selected image immediately
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setAvatarImage(reader.result);
//     };

//     if (selectedFile) {
//       reader.readAsDataURL(selectedFile);
//     }
//   };

//   // const uploadImage = () => {
//   //   const formData = new FormData();
//   //   formData.append('file', file);
//   //   const user = JSON.parse(localStorage.getItem("chat-app-user"));
//   //          user.id = user._id;
//   //          setUserId(user._id);
//   //          formData.append('userId', user.id);
//   //   axios
//   //     .post('http://localhost:5555/upload', formData)
//   //     .then((res) => {
//   //       // Do something with the response if needed
//   //       console.log(res);
//   //     })
//   //     .catch((err) => console.log(err));
//   // };


//   const uploadImage = async () => {
//     const formData = new FormData();
//     formData.append('file', file);
//     const user = JSON.parse(localStorage.getItem("chat-app-user"));
  
//     // Check if user information is available
//     if (user && user._id) {
//       setUserId(user._id);
//       formData.append('userId', user._id);
  
//       try {
//         const response = await axios.post('http://localhost:5555/upload', formData);
//         // Do something with the response if needed
//         console.log(response);
//         console.log('Before navigation');
//       } catch (error) {
//         console.log(error);
//       }
//     } else {
//       // Handle the case where user information is not available
//       console.log("User information not available");
//     }
//   };
  
//   // useEffect to navigate when userId changes
//   useEffect(() => {
//     if (userId) {
//       console.log('Navigating...');
//       navigate('/');
//     }
//   }, [userId, navigate]);
  


//   return (
//     <Container>
//     <label htmlFor="fileInput">Choose a Profile Picture</label>
//     {avatarImage ? (
//       <img src={avatarImage} alt="Selected Avatar" />
//     ) : (
//       <img src={defaultAvatar} alt="Default Avatar" />
//     )}
//     <input
//       id="fileInput"
//       className="custom-input"
//       type="file"
//       onChange={handleUpload}
//     />
//     <button onClick={uploadImage}>Upload</button>
//   </Container>
//   );
// };

// const Container = styled.div`
// background-color: #22272e;
// height: 100vh;
// width: 100vw;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 20px;
//   .title-container {
//     color: white;
//   }
//   img {
//     margin-top: 50px;
//     width: 200px;
//     height: 200px;
//     border-radius: 50%;
//     object-fit: cover; /* Maintain aspect ratio and cover the entire space */
//     border: 2px solid #1a1f24; /* Optional: Add a border */
//     box-shadow: 5px 5px 7px 4px rgba(0, 0, 0, 0.5);
//   }



//   label {
//     cursor: pointer;
//     font-size: 2.5rem;
//     color: white;
//     padding: 10px 20px;
//     border-radius: 5px;
//     font-weight: bold;
//     transition: background-color 0.3s ease;
//   }

//   label:hover {
//     background-color: #3a0dbf; /* Darker shade on hover */
//   }
  
  
//   .custom-input {
//     position: relative;
//     display: inline-block;
//     cursor: pointer;
//     background-color: #1a1f24;
//     color: white;
//     padding: 10px 20px;
//     border: none;
//     border-radius: 5px;
//     font-weight: bold;
//     cursor: pointer;
//     transition: background-color 0.3s ease;
//     box-shadow: 5px 5px 7px 4px rgba(0, 0, 0, 0.5);
//   }


//   .custom-input label {
//     background-color: #4e0eff;
//     color: white;
//     padding: 10px 20px;
//     border-radius: 5px;
//     font-weight: bold;
//     cursor: pointer;
//     transition: background-color 0.3s ease;
//   }

//   .custom-input label:hover {
//     background-color: #3a0dbf;
//   }

//   button {
//     background-color: #1a1f24;
//     color: white;
//     padding: 10px 20px;
//     border: none;
//     border-radius: 5px;
//     font-weight: bold;
//     cursor: pointer;
//     transition: background-color 0.3s ease;
//     box-shadow: 5px 5px 7px 4px rgba(0, 0, 0, 0.5);
//   }

//   button:hover {
//     background-color: #343e47;
//   }
// `;


// export default SetAvatar;
