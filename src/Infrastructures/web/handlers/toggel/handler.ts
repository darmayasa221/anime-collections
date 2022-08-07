import { useState } from 'react';

const ToggelMenuState = () => {
  const [mode, setMode] = useState(false);
  const TogelMenuHandler = () => {
    mode === true ? setMode(false) : setMode(true);
  };
  return [mode, TogelMenuHandler] as const;
};

export default ToggelMenuState;
