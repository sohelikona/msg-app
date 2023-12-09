import React, { useState, useEffect, useRef } from 'react';
import axios from "axios"
import { getAllMessagesRoute, sendMessageRoute } from '../utils/APIRoutes';
import styled from "styled-components"
import Logout from './Logout';
import ChatInput from './chatInput';
import Messages from './Messages';
import {v4 as uuid4} from 'uuid'

// // const ChatContainer = ({currentChat}) => {
// //     const [currentChatState, setCurrentChat] = useState(currentChat);

// //     console.log('Avatar Image:', currentChatState.avatarImage);
  
// //     const handleChatChange = (chat) => {
// //       setCurrentChat(chat);
// //     };
  

// //   return (
// //   <>
  
// //   {currentChat && (   

// // <Container>
// //     <div className="chat-header">
// //       <div className="user-details">
// //       <div className="avatar">
// //                   <img
// //                     src={`data:image/svg+xml;base64,${currentChat.avatarImage}`}
// //                     alt=""
// //                   />
// //                 </div>
// //         <div className="username">
// //           <h3>{currentChat.username}</h3>
// //         </div>
// //       </div>
// //     </div>
// //     <div className="chat-messages"></div>
// //     <div className="chat-input"></div>
// //   </Container>
// //   )}
// //   </>
// //   )
// // }


const getRandomColor = () => {
  const colors = ['gray', '#5a2556', '#ce4b00', '#6600b9', '#002896', '#0170ca', '#06a5a5', '#f8d123', '#144707', '#a8005d'];
  return colors[Math.floor(Math.random() * colors.length)];
};


const ChatContainer = ({ currentChat, currentUser, socket }) => {
  const [messages, setMessages] = useState([])
  const [arrivalMessage, setArrivalMessage] = useState(null)
  const scrollRef = useRef();
  // useEffect(() => {
  //   const response = axios.post(getAllMessagesRoute, {
  //     from: currentUser._id,
  //     to: currentChat._id,
  //   })
  //   setMessages(response.data)
  // }, [currentChat])

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!currentUser || !currentChat) {
          console.error('currentUser or currentChat is not defined');
          return;
        }
  

        if (currentChat) {

          const response = await axios.post(getAllMessagesRoute, {
            from: currentUser._id,
            to: currentChat._id,
          });
    
          setMessages(response.data);
        }
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };
  
    fetchData();
  }, [currentChat, currentUser]);
  
  

  const handleSendMsg = async (msg) => {
    await axios.post(sendMessageRoute, {
      from: currentUser._id,
      to: currentChat._id,
      message: msg,
    });
    socket.current.emit("send-msg", {
      to: currentChat._id,
      from: currentUser._id,
      message: msg,
    });
    const msgs = [...messages];
    msgs.push({ fromSelf: true, message: msg })
    setMessages(msgs)
  }

  useEffect(() => {
    if (socket.current) {
      socket.current.on("msg-receive", (msg) => {
        console.log("Received msg-recieve client side code:", msg);
        setArrivalMessage({ fromSelf: false, message: msg})
      })
    }
  }, [])
  useEffect(() => {
    arrivalMessage && setMessages((prev) => [...prev, arrivalMessage])
    console.log("New message received. Messages:", messages);
  }, [arrivalMessage]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behaviour: "smooth"})
  }, [messages])
    // Use useEffect to update the state when currentChat changes
    useEffect(() => {
      setCurrentChat(currentChat);
    }, [currentChat]);
  
    const [currentChatState, setCurrentChat] = useState(currentChat);
  
    // Make sure currentChatState is defined before accessing its properties
    console.log('Avatar Image:', currentChatState?.avatarImage);
  
    const handleChatChange = (chat) => {
      setCurrentChat(chat);
    };
  
  


    return (
      <>
        {currentChat && (
          <Container>
            <div className="chat-header">
              <div className="user-details">
                {/* <div className="avatar">
                  <img
                    src={`data:image/svg+xml;base64,${currentChat.avatarImage}`}
                    alt=""
                  />
                </div> */}
                  {/* <div className='user-pic'>{currentChat.username[0]}</div> */}
                  <div className="user-pic" style={{ background: getRandomColor() }}>{currentChat.username[0]}
              </div>
                <div className="username">
                  <h3>{currentChat.username}</h3>
                </div>
              </div>
            <Logout />
            </div>
            <div className="chat-messages">
                    {
                      messages.map((message) => {
                        return (
                          // <div>
                          //   <div className={`message${message.fromSelf ? "sended":"recieved"}`}>
                          //     <div className="content">
                          //       <p>
                          //         {message.message}
                          //       </p>
                          //     </div>
                          //   </div>
                          // </div>

                          <div ref={scrollRef}>
                            <div
                              className={`message${message.fromSelf ? " sended" : " recieved"}`}
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: message.fromSelf ? 'flex-end' : 'flex-start',
                              }}
                            >
                            <div
                              className="content"
                              style={{
                                maxWidth: '40%',
                                overflowWrap: 'break-word',
                                padding: '1rem',
                                fontSize: '1rem',
                                borderRadius: '1rem',
                                color: '#d1d1d1',
                                backgroundColor: message.fromSelf ? '#1d2127' : '#464f5e',
                                boxShadow: '4px 4px 5px rgba(0, 0, 0, 0.6)',
                                textAlign: message.fromSelf ? 'right' : 'left',
                              }}
                            >
                              <p>{message.message}</p>
                            </div>
                          </div>
                        </div>

                        )
                      })
                    }
            </div>
            <ChatInput handleSendMsg={handleSendMsg}/>
          </Container>
        )}
      </>
    );
  };



const Container = styled.div`
  display: grid;
  grid-template-rows: 10% 75% 15%;
  gap: 0.1rem;
  overflow: hidden !important;
    
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    grid-template-rows: 15% 70% 15%;
  }
  .chat-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    box-shadow: 5px 5px 7px 4px rgba(0, 0, 0, 0.5);

    background: #1d2127;
    .user-details {
      display: flex;
      align-items: center;
      gap: 1rem;
      .avatar {
        img {
          height: 3rem;
        }
      }
      .user-pic {
        width: 50px;
        height: 50px;
        background: gray;
        border-radius: 50%;
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: bold;
        font-size: 2.5rem;
      }
      .username {
        h3 {
          color: white;
        }
      }
    }
  }
  .chat-messages {
    padding: 1rem .5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 0.1rem;
      &-thumb {
        background-color: #22272e;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
    .message {
      display: flex;
      align-items: center;
      .content {
        max-width: 40%;
        overflow-wrap: break-word;
        padding: 0;
        margin: 10px;
        font-size: 1rem;
        border-radius: 1rem;
        color: #d1d1d1;
        @media screen and (min-width: 720px) and (max-width: 1080px) {
          max-width: 70%;
        }
      }
      p {
        margin: -4px;
      }
    }
    .content .sent {
      justify-content: flex-end;
      .content {
        background-color: #4f04ff21;
      }
    }
    .content .recieved {
      justify-content: flex-start;
      .content {
        background-color: #9900ff20;
      }
    }
  }
`;

export default ChatContainer


