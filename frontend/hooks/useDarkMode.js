import useLocalStorage from './useLocalStorage';

const useDarkMode = (key, initValue) => {
  const [storedValue, setValue] = useLocalStorage(key, initValue);
  const handleChanges = (updatedValue) => {
    setValue(updatedValue);
  };
  return [storedValue, handleChanges];
};

export default useDarkMode;