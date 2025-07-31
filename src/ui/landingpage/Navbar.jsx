// Navbar.jsx

import { useEffect, useState } from "react";
import { Popover } from "@headlessui/react";
import Button from "@/components/ui/Button";
import { ArrowDown } from "../Icons"; // Assuming this is your custom arrow icon
import { Link } from "react-router-dom"; // Make sure react-router-dom is installed

// Define the navigation items with their submenus
const NAV_ITEMS = [
  {
    name: "Home",
    href: "/",
    type: "link", // Indicates a direct link, not a dropdown
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
      } bg-(--accent) border-b-2 border-(--border)`}
    >
      <div className="h-4 bg-gradient-to-r from-[#FEF303] to-[#03823B]" />
      <div className="px-8 py-4 gap-2 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img
            src="/icons/logo.svg"
            draggable="false"
            alt="NICE Logo"
            className="size-33"
          />
          <h1 className="font-[Old_English_Text_MT_V2] text-(--primary) text-[40px] leading-[45px]">
            Nigerian Institution <br /> of Civil Engineers
          </h1>
        </div>

        <div className="flex flex-col">
          {/* row 1 */}
          <div className="flex gap-4 justify-between py-3 items-center">
            <input
              type="text"
              className="w-[526px] rounded-[10px] outline-none border-(--input) border-2 py-2 px-6 text-xl placeholder:text-[--muted]"
              placeholder="Search"
            />

            <div className="flex gap-4 items-center">
              <Link to="https://portal.nicehq.org">
                <Button variant="secondary">Login to your Portal</Button>
              </Link>
              <Link to="https://portal.nicehq.org/register">
                <Button>Join NICE</Button>
              </Link>
            </div>
          </div>

          {/* row 2 - Navigation Menu */}
          <nav className="flex gap-6 text-black py-3 justify-between items-center">
            {NAV_ITEMS.map((item) => (
              <div key={item.name}>
                {item.type === "link" ? (
                  <Link
                    to={item.href}
                    className="font-semibold text-xl hover:text-[--muted]"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button className="font-semibold text-black flex items-center gap-1 text-xl focus:outline-none hover:text-[--muted]">
                          {item.name} <ArrowDown className={`${open ? 'rotate-180 transform' : ''} transition-transform duration-200`} />
                        </Popover.Button>

                        <Popover.Panel
                          className="absolute z-10 mt-2 w-max max-w-sm px-4 sm:px-0 lg:max-w-md"
                          // Add transition classes for smooth appearance/disappearance
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="relative grid gap-2 bg-white p-4">
                              {item.submenus.map((submenu) => (
                                <Link
                                  key={submenu.name}
                                  to={submenu.href}
                                  className="-m-2 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-opacity-50"
                                >
                                  <div className="ml-2">
                                    <p className="text-base font-medium text-gray-900">
                                      {submenu.name}
                                    </p>
                                  </div>
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
        </div>
      </div>
    </header>
  );
};

export default Navbar;