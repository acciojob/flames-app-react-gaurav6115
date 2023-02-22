import React, { Component, useState } from "react";
import "../styles/App.css";

const relation = (str1, str2) => {
  if (str1.length === 0 || str2.length === 0) {
    return "Please enter valid input";
  } else {
    let length = 0;
    for (let i = 0; i < str1.length; i++) {
      for (let j = 0; j < str2.length; j++) {
        if (str1[i] === str2[j]) {
          length = str1.length + str2.length - 2;
          break;
        }
      }
    }
    switch (length % 6) {
      case 1:
        return "Friends";
        break;
      case 2:
        return "Love";
        break;
      case 3:
        return "Affection";
        break;
      case 4:
        return "Marriage";
        break;
      case 5:
        return "Enemy";
        break;
      case 0:
        return "Siblings";
        break;
      default:
        return "";
    }
  }
};

const App = () => {
  const [str1, setStr1] = useState("");
  const [str2, setStr2] = useState("");
  const [relationType, setRelationType] = useState("");

  const clear = () => {
    setStr1("");
    setStr2("");
    setRelationType("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setRelationType(relation(str1, str2));
  };

  const handleStr1Value = (event) => {
    setStr1(event.target.value);
  };

  const handleStr2Value = (event) => {
    setStr2(event.target.value);
  };

  return (
    <div id="main">
      <div>
        First Name :
        <input
          type="text"
          value={str1}
          onChange={handleStr1Value}
          data-testid="input1"
        />
      </div>
      <div>
        Second Name :
        <input
          type="text"
          value={str2}
          onChange={handleStr2Value}
          data-testid="input2"
        />
      </div>
      <button onClick={handleSubmit} data-testid="calculate_relationship">
        Calculate Relationship Future
      </button>
      <button onClick={clear} data-testid="clear">
        Clear
      </button>

      <div>
        {relationType === "" ? (
          <h3 data-testid="answer">{relationType}</h3>
        ) : (
          <h3 data-testid="answer">{relationType}</h3>
        )}
      </div>
    </div>
  );
};

export default App;
