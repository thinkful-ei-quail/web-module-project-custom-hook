import { useState } from 'React';

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);
  return [darkMode, setDarkMode];
};

export default useDarkMode;