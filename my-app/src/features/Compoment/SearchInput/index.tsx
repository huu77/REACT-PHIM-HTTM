import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { SearchInputProps } from './type';


function SearchInput({ textInput, setTextInput ,handleClick2,setHasChanged}: SearchInputProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextInput(event.target.value);
    setHasChanged(true)
  };

   
  return (
    <div className=" hidden md:block w-full max-w-xs mx-auto ">
      <div className="relative">
        <input
          type="text"
          value={textInput}
          onChange={(event) => handleChange(event)}
          className="w-full pl-10 pr-4 py-2 border rounded-lg shadow appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
          placeholder="Search..."
        />
        <div className="absolute   w-10 inset-y-0 left-0 pl-3 flex items-center " onClick={handleClick2} >
          <SearchIcon />
        </div>
      </div>
    </div>
  );
}

export default SearchInput;
