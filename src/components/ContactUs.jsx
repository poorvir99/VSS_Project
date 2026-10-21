import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Header from "./Header";
import Footer from "./Footer";

const images = ["/images/Contact_page/colorful_buddha.jpg"];

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSending(true);
    setStatus("");

    const templateParams = {
      user_name:
        `${formData.firstName} ${formData.lastName}`.trim(),
      user_email: formData.email,
      user_phone: formData.phone || "Not provided",
      message: formData.message,
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div>
      <Header />

      <hr className="border-gray-500 border-t-[0.9px] w-full mx-auto opacity-30" />

      <div className="min-h-screen text-white px-4 py-8 bg-gradient-to-br from-[#2E2E2E] to-[#1E3A5F] flex flex-col items-center">

        {/* Contact Form and Image */}
        <div className="max-w-4xl w-full grid md:grid-cols-2 gap-10 bg-[#B0B0B0]/10 rounded-xl p-6 md:p-10 shadow-lg">

          {/* Left: Form */}
          <div>
            <h1 className="text-3xl font-serif mb-3 text-[#D1BFA7]">
              CONTACT US
            </h1>

            <p className="text-sm text-gray-400 mb-6">
              Any question or remarks? Just write us a message.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  aria-label="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  autoComplete="given-name"
                  required
                  className="w-1/2 min-w-0 bg-[#2D2D3F] p-3 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D1BFA7]"
                />

                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  aria-label="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  autoComplete="family-name"
                  required
                  className="w-1/2 min-w-0 bg-[#2D2D3F] p-3 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D1BFA7]"
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email"
                aria-label="Email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                required
                className="w-full bg-[#2D2D3F] p-3 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D1BFA7]"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number (Optional)"
                aria-label="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                autoComplete="tel"
                className="w-full bg-[#2D2D3F] p-3 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D1BFA7]"
              />

              <textarea
                name="message"
                placeholder="Message"
                aria-label="Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-[#2D2D3F] p-3 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D1BFA7]"
              />

              {status === "success" && (
                <p role="status" className="text-green-300 text-sm">
                  Your message has been sent successfully!
                </p>
              )}

              {status === "error" && (
                <p role="alert" className="text-red-300 text-sm">
                  Sorry, your message could not be sent. Please try again.
                </p>
              )}

              <button
                type="submit"
                disabled={isSending}
                className="w-full bg-gradient-to-r from-[#8C6A5D] to-[#D1BFA7] hover:from-[#D1BFA7] hover:to-[#8C6A5D] disabled:opacity-60 disabled:cursor-not-allowed text-white py-3 rounded-md font-semibold transition-all duration-300"
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Right: Image and Quote */}
          <div className="flex flex-col items-center justify-between text-center">
            <img
              src={images[0]}
              alt="Buddha sculpture"
              className="rounded-lg max-h-[450px] max-w-full object-contain mb-2"
            />

            <p className="text-gray-300 italic text-sm leading-relaxed">
              "Our sculptures are not lifeless – they breathe the soul
              of the gods we invoke through every chisel stroke."
              <br />
              <span className="font-semibold text-[#957a6f]">
                – S. Radhakrishnan
              </span>
            </p>
          </div>
        </div>

        {/* Office Location */}
        <div className="max-w-6xl w-full bg-[#B0B0B0]/10 rounded-xl p-6 md:p-10 shadow-lg mt-10">
          <h2 className="text-2xl font-serif text-[#D1BFA7] mb-4 text-center">
            Our Office Location
          </h2>

          <div className="w-full h-[400px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3884.2858786629176!2d74.98279181004334!3d13.207359909613139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbb57877489422b%3A0xc68a9355f928bd75!2sVIJAYA%20SHILPA%20SHALA!5e0!3m2!1sen!2sin!4v1753071853057!5m2!1sen!2sin"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vijaya Shilpa Shala Office Location"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
