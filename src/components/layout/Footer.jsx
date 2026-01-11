import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useData } from '../../context/context';
import initialData from '../../utils/data.json';

const Footer = () => {
  const { data, loading } = useData();
  let footerData = data?.footer || initialData.footer;

  if (loading) return null;

  const socialIcons = {
    facebook: FaFacebookF,
    twitter: FaTwitter,
    instagram: FaInstagram
  };

  // Ensure we have the required data
  if (!footerData) {
    console.warn('Footer data not available, using fallback');
    footerData = initialData.footer;
  }

  // Add null checks for nested objects
  if (!footerData?.brand || !footerData?.quickLinks || !footerData?.contact || !footerData?.social) {
    return null;
  }

  return (
    <footer className="bg-[#2C2C2C] text-white">
      <div className="max-w-[1440px] mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-6">
              <img 
                src={footerData?.brand.logo}
                alt={`${footerData?.brand.name} Logo`} 
                className="w-7 h-7 object-contain brightness-200"
              />
              <span className="text-[#E8C9A3] text-base tracking-tight">
                {footerData?.brand.name}
              </span>
            </Link>
            <p className="text-white/60 text-sm">
              {footerData?.brand.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-medium mb-4">{footerData?.quickLinks.title}</h3>
            <ul className="space-y-3">
              {footerData?.quickLinks.links.map((link) => (
                <li key={link.url}>
                  <Link to={link.url} className="text-white/60 hover:text-white transition-colors duration-300">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-medium mb-4">{footerData?.contact.title}</h3>
            <ul className="space-y-3 text-white/60">
              {footerData?.contact.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-medium mb-4">{footerData?.social.title}</h3>
            <div className="flex gap-4">
              {footerData?.social.links.map((social) => {
                const Icon = socialIcons[social.platform];
                return (
                  <a 
                    key={social.platform}
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                  >
                    <Icon className="text-white" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/40 text-sm">
          © {new Date().getFullYear()} {footerData?.brand.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;