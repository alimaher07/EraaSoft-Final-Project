import "./students.css"
import StudentsSwipper from "./SwiperStudents"

export default function students() {
  return (
    <div className="students-container font-heebo">
        <div className="students-title flex justify-center text-[#06BBCC]">
          <div className="design-line flex flex-col -my-2">
            <span className="h-2 mx-6.5">_____</span>
            <span className="h-2">_________</span>
          </div>
          <div>
            <p className="testimonial-title text-[18px] font-semibold">TETIMONIAL</p>
          </div>
          <div className="design-line flex flex-col mx-6 -my-2">
            <span className="h-2">_____</span>
            <span className="h-2">_________</span>
          </div>
        </div>
        <p className="students-slider-title flex item-center justify-center text-[41px] font-semibold mb-5 mt-2">Our Students Say</p>
        <StudentsSwipper />
    </div>
  )
}
