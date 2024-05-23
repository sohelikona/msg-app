


// import React, {useState, useEffect} from 'react';
// import styled from 'styled-components';

// const Contacts = ({contacts, currentUser, changeChat}) => {
//   const [currentUserName, setCurrentUserName] = useState(undefined)
//   // const [currentUserImage, setCurrentUserImage] = useState(undefined)
//   const [currentSelected, setCurrentSelected] = useState(undefined)
//   const [currentUserColor, setCurrentUserColor] = useState(undefined);

  

//     useEffect(() => {

//      if (currentUser) {
//       // setCurrentUserImage(currentUser.avatarImage)
//       setCurrentUserName(currentUser.username);
//       setCurrentUserColor(getRandomColor());
//      }
//   }, [currentUser])
//   const changeCurrentChat = (index, contact) => {
//     setCurrentSelected(index);
//     changeChat(contact)
//   }


//   const getRandomColor = () => {
//     const colors = ['#99d1d1', '#7383da', '#e7c4e6', '#e7ccc4', '#e7c3f1', '#518b51', 'gray'];
//     return colors[Math.floor(Math.random() * colors.length)];
//   };
//   return  (
//     <>
//     {/* {currentUserImage && currentUserImage && ( */}

//         <Container >
//           <div className="brand">
//             <div className='text-wrapper'>Kona</div>
//           </div>
         
// {/* <div className="contacts">
//   {contacts.map((contact, index) => {
//     return (
//       <div
//         key={contact._id}
//         className={`contact ${
//           index === currentSelected ? "selected" : ""
//         }`}
//         onClick={() => changeCurrentChat(index, contact)}
//       > */}

// <div className="contacts">
//           {contacts.map((contact, index) => {
//             const userColor = getRandomColor();
//             return (
//               <div
//                 key={contact._id}
//                 className={`contact ${index === currentSelected ? 'selected' : ''}`}
//                 onClick={() => changeCurrentChat(index, contact)}
//               >

//         {/* <div className="avatar">
//           {contact.avatarImage ? (
//             <img
//               src={`data:image/svg+xml;base64,${contact.avatarImage}`}
//               alt=""
//             />
//           ) : (
//             <div>profile pic</div>
//           )}
//         </div> */}
//         {/* <div className='user-pic'>{contact.username[0]}</div> */}
//         <div className="user-pic" style={{ background: userColor }}>
//                   {contact.username[0]}
//                 </div>
//         <div className="username">
//           <h3>{contact.username}</h3>
//         </div>
//       </div>
//     );
//   })}
// </div>


// <div className="current-user">
//   {/* <div className="avatar">
//     {currentUserImage ? (
//       <img
//         src={`data:image/svg+xml;base64,${currentUserImage}`}
//         alt="avatar"
//       />
//     ) : (
//       <div>Error loading avatar</div>
//     )}
//   </div> */}
//     {/* <div className='user-pic'>{currentUserName[0]}</div> */}
//     <div className='user-pic' style={{ background: currentUserColor }} >{currentUserName ? currentUserName[0] : ''}</div>

//   <div className="username">
//     <h2>{currentUserName}</h2>
//   </div>
// </div>
//         </Container>
//       {/* )} */}
//     </>
//   )
// }


// const Container = styled.div`
//   // display: grid;
//   display: ${(props) => (props.showContacts ? 'block' : 'none')};
//   grid-template-rows: 10% 75% 15%;
//   overflow: hidden;
//   background-color: #22272e;
//   .brand {
//     display: flex;
//     align-items: center;
//     gap: 1rem;
//     justify-content: center;
//     img {
//       height: 2rem;
//     }
//     h3 {
//       color: gray;
//       text-transform: uppercase;
//     }
//   }
//   .user-pic {
//     width: 60px;
//     height: 60px;
//     background: gray;
//     border-radius: 50%;
//     display: flex;
//     text-align: center;
//     align-items: center;
//     justify-content: center;
//     color: white;
//     font-weight: bold;
//     font-size: 3rem;
//   }
//   .contacts {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     overflow: auto;
//     gap: 0.8rem;
//     &::-webkit-scrollbar {
//       width: 0.2rem;
//       &-thumb {
//         background-color: #22272e;
//         width: 0.1rem;
//         border-radius: 1rem;
//       }
//     }
//     .contact {
//       background-color: #ffffff34;
//       min-height: 5rem;
//       cursor: pointer;
//       width: 90%;
//       border-radius: 0.2rem;
//       padding: 0.4rem;
//       display: flex;
//       gap: 1rem;
//       align-items: center;
//       box-shadow: 5px 5px 7px 4px rgba(0, 0, 0, 0.5);
//       transition: 0.5s ease-in-out;
//       .avatar {
//         img {
//           height: 3rem;
//         }
//       }
//       .username {
//         h3 {
//           color: white;
//         }
//       }
//     }
//     .selected {
//       background-color: #1a1c22;
//     }
//   }

