import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import GradeIcon from "@mui/icons-material/Grade";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import { NavLink } from "react-router-dom";
console.log(SearchIcon);

export default function NavBar() {
  return (
    <div>
      <nav className="flex top-0  w-[100%]  justify-between items-center py-4 bg-white drop-shadow-md  flex-col lg:flex-row gap-5 lg:gap-0">
        <div className="flex items-center gap-4">
          <img
            src="/public/logo.png"
            alt="logo"
            className="w-12 h-12 p-1 ml-2"
          />
          <h1 className="font-bold text-3xl mr-7 bg-gradient-to-r from-[#fbb202] via-[#fc8402] to-[#fe460d] bg-clip-text text-transparent">
            RecipeLair
          </h1>
        </div>
        <form>
          <SearchIcon sx={{ color: "orange" }} />
          <input
            type="text"
            name="search"
            placeholder="Enter Items"
            className="ml-2 border border-orange-500 border-t-0 border-l-0 border-r-0 border-b-2 focus:outline-none p-2  ml-8 lg:mr-5"
          />
        </form>
      </nav>
      <form>
        <ul className="flex gap-8 items-center justify-center">
          <li>
            <NavLink to={"/"} className="">
              {
                <HomeIcon
                  sx={{
                    background: "linear-gradient(to right, orange, red)",
                    borderRadius: "20rem",
                    padding: "1px",
                    color: "white",
                    width: "4rem",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    transition: 'transform 0.3s ease, background 0.3s ease',
                    '&:hover':{
                      transform: 'scale(1.1)',
                      background: 'linear-gradient(to right, red, red)',
                    
                    }
                  }}
                />
              }
            </NavLink>
          </li>
          <li>
            <NavLink to={"/favorite"} className="">
              {
                <GradeIcon
                  sx={{
                    background: "linear-gradient(to right, orange, red)",
                    borderRadius: "20rem",
                    padding: "1px",
                    color: "white",
                    width: "4rem",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    transition: 'transform 0.3s ease, background 0.3s ease',
                    '&:hover':{
                      transform: 'scale(1.1)',
                      background: 'linear-gradient(to right, red, red)',
                    
                    }
                  }}
                />
              }
            </NavLink>
          </li>
          {/* <li>
            <NavLink to={"/"} className="">
              {
                <RamenDiningIcon
                  sx={{
                    background: "linear-gradient(to right, orange, red)",
                    borderRadius: "20rem",
                    padding: "1px",
                    color: "white",
                    width: "4rem",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    transition: 'transform 0.3s ease, background 0.3s ease',
                    '&:hover':{
                      transform: 'scale(1.1)',
                      background: 'linear-gradient(to right, red, red)',
                    
                    }
                  }}
                />
              }
            </NavLink>
          </li> */}
        </ul>
      </form>
    </div>
  );
}
