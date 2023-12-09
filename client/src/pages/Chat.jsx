// import React, {useState, useEffect, useRef} from 'react'
// import styled from "styled-components";
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { allUsersRoute, host } from '../utils/APIRoutes';
// import Contacts from '../components/Contacts';
// import Welcome from '../components/Welcome';
// import ChatContainer from '../components/ChatContainer';
// import { io } from "socket.io-client"

// const Chat = () => {
//   const socket = useRef();
//   const navigate = useNavigate();
//   const [contacts, setContacts] = useState([]);
//   const [currentUser, setCurrentUser] = useState(undefined)
//   const [currentChat, setCurrentChat] = useState(undefined)
//   const [isLoaded, setIsloaded] = useState(false)
//   const [showContacts, setShowContacts] = useState(false);

//   useEffect( () => {
//     if (!localStorage.getItem("chat-app-user")) {
//       navigate("/login")
//     } else {
//       setCurrentUser( JSON.parse(localStorage.getItem("chat-app-user")))
//       setIsloaded(true)
//     }
//   }, [])
  
//   useEffect(() => {
//     if (currentUser) {
//       socket.current = io(host)
//       socket.current.emit("add-user", currentUser._id)
//     }
//   }, [currentUser])

//   useEffect(() => {
//     const checkLocalStorage = async () => {
//       if (!localStorage.getItem("chat-app-user")) {
//         navigate("/login");
//       } else {
//         try {
//           const userData = JSON.parse(localStorage.getItem("chat-app-user"));
//           setCurrentUser(userData);
//           setIsloaded(true)
//           console.log("currentUser:", currentUser);

//         } catch (error) {
//           console.error("Error parsing user data:", error);
//           navigate("/login"); // Handle the error by redirecting to the login page or another appropriate action.
//         }
//       }
//     };
  
//     checkLocalStorage();
//   }, []);
  
//   // useEffect(() => {
//   //   if (currentUser) {
//   //     console.log('isAvatarImageSet:', currentUser.isAvatarImageSet);
//   //     if (currentUser.isAvatarImageSet) {
//   //       const fetchData = async () => {
//   //         try {
//   //           const response = await axios.get(`${allUsersRoute}/${currentUser._id}`);
//   //           setContacts(response.data);
//   //         } catch (error) {
//   //           // Handle any errors here
//   //           console.error("Error fetching data:", error);
//   //         }
//   //       };
//   //       fetchData();
//   //     } else {
//   //       alert("something went wrong")
//   //     }
//   //   }
//   // }, [currentUser]);
  





//   useEffect(() => {
//     if (currentUser) {
//       console.log('isAvatarImageSet:', currentUser.isAvatarImageSet);
//       if (currentUser.isAvatarImageSet) {
//         const fetchData = async () => {
//           try {
//             const response = await axios.get(`${allUsersRoute}/${currentUser._id}`);
//             setContacts(response.data);
//           } catch (error) {
//             // Handle any errors here
//             console.error("Error fetching data:", error);
//             // Update state to reflect the error, e.g., setContacts([])
//           }
//         };
//         fetchData();
//       } else {
//         alert("something went wrong");
//         // Consider updating state to reflect the error
//       }
//     }
//   }, [currentUser]);
  




// const handleChatChange = (chat) => {
//   setCurrentChat(chat)
// }
// console.log('ParentComponent - currentUser:', currentUser);
// const toggleContacts = () => {
//   setShowContacts(!showContacts); // Toggle the state on button click
// };

//   return (

//     <Container>
//     <div className="container">
//       {isLoaded && (
//         <>
//           {/* Add a button to toggle visibility of contacts on mobile */}
//           <button className="toggle-contacts-btn" onClick={toggleContacts}>
//             {showContacts ? 'Hide Contacts' : 'Show Contacts'}
//           </button>

//           <Contacts
//             contacts={contacts}
//             currentUser={currentUser}
//             changeChat={handleChatChange}
//             showContacts={showContacts} // Pass the showContacts state to Contacts component
//           />

//           {showContacts && (
//             <ChatContainer
//               currentChat={currentChat}
//               currentUser={currentUser}
//               socket={socket}
//             />
//           )}
//         </>
//       )}
//     </div>
//   </Container>

//   )
// }

// const Container = styled.div`
//   height: 100vh;
//   width: 100vw;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   gap: 1rem;
//   overflow: hidden !important;

//   align-items: center;
//   background-color: #22272e;
  