//   .current-user {
//     background-color: #22272e;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     box-shadow: 5px 5px 7px 20px rgba(0, 0, 0, 0.5);
//     gap: 2rem;
//     z-index: 1000;
//     .avatar {
//       img {
//         height: 4rem;
//         max-inline-size: 100%;
//       }
//     }
//     .username {
//       h2 {
//         color: white;
//       }
//     }
//     @media screen and (min-width: 720px) and (max-width: 1080px) {
//       gap: 0.5rem;
//       .username {
//         h2 {
//           font-size: 1rem;
//         }
//       }
//     }
//   }
// `;



// export default Contacts











// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import Logo from '../assets/logo.svg';

// const Contacts = ({ contacts =[], currentUser, changeChat }) => {
//   const [currentUserName, setCurrentUserName] = useState(undefined);
//   const [currentUserImage, setCurrentUserImage] = useState(undefined);
//   const [currentSelected, setCurrentSelected] = useState(undefined);
//   const [showContacts, setShowContacts] = useState(false);
//   const [currentUserColor, setCurrentUserColor] = useState(undefined);
//   const [contactsWidth, setContactsWidth] = useState('1%');

//   useEffect(() => {
//     if (currentUser) {
//       setCurrentUserImage(currentUser.avatarImage);
//       setCurrentUserName(currentUser.username);
//       setCurrentUserColor(getRandomColor());
//     }
//   }, [currentUser]);

//   const changeCurrentChat = (index, contact) => {
//     setCurrentSelected(index);
//     changeChat(contact);
//   };

//   const getRandomColor = () => {
//         const colors = ['#99d1d1', '#7383da', '#e7c4e6', '#e7ccc4', '#e7c3f1', '#518b51', 'gray'];
//         return colors[Math.floor(Math.random() * colors.length)];
//       };

//   // const toggleContacts = () => {
//   //   setShowContacts(!showContacts);
//   // };

//   const toggleContacts = () => {
//     setContactsWidth((prevWidth) => (prevWidth === '1%' ? '100%' : '1%'));
//   };

//   return (
//     <>
//       {/* {currentUserImage && currentUserImage && ( */}
//         <Container contactsWidth={contactsWidth}>
//           <div className="brand">
//             {/* <img src={Logo} alt="logo" /> */}
//             <div className='text-wrapper'>KONA</div>
//           </div>

//           <button className="toggle-contacts" onClick={toggleContacts}>
//             Toggle Contacts
//           </button>

//           {/* {showContacts && ( */}
//             <div className="contacts">
//               {/* {contacts.map((contact, index) => {
//                 return (
//                   <div
//                     key={contact._id}
//                     className={`contact ${
//                       index === currentSelected ? 'selected' : ''
//                     }`}
//                     onClick={() => changeCurrentChat(index, contact)}
//                   > */}
//                   {contacts.map((contact, index) => {
//             const userColor = getRandomColor();
//             return (
//               <div
//                 key={contact._id}
//                 className={`contact ${index === currentSelected ? 'selected' : ''}`}
//                 onClick={() => changeCurrentChat(index, contact)}
//               >

