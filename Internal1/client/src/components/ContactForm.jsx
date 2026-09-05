// import React, { useState } from 'react';
// import api from '../api/axios';

// export default function ContactForm() {
//   const [form, setForm] = useState({ name: '', email: '', message: '' });
//   const [status, setStatus] = useState('');

//   const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     setStatus('');
//     try {
//       await api.post('/api/contact', form);
//       setStatus('Thanks! We will get back to you.');
//       setForm({ name: '', email: '', message: '' });
//     } catch (err) {
//       setStatus(err?.response?.data?.message || 'Something went wrong');
//     }
//   };

//   return (
//     <form onSubmit={onSubmit} className="space-y-4">
//       <div>
//         <label className="block text-sm mb-1">Name</label>
//         <input name="name" value={form.name} onChange={onChange}
//           className="w-full bg-neutral-950 border border-neutral-800 rounded px-3 py-2 focus:outline-none focus:border-neutral-500" required />
//       </div>
//       <div>
//         <label className="block text-sm mb-1">Email</label>
//         <input type="email" name="email" value={form.email} onChange={onChange}
//           className="w-full bg-neutral-950 border border-neutral-800 rounded px-3 py-2 focus:outline-none focus:border-neutral-500" required />
//       </div>
//       <div>
//         <label className="block text-sm mb-1">Message</label>
//         <textarea name="message" rows="4" value={form.message} onChange={onChange}
//           className="w-full bg-neutral-950 border border-neutral-800 rounded px-3 py-2 focus:outline-none focus:border-neutral-500" required />
//       </div>
//       <button className="px-6 py-2 rounded bg-blue-600 hover:bg-blue-500">Send</button>
//       {status && <div className="text-sm mt-2">{status}</div>}
//     </form>
//   );
// }


// import React, { useState } from 'react';
// import api from '../api/axios';

// export default function ContactForm() {
//   const [form, setForm] = useState({ name: '', email: '', message: '' });
//   const [status, setStatus] = useState('');

//   const onChange = (e) =>
//     setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     setStatus('');
//     try {
//       await api.post('/api/contact', form);
//       setStatus('✅ Thanks! We will get back to you.');
//       setForm({ name: '', email: '', message: '' });
//     } catch (err) {
//       setStatus(err?.response?.data?.message || '⚠️ Something went wrong, try again.');
//     }
//   };

//   return (
//     <div className="max-w-lg mx-auto p-8 bg-neutral-900 rounded-2xl shadow-xl">
//       <h2 className="text-2xl font-semibold text-white mb-6 text-center">
//         Contact Us
//       </h2>
//       <form onSubmit={onSubmit} className="space-y-5">
//         <div>
//           <label className="block text-sm text-neutral-400 mb-1">Name</label>
//           <input
//             name="name"
//             value={form.name}
//             onChange={onChange}
//             className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-2 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
//             placeholder="Enter your name"
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-sm text-neutral-400 mb-1">Email</label>
//           <input
//             type="email"
//             name="email"
//             value={form.email}
//             onChange={onChange}
//             className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-2 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
//             placeholder="you@example.com"
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-sm text-neutral-400 mb-1">Message</label>
//           <textarea
//             name="message"
//             rows="4"
//             value={form.message}
//             onChange={onChange}
//             className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-2 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
//             placeholder="Write your message..."
//             required
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all shadow-lg hover:shadow-blue-600/40"
//         >
//           Send Message
//         </button>

//         {status && (
//           <div
//             className={`text-sm mt-3 text-center ${
//               status.startsWith('✅')
//                 ? 'text-green-400'
//                 : 'text-red-400'
//             }`}
//           >
//             {status}
//           </div>
//         )}
//       </form>
//     </div>
//   );
// }


import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_test_123",      // 🔹 Your Service ID
        "template_a7xrbzf",      // 🔹 Your Template ID
        form.current,
        "X3oZ_MGV7lsuyGrqo"      // 🔹 Your Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-4 max-w-md mx-auto">
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          name="user_name"
          required
          className="w-full p-2 border rounded-lg"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="user_email"
          required
          className="w-full p-2 border rounded-lg"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Message</label>
        <textarea
          name="message"
          rows="4"
          required
          className="w-full p-2 border rounded-lg"
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Send Message
      </button>
    </form>
  );
}
