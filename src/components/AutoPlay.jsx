import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import java from "../assets/java.png";
import javascript from "../assets/javacript.png";
import laravel from "../assets/laravel.png";
import mysql from "../assets/mysql.png";
import php from "../assets/php.png";
import postgres from "../assets/postgres.png";
import react from "../assets/react.png";
import css from "../assets/css.svg";
import html from "../assets/html.png";
import git from "../assets/git.jpeg";
import github from "../assets/github.jpeg";
import tailwind from "../assets/tailwind.png";
import swift from "../assets/swift.png";
import springboot from "../assets/springboot.png";

function AutoPlay() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 1500,
    cssEase: "linear",
  };

  return (

    <div id="skills">
      <h2 className="text-3xl font-bold text-center mb-0 md:mb-10">Tecnologias</h2>
      <div className="slider-container w-full mx-auto ">
        <Slider {...settings} className="flex justify-center items-center overflow-x-hidden">
          <div className="flex justify-center items-center h-48 ">
            <h3 className="flex items-center justify-center h-full flex-col">
              <img src={javascript} alt="javascript" className="h-16 md:h-32 object-contain" />
              <p>JavaScript</p>
            </h3>
          </div>
          <div className="flex justify-center items-center h-48">
            <h3 className="flex items-center justify-center h-full flex-col">
              <img src={react} alt="react" className="h-16 md:h-32 object-contain" />
              <p>React</p>
            </h3>
          </div>
          <div className="flex justify-center items-center h-48">
            <h3 className="flex items-center justify-center h-full flex-col">
              <img src={java} alt="java" className="h-24 md:h-40 object-contain" />
              {/* <p>Java</p> */}
            </h3>
          </div>
          <div className="flex justify-center items-center h-48">
            <h3 className="flex items-center justify-center h-full flex-col">
              <img src={springboot} alt="springboot" className="h-16 md:h-32 object-contain" />
              <p>Spring Boot</p>
            </h3>
          </div>
          <div className="flex justify-center items-center h-48">
            <h3 className="flex items-center justify-center h-full flex-col">
              <img src={swift} alt="swift" className="h-16 md:h-32 object-contain" />
              <p>SwiftUI</p>
            </h3>
          </div>
          <div className="flex justify-center items-center h-48">
            <h3 className="flex items-center justify-center h-full flex-col">
              <img src={php} alt="php" className="h-16 md:h-32 object-contain" />
              {/* <p>PHP</p> */}
            </h3>
          </div>
          <div className="flex justify-center items-center h-48">
            <h3 className="flex items-center justify-center h-full flex-col">
              <img src={laravel} alt="laravel" className="h-16 md:h-32 object-contain" />
              <p>Laravel</p>
            </h3>
          </div>
          <div className="flex justify-center items-center h-48">
            <h3 className="flex items-center justify-center h-full flex-col">
              <img src={postgres} alt="postgres" className="h-16 md:h-32 object-contain" />
              <p>PostgreSQL</p>
            </h3>
          </div>
          <div className="flex justify-center items-center h-48">
            <h3 className="flex items-center justify-center h-full flex-col">
              <img src={mysql} alt="mysql" className="h-16 md:h-32 object-contain" />
              {/* <p>MySQL</p> */}
            </h3>
          </div>
          <div className="flex justify-center items-center h-48">
            <h3 className="flex items-center justify-center h-full flex-col">
              <img src={git} alt="git" className="h-16 md:h-32 object-contain" />
              <p>Git</p>
            </h3>
          </div>
          <div className="flex justify-center items-center h-48">
            <h3 className="flex items-center justify-center h-full flex-col">
              <img src={github} alt="github" className="h-16 md:h-32 object-contain" />
              <p>GitHub</p>
            </h3>
          </div>
          <div className="flex justify-center items-center h-48">
            <h3 className="flex items-center justify-center h-full flex-col">
              <img src={html} alt="html" className="h-16 md:h-32 object-contain" />
              <p>HTML</p>
            </h3>
          </div>
          <div className="flex justify-center items-center h-48">
            <h3 className="flex items-center justify-center h-full flex-col">
              <img src={css} alt="css" className="h-16 md:h-32 object-contain" />
              {/* <p>CSS</p> */}
            </h3>
          </div>
          <div className="flex justify-center items-center h-48">
            <h3 className="flex items-center justify-center h-full flex-col gap-5">
              <img src={tailwind} alt="tailwind" className="h-10 md:h-24 object-contain" />
              <p>Tailwind CSS</p>
            </h3>
          </div>
        </Slider>
      </div>
    </div>
  );

}

export default AutoPlay;
