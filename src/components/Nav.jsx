import { useState } from "react";
import { ImGithub } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaBars, FaTimes } from "react-icons/fa";

export const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);

    };

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <div className="w-full h-[20vh] md:h-[10vh] bg-white flex items-center justify-between px-4 sticky top-0 z-50">
            {/* Logo */}
            <div className="md:w-1/4 flex justify-center font-base text-xl text-gray-600">
                <a href="#home" className="cursor-pointer">Sergio Iribe</a>
            </div>

            {/* Menu Normal */}
            <div className="hidden md:flex gap-10 w-2/4 justify-center text-gray-600">

                <a href="#home" className="cursor-pointer" >Inicio</a>
                <a href="#skills" className="cursor-pointer" >Tecnologias</a>
                <a href="#projects" className="cursor-pointer" >Proyectos</a>

            </div>

            {/* Íconos de redes sociales */}
            <div className="hidden md:flex gap-10 w-1/4 justify-center items-center text-gray-600">
                <a
                    href="https://github.com/sergioiribe"
                    target="_blank"
                    rel="noopener noreferrer">
                    <ImGithub size="20px" />
                </a>
                <a
                    href="https://www.linkedin.com/in/sergio-iribe-carrazco/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <FaLinkedin size="20px" />
                </a>
                <a
                    href="mailto:sergio.iribec@gmail.com">
                    <IoMail size="22px" />
                </a>
            </div>
            {/* Ícono de Hamburguesa */}
            <div className="md:hidden flex items-center text-gray-600">
                <button onClick={toggleMenu}>
                    {isOpen ? <FaTimes size="24px" /> : <FaBars size="24px" />}
                </button>
            </div>

            {/* Menú de hamburguesa desplegable */}
            {isOpen && (
                <div className="absolute top-28 left-0 w-full bg-white flex flex-col items-center gap-4 py-4 shadow-md md:hidden text-gray-600">
                        <a href="#home" className="cursor-pointer" onClick={handleLinkClick}>Inicio</a>
                        <a href="#skills" className="cursor-pointer" onClick={handleLinkClick}>Tecnologias</a>
                        <a href="#projects" className="cursor-pointer" onClick={handleLinkClick}>Proyectos</a>
                    <div className="flex gap-10 mt-4">
                        <a  
                            onClick={handleLinkClick}
                            href="https://github.com/sergioiribe"
                            target="_blank"
                            rel="noopener noreferrer">
                            <ImGithub size="20px" />
                        </a>
                        <a  
                            onClick={handleLinkClick}
                            href="https://www.linkedin.com/in/sergio-iribe-carrazco/"
                            target="_blank"
                            rel="noopener noreferrer">
                            <FaLinkedin size="20px" />
                        </a>
                        <a  
                            onClick={handleLinkClick}
                            href="mailto:sergio.iribec@gmail.com"
                            target="_blank"
                        >
                            <IoMail size="22px" />
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};
