import Image from "next/image"
import ClientImageOne from "../../../../public/testimonial-1.jpg"
import "./firstStudents.css"

export default function firstStudent() {
  return (
    <>
        <div className="client-container flex flex-col items-center justify-center text-center w-100 mx-auto">
            <div className="client-img-container border-1 rounded-full border-[#52565b52]">
                <Image src={ClientImageOne} alt="" className="rounded-full full p-2"></Image>
            </div>
            <div className="client-details my-4">
                <h2 className=" client-name font-medium text-[20px]">Client Name</h2>
                <p className=" clien-proffession text-[#52565b] text-[18px] font-medium">Profession</p>
            </div>
            <div className="client-comment bg-[#06BBCC] text-white p-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, ad ipsa harum pariatur quis odit natus impedit totam soluta ea accusantium sit, voluptate fugit repudiandae vitae enim maxime minus tempora.
            </div>
        </div>
    </>
  )
}
