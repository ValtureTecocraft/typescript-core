import React, { useState } from "react";

interface IState {
  count: number;
}

const Counter: React.FC = () => {
  const [state, setState] = useState<IState>({ count: 0 });

  const handleINC = () => {
    setState({ count: state.count + 1 });
  };
  const handleDEC = () => {
    setState({ count: state.count - 1 });
  };

  return (
    <div>
      <h2>{state.count}</h2>
      <button onClick={handleINC}>INC</button>
      <button onClick={handleDEC}>DEC</button>
    </div>
  );
};

export default Counter;
