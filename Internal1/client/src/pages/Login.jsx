// import React, { useState } from 'react';
// import api from '../api/axios';
// import { useNavigate } from 'react-router-dom';

// export default function Login() {
//   const [role, setRole] = useState('client'); // client, team, admin
//   const [form, setForm] = useState({ email: '', password: '' });
//   const [msg, setMsg] = useState('');
//   const navigate = useNavigate();

//   const onChange = (e) =>
//     setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     setMsg('');
//     try {
//       const res = await api.post(`/api/auth/login/${role}`, form); // role-based API
//       localStorage.setItem('psbs_token', res.data.token);
//       localStorage.setItem('psbs_user', JSON.stringify(res.data.user));
//       navigate(`/${role}/dashboard`);
//     } catch (err) {
//       setMsg(err?.response?.data?.message || 'Login failed');
//     }
//   };

//   return (
//     <section className="max-w-md mx-auto px-4 py-12">
//       {/* Toggle Buttons */}
//       <div className="flex justify-center mb-6 space-x-2">
//         {['client', 'team', 'admin'].map((r) => (
//           <button
//             key={r}
//             onClick={() => setRole(r)}
//             className={`px-4 py-2 rounded-full border transition ${
//               role === r
//                 ? 'bg-blue-600 text-white border-blue-600'
//                 : 'bg-neutral-900 text-neutral-300 border-neutral-700 hover:bg-neutral-800'
//             }`}
//           >
//             {r.charAt(0).toUpperCase() + r.slice(1)}
//           </button>
//         ))}
//       </div>

//       {/* Title */}
//       <h1 className="text-3xl font-bold text-center">
//         {role.charAt(0).toUpperCase() + role.slice(1)} Login
//       </h1>

//       {/* Form */}
//       <form onSubmit={onSubmit} className="mt-6 space-y-4">
//         <div>
//           <label className="block text-sm mb-1">Email</label>
//           <input
//             type="email"
//             name="email"
//             value={form.email}
//             onChange={onChange}
//             className="w-full bg-neutral-950 border border-neutral-800 rounded px-3 py-2 focus:outline-none focus:border-neutral-500"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-sm mb-1">Password</label>
//           <input
//             type="password"
//             name="password"
//             value={form.password}
//             onChange={onChange}
//             className="w-full bg-neutral-950 border border-neutral-800 rounded px-3 py-2 focus:outline-none focus:border-neutral-500"
//             required
//           />
//         </div>
//         <button className="w-full px-6 py-2 rounded bg-blue-600 hover:bg-blue-500">
//           Login
//         </button>
//         {msg && <div className="text-sm mt-2 text-red-400">{msg}</div>}
//       </form>
//     </section>
//   );
// }

import React, { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Login() {
  const [role, setRole] = useState("client");
  const [form, setForm] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const greetings = {
    team: "Welcome back, Innovator! Let’s build something extraordinary.",
    client: "Welcome! Your success journey starts here.",
    admin: "Greetings, Commander. Let’s orchestrate greatness."
  };

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    try {
      const res = await api.post(`/api/auth/login`, { ...form, role });
      localStorage.setItem("psbs_token", res.data.token);
      localStorage.setItem("psbs_user", JSON.stringify(res.data.user));
      navigate("/dashboard");
    } catch (err) {
      setMsg(err?.response?.data?.message || "Login failed");
    }
  };

  return (
    <>
  <Helmet>
    <title>PSBS Login</title>

    <meta
      name="robots"
      content="noindex, nofollow"
    />
  </Helmet>


    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="flex w-full max-w-4xl">
        {/* Left side (Login Form) */}
        <div
          className="w-1/2 bg-neutral-900 p-10 rounded-lg shadow-lg transform -rotate-3"
          style={{ transformOrigin: "center left" }}
        >
          {/* Role Toggle */}
          <div className="flex justify-between mb-8">
            {["team", "client", "admin"].map((r) => (
              <button
                key={r}
                onClick={() => setRole(r)}
                className={`px-4 py-2 rounded ${
                  role === r ? "bg-blue-600" : "bg-neutral-800"
                } hover:bg-blue-500 transition`}
              >
                {r.charAt(0).toUpperCase() + r.slice(1)}
              </button>
            ))}
          </div>
          

          {/* Greeting */}
          <h2 className="text-2xl font-bold mb-4 text-blue-400">
            {greetings[role]}
          </h2>

          {/* Login Form */}
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                className="w-full bg-black border border-neutral-700 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={onChange}
                className="w-full bg-black border border-neutral-700 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <button className="w-full py-2 rounded bg-blue-600 hover:bg-blue-500 transition">
              Login
            </button>
            {msg && <div className="text-sm text-red-400 mt-2">{msg}</div>}
          </form>
        </div>

        {/* Right side (Visual / Role Highlight) */}
        <div className="w-1/2 flex flex-col items-center justify-center p-10">
          <h1 className="text-5xl font-extrabold mb-6 text-blue-500">
            {role === "team"
              ? "Team Portal"
              : role === "client"
              ? "Client Portal"
              : "Admin Portal"}
          </h1>
          <p className="text-neutral-400 text-center text-lg">
            {role === "team" &&
              "Collaborate, innovate, and make an impact."}
            {role === "client" &&
              "Access your resources, track progress, and grow."}
            {role === "admin" &&
              "Manage operations, users, and performance efficiently."}
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
