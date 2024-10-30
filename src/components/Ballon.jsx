import React, { useState } from 'react';
import Card from './Card';

const Ballon = ({ isDisabled, setIsDisabled, score, setScore, questions, setQuestions }) => {
    const [showCard, setShowCard] = useState(false);
    const [showButton, setShowButton] = useState(true);

    const positions =
    {
        position: "absolute",
        top: Math.floor(Math.random() * 95) + '%',
        left: Math.floor(Math.random() * 95) + '%',
    };

    const handleButtonClick = () => {
        console.log("clicked");
        if (isDisabled) return;

        setShowCard(true);
        setIsDisabled(true);
        console.log(setIsDisabled)
    };

    const hideCard = () => {
        setShowCard(false);
        setIsDisabled(false)
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            {showCard ? (
                <>
                    <button
                        onClick={() => hideCard()}
                        className="bg-red-600 text-white font-bold py-2 px-4 rounded-full shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition duration-300 transform hover:scale-105 w-10 h-10 flex items-center justify-center"
                    >
                        X
                    </button>
                    <Card setShowCard={setShowCard} isDisabled={isDisabled} setIsDisabled={setIsDisabled} setShowButton={setShowButton} score={score} setScore={setScore} questions={questions} setQuestions={setQuestions} />
                </>
            ) : (
                showButton && (
                    <button
                        onClick={handleButtonClick}
                        className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 transform hover:scale-105"
                        style={positions}
                        disabled={isDisabled}
                    >
                        CLIQUEZ
                    </button>
                )
            )}
        </div>
    );
}

export default Ballon;
