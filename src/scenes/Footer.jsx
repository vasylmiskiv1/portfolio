import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-64 bg-red pt-10">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons isFooter={true}/>
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-semibold text-2xl text-yellow cursor-default">
            VASYL MISKIV
          </p>
          <p className="text-md text-yellow cursor-default">
            {`© ${new Date().getFullYear()} VASYL MISKIV. All Rights Reserved.`}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
