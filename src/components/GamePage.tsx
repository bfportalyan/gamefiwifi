import React from 'react';
import { useParams } from 'react-router-dom';

const GamePage = () => {
  const { id } = useParams();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Game: {id}</h1>
      <p>This is a placeholder for the game page. Each game would have its own unique content and features here.</p>
    </div>
  );
};

export default GamePage;