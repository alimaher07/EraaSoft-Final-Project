import "./firstText.css"

export default function main() {
  return (
    <main className="first-slider w-full min-h-screen flex items-start justify-center flex-col font-heebo">
      <div className="main-text w-[50%] text-base/8">
        <h1 className="slide-title text-[#06BBCC] text-2xl font-bold">Best Online Courses</h1>
        <p className='big-text text-5xl text-[#FFFFFF] my-3 font-bold'>Get Educated Online From Your Home</p>
        <p className="slide-description text-[#FFFFFF] my-3 font-semibold">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente laborum temporibus, aliquid blanditiis iusto </p>
      </div>
      <div className="main-btns flex gap-4 my-4">
        <button className="right-move-btn bg-[#06BBCC] py-4 px-8 text-[#FFFFFF] cursor-pointer">Read More</button>
        <button className="left-move-btn bg-[#FFFFFF] py-4 px-8 text-[#FFFFFF] cursor-pointer text-[black]">Join Now</button>
      </div>
    </main>
  )
}
