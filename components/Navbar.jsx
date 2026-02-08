import { Link, NavLink } from "react-router-dom";
import clsx from "clsx";

const items = [{ path: "/", label: "HOME" }];
const loginPath = "/login";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-indigo-900 bg-opacity-50 backdrop-blur-md backdrop-saturate-150 shadow-lg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4">
        <Link to="/" className="flex items-center gap-2 text-white">
          <img
            src="https://icones.pro/wp-content/uploads/2021/02/icone-de-la-maison-bleue.png"
            alt="EstateVista Logo"
            className="h-8 w-8 object-contain"
          />
          <span className="text-2xl font-bold">EstateVista</span>
        </Link>

        <ul className="flex gap-6 items-center">
          {items.map(({ path, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  clsx(
                    "font-medium transition-colors",
                    isActive ? "text-white" : "text-gray-300 hover:text-white"
                  )
                }
                end
              >
                {label}
              </NavLink>
            </li>
          ))}

          {/* 🌐 External Links */}
          <li>
            <a
              href="https://www.linkedin.com/in/aryan-kala-5b4065260/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white font-medium"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="mailto:aryankala250@gmail.com"
              className="text-gray-300 hover:text-white font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gmail
            </a>
          </li>
          <li>
            <a
              href="https://github.com/aryankala24/my-projects"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white font-medium"
            >
              GitHub
            </a>
          </li>

          {/* 🔐 Login */}
          <li>
            <NavLink
              to={loginPath}
              className={({ isActive }) =>
                clsx(
                  "text-2xl transition-colors",
                  isActive ? "text-white" : "text-gray-300 hover:text-white"
                )
              }
              aria-label="Login"
            >
              🔐
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
