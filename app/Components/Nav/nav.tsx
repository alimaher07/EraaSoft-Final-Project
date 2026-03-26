import "./nav.css"
import Image from 'next/image'
import navLogo from '../../../public/book-svgrepo-com.svg'
import ListIcon from "../../../public/picklist-type-svgrepo-com.svg"
import Link from 'next/link'

export default function nav() {
  return (
    <nav className="flex items-center bg-white justify-between h-18 shadow-xl px-5 sticky top-0 z-50 font-heebo">
        <div className="nav-logo flex flex-row items-center justify-center gap-3 text-center text-[110px]">
          <Image src={navLogo} alt='' className='w-10 h-10' />
          <h2 className=" text-[35px] text-[#06BBCC]">eLEARNING</h2>
        </div>
        <div className="links-container flex items-center justify-between gap-7">
          <div className="nav-links flex items-center gap-4 px-5 py-6">
            <Link href="/" className=" py-5.75 text-[18px] nav-link">Home</Link>
            <Link href="/about" className=" py-5.75 text-[18px] nav-link">About</Link>
            <Link href="/courses" className=" py-5.75 text-[18px] nav-link">Courses</Link>
            <div className="dropdown">
              <Link href="/" className=" py-5.75 text-[18px] nav-link dropDown-link">Pages</Link>
              <div className="dropDown-content">
                <a href="/ourTeam">Our Team</a>
                <a href="/testimonial">Tetimonial</a>
              </div>
            </div>
            <Link href="/contact" className="text-[18px] nav-link">Contact</Link>
          </div>
            <a href="/" className="nav-btn bg-[#06BBCC] py-6 px-15 -m-5 text-[#FFFFFF] cursor-pointer">Join now</a>
        </div>
            <Image src={ListIcon} alt="" width={35} className=" list-icon" />
      </nav>
    
  )
}
