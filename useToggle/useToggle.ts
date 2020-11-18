import { useState } from 'react';

function useToggle(initialVal: boolean = false) {
  // call useState
  const [state, setState] = useState<boolean>(initialVal);
  const toggle = () => {
    setState(!state);
  };
  // return a piece with to call state and a func to toggle it
  return [state, toggle];
}

export default useToggle;
