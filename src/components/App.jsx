import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Questions from '../data/questions.json';
import { useState } from 'react';
import Ballon from './Ballon';
import Login from './Login';

function App() {
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState(Questions);
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<div className="card">
          <h1 id='points' className="text-white">Score: {score}</h1>
          {Array.from({ length: 10 }).map((_, index) => (
            <Ballon key={index} isDisabled={isDisabled} setIsDisabled={setIsDisabled} score={score} setScore={setScore} questions={questions} setQuestions={setQuestions} />
          ))}
        </div>} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
