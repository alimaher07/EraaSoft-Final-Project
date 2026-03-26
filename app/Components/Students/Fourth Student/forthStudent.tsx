import Image from "next/image"
import "./fourthStudent.css"
import ClientImageFour from "../../../../public/testimonial-4.jpg"

export default function forthStudent() {
  return (
    <>
    <div className="client-container flex flex-col items-center justify-center text-center w-100 mx-auto">
            <div className="client-img-container border-1 rounded-full border-[#52565b52]">
                <Image src={ClientImageFour} alt="" className="rounded-full w-[5svw] p-2"></Image>
            </div>
            <div className="client-details my-4">
                <h2 className=" client-name font-medium text-[20px]">Client Name</h2>
                <p className=" client-proffession text-[#52565b] text-[18px] font-medium">Profession</p>
            </div>
            <div className="client-comment bg-[#06BBCC] text-white p-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, ad ipsa harum pariatur quis odit natus impedit totam soluta ea accusantium sit, voluptate fugit repudiandae vitae enim maxime minus tempora.
            </div>
        </div>
    </>
  )
}
