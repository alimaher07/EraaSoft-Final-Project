import "./page.css"
import Instructors from "../Components/Instructors/instructors"
import Footer from "../Components/Footer/footer"

export default function ourteam() {
  return (
    <>
    <div className="main-image flex items-center justify-center flex-col gap-4 mb-10">
        <h1 className="text-white text-7xl">Our Team</h1>
        <p className="text-white">Home / Pages / Team</p>
    </div>
    <Instructors />
    <Footer />
    </>
  )
}
