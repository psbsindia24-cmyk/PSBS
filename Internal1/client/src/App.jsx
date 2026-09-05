import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import Thought from './pages/Thought.jsx';
import Team from './pages/Team.jsx';
import Clients from './pages/Clients.jsx';
import Login from './pages/Login.jsx';
import AdminInsight from "./pages/AdminInsight.jsx";
import Dashboard from './pages/Dashboard.jsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OurTools from "./pages/OurTools";



export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
       <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/services" element={<Services />} />
  <Route path="/thought" element={<Thought />} />
  <Route path="/team" element={<Team />} />
  <Route path="/clients" element={<Clients />} />
  <Route path="/login" element={<Login />} />
  <Route path="/dashboard" element={<Dashboard />} />
  <Route path="/our-tools" element={<OurTools />} />

  <Route path="/admin-insight" element={<AdminInsight />} />
</Routes>
      </main>
      <Footer />
    </div>
  );
}
