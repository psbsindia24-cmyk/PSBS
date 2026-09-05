// import React from 'react';

// export default function TestimonialCard({ name, role, company, message }) {
//   return (
//     <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-5">
//       <p className="text-neutral-300">“{message}”</p>
//       <div className="mt-3 text-sm text-neutral-400">{name} • {role} {company ? `@ ${company}` : ''}</div>
//     </div>
//   );
// }

// import React from "react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// const testimonials = [
//   {
//     name: "Anila Aggarwal",
//     role: "CEO, TechNova",
//     image: "/images/client1.jpg",
//     feedback:
//       "PSBS has been a true partner in our transformation journey. Their expertise and dedication helped us achieve goals faster than expected.",
//   },
//   {
//     name: "Satya Dev Sharma",
//     role: "Founder, FinEdge",
//     image: "/images/client2.jpg",
//     feedback:
//       "The services provided by PSBS are outstanding. Their team is innovative, reliable, and always delivers on time.",
//   },
//   {
//     name: "Monika",
//     role: "Manager, GlobalCorp",
//     image: "/images/client3.jpg",
//     feedback:
//       "We’ve seen significant improvements in efficiency since working with PSBS. Highly recommended for any growing business.",
//   },
// ];

// export default function Testimonials() {
//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="max-w-6xl mx-auto text-center px-6">
//         <h2 className="text-3xl lg:text-4xl font-extrabold mb-10 text-gray-800">
//           What Our Clients Say
//         </h2>

//         <Carousel
//           autoPlay
//           infiniteLoop
//           showThumbs={false}
//           showStatus={false}
//           interval={4000}
//           transitionTime={600}
//         >
//           {testimonials.map((testimonial, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center max-w-3xl mx-auto"
//             >
//               <img
//                 src={testimonial.image}
//                 alt={testimonial.name}
//                 className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-[#2AB5C2]"
//               />
//               <p className="text-gray-600 italic mb-4">“{testimonial.feedback}”</p>
//               <h4 className="text-lg font-semibold text-gray-900">
//                 {testimonial.name}
//               </h4>
//               <p className="text-sm text-gray-500">{testimonial.role}</p>
//             </div>
//           ))}
//         </Carousel>
//       </div>
//     </section>
//   );
// }

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const testimonials = [
  {
    name: "Anila Aggarwal",
    role: "CEO, TechNova",
    image: "/images/client1.jpg",
    feedback:
      "PSBS has been a true partner in our transformation journey. Their expertise and dedication helped us achieve goals faster than expected.",
  },
  {
    name: "Satya Dev Sharma",
    role: "Founder, FinEdge",
    image: "/images/client2.jpg",
    feedback:
      "The services provided by PSBS are outstanding. Their team is innovative, reliable, and always delivers on time.",
  },
  {
    name: "Monika",
    role: "Manager, GlobalCorp",
    image: "/images/client3.jpg",
    feedback:
      "We've seen significant improvements in efficiency since working with PSBS. Highly recommended for any growing business.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-3xl lg:text-4xl font-extrabold mb-10 text-gray-800">
          What Our Clients Say
        </h2>

        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={4000}
          transitionTime={600}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col text-center max-w-3xl mx-auto"
              style={{ minHeight: "260px" }}
            >
              {/* Quote — flex-1 makes it grow and push the footer to the bottom */}
              <p className="text-gray-600 italic mb-6 flex-1">
                "{testimonial.feedback}"
              </p>

              {/* Footer: avatar + name/role pinned to bottom via mt-auto */}
              <div className="flex items-center justify-center gap-3 mt-auto">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#2AB5C2] flex-shrink-0"
                />
                <div className="text-left">
                  <h4 className="text-base font-semibold text-gray-900 leading-tight">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500 leading-tight">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}