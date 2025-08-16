// src/components/ChapterCard.jsx
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function ChapterCard({ chapter }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 transition-transform hover:scale-105">
      {/* Chapter Info */}
      <h3 className="text-xl font-semibold text-gray-900">{chapter.name}</h3>
      <p className="text-gray-600">{chapter.location}</p>
      <p className="text-sm text-gray-500">Chair: {chapter.chairperson}</p>

      {/* Social Links */}
      <div className="flex space-x-4 mt-3">
        {chapter.socials?.facebook && (
          <a
            href={chapter.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            <FaFacebook size={18} />
          </a>
        )}
        {chapter.socials?.twitter && (
          <a
            href={chapter.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600"
          >
            <FaTwitter size={18} />
          </a>
        )}
        {chapter.socials?.linkedin && (
          <a
            href={chapter.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900"
          >
            <FaLinkedin size={18} />
          </a>
        )}
        {chapter.socials?.instagram && (
          <a
            href={chapter.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-700"
          >
            <FaInstagram size={18} />
          </a>
        )}
      </div>

      {/* Learn More */}
      {chapter.learnMoreLink && (
        <a
          href={chapter.learnMoreLink}
          className="inline-block mt-4 text-sm font-medium text-green-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More →
        </a>
      )}
    </div>
  );
}
