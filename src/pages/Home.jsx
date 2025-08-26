import congrats from "../assets/logo.jpg";
import classroom from "../assets/classroom.jpg";
import quiztable from "../assets/quiztable.jpg";
import { FaChild } from "react-icons/fa6";
import { FaHandsHoldingChild } from "react-icons/fa6";
import { IoMan } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import girls from "../assets/girls.jpg";
import insideclass from "../assets/insideclass.PNG";
import school from "../assets/school.jpg";
import schoolbus from "../assets/schoolbus.jpg";
import Header from "../components/Header";
import soldeir from "../assets/soldeir.jpg";
const Home = () => {
  return (
    <>
      <Header />

      <main className="min-h-[calc(100vh-480px)]">
        <section
          id="home"
          style={{ backgroundImage: `url(${congrats})` }}
          className="h-screen w-full bg-blue-600 bg-cover bg-center relative"
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Content */}
          <div className="relative z-10 flex items-center justify-center h-full flex-col gap-4 px-6 text-center">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug">
              Shaping Bright Minds, Building Future Leaders
            </h1>
            <p className="text-gray-200 text-sm sm:text-base md:text-lg max-w-xl">
              At Guggisberg Juvenile International School, we nurture every
              child’s potential through quality education, creativity, and
              strong values, preparing them to thrive in a global world.
            </p>
          </div>
        </section>

        {/* about */}
        <section
          id="about"
          className="min-h-screen w-full relative flex flex-col md:flex-row lg:justify-around items-center px-6 md:px-20 py-12 gap-8"
        >
          {/* Image */}
          <div
            style={{ backgroundImage: `url(${classroom})` }}
            className="h-64 w-full md:h-96 md:w-96 bg-cover bg-center rounded-3xl"
          ></div>

          {/* Text */}
          <div className="flex flex-col max-w-lg text-center md:text-left">
            <h1 className="font-bold text-2xl md:text-3xl mb-4">About</h1>
            <p className="text-sm sm:text-base leading-relaxed">
              Founded in the heart of Sunyani Penkwase, Guggisberg Juvenile
              International School was established with a simple but powerful
              vision: to provide world-class education rooted in discipline,
              creativity, and cultural pride. Our inspiration comes from the
              belief that every child has unique potential waiting to be
              discovered. By combining innovative teaching methods with strong
              moral guidance, we create a nurturing environment where curiosity,
              confidence, and excellence can flourish. At Guggisberg, education
              is more than academics — it is about shaping character, instilling
              values, and preparing future leaders to make a positive impact on
              their communities and beyond.
            </p>
          </div>
        </section>

        {/* learning stages */}
        <section
          id="classes"
          style={{ backgroundImage: `url(${quiztable})` }}
          className="min-h-screen w-full relative flex flex-col bg-cover items-center px-6 md:px-12 py-16 bg-blue-600 "
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          <div className="relative z-10 w-full max-w-6xl flex flex-col gap-4">
            <h1 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold text-center mb-10">
              Learning Stages at Guggisberg
            </h1>

            {/* Responsive grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
              {/* Nursery */}
              <div className="bg-white rounded-tl-4xl rounded-br-4xl h-auto w-full max-w-sm flex flex-col items-center justify-start text-center p-6 shadow-md ">
                <FaHandsHoldingChild color="orange" size={60} />
                <div className="flex flex-col gap-2 mt-4 text-justify">
                  <h2 className="font-medium text-xl text-center">
                    Nursery & Kindergarten
                  </h2>
                  <p className="text-sm md:text-base">
                    Our Nursery and Kindergarten provide a warm, playful, and
                    creative learning environment. At this stage, children build
                    a strong foundation in literacy and numeracy through songs,
                    stories, art, and hands-on activities that spark curiosity
                    and develop social skills.
                  </p>
                </div>
              </div>

              {/* Basic One to Six */}
              <div className="bg-white rounded-tl-4xl rounded-br-4xl h-auto w-full max-w-sm flex flex-col items-center justify-start text-center p-6 shadow-md">
                <FaChild color="orange" size={60} />
                <div className="flex flex-col gap-2 mt-4 text-justify">
                  <h2 className="font-medium text-xl text-center">
                    Basic One to Six
                  </h2>
                  <p className="text-sm md:text-base">
                    In Basic One to Six, we focus on strengthening academic
                    skills while encouraging creativity and confidence. Pupils
                    are introduced to core subjects such as Mathematics,
                    English, Science, and Social Studies, alongside
                    co-curricular activities that promote teamwork,
                    problem-solving, and character development.
                  </p>
                </div>
              </div>

              {/* Basic Seven to Nine */}
              <div className="bg-white rounded-tl-4xl rounded-br-4xl h-auto w-full max-w-sm flex flex-col items-center justify-start text-center p-6 shadow-md">
                <IoMan color="orange" size={60} />
                <div className="flex flex-col gap-2 mt-4 text-justify">
                  <h2 className="font-medium text-xl text-center">
                    Basic Seven to Nine
                  </h2>
                  <p className="text-sm md:text-base">
                    Our Basic Seven to Nine classes prepare learners for higher
                    academic pursuits and national examinations. Students are
                    guided through advanced subjects and critical thinking
                    exercises, while also being supported to develop leadership
                    skills, responsibility, and readiness for future educational
                    challenges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* gallery */}
        <section
          id="gallery"
          className="min-h-screen w-full relative flex items-center justify-center px-6 py-12"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center w-full max-w-6xl">
            <div
              style={{ backgroundImage: `url(${girls})` }}
              className="rounded-full h-60 w-60 sm:h-72 sm:w-72 bg-red-400 bg-cover bg-center shadow-md"
            ></div>
            <div
              style={{ backgroundImage: `url(${school})` }}
              className="rounded-full h-60 w-60 sm:h-72 sm:w-72 bg-red-400 bg-cover bg-center shadow-md"
            ></div>
            <div
              style={{ backgroundImage: `url(${insideclass})` }}
              className="rounded-full h-60 w-60 sm:h-72 sm:w-72 bg-red-400 bg-cover bg-center shadow-md"
            ></div>
            <div
              style={{ backgroundImage: `url(${schoolbus})` }}
              className="rounded-full h-60 w-60 sm:h-72 sm:w-72 bg-red-400 bg-cover bg-center shadow-md"
            ></div>
          </div>
        </section>

        {/* contact */}
        <section
          id="contact"
          style={{ backgroundImage: `url(${soldeir})` }}
          className="min-h-screen w-full relative flex flex-col items-center justify-center bg-cover bg-center px-6 py-12"
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#07073F]/70 via-[#07073F]/50 to-[#07073F]/70"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl relative z-10">
            {/* Operating times */}
            <div className="flex justify-center">
              <div className="days border border-black rounded-xl h-auto md:h-96 w-full max-w-xs flex flex-col justify-between p-6 bg-white shadow-md backdrop-blur-sm text-center">
                <p>Monday: 7am to 3pm</p>
                <p>Tuesday: 7am to 3pm</p>
                <p>Wednesday: 7am to 3pm</p>
                <p>Thursday: 7am to 3pm</p>
                <p>Friday: 7am to 3pm</p>
                <p>Saturday/Sunday: Closed</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-4 justify-center text-center md:text-left text-white">
              <p className="font-bold text-xl md:text-2xl">
                Guggisberg Juvenile International School
              </p>
              <p>📍 Sunyani Penkwase High Tension, Bono Region, Ghana</p>
              <p>📞 +233 (024) 1959 465</p>
              <p>✉️ info@guggisbergjuvenile.com</p>
            </div>

            {/* Google Map */}
            <div className="col-span-1 md:col-span-2 mt-10 w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.157306108925!2d-2.3104072259136172!3d7.336224513187563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdacf50b64adee3%3A0x690a8a0bac9ae484!2sGuggisberg%20Juveniles%20International%20School!5e0!3m2!1sen!2suk!4v1756236643595!5m2!1sen!2suk"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white w-full py-6 px-4 md:px-12 h-64 flex flex-col justify-center">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          {/* School Info */}
          <div className="text-center md:text-left">
            <h2 className="text-lg font-semibold text-gray-700">
              Guggisberg Juvenile International School
            </h2>
            <p className="mt-1 text-sm text-gray-600">Fortitued & Deligent</p>
          </div>

          {/* Address & Contact */}
          <div className="text-center md:text-right text-sm text-gray-600">
            <p>✉️ info@guggisbergjuvenile.com</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 border-t border-gray-200 pt-4 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Guggisberg Juvenile International
          School. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Home;
