import React, { useEffect, useState } from "react";
import axios from "axios";

const CharacterModal = ({ character, setIsOpen }) => {
  const [homeworld, setHomeworld] = useState(null);

  useEffect(() => {
    axios.get(character.homeworld).then((res) => setHomeworld(res.data));
  }, [character.homeworld]);

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      {/* Large Modal Box with higher z-index */}
      <div className="relative w-full max-w-3xl bg-white text-black p-8 rounded-lg shadow-2xl 
                      transform transition-transform duration-300 scale-100 z-50">
        {/* Close Button */}
        <button 
          className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded shadow-md 
                     hover:bg-red-700 transition"
          onClick={() => setIsOpen(false)}
        >
          ✖
        </button>

        {/* Header */}
        <h2 className="text-3xl font-bold text-center mb-4">{character.name}</h2>

        {/* Character Details */}
        <div className="grid grid-cols-2 gap-4">
          <p><strong>Height:</strong> {character.height / 100}m</p>
          <p><strong>Mass:</strong> {character.mass} kg</p>
          <p><strong>Birth Year:</strong> {character.birth_year}</p>
          <p><strong>Films:</strong> {character.films.length}</p>
          {homeworld && (
            <>
              <p><strong>Homeworld:</strong> {homeworld.name}</p>
              <p><strong>Terrain:</strong> {homeworld.terrain}</p>
              <p><strong>Climate:</strong> {homeworld.climate}</p>
              <p><strong>Population:</strong> {homeworld.population}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CharacterModal;
