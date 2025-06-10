// src/components/BreadcrumbNav.jsx

const BreadcrumbNav = ({ paths }) => {
  return (
    <nav className="bg-gray-100 px-6 md:px-16 py-4 text-sm">
      <ol className="flex items-center space-x-2 text-gray-700">
        {paths.map((path, idx) => (
          <li key={idx} className="flex items-center gap-2">
            {path.href ? (
              <a href={path.href} className="hover:underline">
                {path.label}
              </a>
            ) : (
              <span className="text-black font-semibold">{path.label}</span>
            )}
            {idx < paths.length - 1 && <span>&gt;</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default BreadcrumbNav;
