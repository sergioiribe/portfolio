import paisesdark from '../assets/paisesdark.jpg';
import elephant from '../assets/elephantdark.jpg';
import apoint from '../assets/apoint.png';
import hotelalura from '../assets/hotelalura.jpg';
import { ImGithub } from "react-icons/im";
import { FaExternalLinkAlt } from "react-icons/fa";


export const Projects = () => {
    return (
        <div className="mt-0 ">
            <h1 className="text-3xl font-bold text-center mb-0 md:mb-8" id='projects'>Proyectos</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-10">

                {[
                    { src: elephant, title: 'Elephant', description: 'Tienda en linea de productos elephant', url: 'https://www.elephantarchives.com/', languages: 'React, TailwindCSS, Axios, Laravel, AWS, MySQL, Stripe, Paypal', github: 'https://github.com/sergioiribe/elephant' },
                    { src: apoint, title: 'Apoint', description: 'App para gestionar citas ', url: '', languages: 'SwiftUI, MVVM, MySQL, Python, JWT', github: 'https://github.com/sergioiribe/Apoint'  },
                    { src: hotelalura, title: 'Hotel Alura', description: 'Sistema de gestion de hotel para registro y salidas de huespedes', url: '', languages: 'Java, JavaFX, JPA, Hibernate, MySQL', github: 'https://github.com/sergioiribe/hotelalura'  },
                    { src: paisesdark, title: 'Country Flag Finder', description: 'Buscador de banderas de paises con informacion detallada de cada uno de ellos', url: 'https://sergioiribe.github.io/country-flag-finder/', languages: 'React, TailwindCSS, Axios, REST API', github: 'https://github.com/sergioiribe/country-flag-finder' },

                ].map((project, index) => (
                    <div
                        key={index}
                        className="relative h-[200px] md:h-[400px] lg-[600px] w-full overflow-hidden group "
                    >
                        <img
                            src={project.src}
                            alt={project.title}
                            className="object-top h-full w-full transition duration-300 group-hover:opacity-50 active:opacity-50"
                        />

                        {/* Overlay */}
                        <div
                            className="absolute inset-0 flex flex-col items-center justify-center bg-white bg-opacity-0 transition duration-300 group-hover:bg-opacity-100 active:bg-opacity-100"
                        >
                            <span className="text-base md:text-lg font-bold text-gray-800 opacity-0 transition-opacity duration-300 group-hover:opacity-100 active:opacity-100 text-center px-2">
                                {project.title}
                            </span>
                            <span className="text-sm md:text-base text-gray-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100 active:opacity-100 text-center mt-2 px-2">
                                {project.description}
                            </span>
                            <span className="text-xs md:text-sm text-gray-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100 active:opacity-100 text-center mt-1 px-2">
                                {project.languages}
                            </span>
                            <div className='flex gap-5'>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100 active:opacity-100 md:flex items-center gap-2 hidden"
                                >
                                    <ImGithub size={20} />
                                    Ver en GitHub
                                </a>
                                {project.url && (<a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100 active:opacity-100 md:flex items-center gap-2 hidden"
                                >
                                    <FaExternalLinkAlt size={20} />
                                    Visitar pagina
                                </a>)}
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100 active:opacity-100 flex items-center gap-2 md:hidden"
                                >
                                    <ImGithub size={20} />
                                </a>
                                {project.url && (<a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100 active:opacity-100 flex items-center gap-2 md:hidden"
                                >
                                    <FaExternalLinkAlt size={20} />
                                </a>)}
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}
