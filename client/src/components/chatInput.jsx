// import React, { useState } from "react";
// import { BsEmojiSmileFill } from "react-icons/bs";
// import { IoMdSend } from "react-icons/io";
// import styled from "styled-components";
// import Picker from "emoji-picker-react";

// export default function ChatInput({ handleSendMsg }) {
//   const [msg, setMsg] = useState("");
//   const [showEmojiPicker, setShowEmojiPicker] = useState(false);
//   const handleEmojiPickerhideShow = () => {
//     setShowEmojiPicker(!showEmojiPicker);
//   };

//   // const handleEmojiClick = (event, emoji) => {
//   //   console.log("EMOJI:",event.target.emoji)
//   //   let message = msg;
//   //   message += event.target.emoji;
//   //   setMsg(message);
//   // };


//   // const handleEmojiClick = (event, emoji) => {
//   //   console.log("Emoji Click Event:", event);
//   //   let message = msg;
//   //     message += emoji.emoji;
//   //     setMsg(message);
//   // };
  

//   const handleEmojiClick = (event) => {
//     const clickedEmoji = event.emoji;
//     if (clickedEmoji) {
//       setMsg((prevMsg) => prevMsg + clickedEmoji);
//     }
//   };
  
  


//   const sendChat = (event) => {
//     event.preventDefault();
//     if (msg.length > 0) {
//       handleSendMsg(msg);
//       setMsg("");
//     }
//   };

//   return (
//     <Container>
//       <div className="button-container">
//         <div className="emoji">
//           <BsEmojiSmileFill onClick={handleEmojiPickerhideShow} />
//           <div className="emoji-box">
//           {showEmojiPicker && <Picker onEmojiClick={handleEmojiClick} />}
//           </div>
//         </div>
//       </div>
//       <form className="input-container" onSubmit={(event) => sendChat(event)}>
//         <input
//           type="text"
//           placeholder="type your message here"
//           onChange={(e) => setMsg(e.target.value)}
//           value={msg}
//         />
//         <button type="submit">
//           <IoMdSend />
//         </button>
//       </form>
//     </Container>
//   );
// }

// const Container = styled.div`
//   display: grid;
//   align-items: center;
//   grid-template-columns: 5% 95%;
//   background-color: #22272e;
//   padding: 0.2rem;
//   padding=bottom: 0.2rem;
//   overflow-x: hidden; /* Hidden on the x-axis */
//   overflow-y: hidden;
//   @media screen and (min-width: 720px) and (max-width: 1080px) {
//     padding: 0 1rem;
//     gap: 1rem;
//   }
//   .button-container {
//     display: flex;
//     align-items: center;
//     color: white;
//     gap: 1rem;
//     .emoji {
//       position: absolute;
      
//       svg {
//         font-size: 1.5rem;
//         color: #ffff00c8;
//         cursor: pointer;
//       }
//       .emoji-box {
//         position: absolute;
//         top: -480px;
//         z-index: 10; // or a higher value
//         background-color: #242830;
//         box-shadow: 0 5px 10px #9a86f3;
//         border-color: #9a86f3;
//         .emoji-scroll-wrapper::-webkit-scrollbar {
//           background-color: #080420;
//           width: 5px;
//           &-thumb {
//             background-color: #9a86f3;
//           }
//         }
//         .emoji-categories {
//           button {
//             filter: contrast(0);
//           }
//         }
//         .emoji-search {
//           background-color: transparent;
//           border-color: #9a86f3;
//         }
//         .emoji-group:before {
//           background-color: #080420;
//         }
//       }
//     }
//   }
//   .input-container {
//     width: 100%;
//     border-radius: 2rem;
//     display: flex;
//     align-items: center;
//     gap: 2rem;
//     z-index: 1;
//     background-color: #1d2127;
//     input {
//       width: 90%;
//       height: 60%;
//       background-color: transparent;
//       color: white;
//       border: none;
//       padding-left: 1rem;
//       font-size: 1.2rem;

