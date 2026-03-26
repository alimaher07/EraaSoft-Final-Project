import "./page.css"
import CoursesCategories from "../Components/Categories/categories"
import Courses from "../Components/Courses/course"
import Students from "../Components/Students/students"
import Footer from "../Components/Footer/footer"

export default function courses() {
  return (
    <>
    <div className="main-image flex items-center justify-center flex-col gap-4 mb-10">
        <h1 className="text-white text-7xl">Courses</h1>
        <p className="text-white">Home / Pages / Courses</p>
    </div>
    <CoursesCategories />
    <Courses />
    <Students />
    <Footer />
    </>
  )
}
