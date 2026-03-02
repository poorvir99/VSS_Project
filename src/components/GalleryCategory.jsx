import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import galleryData from "../data/galleryData";
import GalleryBackButton from "./GalleryBackButton";

const GalleryCategory = () => {
  const { category } = useParams();
  const data = galleryData[category];

  if (!data) {
    return <p className="text-center text-white">Category not found</p>;
  }

  return (
    <>
      <Header />
       <hr className="border-gray-500 border-t-[0.9px] w-full mx-auto opacity-30" />


      <section className="bg-gradient-to-br from-[#2E2E2E] to-[#1E3A5F] min-h-screen px-6 py-20">
        <h1 className="text-4xl font-serif text-[#D1BFA7] text-center mb-16">
          {data.title}
        </h1>

        {/* <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {data.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={data.title}
              className="rounded-xl h-[280px] w-full object-cover shadow-lg hover:scale-[1.02] transition"
            />
          ))}
        </div> */}
      <GalleryBackButton/>

        <div className="columns-1 sm:columns-2 md:columns-3 gap-6">
  {data.images.map((img, i) => (
    <img
      key={i}
      src={img}
      alt=""
      className="mb-6 rounded-xl w-full"
    />
  ))}
</div>

      </section>
  



      <Footer />
    </>
  );
};

export default GalleryCategory;

