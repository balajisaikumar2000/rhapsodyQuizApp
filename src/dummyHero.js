// import React, { useState } from "react";
// import fire from "./fire";
// import "./Hero.css";
// import { questions } from "./questions";
// const db = fire.firestore();

// const Hero = ({ handleLogout, user }) => {
//   // const writeData = () => {
//   //   return db
//   //     .collection("users")
//   //     .doc(user.uid)
//   //     .set({
//   //       name: document.getElementById("nameField").value,
//   //     });
//   // };
//   const [infoActive, setinfoActive] = useState(false);
//   const [activeQuiz, setactiveQuiz] = useState(false);
//   const startQuiz = () => {
//     setinfoActive(true);
//   };
//   const exitQuiz = () => {
//     setinfoActive(false);
//   };
//   const openQuiz = () => {
//     setactiveQuiz(true);
//     setinfoActive(false);
//   };

//   return (
//     <section className="hero">
//       <nav>
//         <h2>Welcome</h2>
//         <button onClick={handleLogout}>Logout</button>
//       </nav>
//       <div className="main">
//         <div className="start_btn">
//           <button onClick={startQuiz}>Start Quiz</button>
//         </div>

//         <div className={`info_box ${infoActive ? "activeInfo" : ""}`}>
//           <div className="info-title">
//             <span>Some Rules of this Quiz</span>
//           </div>
//           <div className="info-list">
//             <div className="info">
//               1. You will have only <span>15 seconds</span> per each question.
//             </div>
//             <div className="info">
//               2. Once you select your answer, it can't be undone.
//             </div>
//             <div className="info">
//               3. You can't select any option once time goes off.
//             </div>
//             <div className="info">
//               4. You can't exit from the Quiz while you're playing.
//             </div>
//             <div className="info">
//               5. You'll get points on the basis of your correct answers.
//             </div>
//           </div>
//           <div className="buttons">
//             <button
//               className="quit"
//               // className={`quit info_box ${infoActive ? "activeInfo" : ""}`}
//               onClick={exitQuiz}
//             >
//               Exit Quiz
//             </button>
//             <button
//               className="restart"
//               onClick={() => {
//                 openQuiz();
//                 exitQuiz();
//               }}
//             >
//               Continue
//             </button>
//           </div>
//         </div>

//         <div className={`quiz_box ${activeQuiz ? "activeQuiz" : ""}`}>
//           <header>
//             <div className="title">Awesome Quiz Application</div>
//             <div className="timer">
//               <div className="time_left_txt">Time Left</div>
//               <div className="timer_sec">15</div>
//             </div>
//             <div className="time_line"></div>
//           </header>
//           <section>
//             <div className="que_text">
//               {/* <!-- Here I've inserted question from JavaScript --> */}
//             </div>
//             <div className="option_list">
//               {/* <!-- Here I've inserted options from JavaScript --> */}
//             </div>
//           </section>

//           <footer>
//             <div className="total_que">
//               {/* <!-- Here I've inserted Question Count Number from JavaScript --> */}
//             </div>
//             <button className="next_btn">Next Que</button>
//           </footer>
//         </div>

//         <div className="result_box">
//           <div className="icon">
//             <i className="fas fa-crown"></i>
//           </div>
//           <div className="complete_text">You've completed the Quiz!</div>
//           <div className="score_text">
//             {/* <!-- Here I've inserted Score Result from JavaScript --> */}
//           </div>
//           <div className="buttons">
//             {/* <!-- <button className="restart">Replay Quiz</button> --> */}
//             <button className="quit">Quit Quiz</button>
//           </div>
//         </div>

//         {/* <h1>user data</h1>
//         <input type="text" id="nameField" placeholder="name" />
//         <input type="text" id="ageField" placeholder="age" />
//         <button onClick={writeData}>submit</button> */}
//       </div>
//     </section>
//   );
// };

// export default Hero;
