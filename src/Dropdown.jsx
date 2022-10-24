import { useState } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-red-500 px-10 w-full py-2"
      >
        Dropdown
      </button>

      {isOpen && (
        <div className="absolute p-5  bg-white shadow-lg border h-20 w-full">
          <h1 className="hover:text-red-500">Link</h1>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
