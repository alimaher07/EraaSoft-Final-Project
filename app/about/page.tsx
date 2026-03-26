import "./page.css"
import HomeCarts from "../Components/HomeCarts/homeCarts"
import About from "../Components/About/about"
import Instructors from "../Components/Instructors/instructors"
import Footer from "../Components/Footer/footer"

export default function page() {
  return (
    <>
    <div className="main-image flex items-center justify-center flex-col gap-4">
        <h1 className="text-white text-7xl">About Us</h1>
        <p className="text-white">Home / Pages / About</p>
    </div>
    <HomeCarts />
    <About />
    <Instructors />
    <Footer />
    </>
  )
}
