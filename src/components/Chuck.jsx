import { useState, useEffect } from "react";

const Chuck = () => {
  const [joke, setJoke] = useState(null);
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((data) => {
        setJoke(data.value);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((state) => (state <= 0 ? state : state - 1));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div>{seconds}</div>
      <div>
        Chuck Norris' joke:
        <blockquote>{joke}</blockquote>
      </div>
    </>
  );
};

export default Chuck;
