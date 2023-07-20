import tachyons from "tachyons";
import { useDispatch } from "react-redux";
import { increment, decrement, reset } from "./Redux/Actions";
import "./index.css";

const Button = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => dispatch(increment())}
        className="flex center w4 f6 link dim ba bw2 ph3 pv2 mb2 dib dark-blue"
      >
        <span className="tc flex center">add</span>
      </button>
      <button
        onClick={() => dispatch(decrement())}
        className="flex center w4 f6 link dim ba bw2 ph3 pv2 mb2 dib dark-blue"
      >
        <span className="tc flex center">subtract</span>
      </button>{" "}
      <button
        onClick={() => dispatch(reset())}
        className="flex center w4 f6 link dim ba bw2 ph3 pv2 mb2 dib dark-blue"
      >
        <span className="tc flex center">reset</span>
      </button>
    </div>
  );
};

export default Button;
