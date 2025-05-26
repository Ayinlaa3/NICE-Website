import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import Button from "@/components/ui/Button";
import { ArrowDown, Menu, X } from "../Icons";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-(--accent) border-(--border) border-b-3">
      <div className="h-4 bg-linear-90 from-[#FEF303] from-0% to-[#03823B] to-100%" />
      <div className="px-4 md:px-8 py-4 gap-2 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-4 w-full md:w-auto justify-between">
          <div className="flex items-center gap-4">
            <img
              src="/icons/logo.svg"
              draggable="false"
              alt="NICE Logo"
              className="size-24 md:size-33"
            />
            <h1 className="font-[Old_English_Text_MT_V2] text-(--primary) text-2xl md:text-[40px] leading-tight md:leading-[45px]">
              Nigerian Institution <br />
              of Civil Engineers
            </h1>
          </div>
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        <div className={`flex flex-col w-full md:w-auto ${isMobileMenuOpen ? 'block' : 'hidden md:flex'}`}>
          {/* row 1 */}
          <div className="flex flex-col md:flex-row gap-4 justify-between py-3 items-center">
            <input
              type="text"
              className="w-full md:w-[300px] lg:w-[526px] rounded-[10px] outline-none border-(--input) border-2 py-2 px-6 text-xl placeholder:text-(--muted)"
              placeholder="Search"
            />

            <div className="flex gap-4 items-center">
              <Link to="/login">
                <Button variant="secondary">Login to your Portal</Button>
              </Link>
              <Button>Join NICE</Button>
            </div>
          </div>

          {/* row 2  */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 text-black py-3 justify-between items-center">
            <a href="#" className="font-semibold text-lg md:text-xl hover:text-(--muted)">
              Home
            </a>
            <a
              href="#"
              className="flex items-center gap-1 font-semibold text-lg md:text-xl hover:text-(--muted)"
            >
              About Us <ArrowDown />
            </a>

            <Popover className="relative">
              <PopoverButton className="font-semibold text-black flex items-center gap-1 text-lg md:text-xl">
                Career & Development <ArrowDown />
              </PopoverButton>
              <PopoverPanel
                transition
                anchor="bottom"
                className="divide-y divide-white/5 rounded-xl bg-black text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
              >
                <div className="p-3">
                  <a
                    className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                    href="#"
                  >
                    <p className="font-semibold text-white">Insights</p>
                    <p className="text-white/50">
                      Measure actions your users take
                    </p>
                  </a>
                  <a
                    className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                    href="#"
                  >
                    <p className="font-semibold text-white">Automations</p>
                    <p className="text-white/50">
                      Create your own targeted content
                    </p>
                  </a>
                  <a
                    className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                    href="#"
                  >
                    <p className="font-semibold text-white">Reports</p>
                    <p className="text-white/50">Keep track of your growth</p>
                  </a>
                </div>
                <div className="p-3">
                  <a
                    className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                    href="#"
                  >
                    <p className="font-semibold text-white">Documentation</p>
                    <p className="text-white/50">
                      Start integrating products and tools
                    </p>
                  </a>
                </div>
              </PopoverPanel>
            </Popover>
            <a
              href="#"
              className="font-semibold flex items-center gap-1 text-lg md:text-xl hover:text-[--link]"
            >
              Events <ArrowDown />
            </a>
            <a
              href="#"
              className="font-semibold flex items-center gap-1 text-lg md:text-xl hover:text-[--link]"
            >
              News & Blogs <ArrowDown />
            </a>

            <a
              href="#"
              className="font-semibold flex items-center gap-1 text-lg md:text-xl hover:text-[--link]"
            >
              More <ArrowDown />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
