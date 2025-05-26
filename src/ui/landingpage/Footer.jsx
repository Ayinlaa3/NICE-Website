import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "../Icons";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white px-4 sm:px-6 md:px-8 py-8 sm:py-10">
      <div className="container mx-auto">
        {/* Top Row: Logo & Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 border-b border-green-700 pb-6">
          <div className="flex items-start gap-4">
            <img
              src="/icons/logo.svg"
              alt="Nigerian Institution of Civil Engineers"
              className="w-16 sm:w-20"
            />
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-[Old_English_Text_MT_V2]">
              Nigerian Institution <br />
              of Civil Engineers
            </h1>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col md:flex-row gap-4 lg:pl-5 lg:border-l border-green-700">
            <div className="flex-1">
              <h4 className="font-semibold text-base sm:text-lg mb-1">
                Subscribe to our Newsletter
              </h4>
              <p className="text-xs sm:text-sm mb-3">
                To get the latest news and updates in your mailbox
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email address"
                className="p-2 rounded-md sm:rounded-l-md sm:rounded-r-none w-full sm:w-2/3 bg-white text-black text-sm"
              />
              <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-md sm:rounded-l-none sm:rounded-r-md text-white font-semibold text-sm">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-8">
          {/* Main Menu */}
          <div>
            <h5 className="font-bold text-sm sm:text-base mb-3">Main Menu</h5>
            <ul className="space-y-1 text-xs sm:text-sm text-[#8FE1A8]">
              <li>About NICE</li>
              <li>Membership</li>
              <li>Career & Development</li>
              <li>News & Events</li>
              <li>Resources</li>
              <li>Publications</li>
              <li>Contact Us</li>
              <li>
                <button className="mt-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-3 py-1.5 sm:px-4 sm:py-2 rounded text-xs sm:text-sm">
                  Donate Now
                </button>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h5 className="font-bold text-sm sm:text-base mb-3">Useful Links</h5>
            <ul className="space-y-1 text-xs sm:text-sm text-[#8FE1A8]">
              <li>Join NICE</li>
              <li>Explore Trainings</li>
              <li>Payment Portal</li>
              <li>Events Calendar</li>
              <li>Grants & Sponsorships</li>
              <li>Graduate Resources</li>
              <li>NICESA</li>
              <li>Get a Mentor</li>
              <li>Contact Support</li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h5 className="font-bold text-sm sm:text-base mb-3">Contact Us</h5>
            <p className="text-xs sm:text-sm mb-4 text-[#8FE1A8]">
              <b className="text-white">Abuja National Headquarters</b>
              <br />
              8th Floor, Labour House, Central Business District, Abuja,
              Nigeria.
              <br />
              +234 801 234 5678
            </p>
            <p className="text-xs sm:text-sm text-[#8FE1A8]">
              <b className="text-white">Lagos Liaison Office</b>
              <br />
              2nd Floor Suite 2 Front Wing, Oshopey Plaza, 17/19 Allen Avenue,
              Ikeja, Lagos.
              <br />
              +234 801 234 5678
            </p>
          </div>

          {/* Support Box */}
          <div className="bg-white text-green-900 p-4 rounded shadow">
            <h6 className="font-bold text-sm sm:text-base mb-2">Register your Complaint</h6>
            <p className="text-xs sm:text-sm mb-4">
              Report any issue or complaint or make requests. Our team will get
              back to you shortly.
            </p>
            <button className="bg-green-700 hover:bg-green-800 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded text-xs sm:text-sm">
              CONTACT SUPPORT
            </button>
          </div>
        </div>

        {/* Bottom Row: Social Media */}
        <div className="border-t border-green-700 pt-4 flex justify-end space-x-4 text-lg sm:text-xl">
          <a href="#" className="hover:text-orange-500 transition-colors">
            <Facebook />
          </a>
          <a href="#" className="hover:text-orange-500 transition-colors">
            <Twitter />
          </a>
          <a href="#" className="hover:text-orange-500 transition-colors">
            <Instagram />
          </a>
          <a href="#" className="hover:text-orange-500 transition-colors">
            <Linkedin />
          </a>
          <a href="#" className="hover:text-orange-500 transition-colors">
            <Youtube />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