//   .container {
//     height: 100vh;
//     width: 100vw;
//     overflow: hidden;
//     background-color: #22272e ;
//     box-shadow: 5px 5px 7px 4px rgba(0, 0, 0, 0.5);
//     display: grid;
//     grid-template-columns: 25% 75%;
//     @media screen and (min-width: 720px) and (max-width: 1080px) {
//       grid-template-columns: 35% 65%;
//     }
//   }
// `;
// const MobileButton = styled.button`
//   // Define styles for the button in mobile view here
// `;

// const ContactsSection = styled.div`
//   display: ${({ isVisible }) => (isVisible ? 'block' : 'none')}; // Toggle visibility based on prop
// `;

// export default Chat










// import React, { useState, useEffect, useRef } from 'react';
// import styled from 'styled-components';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { allUsersRoute, host } from '../utils/APIRoutes';
// import Contacts from '../components/Contacts';
// import Welcome from '../components/Welcome';
// import ChatContainer from '../components/ChatContainer';
// import { io } from 'socket.io-client';

// const ToggleContactsButton = styled.button`
//   position: fixed;
//   top: 10px;
//   left: 50%;
//   transform: translateX(-50%);
//   background-color: #4caf50;
//   color: white;
//   border: none;
//   padding: 10px 20px;
//   font-size: 16px;
//   cursor: pointer;
//   z-index: 1000;
// `;

// const Chat = () => {
//   const socket = useRef();
//   const navigate = useNavigate();
//   const [contacts, setContacts] = useState([]);
//   const [currentUser, setCurrentUser] = useState(undefined);
//   const [currentChat, setCurrentChat] = useState(undefined);
//   const [isLoaded, setIsloaded] = useState(false);
//   const [isMobileView, setIsMobileView] = useState(window.innerWidth < 720);
//   const [isContactsVisible, setIsContactsVisible] = useState(true);

//   // Move the function declaration to the top
//   const toggleContactsVisibility = () => {
//     setIsContactsVisible((prev) => !prev);
//   };

