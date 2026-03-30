import "./categoriesImages.css"
import ImageOne from "../../../../public/cat-1.jpg";
import ImageTwo from "../../../../public/cat-2.jpg";
import ImageThree from "../../../../public/cat-3.jpg";
import ImageFour from "../../../../public/cat-4.jpg";
import Image from "next/image";

export default function categoriesImages() {
  return (
    <>
      <div className="images-container w-[70%] flex flex-row gap-5 mx-auto items-center justify-center font-heebo">
        <div className="flex-container flex flex-col gap-5">
          <div className="flex-image relative overflow-hidden">
            <Image src={ImageOne} alt="" className=" group-image image w-full transition duration-600 hover:scale-110"></Image>
            <div className="course-details absolute bottom-0 right-0 bg-[#FFFFFF] m-1 p-2 flex flex-col items-center text-center">
              <h3 className="font-semibold text-[20px]">Web Design</h3>
              <p className="text-[#06BBCC] text-[15px]">49 Courses</p>
            </div>
          </div>
          <div className="grid-image grid grid-cols-2 gap-5">
            <div className="position-image relative overflow-hidden">
              <Image src={ImageTwo} alt="" className="image w-full transition duration-600 hover:scale-110"></Image>
              <div className="course-details absolute bottom-0 right-0 bg-[#FFFFFF] m-1 p-2 flex flex-col items-center text-center">
                <h3 className="font-semibold text-[20px]">Graphic Design</h3>
                <p className="text-[#06BBCC] text-[15px]">49 Courses</p>
              </div>
            </div>
            <div className="position-image relative overflow-hidden">
              <Image src={ImageThree} alt="" className="image w-full transition duration-600 hover:scale-110"></Image>
              <div className="course-details absolute bottom-0 right-0 bg-[#FFFFFF] m-1 p-2 flex flex-col items-center text-center">
                <h3 className="font-semibold text-[20px]">Vedio Editing</h3>
                <p className="text-[#06BBCC] text-[15px]">49 Courses</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-long-image w-[65%] h-[70svh] relative overflow-hidden">
          <Image src={ImageFour} alt="" className="long-image h-full w-full transition duration-600 hover:scale-110"></Image>
          <div className="course-details absolute bottom-0 right-0 bg-[#FFFFFF] m-1 p-2 flex flex-col items-center text-center">
            <h3 className="font-semibold text-[20px]">Online Marketing</h3>
            <p className="text-[#06BBCC] text-[15px]">49 Courses</p>
          </div>
        </div>
      </div>
    </>
  );
}
