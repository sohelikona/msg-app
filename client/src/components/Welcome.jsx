

import React from 'react';
import styled from 'styled-components';
import Robot from "../assets/robot.gif"

const Welcome = ({ currentUser }) => {
  return (
    <Container>
      <img src={Robot} alt='robot' />
      {currentUser ? (
        <div>
          <h1>
            Welcome, <span>{currentUser.username}</span>
          </h1>
          <h3>Please select a contact to start Messaging</h3>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </Container>
  );
}

const Container = styled.div`
overflow: hidden;  
display: flex;
width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  flex-direction: column;
  img {
    height: 20rem;
  }
  span {
    color: #66d8c5;
  }
`;

export default Welcome;





// import React from 'react';
// import styled from 'styled-components';
// import Robot from '../assets/robot.gif';

// const Welcome = ({ currentUser }) => {
//   return (
//     <Container>
//       <img src={Robot} alt="robot" />
//       {currentUser ? (
//         <Content>
//           <h1>
//             Welcome, <span>{currentUser.username}</span>
//           </h1>
//           <h3>Please select a chat to start Messaging</h3>
//         </Content>
//       ) : (
//         <div>Loading...</div>
//       )}
//     </Container>
//   );
// };
// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
//   color: white;
//   flex-direction: column;
//   width: 100%; /* Set the width to 100% */
//   img {
//     width: 100% !important;
//     max-width: 100%;
//     height: auto; /* Maintain aspect ratio for the image */
//   }
//   span {
//     color: #181b20;
//   }
// `;


// const Content = styled.div`
//   width: 100%;
//   max-width: 400px;
// `;

// export default Welcome;
