import tachyons from "tachyons";
import Button from "./Button.js";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Display = () => {
  const counter = useSelector((state) => state.counter);

  return (
    <>
      <div className="display-board ma5 flex center br3">
        <h2 className="flex center">counter: {counter}</h2>
      </div>
      <Button />
    </>
  );
};

export default Display;
