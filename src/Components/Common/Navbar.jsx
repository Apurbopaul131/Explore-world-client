import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const pages = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "All Tourist Spots",
      path: "/all-tourist-spots",
    },
    {
      id: 3,
      name: "Add Tourist Spot",
      path: "/add-tourist-spot",
    },
    {
      id: 4,
      name: "My List",
      path: "/my-list",
    }
  ];
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {pages.map((page) => (
              <NavLink key={page.id} to={page.path}>
                <li className="mr-5">
                  <a>{page.name}</a>
                </li>
              </NavLink>
            ))}
          </ul>
        </div>
        <h1 className="text-3xl font-bold">ExploreWorld</h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {pages.map((page) => (
            <NavLink key={page.id} to={page.path}>
              <li className="mr-5">
                <a>{page.name}</a>
              </li>
            </NavLink>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <Link to={`/login`}>
          <a className="btn mr-5">Login</a>
        </Link>
        <Link to={`/register`}>
          <a className="btn">SignUp</a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
