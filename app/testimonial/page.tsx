import "./page.css"
import Footer from "../Components/Footer/footer"
import Students from "../Components/Students/students"

export default function page() {
  return (
    <>
    <div className="main-image flex items-center justify-center flex-col gap-4 mb-10">
        <h1 className="text-white text-7xl">Testimonial</h1>
        <p className="text-white">Home / Pages / Testimonial</p>
    </div>
    <Students />
    <Footer />
    </>
  )
}
