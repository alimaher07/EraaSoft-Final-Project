import "./about.css"
import Image from 'next/image'
import aboutImage from "../../../public/about.jpg"
import arrow from "../../../public/arrow-narrow-right-svgrepo-com.svg"

export default function about() {
  return (
    <>
    <div className="about-container font-heebo flex flex-row gap-[50px] py-3 px-30">
        <div className="about-image w-full">
            <Image src={aboutImage} alt='' className='w-full h-full'></Image>
        </div>
        <div className="about-description-title w-full m-auto flex flex-col gap-4">
            <div className="about-title flex">
                <h2 className='container-title text-[#06BBCC] font-bold text-[18px]'>ABOUT US</h2>
                <div className="design-line flex flex-col gap-0 -my-2.5 mx-4">
                    <span className='h-2 text-[#06BBCC]'>____</span>
                    <span className='h-2 text-[#06BBCC]'>_______</span>
                </div>
            </div>
            <h2 className='about-title text-4xl font-semibold'>Welcome to eLEARNING</h2>
            <p className='about-desc text-[#52565b]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis neque a fugit deserunt dolorum consequuntur voluptatibus minus.</p>
            <p className='about-desc text-[#52565b]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ab minima, incidunt ipsum vero voluptatibus quisquam atque earum. Placeat sint eligendi tenetur. Inventore, eius voluptatum perferendis sint ipsam excepturi fugiat!</p>
            <div className="about-advantages grid grid-flow-col grid-rows-3 gap-4">
                <div className="about-skill flex gap-2 text-[#52565b]">
                    <Image src={arrow} alt='' className='w-6 h-6'></Image>
                    <span >Skilled Instructors</span>
                </div>
                <div className="about-skill flex gap-2 text-[#52565b]">
                    <Image src={arrow} alt='' className='w-6 h-6'></Image>
                    <span>International Certificate</span>
                </div>
                <div className="about-skill flex gap-2 text-[#52565b]">
                    <Image src={arrow} alt='' className='w-6 h-6'></Image>
                    <span>Online Classes</span>
                </div>
                <div className="about-skill flex gap-2 text-[#52565b]">
                    <Image src={arrow} alt='' className='w-6 h-6'></Image>
                    <span>Online Classes</span>
                </div>
                <div className="about-skill flex gap-2 text-[#52565b]">
                    <Image src={arrow} alt='' className='w-6 h-6'></Image>
                    <span>Skilled Instructors</span>
                </div>
                <div className="about-skill flex gap-2 text-[#52565b]">
                    <Image src={arrow} alt='' className='w-6 h-6'></Image>
                    <span>International Certificate</span>
                </div>
            </div>
            <button className="about-btn bg-[#06BBCC] w-[15svw] my-6 py-4 px-8 text-[#FFFFFF] cursor-pointer">Read More</button>
        </div>
    </div>
    </>
  )
}
