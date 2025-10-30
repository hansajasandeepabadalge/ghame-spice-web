import { Shield, Building2, Award } from "lucide-react";

export const CertificationsSection = () => {
  const certifications = [
    {
      icon: Shield,
      title: "HACCP Certified",
      description: "Hazard Analysis and Critical Control Points certification ensuring food safety standards",
      link: "assets/certificates/haccp.pdf"
    },
    {
      icon: Building2,
      title: "Certificate of Incorporation",
      description: "Officially registered private company in Sri Lanka",
      link: "assets/certificates/pv00292189.pdf"
    },
    {
      icon: Award,
      title: "ISO 22000",
      description: "International food safety management certification",
      link: "assets/certificates/iso22000.pdf"
    }
  ];

  return (
      <section id="certifications" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Our Certifications – Ensuring Quality & Safety
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert) => (
                <div
                    key={cert.title}
                    className="text-center p-6 rounded-lg bg-orange-50 block hover:shadow-lg transition-shadow"
                >
                  <cert.icon className="w-12 h-12 mx-auto mb-4 text-orange-600" />
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{cert.title}</h3>
                  <p className="text-gray-600">{cert.description}</p>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
};