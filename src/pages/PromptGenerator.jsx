import React from "react";
import { useState } from "react";
import "../App.css"

const images = [
  "1.png",
  "2.png",
  "3.png",
  "4.png",
];

const PromptGenerator = () => {
  // const prompts = [
  //   "Try a new sustainability challenge!",
  //   "Share an item with a neighbor!",
  //   "Upcycle something today!",
  //   "Join a community clean-up event!",
  // ];

  const [currentImage, setCurrentImage] = useState(images[0]);

  const getRandomImage = () => {
      const randomIndex = Math.floor(Math.random() * images.length);
      setCurrentImage(images[randomIndex]);
  };

  return (
    
      <div className="container">
              <img 
                  src={currentImage} alt="Random" className="rounded-lg shadow-md mb-4" 
              />
              <button
                  onClick={getRandomImage}
                  className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600"
              >
                  Generate Sustainable Challenge!
              </button>
      </div>
  );
  
  // const [prompt, setPrompt] = useState(prompts[0]);

  // const generatePrompt = () => {
  //   const randomIndex = Math.floor(Math.random() * prompts.length);
  //   setPrompt(prompts[randomIndex]);
  // };

  // return (
  //   <div className="flex flex-col items-center justify-center p-4">
  //     <p className="text-lg font-semibold mb-4">{prompt}</p>
  //     <button
  //       onClick={generatePrompt}
  //       className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
  //     >
  //       Generate New Prompt
  //     </button>
  //   </div>
  // );
};

export default PromptGenerator;