import React from "react";

function useCounter(forwardCounter = true) {
  const [counter, setCounter] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (forwardCounter) {
        setCounter((prevCounter) => prevCounter + 1);
      } else {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [forwardCounter]); //forwardCounter is required as a dependency so that the useEffect hook will re-run if the dependency changed and it will definitely change as we are passing two different parameters as an argument in the custom hook

  return counter;
}

export default useCounter;
