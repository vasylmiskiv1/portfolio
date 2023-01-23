import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

import LineGradient from "../components/LineGradient";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_s2t7864",
        "template_ftp5lxc",
        form.current,
        "Su3SXo8NyQUREmt8K"
      )
      .then(
        (result) => {
          if(result.text.toLocaleLowerCase() === 'ok') {
            e.target.reset();
          } else {
            console.log('Something went wrong')
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="contact py-48">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="flex justify-end w-full"
      >
        <div> 
          <p className="font-semibold text-4xl">
            <span className="text-yellow">CONTACT ME</span> TO GET STARTED
          </p>
          <div className="flex md:justify-end my-5">
            <LineGradient width="w-1/2" />
          </div>
        </div>
      </motion.div>

      <div className="md:flex md:justify-between gap-16 mt-5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="basis-1/2 flex justify-center"
        >
          <img src="../assets/contact-image.jpeg" alt="contact" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="basis-1/2 mt-10 md:mt-0"
        >
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="from_name"
              className="w-full bg-navbar placeholder-opaque-black p-3 rounded-lg"
              placeholder="Name"
            />
            {/* {errors.name && (
              <p className="text-red mt-1">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max length is 100 char."}
              </p>
            )} */}
            <input
              type="email"
              name="from_email"
              placeholder="Email"
              className="w-full bg-navbar font-semibold placeholder-opaque-black p-3 mt-5 rounded-lg"
            />
            {/* {errors.email && (
              <p className="text-red mt-1">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )} */}
            <textarea
              name="message"
              placeholder="Message"
              className="w-full h-[100px] max-h-[200px] bg-navbar font-semibold placeholder-opaque-black p-3 mt-5 rounded-lg"
            />
            {/* {errors.message && (
              <p className="text-red mt-1">
                {errors.message.type === "required" &&
                  "This field is required."}
                {errors.message.type === "maxLength" &&
                  "Max length is 2000 char."}
              </p>
            )} */}
            <button
              type="submit"
              className="w-full p-5 bg-yellow text-deep-blue mt-5 rounded-lg hover:bg-dark-yellow transition duration-300"
            >Send me a message</button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
