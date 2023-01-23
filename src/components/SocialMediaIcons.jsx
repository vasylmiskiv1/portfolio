import { FaGithub, FaFilePdf } from "react-icons/fa";
import cv from "../assets/Vasyl Miskiv.pdf";

const SocialMediaIcons = ({ isFooter = false }) => {
  return (
    <div className="flex w-full justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/vasylmiskiv/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/vasylmiskiv/"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub size={32} />
      </a>

      {!isFooter && (
        <a
          href={cv}
          download="Vasyl Miskiv.pdf"
          className="ml-auto flex align-center gap-2 text-lg items-center hover:opacity-50 transition duration-500"
        >
          <FaFilePdf size={32} />
          Download CV
        </a>
      )}
    </div>
  );
};

export default SocialMediaIcons;
