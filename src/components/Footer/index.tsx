import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-orange-100 px-4 pt-16 pb-10 text-black/70">
      <div className="gap-12 grid md:grid-cols-2 lg:grid-cols-4 mx-auto max-w-7xl">
        {/* Newsletter Subscription */}
        <div className="col-span-2 bg-white/70 shadow-lg backdrop-blur-md p-6 rounded-2xl">
          <h3 className="mb-4 font-semibold text-black/70 text-2xl">
            Join Our Newsletter
          </h3>
          <p className="mb-4 text-black/80">
            Stay up to date with our latest updates and offerings.
          </p>
          <form className="flex sm:flex-row flex-col items-center gap-4 text-black/70">
            <input
              type="email"
              placeholder="Your Email"
              className="sm:flex-1 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 w-full"
            />
            <button
              type="submit"
              className="bg-orange-400 hover:brightness-125 px-6 py-3 rounded-xl font-semibold text-black/70 transition cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="mb-4 font-bold text-xl">Quick Links</h4>
          <ul className="space-y-2 text-black/80 text-sm">
            <li>
              <a href="#" className="hover:text-black/70 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black/70 transition">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black/70 transition">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black/70 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h4 className="mb-4 font-bold text-xl">Follow Us</h4>
          <div className="flex gap-4 mb-6 text-2xl">
            <a
              href="#"
              className="hover:text-purple-300 transition"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="hover:text-purple-300 transition"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="hover:text-purple-300 transition"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="hover:text-purple-300 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
          <div className="space-y-1 text-black/80 text-sm">
            <p>Email: support@paspark.com</p>
            <p>Phone: +123 456 7890</p>
            <p>Location: New York, USA</p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12 pt-6 border-white/20 border-t text-black/90 text-sm text-center">
        © {new Date().getFullYear()} PASPARK. All rights reserved.
      </div>
    </footer>
  );
}
