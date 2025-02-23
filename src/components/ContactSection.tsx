import { Phone, Mail, Globe, MapPin } from "lucide-react";
export const ContactSection = () => {
  return <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">
                  No. 406/7, Hokandara North, Hokandara, Malabe, Sri Lanka
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-orange-600 flex-shrink-0" />
                <p className="text-gray-700">
                  +94 70 20 30 100 / +94 76 61 81 290
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-orange-600 flex-shrink-0" />
                <p className="text-gray-700">ghamespice@outlook.com</p>
              </div>
              <div className="flex items-center space-x-4">
                <Globe className="w-6 h-6 text-orange-600 flex-shrink-0" />
                <p className="text-gray-700">www.ghame.lk</p>
              </div>
            </div>
          </div>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">
                Name
              </label>
              <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email
              </label>
              <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2">
                Message
              </label>
              <textarea id="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"></textarea>
            </div>
            <button type="submit" className="w-full bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>;
};