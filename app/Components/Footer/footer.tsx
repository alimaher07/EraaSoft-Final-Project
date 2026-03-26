import "./footer.css";
import LocationIco from "../../../public/location-pin-svgrepo-com.svg";
import TelephoneIco from "../../../public/telephone-svgrepo-com.svg";
import MessageIco from "../../../public/message-svgrepo-com.svg";
import FacebookIco from "../../../public/facebook-svgrepo-com (1).svg";
import TwitterIco from "../../../public/twitter-svgrepo-com (1).svg";
import YoutubeIco from "../../../public/youtube-svgrepo-com.svg";
import LinkedIn from "../../../public/linkedin-linked-in-svgrepo-com.svg";
import GelleryImageOne from "../../../public/course-1.jpg";
import GelleryImageTwo from "../../../public/course-2.jpg";
import GelleryImageThree from "../../../public/course-3.jpg";
import Image from "next/image";

export default function footer() {
  return (
    <>
      <footer className="bg-[#181d38] divide-y-1 divide-[#52565b] mt-10 font-heebo">
        <div className="footer-grid grid grid-cols-4 gap-6 text-[white] mt-20 px-25 py-15 pt-8">
          <div className="web-links flex flex-col gap-2">
            <h2 className="text-[25px] font-medium">Quick Link</h2>
            <a href="/about">About Us</a>
            <a href="/contact">Contact Us</a>
            <a href="/">Privacy Policy</a>
            <a href="/">Terms & Condition</a>
            <a href="/">FAQs & Help</a>
          </div>
          <div className="nav-contact flex flex-col gap-2">
            <h2 className="text-[25px] font-medium">Contact</h2>
            <div className="location flex gap-2 items-center">
              <Image src={LocationIco} alt="" height={15} width={15}></Image>
              <p>17 El-Khoulafa Street, Alexandria, Egypt</p>
            </div>
            <div className="number flex gap-2">
              <Image src={TelephoneIco} alt="" height={15} width={15}></Image>
              <p>+20 127 8525 409</p>
            </div>
            <div className="number flex gap-2">
              <Image src={MessageIco} alt="" height={15} width={15}></Image>
              <p>elol.aloosh@gmail.com</p>
            </div>
            <div className="social-links flex gap-2 mt-2">
              <Image
                src={TwitterIco}
                alt=""
                width={30}
                className="icon"
              ></Image>
              <Image
                src={FacebookIco}
                alt=""
                width={30}
                className="icon"
              ></Image>
              <Image
                src={YoutubeIco}
                alt=""
                width={30}
                className="icon"
              ></Image>
              <Image src={LinkedIn} alt="" width={30} className="icon"></Image>
            </div>
          </div>
          <div className="gallery">
            <h2 className="text-[25px] font-medium mb-5">Gallery</h2>
            <div className="gallery-imgs grid grid-cols-3 gap-2">
              <Image
                src={GelleryImageOne}
                alt=""
                className="bg-white p-1"
              ></Image>
              <Image
                src={GelleryImageThree}
                alt=""
                className="bg-white p-1"
              ></Image>
              <Image
                src={GelleryImageTwo}
                alt=""
                className="bg-white p-1"
              ></Image>
              <Image
                src={GelleryImageThree}
                alt=""
                className="bg-white p-1"
              ></Image>
              <Image
                src={GelleryImageTwo}
                alt=""
                className="bg-white p-1"
              ></Image>
              <Image
                src={GelleryImageOne}
                alt=""
                className="bg-white p-1"
              ></Image>
            </div>
          </div>
          <div className="newletter flex flex-col gap-2">
            <h2 className="text-[25px] font-medium">Newletter</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              est.
            </p>
            <div className="newsletter-input flex justify-between items-center bg-white p-2">
              <input
                type="email"
                placeholder="Your Email"
                className=" outline-0 text-black p-3 w-[60%]"
              />
              <button className="bg-[#06BBCC] px-3 py-2">SignUp</button>
            </div>
          </div>
        </div>
        <div className="copyright w-full grid grid-cols-2 text-white px-25 py-7">
          <div className="footer-text">
            <p>
              <span>eLEARNING</span>, All Right Reserved. Designed by{" "}
              <span>Ali Maher</span>
            </p>
          </div>
          <div className="footer-bottom-links divide-x-1 divide-[#52565b] text-center p-2">
            <a href="/" className="pe-2">
              Home
            </a>
            <a href="/" className="pe-2">
              Cookies
            </a>
            <a href="/" className="pe-2">
              Help
            </a>
            <a href="/" className="pe-2">
              FAQs
            </a>
          </div>
          <div className="distributed">
            Distributed By ErraSoft
          </div>
        </div>
      </footer>
    </>
  );
}
