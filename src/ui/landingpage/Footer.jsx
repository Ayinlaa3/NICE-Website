// src/ui/landingpage/Footer.jsx
"use client";

import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "../Icons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white px-6 py-10">
      <div className="container mx-auto">
        {/* Top Row: Logo & Newsletter */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="flex flex-col lg:flex-row justify-between items-start gap-6 border-b border-green-700 pb-6"
        >
          {/* Logo + Title */}
          <div className="flex items-start gap-4">
            <img
              src="/icons/logo.svg"
              alt="Nigerian Institution of Civil Engineers"
              className="w-20 h-20 object-contain"
            />
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-[Old_English_Text_MT_V2] leading-snug">
              Nigerian Institution <br /> of Civil Engineers
            </h1>
          </div>

          {/* Newsletter */}
          <div className="w-full lg:w-1/2 flex flex-col md:flex-row items-start md:items-center gap-4 lg:border-l lg:pl-5">
            <div className="flex-1">
              <h4 className="font-semibold text-lg mb-1">
                Subscribe to our Newsletter
              </h4>
              <p className="text-sm mb-2">
                Get the latest news and updates in your mailbox.
              </p>
            </div>
            <form className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded-l-md w-full md:w-64 bg-white text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-r-md text-white font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </motion.div>

        {/* Links Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-8"
        >
          {/* Main Menu */}
          <div>
            <h5 className="font-bold mb-3">Main Menu</h5>
            <ul className="space-y-1 text-sm text-[#8FE1A8]">
              <li><Link to="/about" className="hover:underline">About NICE</Link></li>
              <li><Link to="/membership" className="hover:underline">Membership</Link></li>
              <li><Link to="/trainings" className="hover:underline">Career & Development</Link></li>
              <li><Link to="/events" className="hover:underline">News & Events</Link></li>
              <li><Link to="/resources" className="hover:underline">Resources</Link></li>
              <li><Link to="/publications" className="hover:underline">Publications</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
              <li>
                <Link
                  to="/donate"
                  className="inline-block mt-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  Donate Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h5 className="font-bold mb-3">Useful Links</h5>
            <ul className="space-y-1 text-sm text-[#8FE1A8]">
              <li><Link to="/membership" className="hover:underline">Join NICE</Link></li>
              <li><Link to="/trainings" className="hover:underline">Explore Trainings</Link></li>
              <li><a href="#" className="hover:underline">Payment Portal</a></li>
              <li><a href="#" className="hover:underline">Events Calendar</a></li>
              <li><a href="#" className="hover:underline">Grants & Sponsorships</a></li>
              <li><a href="#" className="hover:underline">Graduate Resources</a></li>
              <li><a href="#" className="hover:underline">NICESA</a></li>
              <li><a href="#" className="hover:underline">Get a Mentor</a></li>
              <li><Link to="/contact" className="hover:underline">Contact Support</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h5 className="font-bold mb-3">Contact Us</h5>
            <p className="text-sm mb-4 text-[#8FE1A8]">
              <span className="text-white font-semibold">Abuja National Headquarters</span><br />
              8th Floor, Labour House, Central Business District, Abuja, Nigeria.<br />
              +234 801 234 5678
            </p>
            <p className="text-sm text-[#8FE1A8]">
              <span className="text-white font-semibold">Lagos Liaison Office</span><br />
              2nd Floor Suite 2 Front Wing, Oshopey Plaza, 17/19 Allen Avenue, Ikeja, Lagos.<br />
              +234 801 234 5678
            </p>
          </div>

          {/* Support Box */}
          <div className="bg-white text-green-900 p-4 rounded shadow">
            <h6 className="font-bold mb-2">Register your Complaint</h6>
            <p className="text-sm mb-4">
              Report any issue, complaint, or request. Our team will respond shortly.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
            >
              CONTACT SUPPORT
            </Link>
          </div>
        </motion.div>

        {/* Bottom Row: Social Media */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="border-t border-green-700 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Nigerian Institution of Civil Engineers (NICE). All rights reserved.
          </p>
          <div className="flex space-x-4 text-xl">
            <a href="#" aria-label="Facebook" className="hover:text-[var(--accent)]"><Facebook /></a>
            <a href="#" aria-label="Twitter" className="hover:text-[var(--accent)]"><Twitter /></a>
            <a href="#" aria-label="Instagram" className="hover:text-[var(--accent)]"><Instagram /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-[var(--accent)]"><Linkedin /></a>
            <a href="#" aria-label="YouTube" className="hover:text-[var(--accent)]"><Youtube /></a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
