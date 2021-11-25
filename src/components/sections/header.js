import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'

const header = () => {

    const navScript = () => {

        const btn = document.querySelector("button.mobile-menu-button");
        const menu = document.querySelector(".mobile-menu");

        btn.addEventListener("click", () => {
            menu.classList.toggle("hidden");
        });

    }
    return (
        <>
            {/* <Link href="/user/signup">
    <a className={`mr-4 my-auto hover:text-indigo-600 font-normal font-serif text-xl ${router.pathname == "/user/signup" ? "text-indigo-600" : "text-brand-darkblue"}`}>
        Home
    </a>
</Link> */}
            <section>
                <nav className="bg-white shadow-lg">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="flex justify-between">
                            <div className="flex space-x-7">
                                <div>

                                    <a href="#" className="flex items-center py-4 px-2">
                                        <img src={logo} alt="Logo" className="h-8 w-28 mr-2" />
                                    </a>
                                </div>

                                <div className="hidden md:flex items-center space-x-1">

                                    <NavLink to="/home" className="py-4 px-2 text-green-500 border-b-4 font-semibold">Home</NavLink>
                                    <NavLink to="/events" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Events</NavLink>
                                    <NavLink to="/about" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">About</NavLink>
                                </div>
                            </div>

                            <div className="hidden md:flex items-center space-x-3 ">
                                <a href="" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300">Log In</a>
                                <a href="" className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300">Sign Up</a>
                            </div>

                            <div className="md:hidden flex items-center">
                                <button className="outline-none mobile-menu-button" onClick={navScript}>
                                    <svg className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                                        x-show="!showMenu"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path d="M4 6h16M4 12h16M4 18h16"></path>
                                    </svg>

                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="hidden mobile-menu">
                        <ul className="">
                            <li className="active"><a href="index.html" className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</a></li>
                            <li><a href="#services" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Services</a></li>
                            <li><a href="#about" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About</a></li>
                            <li><a href="#contact" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</a></li>
                        </ul>
                    </div>

                </nav>
            </section>

        </>
    );
};


export default header;