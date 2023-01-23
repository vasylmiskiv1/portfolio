import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1] before:rounded-lg"
            >
              <img
                alt="skills"
                className="z-10 rounded-lg"
                src="assets/skills-image.png"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/skills-image.png" />
          )}
        </div>
      </div>

      <div className="md:flex md:justify-between mt-16 gap-32">
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -30 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-48">
            <img
              className="w-full h-48 object-cover absolute right-0 top-0 z-[-1] rounded-sm before:absolute before:-top-0 before:-left-0 before:w-full before:h-full before:border-2 before:border-blue"
              src="assets/frontend.jpg"
              alt="frontend"
            />
            <div className="absolute w-full h-48 bg-deep-blue-opacity-70">
              <div className="z-10 p-5">
                <p className="font-semibold text-5xl">01</p>
                <p className="font-semibold text-3xl mt-3">Front-end</p>
              </div>
            </div>
          </div>
          <p className="mt-10 text-2xl">
            HTML, CSS, React, Redux, Redux-thunk, Apollo GraphQL Client
          </p>
        </motion.div>

        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -30 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-48">
            <img
              className="w-full object-cover h-48 absolute right-0 top-0 z-[-1] rounded-sm"
              src="assets/backend.jpg"
              alt="backend"
            />
            <div className="absolute w-full h-48 bg-deep-blue-opacity-50">
              <div className="z-10 p-5">
                <p className="font-semibold text-5xl">02</p>
                <p className="font-semibold text-3xl mt-3">Back-end</p>
              </div>
            </div>
          </div>
          <p className="mt-10 text-2xl">
            Node.js, Express.js, Nest.js, MongoDB, PostreSQL
          </p>
        </motion.div>
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -30 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-48">
            <img
              className="w-full object-cover h-48 bg-yellow absolute right-0 top-0 z-[-1]"
              src="assets/tools.jpg"
              alt="tools"
            />
            <div className="absolute w-full h-48 bg-deep-blue-opacity-70">
              <div className="z-10 p-5">
                <p className="font-semibold text-5xl">03</p>
                <p className="font-semibold text-3xl mt-3">Dev Tools</p>
              </div>
            </div>
          </div>
          <p className="mt-10 text-2xl">Postman, GIT</p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
