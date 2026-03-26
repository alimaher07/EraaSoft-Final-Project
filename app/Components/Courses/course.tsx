import "./courses.css";
import CoursesCarts from "./CoursesCarts/coursescarts"

export default function course() {
  return (
    <>
      <div className="courses-container font-heebo">
        <div className="courses-title flex justify-center text-[#06BBCC]">
          <div className="design-line flex flex-col -my-2">
            <span className="h-2 mx-6.5">_____</span>
            <span className="h-2">_________</span>
          </div>
          <div>
            <p className="courses-container-title text-[18px] font-semibold">COURSES</p>
          </div>
          <div className="design-line flex flex-col mx-6 -my-2">
            <span className="h-2">_____</span>
            <span className="h-2">_________</span>
          </div>
        </div>
        <p className="popular-courses flex item-center justify-center text-[40px] font-semibold my-3">Popular Courses</p>
      </div>
      <CoursesCarts />
    </>
  );
}