//       &::selection {
//         background-color: #9a86f3;
//       }
//       &:focus {
//         outline: none;
//       }
//     }
//     button {
//       padding: 0.3rem 2rem;
//       border-radius: 2rem;
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       background-color: #1b2026;
//       border: none;
//       @media screen and (min-width: 720px) and (max-width: 1080px) {
//         padding: 0.3rem 1rem;
//         svg {
//           font-size: 1rem;
//         }
//       }
//       svg {
//         font-size: 2rem;
//         color: white;
//       }
//     }
//   }
// `;








import React, { useState } from "react";
import { BsEmojiSmileFill } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
import styled from "styled-components";
import Picker from "emoji-picker-react";

export default function ChatInput({ handleSendMsg }) {
  const [msg, setMsg] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const handleEmojiPickerhideShow = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const handleEmojiClick = (event) => {
    const clickedEmoji = event.emoji;
    if (clickedEmoji) {
      setMsg((prevMsg) => prevMsg + clickedEmoji);
    }
  };

  const sendChat = (event) => {
    event.preventDefault();
    if (msg.length > 0) {
      handleSendMsg(msg);
      setMsg("");
    }
  };

  return (
    <Container>
      <div className="button-container">
        <div className="emoji">
          <BsEmojiSmileFill onClick={handleEmojiPickerhideShow} />
          <div className="emoji-box">
            {showEmojiPicker && <Picker onEmojiClick={handleEmojiClick} />}
          </div>
        </div>
      </div>
      <form className="input-container" onSubmit={(event) => sendChat(event)}>
        <input
          type="text"
          placeholder="Type your message here"
          onChange={(e) => setMsg(e.target.value)}
          value={msg}
        />
        <button type="submit">
          <IoMdSend />
        </button>
      </form>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  align-items: center;
  width: 100%;
  grid-template-columns: 5% 95%;
  background-color: #22272e;
  padding: 0.2rem;
  padding-bottom: 0.2rem;
  // overflow-x: hidden; /* Hidden on the x-axis */
  // overflow-y: hidden;

  @media screen and (max-width: 768px) {
    grid-template-columns: 10% 90%;

  }

  .button-container {
    display: flex;
    align-items: center;
    color: white;
    gap: 1rem;

    .emoji {
      position: absolute;

      svg {
        font-size: 1.5rem;
        color: #ffff00c8;
        cursor: pointer;
      }

      .emoji-box {
        position: absolute;
        top: -480px;
        z-index: 10; // or a higher value
        background-color: transparent;
        // box-shadow: 0 5px 10px #9a86f3;
        border-color: #9a86f3;
        height: 40px;
        width: 30px;

        @media screen and (max-width: 768px) {
          top: -500px;
        }

        .emoji-scroll-wrapper::-webkit-scrollbar {
          background-color: #080420;
          width: 5px;

          &-thumb {
            background-color: #9a86f3;
          }
        }

        .emoji-categories {
          button {
            filter: contrast(0);
          }
        }

        .emoji-search {
          background-color: transparent;
          border-color: #9a86f3;
        }

        .emoji-group:before {
          background-color: #080420;
        }
      }
    }
  }

  .input-container {
    width: 100%;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    z-index: 1000;
    box-shadow: 5px 5px 7px 4px rgba(0, 0, 0, 0.5);

    background-color: #1d2127;

    @media screen and (max-width: 768px) {
      gap: 1rem;
    }

    input {
      width: 100%;
      height: 60%;
      background-color: transparent;
      
      color: white;
      border: none;
      padding-left: 1rem;
      font-size: 1.2rem;

      &::selection {
        background-color: #9a86f3;
      }

      &:focus {
        outline: none;
      }
    }

    button {
      padding: 0.3rem 2rem;
      border-radius: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #1b2026;
      border: none;

      @media screen and (max-width: 768px) {
        padding: 0.3rem 1rem;

        svg {
          font-size: 1rem;
        }
      }

      svg {
        font-size: 2rem;
        color: white;
      }
    }
  }
`;
