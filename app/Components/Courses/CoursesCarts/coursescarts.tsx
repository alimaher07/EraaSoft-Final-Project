import "./coursescarts.css"
import Image from "next/image";
import FirstCourseImage from "../../../../public/course-1.jpg";
import SecondCourseImage from "../../../../public/course-2.jpg";
import ThirdCourseImage from "../../../../public/course-3.jpg";
import Star from "../../../../public/star-svgrepo-com.svg";
import PersonIco from "../../../../public/person-svgrepo-com.svg"
import UserIco from "../../../../public/user-symbol-svgrepo-com.svg"
import TimeIco from "../../../../public/time-solid-svgrepo-com.svg"

export default function coursescarts() {

  const courses = [
    {
      price: "149.00$",
      diploma: "Web Design & Development",
      instructor: "Ahmed Saber",
      time: "2 Hrs",
      students: "28 Students",
      image: FirstCourseImage,
      rate: "145"
    },
    {
      price: "120.00$",
      diploma: "Python",
      instructor: "Khaled Omar",
      time: "1.5 Hrs",
      students: "20 Students",
      image: SecondCourseImage,
      rate: "122"
    },
    {
      price: "130.5$",
      diploma: "BackEnd",
      instructor: "Ali Maher",
      time: "2.5 Hrs",
      students: "35 Students",
      image: ThirdCourseImage,
      rate: "120"
    }
  ]

  return (
    <>
    <div className="courses-container py-12 px-30 grid grid-cols-3 gap-5 font-heebo">
    {courses.map(course => (
      <>
      <div className="courses-cart flex flex-col text-center items-center justify-center bg-[#06bbcc15] w-fit gap-3 overflow-hidden">
          <div className="course-image overflow-hidden">
            <Image src={course.image} alt="" width={350} height={300} className="  transition duration-600 hover:scale-110"></Image>
          </div>
          <div className="btns absolute bg-[#06BBCC] mb-12 text-[#FFFFFF] rounded-full divide-x-1">
            <button className="cart-button py-1 pl-2 pe-3 cursor-pointer"><a href="#">Read More</a></button>
            <button className="cart-button py-1 pl-1 pe-5 cursor-pointer"><a href="#">Join Now</a></button>
          </div>
          <div className="course-price">
            <p className="course-price text-3xl font-semibold">{course.price}</p>
          </div>
          <div className="course-rating flex gap-1">
            <Image src={Star} alt="" width={15} height={15}></Image>
            <Image src={Star} alt="" width={15} height={15}></Image>
            <Image src={Star} alt="" width={15} height={15}></Image>
            <Image src={Star} alt="" width={15} height={15}></Image>
            <Image src={Star} alt="" width={15} height={15}></Image>
            <small>({course.rate})</small>
          </div>
          <div className="course-description font-medium">
            <p className="diploma-name text-[22px]">{course.diploma}</p>
            <p className="text-[22px]">Course For Beginners</p>
          </div>
          <div className="course-details flex justify-center divide-x-1 divide-[#dee2e6] w-full border-t-1 border-[#dee2e6]">
            <div className="teacher-name flex p-2 gap-1 w-full justify-center">
              <Image src={UserIco} alt="" width={15} height={15}></Image>
              <small>{course.instructor}</small>
            </div>
            <div className="time flex p-2 gap-1 w-full justify-center">
              <Image src={TimeIco} alt="" width={15} height={15}></Image>
              <small>{course.time}</small>
            </div>
            <div className="students-number flex p-2 gap-1 w-full justify-center">
              <Image src={PersonIco} alt="" width={20} height={20}></Image>
              <small>{course.students}</small>
            </div>
          </div>
        </div>
      </>
    ))}
      
      </div>
    </>
  );
}