//                     {/* <div className="avatar">
//                       {contact.avatarImage ? (
//                         <img
//                           src={`data:image/svg+xml;base64,${contact.avatarImage}`}
//                           alt=""
//                         />
//                       ) : (
//                         <div>Error loading avatar</div>
//                       )}
//                     </div> */}
//                       <div className="user-pic" style={{ background: userColor }}>
//                  {contact.username[0]}
//                </div>
//                     <div className="username">
//                       <h3>{contact.username}</h3>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           {/* // )} */}

//           <div className="current-user">
//             {/* <div className="avatar">
//               {currentUserImage ? (
//                 <img
//                   src={`data:image/svg+xml;base64,${currentUserImage}`}
//                   alt="avatar"
//                 />
//               ) : (
//                 <div>Error loading avatar</div>
//               )}
//             </div> */}

//             <div className='user-pic' style={{ background: currentUserColor }} >{currentUserName ? currentUserName[0] : ''}</div>
//             <div className="username">
//               <h2>{currentUserName}</h2>
//             </div>
//           </div>
//         </Container>
//       {/* )} */}
//     </>
//   );
// };

// const Container = styled.div`
//   display: grid;
//   grid-template-rows: 10% auto 15%;
//   overflow: hidden;
//   background-color: #22272e;
//   box-shadow: 5px 5px 7px 4px rgba(0, 0, 0, 0.5);
//   width: ${(props) => props.contactsWidth};

//   .brand {
//     display: flex;
//     align-items: center;
//     gap: 1rem;
//     justify-content: center;

//     img {
//       height: 2rem;
//     }

//     h3 {
//       color: white;
//       text-transform: uppercase;
//     }
//   }

//   .user-pic {
//         width: 60px;
//         height: 60px;
//         background: gray;
//         border-radius: 50%;
//         display: flex;
//         text-align: center;
//         align-items: center;
//         justify-content: center;
//         color: white;
//         font-weight: bold;
//         font-size: 3rem;
//       }

//   .toggle-contacts {
//     background-color: #3498db;
//     color: white;
//     border: none;
//     padding: 0.5rem;
//     margin: 1rem;
//     cursor: pointer;
//     position: absolute;
//     top: 0;
//     left: 0;
//   }

//   .contacts {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     overflow: auto;
//     gap: 1rem;

//     &::-webkit-scrollbar {
//       width: 0.1rem;

//       &-thumb {
//         background-color: #22272e;
//         width: 0.1rem;
//         border-radius: 1rem;
//       }
//     }

//       .user-pic {
//     width: 60px;
//     height: 60px;
//     background: gray;
//     border-radius: 50%;
//     display: flex;
//     text-align: center;
//     align-items: center;
//     justify-content: center;
//     color: white;
//     font-weight: bold;
//     font-size: 3rem;
//   }

//     .contact {
//       // background-color: #ffffff34;
//       min-height: 5rem;
//       cursor: pointer;
//       width: 100%;
//       border-radius: 0.2rem;
//       padding: 0.4rem;
//       display: flex;
//       gap: 1rem;
//       align-items: center;
//       // box-shadow: 5px 5px 7px 4px rgba(0, 0, 0, 0.5);
//       transition: 0.5s ease-in-out;

//       .avatar {
//         img {
//           height: 3rem;
//         }
//       }

//       .username {
//         h3 {
//           color: white;
//         }
//       }
//     }

//     .selected {
//       background-color: #1a1c22;
//     }
//   }

//   .current-user {
//     background-color: #22272e;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     gap: 2rem;

//     .avatar {
//       img {
//         height: 4rem;
//         max-inline-size: 100%;
//       }
//     }

//     .username {
//       h2 {
//         color: white;
//       }
//     }

//     @media screen and (max-width: 768px) {
//       gap: 1rem;

//       .username {
//         h2 {
//           font-size: 1rem;
//         }
//       }
//     }
//   }
// `;

// export default Contacts;






