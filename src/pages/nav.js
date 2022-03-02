import { NavLink, useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  const handleNavigation = (page) => {
    navigate(page);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "12px" }}>
      <button onClick={() => handleNavigation("/page1")}>page1</button>
      <button onClick={() => handleNavigation("/page2/3")}>page2</button>
      <NavLink className="active-tab" to="/page3">
        404 not match
      </NavLink>
      <NavLink to="/counter">counter</NavLink>
      <NavLink to="/fake-data">fake</NavLink>
    </div>
  );
};

export default Nav;
