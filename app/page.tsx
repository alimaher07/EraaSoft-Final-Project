import Image from "next/image";
import './page.css'
import SwiperComponent from './Components/SwiperComponent/SwiperComponent'
import HomeCarts from "./Components/HomeCarts/homeCarts"
import About from "./Components/About/about"
import Categories from "./Components/Categories/categories"
import Courses from "./Components/Courses/course"
import Instructors from "./Components/Instructors/instructors"
import Students from "./Components/Students/students"
import Footer from "./Components/Footer/footer"

export default function Home() {
  return (
    <>
    <SwiperComponent />
    <HomeCarts />
    <About />
    <Categories/>
    <Courses />
    <Instructors />
    <Students />
    <Footer />
    </>
  );
}
