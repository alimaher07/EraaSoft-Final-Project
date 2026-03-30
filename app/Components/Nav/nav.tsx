import "./nav.css"
import Image from 'next/image'
import navLogo from '../../../public/book-svgrepo-com.svg'
import ListIcon from "../../../public/picklist-type-svgrepo-com.svg"
import ExitIcon from "../../../public/wrong-delete-remove-trash-minus-cancel-close-2-svgrepo-com.svg"
import Link from 'next/link'
import { useState } from "react"

export default function nav() {


  const [ isSidebarOpen, setIsSidebarOpen] = useState(false)
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }
  return (

    // sidebar
    <nav className=" flex justify-between pl-8 font-heebo sticky top-0 shadow z-50">
      <div className="nav-logo flex flex-row items-center justify-center gap-3 text-center text-[110px]">
        <Image src={navLogo} alt='' className='w-10 h-10' />
         <h2 className=" text-[35px] text-[#06BBCC]">eLEARNING</h2>
      </div>
      <ul className="sidebar" style={{display: isSidebarOpen ? 'flex' : 'none'}}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li>
        <div className="dropdown">
             <Link href="" className=" py-5.75 text-[18px] nav-link dropDown-link">Pages</Link>
             <div className="dropDown-content">
               <Link href="/ourTeam">Our Team</Link>
               <Link href="/testimonial">Tetimonial</Link>
             </div>
        </div>
        </li>
        <li><Link href="/courses">Courses</Link></li>
      </ul>
      <ul>
        <li className="hideOnMobile"><Link href="/">Home</Link></li>
        <li className="hideOnMobile"><Link href="/about">About</Link></li>
        <li className="hideOnMobile"><Link href="/coruses">Courses</Link></li>
        <div className="nav-dropdown">
             <Link href="/" className=" py-5.75 text-[18px] nav-link dropDown-link">Pages</Link>
             <div className="dropDown-content">
               <Link href="/ourTeam">Our Team</Link>
               <Link href="/testimonial">Tetimonial</Link>
             </div>
        </div>
        <li className="hideOnMobile"><Link href="/contact">Contact</Link></li>
        <button className="hideOnMobile nav-btn bg-[#06BBCC] text-[#FFFFFF] py-5 px-16">Join Now</button>
        <li className="menu-btn"><button type="button" onClick={toggleSidebar}><Image src={ListIcon} alt="" width={50} height={50} /></button></li>
      </ul>
    </nav>
  )
}

