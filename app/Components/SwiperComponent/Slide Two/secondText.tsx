import "./secondText.css"

export default function main() {
  return (
    <main className="second-slider w-full h-[80svh] flex items-start justify-center flex-col font-heebo">
      <div className="main-text w-[60%] text-base/8 flex flex-col justify-between items-start">
        <h1 className="slide-title text-[#06BBCC] text-2xl font-bold">Best Online Courses</h1>
        <p className=' big-text text-6xl text-[#FFFFFF] my-3 font-bold'>The Best Online</p>
        <p className=' big-text text-6xl text-[#FFFFFF] my-3 font-bold'>Learning Platform</p>
        <p className="slide-description text-2xl text-[#FFFFFF] my-3 font-medium">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente laborum temporibus, aliquid blanditiis iusto </p>
      </div>
      <div className="main-btns flex gap-4 my-4">
        <button className="right-move-btn bg-[#06BBCC] py-4 px-8 text-[#FFFFFF] cursor-pointer">Read More</button>
        <button className="left-move-btn bg-[#FFFFFF] py-4 px-8 text-[#FFFFFF] cursor-pointer text-[black]">Join Now</button>
      </div>
    </main>
  )
}
