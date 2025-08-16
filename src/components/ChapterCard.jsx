// src/components/ChapterCard.jsx
export default function ChapterCard({ chapter }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 transition-transform hover:scale-105">
      <div className="mt-2">
        <h3 className="text-xl font-semibold">{chapter.name}</h3>
        <p className="text-gray-600">{chapter.location}</p>
        <p className="text-sm text-gray-500">Chair: {chapter.chairperson}</p>
        
        {/* Socials */}
        <div className="flex space-x-3 mt-3">
          {chapter.socials?.facebook && (
            <a
              href={chapter.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              Facebook
            </a>
          )}
          {chapter.socials?.twitter && (
            <a
              href={chapter.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600"
            >
              Twitter
            </a>
          )}
          {chapter.socials?.linkedin && (
            <a
              href={chapter.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900"
            >
              LinkedIn
            </a>
          )}
          {chapter.socials?.instagram && (
            <a
              href={chapter.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-700"
            >
              Instagram
            </a>
          )}
        </div>

        {/* Learn More */}
        <a
          href={chapter.learnMoreLink}
          className="inline-block mt-4 text-sm font-medium text-green-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More →
        </a>
      </div>
    </div>
  );
}
