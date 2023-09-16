 export interface SearchInputProps {
    textInput: string;
    setTextInput: (text: string) => void;
    handleClick2: () => void; // Thêm prop handleClick2
    setHasChanged: (changed: boolean) => void;
  }