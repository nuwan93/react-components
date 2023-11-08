import { useEffect, useState } from "react";
import Button from "../components/Button";

const CounterPage = ({ intialCount }) => {
  const [count, setCount] = useState(intialCount);

  useEffect(() => {
    console.log(count);
  }, [count]);
  return (
    <div>
      Count is {count}{" "}
      <Button primary onClick={() => setCount(count + 1)}>
        Click
      </Button>
    </div>
  );
};

export default CounterPage;
