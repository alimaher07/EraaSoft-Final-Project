import "./homeCarts.css"
import blackHatGraduation from "../../../public/black-hat-graduation-svgrepo-com.svg"
import worldLogo from "../../../public/world-wide-black-symbol-svgrepo-com.svg"
import homeLogo from "../../../public/home-svgrepo-com.svg"
import bookLogo from "../../../public/book-album-svgrepo-com.svg"
import Image from "next/image"

export default function homeCarts() {
  return (
    <>
    <div className="carts grid grid-cols-4 items-center justify-center gap-[25px] py-14 px-19 font-heebo">
        <div className="home-cart w-[19svw] bg-[#06bbcc24] flex flex-col items-center justify-center text-center gap-[10px] p-6">
            <div className="cart-logo">
                <Image src={blackHatGraduation} alt="" className="w-16 h-16" />
            </div>
            <div className="cart-title">
                <h3 className="font-semibold text-[#181d38]">Skilled Instructors</h3>
            </div>
            <div className="cart-description">
                <p className="text-[#52565b]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, officia!</p>
            </div>
        </div>
        <div className="home-cart w-[19svw] bg-[#06bbcc24] flex flex-col items-center justify-center text-center gap-[10px] p-6">
            <div className="cart-logo">
                <Image src={worldLogo} alt="" className="w-16 h-16" />
            </div>
            <div className="cart-title">
                <h3 className="font-semibold text-[#181d38]">Skilled Instructors</h3>
            </div>
            <div className="cart-description">
                <p className="text-[#52565b]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, cupiditate.</p>
            </div>
        </div>
        <div className="home-cart w-[19svw] bg-[#06bbcc24] flex flex-col items-center justify-center text-center gap-[10px] p-6">
            <div className="cart-logo">
                <Image src={homeLogo} alt="" className="w-16 h-16" />
            </div>
            <div className="cart-title">
                <h3 className="font-semibold text-[#181d38]">Skilled Instructors</h3>
            </div>
            <div className="cart-description">
                <p className="text-[#52565b]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, voluptatum!</p>
            </div>
        </div>
        <div className="home-cart w-[19svw] bg-[#06bbcc24] flex flex-col items-center justify-center text-center gap-[10px] p-6">
            <div className="cart-logo">
                <Image src={bookLogo} alt="" className="w-16 h-16" />
            </div>
            <div className="cart-title">
                <h3 className="font-semibold text-[#181d38]">Skilled Instructors</h3>
            </div>
            <div className="cart-description">
                <p className="text-[#52565b]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, perferendis?</p>
            </div>
        </div>
        
    </div>
    </>
  )
}
