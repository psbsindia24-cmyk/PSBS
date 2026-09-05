

// import React from "react";
// import { useNavigate } from "react-router-dom";

// export default function Hero() {
//   const navigate = useNavigate();
//   return (
//     <section className="bg-gradient-to-b from-neutral-950 to-neutral-900 text-white">
//       <div className="max-w-6xl mx-auto px-4 py-20 lg:py-28 text-center">
//         <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight">
//           Accelerate Transformation with <span className="text-blue-500">PSBS</span>
//         </h1>
//         <p className="mt-6 text-neutral-400 max-w-2xl mx-auto text-lg">
//           Strategy, engineering, and change—delivered with clarity and momentum.
//         </p>
//         <div className="mt-10 flex items-center justify-center gap-6">
//           <button
//             onClick={() => navigate("/services")}
//             className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition"
//           >
//             Explore Services
//           </button>
//           <button
//             onClick={() =>
//               document
//                 .getElementById("contact")
//                 .scrollIntoView({ behavior: "smooth" })
//             }
//             className="px-6 py-3 rounded-lg border border-neutral-700 text-neutral-300 hover:border-neutral-500 hover:text-white transition"
//           >
//             Contact Us
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Hero() {
  const slides = [
    {
      title: (
        <>
          Accelerate Transformation with{" "}
          <span className="text-blue-500">PSBS</span>
        </>
      ),
      description:
        "Strategy, engineering, and change—delivered with clarity and momentum.",
      img: "/images/slides1.png", // image for slide 1
    },
    {
      title: (
        <>
          Empowering Businesses with{" "}
          <span className="text-blue-500">Digital Innovation</span>
        </>
      ),
      description:
        "From strategy to execution, we help organizations harness cutting-edge technologies for sustainable growth.",
      img: "/images/slides2.jpg", // image for slide 2
    },
    {
      title: (
        <>
          Navigate Complexity with{" "}
          <span className="text-blue-500">Risk Advisory</span>
        </>
      ),
      description:
        "Our experts safeguard your business with tailored compliance solutions and proactive risk management strategies.",
      img: "/images/slides3.jpg", // image for slide 3
    },
    {
      title: (
        <>
          Driving Change through{" "}
          <span className="text-blue-500">Engineering Excellence</span>
        </>
      ),
      description:
        "We deliver scalable, future-ready solutions with precision, agility, and innovation at the core.",
      img: "/images/slides4.jpg", // image for slide 4
    },
  ];

  return (
    <section className="relative w-full">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        interval={5000}
        swipeable
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20 py-16 bg-neutral-900 text-white"
          >
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight">
                {slide.title}
              </h1>
              <p className="mt-6 text-neutral-200 max-w-xl mx-auto lg:mx-0 text-lg">
                {slide.description}
              </p>
            </div>

            {/* Image Content */}
            <div className="flex-1 mt-10 lg:mt-0 lg:ml-10">
              <img
                src={slide.img}
                alt={`Slide ${index + 1}`}
                className="w-full h-[350px] lg:h-[450px] object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
}
