import { NavLink } from "react-router-dom";

function Header3() {
  return (
    <header>
      <div className="h-12 flex justify-center items-center w-[100%]  ">
        <div className="h-10 w-[40%] flex items-center justify-between  text-sm">
          <NavLink to="/" className="nav">
            HOME
          </NavLink>

          <NavLink to="/belts" className="nav">
            BELTS
          </NavLink>

          <NavLink to="/bags" className="nav">
            BAGS
          </NavLink>

          <NavLink to="/shoes" className="nav">
            SHOES
          </NavLink>

          <NavLink to="/jewelries" className="nav">
            JEWELRIES
          </NavLink>

          <NavLink to="/accessories" className="nav">
            ACCESSORIES
          </NavLink>

          <NavLink to="/fabrics" className="nav">
            FABRICS
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header3;
