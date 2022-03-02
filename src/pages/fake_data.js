import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import tk from "../thunk_fns";
import Nav from "./nav";

const FakePage = () => {
  const [loading, setLoading] = useState(false);
  //const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const handleGetData = async () => {
    setLoading(true);
    await tk.getList(dispatch);
    //let _data = await store.getState();
    //setData(_data.data);
    setLoading(false);
  };

  return (
    <>
      <Nav />
      {loading ? <div>loading...</div> : ""}
      <div>
        <button onClick={handleGetData}>getdata</button>
      </div>
      <div>
        {data?.map((item) => (
          <div key={item.id}>{item.title}</div>
        ))}
      </div>
    </>
  );
};

export default FakePage;
