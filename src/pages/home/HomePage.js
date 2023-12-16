import React, { useState, useEffect } from 'react';
import { fetchQuestions } from '../../services/api';
import './HomePage.css';

function HomePage() {
  const [questions, setQuestions] = useState([]);
  const currentDate = new Date().toLocaleDateString();

  useEffect(() => {
    async function loadQuestions() {
      try {
        const questionsData = await fetchQuestions();
        setQuestions(questionsData);
      } catch (error) {
        console.error('Erro ao obter as questões:', error);
      }
    }

    loadQuestions();
  }, []);

  return (
    <div className="container">
      <div className="header">
        <h1>Flags of the Day</h1>
        <p>{currentDate}</p>
      </div>
      {questions.map((question, index) => (
        <div key={index} className="question-container">
          {question.imageUrl && <img src={question.imageUrl} alt="Imagem da Questão" className="flag-img" />}
          <p>{question.question}</p>
          <select>
            {question.alternatives.map((alt, altIndex) => (
              <option key={altIndex} value={altIndex}>{alt}</option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
