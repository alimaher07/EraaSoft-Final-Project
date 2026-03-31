import Image from "next/image"
import ClientImageThree from "../../../../public/testimonial-3.jpg"

export default function thirdStudent() {
  return (
    <>
    <div className="client-container flex flex-col items-center justify-center text-center w-100 mx-auto">
            <div className="client-img-container border-1 rounded-full border-[#52565b52]">
                <Image src={ClientImageThree} alt="" className="rounded-full full p-2"></Image>
            </div>
            <div className="client-details my-4">
                <h2 className=" client-name font-medium text-[20px]">Jourge Mikel</h2>
                <p className=" clien-proffession text-[#52565b] text-[18px] font-medium">Profession</p>
            </div>
            <div className="client-comment bg-[#06BBCC] text-white p-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, ad ipsa harum pariatur quis odit natus impedit totam soluta ea accusantium sit, voluptate fugit repudiandae vitae enim maxime minus tempora.
            </div>
        </div>
    </>
  )
}
