import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import frontend from "../assets/frontend.jpg";
import backend from "../assets/backend.jpg";
import tools from "../assets/tools.jpg";

const MySkills = () => {
  return (
    <section id="skills" className="pt-10 pb-24">
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <p className="font-semibold text-4xl mb-5">
          MY <span className="text-red">SKILLS</span>
        </p>
        <LineGradient width="w-1/3" />
      </div>

      <div className="md:flex md:justify-between mt-16 gap-32">
        <div className="relative w-1/3 h-48">
          <img
            className="w-full h-48 object-cover absolute right-0 top-0 z-[-1] rounded-sm before:absolute before:-top-0 before:-left-0 before:w-full before:h-full before:border-2 before:border-blue"
            src={frontend}
            alt="frontend"
          />
          <div className="absolute w-full h-48 bg-deep-blue-opacity-70">
            <div className="z-10 p-5">
              <p className="font-semibold text-5xl">01</p>
              <p className="font-semibold text-3xl mt-3">Front-end</p>
            </div>
          </div>
          <p className="mt-10 text-2xl">
            HTML, CSS, React, Redux, Redux-thunk, Apollo GraphQL Client
          </p>
        </div>

        <div className="w-1/3 relative h-48">
          <img
            className="w-full object-cover h-48 absolute right-0 top-0 z-[-1] rounded-sm"
            src={backend}
            alt="backend"
          />
          <div className="absolute w-full h-48 bg-deep-blue-opacity-50">
            <div className="z-10 p-5">
              <p className="font-semibold text-5xl">02</p>
              <p className="font-semibold text-3xl mt-3">Back-end</p>
            </div>
            <p className=" text-2xl">
            Node.js, Express.js, Nest.js, MongoDB, PostreSQL
          </p>
          </div>
        </div>

        <div className="w-1/3 relative h-48">
          <img
            className="w-full object-cover h-48 bg-yellow absolute right-0 top-0 z-[-1]"
            src={tools}
            alt="tools"
          />
          <div className="absolute w-full h-48 bg-deep-blue-opacity-70">
            <div className="z-10 p-5">
              <p className="font-semibold text-5xl">03</p>
              <p className="font-semibold text-3xl mt-3">Dev Tools</p>
            </div>
          </div>
          <p className="mt-10 text-2xl">Postman, GIT</p>
        </div>
      </div>
    </section>
  );
};

export default MySkills;
