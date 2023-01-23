import { FaGithub } from "react-icons/fa";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
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
        <FaGithub size={32}/>
      </a>
    </div>
  );
};

export default SocialMediaIcons;
