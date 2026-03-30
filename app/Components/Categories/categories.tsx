import "./categories.css";
import CategoriesImages from "./categoriesImages/categoriesImages"

export default function categories() {
  return (
    <>
      <section className="categories-container font-heebo mt-8 ">
        <div className="categories-title flex justify-center text-[#06BBCC]">
          <div className="design-line flex flex-col -my-2">
            <span className="h-2 mx-6.5">_____</span>
            <span className="h-2">_________</span>
          </div>
          <div>
            <p className="container-title text-[18px] font-semibold">CATEGORIES</p>
          </div>
          <div className="design-line flex flex-col mx-6 -my-2">
            <span className="h-2">_____</span>
            <span className="h-2">_________</span>
          </div>
        </div>
        <p className="categories-type flex item-center justify-center text-[40px] font-semibold my-3">Courses Categories</p>
      <CategoriesImages />
      </section>
    </>
  );
}
