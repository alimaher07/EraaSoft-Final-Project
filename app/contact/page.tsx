import "./page.css"
import LocationIco from "../../public/location-pin-svgrepo-com.svg"
import TelephoneIco from "../../public/telephone-svgrepo-com.svg"
import MessageIco from "../../public/message-svgrepo-com.svg"
import Footer from "../Components/Footer/footer"
import map from "../../public/alexandria.jpg"
import Image from "next/image"

export default function contact() {
  return (
    <>
    <div className="main-image flex items-center justify-center flex-col gap-4 mb-10">
        <h1 className="text-white text-7xl">Contact</h1>
        <p className="text-white">Home / Pages / Contact</p>
    </div>
    <div className="contact-container font-heebo">
        <div className="instructors-title flex justify-center text-[#06BBCC]">
          <div className="design-line flex flex-col -my-2">
            <span className="h-2 mx-6.5">_____</span>
            <span className="h-2">_________</span>
          </div>
          <div>
            <p className="text-[18px] font-semibold">Contact Us</p>
          </div>
          <div className="design-line flex flex-col mx-6 -my-2">
            <span className="h-2">_____</span>
            <span className="h-2">_________</span>
          </div>
        </div>
        <p className="expert-ins flex item-center justify-center text-[41px] font-semibold mt-2">Contact For any Query</p>
      </div>
      <div className="contact-grid grid grid-cols-3 px-25 gap-3 mt-10">
        <div className="contact-desc">
          <h1 className="font-medium text-[20px] mb-2">Get In Touch</h1>
          <p className="descreption-text text-[#52565b] mb-5">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="" className="text-[#06BBCC]">Download Now</a></p>
          <div className="location flex gap-2 items-center justify-start mb-4">
            <Image src={LocationIco} alt="" width={50} height={40} className="bg-[#06BBCC] p-2"></Image>
            <div className="location-info">
              <h2 className="text-[#06BBCC] font-medium">Office</h2>
              <p className="text-[#52565b]">El-Khoulafa Street, Alexandria, Egypt</p>
            </div>
          </div>
          <div className="mobile flex gap-2 items-center justify-start mb-4">
            <Image src={TelephoneIco} alt="" width={50} height={40} className="bg-[#06BBCC] p-2"></Image>
            <div className="moblie-info">
              <h2 className="text-[#06BBCC] font-medium">Mobile</h2>
              <p className="text-[#52565b]">+20 127 8525 409</p>
            </div>
          </div>
          <div className="email flex gap-2 items-center justify-start">
            <Image src={MessageIco} alt="" width={50} height={40} className="bg-[#06BBCC] p-2"></Image>
            <div className="email-info">
              <h2 className="text-[#06BBCC] font-medium">Email</h2>
              <p className="text-[#52565b]">elol.aloosh@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="map flex items-center justify-center">
          <Image src={map} alt="" className="w-full h-full"></Image>
        </div>
        <div className="form-container flex flex-col gap-3">
          <div className="name-inputs flex gap-2">
            <input type="text" placeholder="Your Name" className="p-2 border border-[#52565b3d] outline-0 w-[50%]" />
            <input type="email" placeholder="Your Email" className="p-2 border border-[#52565b3d] outline-0" />
          </div>
          <input type="text" placeholder="Subject" className="p-2 border border-[#52565b3d] outline-0" />
          <textarea name="" id="" cols={30} rows={7} placeholder="Message" className="p-2 border border-[#52565b3d] outline-0"></textarea>
          <button className="bg-[#06BBCC] p-4 text-white">Send Messages</button>
        </div>
      </div>
      <Footer />
    </>
  )
}
