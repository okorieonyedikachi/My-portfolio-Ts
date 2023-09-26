import Github from "../assets/github.png";
import IG from "../assets/instagram.svg";
import LinkedIn from "../assets/linkedin.png";
import Twitter from "../assets/twitter.svg";
import Arrow from "../assets/arrow-up-2826.svg"
const Footer = () => {
  return (
    <div className="pt-4">
      <hr />
      <div className="flex justify-between items-center  h-24">
        <section className=" bg-rd-600 max-sm">
          <p className="ml-4 text-lg font-semibold">Dannie.</p>
        </section>
        <section className="m-auto w-1/5 ">
          <div className=" h-6 flex items-center gap-6">
            <a href="https://github.com/okorieonyedikachi" target="blank" className="h-full w-fit" ><img src={Github} alt="github" className="h-full w-6 " /></a>
            <a href="https://www.instagram.com/_rav33n/" target="blank"  className="h-full w-6" ><img src={IG} alt="" className="h-full" /></a>
            <a href="http://www.linkedin.com/in/onyedikachi-okorie" target="blank"  className="h-full w-6" ><img src={LinkedIn} alt="" className="h-full" /></a>
            <a href="https://twitter.com/chairo_no_me?s=21&t=pw2PBzI69rFvp6b5LNormg"  className="h-full w-6" target="blank" ><img src={Twitter} alt="" className="h-full" /></a>
          </div>
        </section>
        <a href="#" className="h-12 ">
          <img src={Arrow} alt="" className="h-full"/>
        </a>
      </div>
    </div>
  );
};

export default Footer;


