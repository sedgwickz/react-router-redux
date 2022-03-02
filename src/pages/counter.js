import { useDispatch, useSelector } from "react-redux";
import tk from "../thunk_fns";
import Nav from "./nav";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((s) => s.value);
  // const [count, setCount] = useState(store.getState().value)
  // useEffect(() => {
  //   store.subscribe(() => setCount(store.getState().value));
  // });

  // const handleAdd = () => {
  //   store.dispatch({ type: "add" });
  // };

  // const handleSubtract = () => {
  //   store.dispatch({ type: "subtract" });
  // };
  return (
    <>
      <Nav />
      <div>count: {count}</div>
      <div>
        <button onClick={() => tk.add(dispatch)}>add</button>
        <button onClick={() => tk.subtract(dispatch)}>subtract</button>
      </div>
    </>
  );
};

export default Counter;