//   useEffect(() => {
//     if (!localStorage.getItem('chat-app-user')) {
//       navigate('/login');
//     } else {
//       setCurrentUser(JSON.parse(localStorage.getItem('chat-app-user')));
//       setIsloaded(true);
//     }
//   }, []);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobileView(window.innerWidth < 720);
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   useEffect(() => {
//     if (currentUser) {
//       socket.current = io(host);
//       socket.current.emit('add-user', currentUser._id);
//     }
//   }, [currentUser]);

//   useEffect(() => {
//     const checkLocalStorage = async () => {
//       if (!localStorage.getItem('chat-app-user')) {
//         navigate('/login');
//       } else {
//         try {
//           const userData = JSON.parse(localStorage.getItem('chat-app-user'));
//           setCurrentUser(userData);
//           setIsloaded(true);
//         } catch (error) {
//           console.error('Error parsing user data:', error);
//           navigate('/login');
//         }
//       }
//     };

//     checkLocalStorage();
//   }, []);

//   useEffect(() => {
//     if (currentUser) {
//       if (currentUser.isAvatarImageSet) {
//         const fetchData = async () => {
//           try {
//             const response = await axios.get(`${allUsersRoute}/${currentUser._id}`);
//             setContacts(response.data);
//           } catch (error) {
//             console.error("Error fetching data:", error);
//           }
//         };
//         fetchData();
//       } else {
//         alert('Something went wrong');
//       }
//     }
//   }, [currentUser]);

//   const handleChatChange = (chat) => {
//     setCurrentChat(chat);
//   };

//   return (
//     <Container>
//       <div className="container">
//         {isLoaded && isMobileView && (
//           <ToggleContactsButton
//             onClick={toggleContactsVisibility}
//             className={isContactsVisible ? 'visible' : 'hidden'}
//           >
//             {isContactsVisible ? 'Hide Contacts' : 'Show Contacts'}
//           </ToggleContactsButton>
//         )}

//         {isLoaded && isMobileView && isContactsVisible && (
//           <MobileContactsDropdown>
//             <Contacts contacts={contacts} currentUser={currentUser} changeChat={handleChatChange} />
//           </MobileContactsDropdown>
//         )}

// {isLoaded && isMobileView && (
//   <ToggleContactsButton
//     onClick={toggleContactsVisibility}
//     className={isContactsVisible ? 'visible' : 'hidden'}
//   >
//     {isContactsVisible ? 'Hide Contacts' : 'Show Contacts'}
//   </ToggleContactsButton>
// )}

// {isLoaded && isMobileView && isContactsVisible && (
//   <MobileContactsDropdown>
//     <Contacts contacts={contacts} currentUser={currentUser} changeChat={handleChatChange} />
//   </MobileContactsDropdown>
// )}

// {isLoaded && (currentChat === undefined || currentChat === null) ? (
//   <Welcome currentUser={currentUser} />
// ) : (
//   <ChatContainer currentChat={currentChat} currentUser={currentUser} socket={socket} />
// )}
//       </div>
//     </Container>
//   );
// };

// const Container = styled.div`
//   height: 100vh;
//   width: 100vw;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   gap: 1rem;
//   align-items: center;
//   background-color: #22272e;

//   .container {
//     height: 99vh;
//     width: 99vw;
//     background-color: #22272e;
//     box-shadow: 5px 5px 7px 4px rgba(0, 0, 0, 0.5);
//     display: grid;
//     grid-template-columns: 25% 75%;

//     @media screen and (min-width: 720px) and (max-width: 1080px) {
//       grid-template-columns: 35% 65%;
//     }
//   }
// `;

// const MobileContactsDropdown = styled.div`
//   position: fixed;
//   right: 10px;
//   background-color: #22272e;
//   box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
//   z-index: 1000;
// `;

// export default Chat;



























































































import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { allUsersRoute, host } from '../utils/APIRoutes';
import Contacts from '../components/Contacts';
import Welcome from '../components/Welcome';
import ChatContainer from '../components/ChatContainer';
import { io } from 'socket.io-client';

const Chat = () => {
  const socket = useRef();
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [currentChat, setCurrentChat] = useState(undefined);
  const [isLoaded, setIsloaded] = useState(false);
  const [isContactsVisible, setIsContactsVisible] = useState(true);
  const [columnWidths, setColumnWidths] = useState({ left: '0%', right: '100%' });

  useEffect(() => {
    if (!localStorage.getItem('chat-app-user')) {
      navigate('/login');
    } else {
      setCurrentUser(JSON.parse(localStorage.getItem('chat-app-user')));
      setIsloaded(true);
    }
  }, []);

  useEffect(() => {
    if (currentUser) {
      socket.current = io(host);
      socket.current.emit('add-user', currentUser._id);
    }
  }, [currentUser]);

  useEffect(() => {
    const checkLocalStorage = async () => {
      if (!localStorage.getItem('chat-app-user')) {
        navigate('/login');
      } else {
        try {
          const userData = JSON.parse(localStorage.getItem('chat-app-user'));
          setCurrentUser(userData);
          setIsloaded(true);
        } catch (error) {
          console.error('Error parsing user data:', error);
          navigate('/login');
        }
      }
    };

    checkLocalStorage();
  }, []);

  useEffect(() => {
    if (currentUser) {
      if (currentUser) {
        const fetchData = async () => {
          try {
            const response = await axios.get(`${allUsersRoute}/${currentUser._id}`);
            setContacts(response.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
        fetchData();
      } else {
        alert('Something went wrong');
      }
    }
  }, [currentUser]);

  const handleChatChange = (chat) => {
    setCurrentChat(chat);
  };

  const handleToggleContacts = () => {
    setColumnWidths(prevWidths => {
      if (prevWidths.left === '25%' && prevWidths.right === '75%') {
        return { left: '0%', right: '100%' };
      } else if (prevWidths.left === '0%' && prevWidths.right === '100%') {
        return { left: '100%', right: '0%' };
      } else {
        return { left: '0%', right: '100%' };
      }
    });
  };


  return (
    <Container columnWidths={columnWidths}>
      <div className="container">
    
      <button className="toggle-button" onClick={handleToggleContacts}>
        {columnWidths.left === '25%' && columnWidths.right === '75%' ? 'Contacts' : 'Contacts'}
      </button>

          <Contacts 
            contacts={contacts} 
            currentUser={currentUser} 
            changeChat={handleChatChange}
            isVisible={isContactsVisible} />
        {isLoaded && currentChat === undefined ? (
          <Welcome 
            currentUser={currentUser} />
        ) : (
          <ChatContainer 
            currentChat={currentChat} 
            currentUser={currentUser} 
            socket={socket} />
        )}
      </div>
    </Container>
  );
};

const Container = styled.div`
  // height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #22272e;
 
.toggle-button {
  position: fixed;
  top: 1px;
  left: 60%;
  transform: translateX(-50%);
  padding: 4px 8px;
  font-size: 12px;
  background-color: transparent;
  color: white;
  border: 1px solid white;
  border-radius: 5px;
  cursor: pointer;
}
  .container {
    height: 100vh;
    width: 100vw;
    background-color: #22272e;
    box-shadow: 5px 5px 7px 4px rgba(0, 0, 0, 0.5);
    display: grid;
    // grid-template-columns: 25% 75%;
    grid-template-columns: ${({ columnWidths }) => `${columnWidths.left} ${columnWidths.right}`};

    @media screen and (min-width: 720px) and (max-width: 1280px) {
      grid-template-columns: 25% 75%;
    }
  }
`;



export default Chat;




