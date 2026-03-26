import "./instructors.css"
import TeamOneImage from "../../../public/team-1.jpg"
import TeamTwoImage from "../../../public/team-2.jpg"
import TeamThreeImage from "../../../public/team-3.jpg"
import TeamFourImage from "../../../public/team-4.jpg"
import FacebookIco from "../../../public/facebook-svgrepo-com.svg"
import InstagramIco from "../../../public/instagram-svgrepo-com.svg"
import twitterIco from "../../../public/twitter-svgrepo-com.svg"
import Image from "next/image";

export default function instructors() {

    const instructors = [
        {
            name: "Ahmed Saber",
            designation: "FrontEnd",
            image: TeamOneImage
        },
        {
            name: "Ali El-sisi",
            designation: "FrontEnd",
            image: TeamThreeImage
        },
        {
            name: "El Zero",
            designation: "Python",
            image: TeamThreeImage
        },
        {
            name: "Ali Maher",
            designation: "BackEnd",
            image: TeamOneImage
        }
    ]

  return (
    <>
      <div className="instructors-container font-heebo">
        <div className="instructors-title flex justify-center text-[#06BBCC]">
          <div className="design-line flex flex-col -my-2">
            <span className="h-2 mx-6.5">_____</span>
            <span className="h-2">_________</span>
          </div>
          <div>
            <p className="instructors-container-title text-[18px] font-semibold">INSTRUCTORS</p>
          </div>
          <div className="design-line flex flex-col mx-6 -my-2">
            <span className="h-2">_____</span>
            <span className="h-2">_________</span>
          </div>
        </div>
        <p className="expert-ins flex item-center justify-center text-[41px] font-semibold mt-2">Expert Instructors</p>
        <div className="instructors-carts my-10 mx-30 grid grid-cols-4">
            {instructors.map(instructor => (
                <>
                <div className="instructor-cart bg-[#06bbcc15] w-fit flex flex-col items-center justify-center">
                <div className="instructor-img flex items-center justify-center flex-col">
                    <div className="instructor-image overflow-hidden">
                        <Image src={instructor.image} alt="" width={250} className=" transition ease-in-out duration-600 hover:scale-110"></Image>
                    </div>
                    <div className="instructor-social flex items-center justify-center gap-2 w-fit p-2 relative -top-7 bg-[#F0FBFC]">
                        <Image src={FacebookIco} alt="" width={30}></Image>
                        <Image src={twitterIco} alt="" width={30}></Image>
                        <Image src={InstagramIco} alt="" width={30}></Image>
                    </div>
                </div>
                <div className="instructor-inform text-center flex flex-col items-center justify-center">
                    <div className="instructor-details pb-8 -m-3">
                        <p className="instructor-name text-[20px] font-medium">{instructor.name}</p>
                        <small className="instructor-designation text-[#52565b]">{instructor.designation}</small>
                    </div>
                </div>
            </div>
                </>
            ))}
        </div>
      </div>
    </>
  );
}
