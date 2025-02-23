import { Facebook, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <div className="flex space-x-6 mb-8">
              {/* Facebook */}
              <a
                  href="https://web.facebook.com/Ghamespice"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400 transition-colors"
              >
                <Facebook className="w-6 h-6" aria-label="Facebook" />
              </a>

              {/* Instagram */}
              <a
                  href="https://www.instagram.com/ghamespice"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400 transition-colors"
              >
                <Instagram className="w-6 h-6" aria-label="Instagram" />
              </a>

              {/* LinkedIn */}
              <a
                  href="https://www.linkedin.com/company/ghamespice"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400 transition-colors"
              >
                <Linkedin className="w-6 h-6" aria-label="LinkedIn" />
              </a>
            </div>

            <p className="text-gray-400">
              © {new Date().getFullYear()} Ghame Spice (Pvt) Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
  );
};
