import { useState } from "react";

const images = [
  "public/1.png",
  "public/2.png",
  "public/3.png",
  "public/4.png",
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
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <div className="p-4 bg-white shadow-lg rounded-lg">
              <img src={currentImage} alt="Random" className="rounded-lg shadow-md" />
              <button
                  onClick={getRandomImage}
                  className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600"
              >
                  Show Random Image
              </button>
          </div>
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