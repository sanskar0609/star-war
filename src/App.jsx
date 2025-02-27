import React, { useState } from "react";
import CharacterList from "./components/CharacterList";
import VismeForm from "./components/VismeForm";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Disable scrolling when modal is open
  React.useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen]);

  return (
    <div className="min-h-screen overflow-hidden">
      <CharacterList setIsModalOpen={setIsModalOpen} />
      
    </div>
  );
};

export default App;
