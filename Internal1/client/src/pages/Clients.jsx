// Clients.jsx
import React, { useEffect, useState } from "react";
import api from "../api/axios";

export default function Clients() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    api
      .get("/api/clients")
      .then((res) => setClients(res.data))
      .catch((err) => console.error("Error fetching clients:", err));
  }, []);

  // Default logos (used if API doesn’t return any)
  const defaultClients = [
    { _id: 1, name: "InterGlobe", logo: "/logos/interglobe.png" },
    { _id: 2, name: "Oxford University Press", logo: "/logos/oxford.png" },
    { _id: 3, name: "Mmacpay", logo: "/logos/mmacpay.png" },
    { _id: 4, name: "Fybros", logo: "/logos/fybros.png" },
    { _id: 5, name: "Relaxo", logo: "/logos/relaxo.png" },
    { _id: 6, name: "IKIO", logo: "/logos/ikio.png" },
    { _id: 7, name: "SPMCIL", logo: "/logos/spmcil.png" },
    { _id: 8, name: "TASC", logo: "/logos/tasc.png" },
    { _id: 9, name: "China Club", logo: "/logos/chinaclub.png" },
    { _id: 10, name: "Bata", logo: "/logos/bata.png" },
    { _id: 11, name: "TCL", logo: "/logos/tcl.png" },
    { _id: 12, name: "Gawar", logo: "/logos/gawar.png" },
    { _id: 13, name: "Aqualite", logo: "/logos/aqualite.png" },
    { _id: 14, name: "SKH", logo: "/logos/skh.png" },
    { _id: 15, name: "Avi-Oil", logo: "/logos/avioil.png" },
    { _id: 16, name: "AffinityX", logo: "/logos/affinityx.png" },
    { _id: 17, name: "Zingbus", logo: "/logos/zingbus.png" },
    { _id: 18, name: "RACL", logo: "/logos/racl.png" },
    { _id: 19, name: "Rakesh", logo: "/logos/rakesh.png" },
  ];

  const displayClients = clients.length > 0 ? clients : defaultClients;

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center text-white">
        Our Clients 
      </h1>

      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 place-items-center">
        {displayClients.map((c) => (
          <div
            key={c._id}
            className="bg-white rounded-lg p-4 flex items-center justify-center shadow hover:scale-105 transition-transform"
          >
            {c.logo ? (
              <img
                src={c.logo}
                alt={c.name}
                className="h-16 object-contain"
              />
            ) : (
              <span className="text-black font-semibold">{c.name}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

// src/pages/Clients.jsx
// import React from "react";

// export default function Clients() {
//   // Dummy client names
//   const clients = [
//     "Alpha Corp",
//     "Beta Solutions",
//     "Gamma Enterprises",
//     "Delta Associates",
//     "Epsilon Tech",
//     "Zeta Industries",
//   ];

//   // Dummy services
//   const services = [
//     {
//       title: "Risk Advisory",
//       description:
//         "Helping businesses identify, assess, and mitigate potential risks to safeguard operations.",
//     },
//     {
//       title: "Tax & Compliance",
//       description:
//         "Guidance on tax planning, compliance, and regulatory reporting to ensure transparency.",
//     },
//     {
//       title: "Audit & Assurance",
//       description:
//         "Independent and objective reviews of financial statements for stakeholders’ confidence.",
//     },
//     {
//       title: "Business Consulting",
//       description:
//         "Strategies for growth, efficiency improvement, and market expansion tailored to client needs.",
//     },
//     {
//       title: "Technology Integration",
//       description:
//         "Advising on digital transformation, ERP systems, and automation for smarter operations.",
//     },
//   ];

//   return (
//     <section className="px-6 py-12">
//       {/* Clients Section */}
//       <h2 className="text-3xl font-bold text-center mb-8">Our Clients</h2>
//       <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
//         {clients.map((client, index) => (
//           <li
//             key={index}
//             className="p-4 bg-gray-100 rounded-xl shadow hover:bg-gray-200 transition"
//           >
//             {client}
//           </li>
//         ))}
//       </ul>

//       {/* Divider */}
//       <div className="my-12 border-t border-gray-300"></div>

//       {/* Services Section */}
//       <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
//       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
//           >
//             <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
//             <p className="text-gray-600">{service.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
