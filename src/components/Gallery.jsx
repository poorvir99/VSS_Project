import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import galleryData from "../data/galleryData";


const Gallery = () => {
  return (
    <>
      <Header />
       <hr className="border-gray-500 border-t-[0.9px] w-full mx-auto opacity-30" />
      <section className="bg-gradient-to-br from-[#2E2E2E] to-[#1E3A5F] min-h-screen px-6 py-20">
        <h1 className="text-4xl font-serif text-[#D1BFA7] text-center mb-16">
          Gallery
        </h1>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {Object.entries(galleryData).map(([key, item]) => (
            <Link
              key={key}
              to={`/gallery/${key}`}
              className="group rounded-2xl overflow-hidden shadow-lg bg-black/30 hover:scale-[1.03] transition"
            >
              <img
                src={item.images[0]}
                alt={item.title}
                 className="h-[260px] w-full object-cover"
                 
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-[#D1BFA7]">
                  {item.title}
                </h2>
                <p className="text-sm text-gray-300 mt-1">
                  View Collection →
                </p>
              </div>
              
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Gallery;
