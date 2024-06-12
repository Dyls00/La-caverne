import { navLinks } from "../constants";
import logo from '../assets/logo.png'

const Navbar = () => {
    return (
        <nav className="bg-white">
            <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#Home" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logo} className="h-8" alt="Flowbite Logo" />
                </a>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-white">
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <a href={`#${link.id}`} className="block py-2 px-3 text-xl text-primary hover:text-dark-purple rounded">
                                    {link.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;