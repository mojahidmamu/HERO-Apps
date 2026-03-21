import React from "react";
import pfofileImg from "../../assets/profile.bmp";

const Profile = () => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-xl rounded-2xl p-6 text-center border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
      {/* Profile Image */}
      <img
        src={pfofileImg}
        alt="Profile"
        className="w-28 h-28 mx-auto rounded-xl object-cover mb-4 border-2 border-gray-300"
      />

      {/* Name and Title */}
      <h2 className="text-2xl font-bold text-gray-800">Abdullah Al Mojahid</h2>
      <p className="text-gray-600 mt-1">
        Full Stack Web Developer | Problem Solver | DSA Enthusiast | Tech Lover | MERN Stack
      </p>

      {/* Info Section */}
      <div className="text-left mt-5 space-y-2 text-gray-700">
        <p>
          <span className="font-semibold">Email:</span>{" "}
          abdullahallmojahidstudent@gmail.com
        </p>
        <p>
          <span className="font-semibold">Location:</span> Cox's Bazar,
          Bangladesh
        </p>
        <p>
          <span className="font-semibold">Skills:</span> HTML, CSS, JavaScript,
          React, Tailwind CSS, Firebase, MongoDB, Git, GitHub, etc.
        </p>
        <p>
          <span className="font-semibold">Problem Solving:</span> Active on
          platforms like Codeforces, LeetCode, and HackerRank — solving
          algorithmic problems regularly to improve logic and analytical skills.
        </p>
        <p>
          <span className="font-semibold">DSA:</span> Strong understanding of
          Data Structures and Algorithms using C++ and Python, focusing on clean
          logic and optimized solutions.
        </p>
        <p>
          <span className="font-semibold">About Me:</span> Passionate about
          building user-friendly web applications and exploring new
          technologies. Constantly improving full-stack and problem-solving
          skills to become a versatile software engineer.
        </p>
      </div>
    </div>
  );
};

export default Profile;
