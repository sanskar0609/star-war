import React, { useState, useEffect } from "react";
import CharacterModal from "./CharacterModal";
import axios from "axios";

const CharacterCard = ({ character }) => {
  const [species, setSpecies] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const randomImage = `https://picsum.photos/200/300?random=${character.name}`;

  useEffect(() => {
    if (character.species.length > 0) {
      axios.get(character.species[0]).then((res) => setSpecies(res.data.name));
    }
  }, [character.species]);

  // 🎨 Color Palette for different species
  const speciesColors = {
    Droid: "from-blue-500 to-blue-800", // 🔵 Smooth Blue Gradient
    Human: "from-yellow-400 to-yellow-600", // 🟡 Warm Yellow Gradient
    Wookiee: "from-orange-500 to-orange-700", // 🟠 Deep Orange Gradient
    Twilek: "from-purple-500 to-purple-700", // 🟣 Rich Purple Gradient
    Others: "from-gray-500 to-gray-700", // ⚫ Subtle Gray Gradient
  };

  const backgroundColor = speciesColors[species] || speciesColors["Others"];

  return (
    <>
      {/* 🔥 Enhanced Card with Glassmorphism and Animated Background */}
      <div
        className={`relative p-4 rounded-xl bg-gradient-to-r ${backgroundColor} shadow-lg overflow-hidden cursor-pointer 
                    transform transition duration-300 hover:scale-105 hover:shadow-2xl group backdrop-blur-lg bg-opacity-30 border border-gray-200 
                    before:absolute before:inset-0 before:bg-gradient-radial before:from-transparent before:to-black before:opacity-20 before:transition-opacity before:hover:opacity-40`}
        onClick={() => setIsOpen(true)}
      >
        {/* 🎭 Character Image with Neon Glow */}
        <div className="relative overflow-hidden rounded-xl">
          <img
            src={randomImage}
            alt={character.name}
            className="rounded-xl w-full h-44 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          {/* ✨ Soft Blur Overlay */}
          <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-20 transition-opacity"></div>
        </div>

        {/* ✨ Character Name with Glow */}
        <h2
          className="text-lg font-bold text-white mt-4 text-center 
                     transition-transform duration-300 group-hover:scale-110 group-hover:text-yellow-300"
        >
          {character.name}
        </h2>

        {/* 🔹 Hover Glow Effect */}
        <div className="absolute inset-0 rounded-xl bg-white opacity-5 group-hover:opacity-15 transition-opacity"></div>
      </div>

      {/* 🔹 Character Modal */}
      {isOpen && <CharacterModal character={character} setIsOpen={setIsOpen} />}
    </>
  );
};

export default CharacterCard;
