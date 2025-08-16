// src/components/ChapterCard.jsx
import { motion } from "framer-motion";
import { FaTwitter, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

export default function ChapterCard({ 
  title, 
  description, 
  image, 
  socials = {}, 
  link = "#" 
}) {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
      whileHover={{ y: -6 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Image */}
      {image && (
        <div className="h-48 w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}

      {/* Content */}
      <div className="flex-1 p-5 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
          <p className="text-sm text-gray-600 mb-4 line-clamp-3">{description}</p>
        </div>

        {/* Socials + Learn More */}
        <div className="mt-auto flex items-center justify-between">
          <div className="flex gap-3 text-gray-500">
            {socials.twitter && (
              <a href={socials.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                <FaTwitter size={18} />
              </a>
            )}
            {socials.linkedin && (
              <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
                <FaLinkedin size={18} />
              </a>
            )}
            {socials.instagram && (
              <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
                <FaInstagram size={18} />
              </a>
            )}
            {socials.facebook && (
              <a href={socials.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                <FaFacebook size={18} />
              </a>
            )}
          </div>

          <a 
            href={link} 
            className="text-sm font-medium text-green-700 hover:underline"
          >
            Learn More →
          </a>
        </div>
      </div>
    </motion.div>
  );
}
