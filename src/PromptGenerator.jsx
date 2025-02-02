import { useState } from "react";

const PromptGenerator = () => {
  const prompts = [
    "Try a new sustainability challenge!",
    "Share an item with a neighbor!",
    "Upcycle something today!",
    "Join a community clean-up event!",
  ];

  const [prompt, setPrompt] = useState(prompts[0]);

  const generatePrompt = () => {
    const randomIndex = Math.floor(Math.random() * prompts.length);
    setPrompt(prompts[randomIndex]);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <p className="text-lg font-semibold mb-4">{prompt}</p>
      <button
        onClick={generatePrompt}
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
      >
        Generate New Prompt
      </button>
    </div>
  );
};

export default PromptGenerator;