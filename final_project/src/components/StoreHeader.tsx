import { useState } from "react";

interface StoreHeaderProps {
  onSearch: (searchTerm: string) => void;
  onReset: () => void;
}

const StoreHeader: React.FC<StoreHeaderProps> = ({ onSearch, onReset }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(searchTerm);
    setSearchTerm("");
  };

  const handleResetClick = () => {
    onReset();
    setSearchTerm("");
  };

  return (
    <div className="wrapper">
      <button className="button">Add Data</button>
      <div>
        <input
          type="text"
          className="input"
          placeholder="Enter the name"
          value={searchTerm}
          onChange={handleChange}
        />
        <button onClick={handleSearchClick} className="button">
          Search
        </button>
        <button onClick={handleResetClick} className="button">
          Show All
        </button>
      </div>
    </div>
  );
};

export default StoreHeader;
