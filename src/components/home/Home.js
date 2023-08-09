import React from "react";
import { motion } from "framer-motion";
import "./Home.css";
import welcome from "./quiz_welcome_page.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="welcome_container">
      <motion.div
        className="welcome"
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ duration: 2 , delay:0.2 }}
      >
        <img src={welcome} alt="welcome" className="welcome_img" />
      </motion.div>
      <motion.div
        className="welcome_bottom"
        initial={{ y: 200 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <span className="quizapp_name">QuizBee</span>
        <span className="quizapp_description">Attempt Coding Challenges.</span>
        <Link to={"/quiz"}>
          <button className="start_btn">Start Quiz</button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;