import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Contacts = ({contacts, currentUser, changeChat, isVisible}) => {
  const [currentUserName, setCurrentUserName] = useState(undefined)
  // const [currentUserImage, setCurrentUserImage] = useState(undefined)
  const [currentSelected, setCurrentSelected] = useState(undefined)
  const [currentUserColor, setCurrentUserColor] = useState(undefined);

  

    useEffect(() => {

     if (currentUser) {
      // setCurrentUserImage(currentUser.avatarImage)
      setCurrentUserName(currentUser.username);
      setCurrentUserColor(getRandomColor());
     }
  }, [currentUser])
  const changeCurrentChat = (index, contact) => {
    setCurrentSelected(index);
    changeChat(contact)
  }


  const getRandomColor = () => {
    const colors = ['gray', '#5a2556', '#cc723d', '#6600b9', '#002896', '#0170ca', '#06a5a5', '#f8d123', '#144707', '#a8005d'];
    return colors[Math.floor(Math.random() * colors.length)];
  };
  return  (
    <>
    {/* {currentUserImage && currentUserImage && ( */}
    {isVisible && (
         <Container >
         <div className="brand">
           <div className='text-wrapper'>Blink</div>
         </div>
        
{/* <div className="contacts">
 {contacts.map((contact, index) => {
   return (
     <div
       key={contact._id}
       className={`contact ${
         index === currentSelected ? "selected" : ""
       }`}
       onClick={() => changeCurrentChat(index, contact)}
     > */}

<div className="contacts">
         {contacts.map((contact, index) => {
           const userColor = getRandomColor();
           return (
             <div
               key={contact._id}
               className={`contact ${index === currentSelected ? 'selected' : ''}`}
               onClick={() => changeCurrentChat(index, contact)}
             >

       {/* <div className="avatar">
         {contact.avatarImage ? (
           <img
             src={`data:image/svg+xml;base64,${contact.avatarImage}`}
             alt=""
           />
         ) : (
           <div>profile pic</div>
         )}
       </div> */}
       {/* <div className='user-pic'>{contact.username[0]}</div> */}
       <div className="user-pic" style={{ background: userColor }}>
                 {contact.username[0]}
               </div>
       <div className="username">
         <h3>{contact.username}</h3>
       </div>
     </div>
   );
 })}
</div>


<div className="current-user">
 {/* <div className="avatar">
   {currentUserImage ? (
     <img
       src={`data:image/svg+xml;base64,${currentUserImage}`}
       alt="avatar"
     />
   ) : (
     <div>Error loading avatar</div>
   )}
 </div> */}
   {/* <div className='user-pic'>{currentUserName[0]}</div> */}
   <div className='user-pic' style={{ background: currentUserColor }} >{currentUserName ? currentUserName[0] : ''}</div>

 <div className="username">
   <h2>{currentUserName}</h2>
 </div>
</div>
       </Container>

)}
      {/* )} */}
    </>
  )
}


const Container = styled.div`
  display: grid;
  grid-template-rows: 10% 80% 10%;
  overflow: hidden;
  
  background-color: #22272e;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    box-shadow: 5px 5px 7px 4px rgba(0, 0, 0, 0.5);

    justify-content: center;
    img {
      height: 2rem;
    }
    h3 {
      color: gray;
      text-transform: uppercase;
    }
  }
  .user-pic {
    width: 60px;
    height: 60px;
    background: gray;
    border-radius: 50%;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    font-size: 3rem;
  }
  .contacts {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    gap: 0.8rem;
    &::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb {
        background-color: #22272e;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
    .contact {
      background-color: transparent;
      min-height: 5rem;
      cursor: pointer;
      width: 90%;
      border-radius: 0.2rem;
      padding: 0.4rem;
      display: flex;
      gap: 1rem;
      align-items: center;
      box-shadow: 5px 5px 7px 4px rgba(0, 0, 0, 0.5);
      transition: 0.5s ease-in-out;
      .avatar {
        img {
          height: 3rem;
        }
      }
      .username {
        h3 {
          color: white;
        }
      }
    }
    .selected {
      background-color: #1a1c22;
    }
  }

  .current-user {
    background-color: #171a20;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 5px 5px 7px 20px rgba(0, 0, 0, 0.5);
    gap: 2rem;
    z-index: 1000;
    .avatar {
      img {
        height: 4rem;
        max-inline-size: 100%;
      }
    }
    .username {
      h2 {
        color: white;
      }
    }
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      gap: 0.5rem;
      .username {
        h2 {
          font-size: 1rem;
        }
      }
    }
  }
`;



export default Contacts
