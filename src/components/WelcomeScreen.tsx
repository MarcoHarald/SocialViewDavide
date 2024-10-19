import React, { useState } from "react";
import SignIn from "./SignIn";

const WelcomeScreen: React.FC = () => {
  const [inputText, setInputText] = useState("@");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.startsWith("@")) {
      setInputText(value);
    } else {
      setInputText("@" + value);
    }
  };

  return (
    <div className="welcome-screen p-8 max-w-2xl mx-auto flex flex-col items-center justify-between min-h-screen">
      <div className="w-full">
        <h1 className="text-4xl font-bold mb-8 text-center">Welcome</h1>
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="@username"
          className="w-full p-2 border rounded text-lg"
        />
      </div>
      <SignIn />
    </div>
  );
};

export default WelcomeScreen;
