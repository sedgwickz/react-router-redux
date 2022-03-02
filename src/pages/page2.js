import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Nav from "./nav";

const Page2 = () => {
  const params = useParams();
  useEffect(() => {
    console.table(params);
  });
  return (
    <>
      <Nav />
      <div>page2</div>
    </>
  );
};

export default Page2