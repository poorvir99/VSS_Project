import { useNavigate } from "react-router-dom";

const GalleryBackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="inline-flex items-center gap-2 mb-6
                 text-[#D1BFA7] hover:text-white
                 transition duration-200"
    >
      <span className="text-xl">←</span>
      <span className="text-sm tracking-wide">Back to Gallery</span>
    </button>
  );
};

export default GalleryBackButton;
