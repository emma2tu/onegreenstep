import React from "react";
import { useState } from "react";
import "../App.css"

const promptImages = [
  "7.png",
  "8.png",
  "9.png",
  "10.png",
  "11.png",
  "12.png"
];

const completedImages = [
  "1.png",
  "2.png",
  "3.png",
  "4.png",
  "5.png",
  "6.png"
];

const PromptGenerator = () => {

  const [currentImage, setCurrentImage] = useState(promptImages[0]);
  const [completed, setCompleted] = useState(false);

  const generatePrompt = () => {
      const randomIndex = Math.floor(Math.random() * promptImages.length);
      setCurrentImage(promptImages[randomIndex]);
      setCompleted(false); // Reset completion state
  };

  const logAsComplete = () => {
    const index = promptImages.findIndex(
        (img) => img === currentImage
    );
    setCurrentImage(completedImages[index]); // Switch to completed image
    setCompleted(true);

  // Save the completed prompt to localStorage
  let completedPrompts = JSON.parse(localStorage.getItem("completedPrompts")) || [];
  if (!completedPrompts.includes(currentImage)) {
    completedPrompts.push(currentImage); // Store the gray leaf image
    localStorage.setItem("completedPrompts", JSON.stringify(completedPrompts));
  }
};

  return (
    <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg">
        <img
            src={currentImage}
            alt={currentImage}
            className={`w-full h-48 rounded-lg mb-4`}
        />
        {/* Added custom class for button container */}
        <div className="button-container">
            <button
                onClick={generatePrompt}
                className="px-6 py-3 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition duration-300 ease-in-out"
            >
                Generate Prompt
            </button>
            <button
                onClick={logAsComplete}
                className="px-6 py-3 bg-green-500 text-white rounded-full shadow-md hover:bg-green-600 transition duration-300 ease-in-out"
            >
                Log as Complete
            </button>
        </div>
    </div>
  );
};

export default PromptGenerator;