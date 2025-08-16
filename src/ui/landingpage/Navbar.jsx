// Navbar.jsx

import { useEffect, useState } from "react";
import { Popover } from "@headlessui/react";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";
import { ArrowDown } from "../Icons";
import { Link } from "react-router-dom";

const NAV_ITEMS = [
  {
    name: "Home",
    href: "/",
    type: "link",
  },
  {
    name: "About Us",
    type: "dropdown",
    submenus: [
      { name: "About NICE", href: "/about" },
      { name: "The National Chairman", href: "/national-chairman" },
      { name: "NICE Leadership", href: "/leadership" },
      { name: "Chapters", href: "/chapters" },
      { name: "Visit NSE Website", href: "https://nse.org.ng" },
    ],
  },
  {
    name: "Career & Development",
    type: "dropdown",
    submenus: [
      { name: "Civil Engineering Jobs", href: "/jobs" },
      { name: "Journals", href: "/journals" },
      { name: "NICE Books", href: "/books" },
      { name: "Webinars", href: "/webinars" },
      { name: "Mentorship", href: "/mentorship" },
      { name: "Learning Materials", href: "/learning-materials" },
    ],
  },
  {
    name: "Events",
    type: "dropdown",
    submenus: [
      { name: "NICE Conference", href: "https://conference.nicehq.org" },
      { name: "NSE Conference", href: "https://nse.org.ng/conference" },
      { name: "COREN Convention", href: "/events/coren-convention" },
      { name: "International Trips", href: "/events/international-trips" },
      { name: "All Events", href: "/events" },
    ],
  },
  {
    name: "News & Blogs",
    type: "dropdown",
    submenus: [
      { name: "Newsletters", href: "/news/newsletters" },
      { name: "Blogs", href: "/news/blogs" },
      { name: "NICE Updates", href: "/news/updates" },
    ],
  },
  {
    name: "More",
    type: "dropdown",
    submenus: [
      { name: "Contact Support", href: "/contact" },
      { name: "Find your Chapter", href: "/find-chapter" },
      { name: "Make Payment", href: "/make-payment" },
      { name: "Find a Member", href: "/find-member" },
    ],
  },
];

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setShow(currentY < lastScrollY || currentY < 50);
      setLastScrollY(currentY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`sticky top-0 z-50 transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      } bg-(--accent) border-b border-(--border)`}
    >
      <div className="h-2 bg-gradient-to-r from-[#FEF303] to-[#03823B]" />

      <div className="px-4 md:px-8 py-2 flex items-center justify-between">
        {/* Logo + Title */}
        <div className="flex items-center gap-2 md:gap-3">
          <img
            src="/icons/logo.svg"
            alt="NICE Logo"
            className="w-15 h-15 md:w-20 md:h-20"
            draggable="false"
          />
          <h1 className="font-[Old_English_Text_MT_V2] text-(--primary) text-base md:text-2xl leading-tight">
            Nigerian Institution <br className="hidden md:block" /> of Civil Engineers
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-4 lg:gap-6 text-black items-center text-sm md:text-base">
          {NAV_ITEMS.map((item) => (
            <div key={item.name}>
              {item.type === "link" ? (
                <Link
                  to={item.href}
                  className="font-medium hover:text-(--muted)"
                >
                  {item.name}
                </Link>
              ) : (
                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button className="font-medium flex items-center gap-1 hover:text-(--muted) focus:outline-none">
                        {item.name}
                        <ArrowDown
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } transition-transform duration-200 size-3`}
                        />
                      </Popover.Button>

                      <Popover.Panel className="absolute z-10 mt-2 w-max max-w-sm px-2 sm:px-0 lg:max-w-md">
                        <div className="overflow-hidden rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-1 bg-white p-2">
                            {item.submenus.map((submenu) => (
                              <Link
                                key={submenu.name}
                                to={submenu.href}
                                className="rounded-md px-3 py-2 text-sm hover:bg-gray-100"
                              >
                                {submenu.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </>
                  )}
                </Popover>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-2 items-center">
          <Link to="https://portal.nicehq.org">
            <Button variant="secondary" szie="lg">
              Login
            </Button>
          </Link>
          <Link to="https://portal.nicehq.org/register">
            <Button size="lg">Join NICE</Button>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 text-black"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden flex flex-col gap-2 py-3 px-4 text-sm">
          {NAV_ITEMS.map((item) =>
            item.type === "link" ? (
              <Link
                key={item.name}
                to={item.href}
                className="px-2 py-1 hover:bg-gray-100 rounded"
              >
                {item.name}
              </Link>
            ) : (
              <div key={item.name}>
                <p className="px-2 py-1 font-medium">{item.name}</p>
                <div className="pl-4 flex flex-col gap-1">
                  {item.submenus.map((submenu) => (
                    <Link
                      key={submenu.name}
                      to={submenu.href}
                      className="px-2 py-1 text-gray-700 hover:bg-gray-100 rounded"
                    >
                      {submenu.name}
                    </Link>
                  ))}
                </div>
              </div>
            )
          )}
          <div className="flex gap-2 mt-3">
            <Link to="https://portal.nicehq.org" className="flex-1">
              <Button variant="secondary" size="sm" className="w-full">
                Login
              </Button>
            </Link>
            <Link to="https://portal.nicehq.org/register" className="flex-1">
              <Button size="sm" className="w-full">
                Join NICE
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;






// // Navbar.jsx

// import { useEffect, useState } from "react";
// import { Popover } from "@headlessui/react";
// import Button from "@/components/ui/Button";
// import { ArrowDown } from "../Icons"; // Assuming this is your custom arrow icon
// import { Link } from "react-router-dom"; // Make sure react-router-dom is installed

// // Define the navigation items with their submenus
// const NAV_ITEMS = [
//   {
//     name: "Home",
//     href: "/",
//     type: "link", // Indicates a direct link, not a dropdown
//   },
//   {
//     name: "About Us",
//     type: "dropdown",
//     submenus: [
//       { name: "About NICE", href: "/about" },
//       { name: "The National Chairman", href: "/national-chairman" },
//       { name: "NICE Leadership", href: "/leadership" },
//       { name: "Chapters", href: "/chapters" },
//       { name: "Visit NSE Website", href: "https://nse.org.ng" },
//     ],
//   },
//   {
//     name: "Career & Development",
//     type: "dropdown",
//     submenus: [
//       { name: "Civil Engineering Jobs", href: "/jobs" },
//       { name: "Journals", href: "/journals" },
//       { name: "NICE Books", href: "/books" },
//       { name: "Webinars", href: "/webinars" },
//       { name: "Mentorship", href: "/mentorship" },
//       { name: "Learning Materials", href: "/learning-materials" },
//     ],
//   },
//   {
//     name: "Events",
//     type: "dropdown",
//     submenus: [
//       { name: "NICE Conference", href: "https://conference.nicehq.org" },
//       { name: "NSE Conference", href: "https://nse.org.ng/conference" },
//       { name: "COREN Convention", href: "/events/coren-convention" },
//       { name: "International Trips", href: "/events/international-trips" },
//       { name: "All Events", href: "/events" },
//     ],
//   },
//   {
//     name: "News & Blogs",
//     type: "dropdown",
//     submenus: [
//       { name: "Newsletters", href: "/news/newsletters" },
//       { name: "Blogs", href: "/news/blogs" },
//       { name: "NICE Updates", href: "/news/updates" },
//     ],
//   },
//   {
//     name: "More",
//     type: "dropdown",
//     submenus: [
//       { name: "Contact Support", href: "/contact" },
//       { name: "Find your Chapter", href: "/find-chapter" },
//       { name: "Make Payment", href: "/make-payment" },
//       { name: "Find a Member", href: "/find-member" },
//     ],
//   },
// ];

// const Navbar = () => {
//   const [show, setShow] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentY = window.scrollY;
//       setShow(currentY < lastScrollY || currentY < 50);
//       setLastScrollY(currentY);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   return (
//     <header
//       className={`sticky top-0 z-50 transition-transform duration-300 ${
//         show ? "translate-y-0" : "-translate-y-full"
//       } bg-(--accent) border-b-2 border-(--border)`}
//     >
//       <div className="h-4 bg-gradient-to-r from-[#FEF303] to-[#03823B]" />
//       <div className="px-8 py-4 gap-2 flex justify-between items-center">
//         <div className="flex items-center gap-4">
//           <img
//             src="/icons/logo.svg"
//             draggable="false"
//             alt="NICE Logo"
//             className="size-33"
//           />
//           <h1 className="font-[Old_English_Text_MT_V2] text-(--primary) text-[40px] leading-[45px]">
//             Nigerian Institution <br /> of Civil Engineers
//           </h1>
//         </div>

//         <div className="flex flex-col">
//           {/* row 1 */}
//           <div className="flex gap-4 justify-between py-3 items-center">
//             <input
//               type="text"
//               className="w-[526px] rounded-[10px] outline-none border-(--input) border-2 py-2 px-6 text-xl placeholder:text-[--muted]"
//               placeholder="Search"
//             />

//             <div className="flex gap-4 items-center">
//               <Link to="https://portal.nicehq.org">
//                 <Button variant="secondary">Login to your Portal</Button>
//               </Link>
//               <Link to="https://portal.nicehq.org/register">
//                 <Button>Join NICE</Button>
//               </Link>
//             </div>
//           </div>

//           {/* row 2 - Navigation Menu */}
//           <nav className="flex gap-6 text-black py-3 justify-between items-center">
//             {NAV_ITEMS.map((item) => (
//               <div key={item.name}>
//                 {item.type === "link" ? (
//                   <Link
//                     to={item.href}
//                     className="font-semibold text-xl hover:text-[--muted]"
//                   >
//                     {item.name}
//                   </Link>
//                 ) : (
//                   <Popover className="relative">
//                     {({ open }) => (
//                       <>
//                         <Popover.Button className="font-semibold text-black flex items-center gap-1 text-xl focus:outline-none hover:text-[--muted]">
//                           {item.name} <ArrowDown className={`${open ? 'rotate-180 transform' : ''} transition-transform duration-200`} />
//                         </Popover.Button>

//                         <Popover.Panel
//                           className="absolute z-10 mt-2 w-max max-w-sm px-4 sm:px-0 lg:max-w-md"
//                           // Add transition classes for smooth appearance/disappearance
//                           enter="transition ease-out duration-200"
//                           enterFrom="opacity-0 translate-y-1"
//                           enterTo="opacity-100 translate-y-0"
//                           leave="transition ease-in duration-150"
//                           leaveFrom="opacity-100 translate-y-0"
//                           leaveTo="opacity-0 translate-y-1"
//                         >
//                           <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
//                             <div className="relative grid gap-2 bg-white p-4">
//                               {item.submenus.map((submenu) => (
//                                 <Link
//                                   key={submenu.name}
//                                   to={submenu.href}
//                                   className="-m-2 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-opacity-50"
//                                 >
//                                   <div className="ml-2">
//                                     <p className="text-base font-medium text-gray-900">
//                                       {submenu.name}
//                                     </p>
//                                   </div>
//                                 </Link>
//                               ))}
//                             </div>
//                           </div>
//                         </Popover.Panel>
//                       </>
//                     )}
//                   </Popover>
//                 )}
//               </div>
//             ))}
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;