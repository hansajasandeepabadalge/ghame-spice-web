import { Shield, Building2, Award, X } from "lucide-react";
import { useState, useEffect } from "react";
import haccp from '../assets/certificates/haccp.png';
import pv00292189 from '../assets/certificates/pv00292189.png';
import iso22000 from '../assets/certificates/iso22000.png';

export const CertificationsSection = () => {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (selectedCert) {
      setTimeout(() => setIsAnimating(true), 10);
    } else {
      setIsAnimating(false);
    }
  }, [selectedCert]);

  const certifications = [
    {
      icon: Shield,
      title: "HACCP Certified",
      description: "Hazard Analysis and Critical Control Points certification ensuring food safety standards",
      link: haccp
    },
    {
      icon: Building2,
      title: "Certificate of Incorporation",
      description: "Officially registered private company in Sri Lanka",
      link: pv00292189
    },
    {
      icon: Award,
      title: "ISO 22000",
      description: "International food safety management certification",
      link: iso22000
    }
  ];

  return (
      <>
        <section id="certifications" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Our Certifications – Ensuring Quality & Safety
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {certifications.map((cert) => (
                  <button
                      key={cert.title}
                      onClick={() => setSelectedCert(cert.link)}
                      className="text-center p-6 rounded-lg bg-orange-50 block hover:shadow-lg transition-shadow cursor-pointer w-full"
                  >
                    <cert.icon className="w-12 h-12 mx-auto mb-4 text-orange-600" />
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{cert.title}</h3>
                    <p className="text-gray-600">{cert.description}</p>
                  </button>
              ))}
            </div>
          </div>
        </section>

        {/* Modal Popup */}
        {selectedCert && (
          <div 
            className={`fixed inset-0 bg-black z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
              isAnimating ? 'bg-opacity-80' : 'bg-opacity-0'
            }`}
            onClick={() => setSelectedCert(null)}
          >
            <div 
              className={`relative max-w-4xl max-h-[90vh] bg-white rounded-lg shadow-2xl overflow-hidden transition-all duration-300 transform ${
                isAnimating ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-2 right-2 bg-orange-600 text-white rounded-full p-2 hover:bg-orange-700 transition-colors z-10 shadow-lg"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="p-4 flex items-center justify-center max-h-[90vh]">
                <img 
                  src={selectedCert} 
                  alt="Certificate" 
                  className="max-w-full max-h-[85vh] object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        )}
      </>
  );
};