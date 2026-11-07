import { ArrowDownRight, ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import type { IconType } from "react-icons";
import { contact, socialLinks } from "../data/portfolio";

const socialIcons: Record<string, IconType> = {
  LinkedIn: FaLinkedinIn,
  GitHub: FaGithub,
  Instagram: FaInstagram,
};

export default function Contact() {
  return (
    <>
      <section className="contact-section section-shell" id="contact" aria-labelledby="contact-heading">
        <div className="contact-intro">
          <div className="contact-heading">
            <span className="section-index">09 / CONTACT</span>
            <h2 id="contact-heading">Let&apos;s Create Something <em>Worth Building.</em></h2>
            <p>
              Whether you&apos;re hiring for a development role or looking for someone to bring your next digital
              project to life, I&apos;d be glad to connect.
            </p>
          </div>
          <div className="contact-availability">
            <i aria-hidden="true" />
            <span>AVAILABLE FOR FULL-TIME &amp; FREELANCE OPPORTUNITIES</span>
          </div>
        </div>
        <div className="contact-links">
          <a className="contact-method contact-method--email" href={`mailto:${contact.email}`}>
            <span className="contact-method__icon"><Mail size={18} aria-hidden="true" /></span>
            <span className="contact-method__copy">
              <span className="contact-method__label">EMAIL</span>
              <strong>{contact.email}</strong>
            </span>
            <ArrowUpRight className="contact-method__arrow" size={18} aria-hidden="true" />
          </a>
          <a className="contact-method contact-method--whatsapp" href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
            <span className="contact-method__icon"><FaWhatsapp size={19} aria-hidden="true" /></span>
            <span className="contact-method__copy">
              <span className="contact-method__label">WHATSAPP / DIRECT CHAT</span>
              <strong>{contact.phone}</strong>
            </span>
            <ArrowUpRight className="contact-method__arrow" size={18} aria-hidden="true" />
          </a>
        </div>
        <a className="contact-next" href="#top">
          Back to the top <ArrowDownRight size={14} aria-hidden="true" />
        </a>
      </section>
      <footer className="site-footer section-shell">
        <a className="footer-identity" href="#top">
          <strong>Sahaya Ronaldo S.</strong>
          <span>Web Developer</span>
        </a>
        <div className="footer-socials" aria-label="Social profiles">
          {socialLinks.map((link) => {
            const Icon = socialIcons[link.name];
            return (
              <a href={link.href} key={link.name} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                <Icon size={16} aria-hidden="true" />
                <span>{link.name}</span>
                <ArrowUpRight size={11} aria-hidden="true" />
              </a>
            );
          })}
        </div>
        <span className="footer-copyright">© {new Date().getFullYear()} Sahaya Ronaldo S.</span>
      </footer>
    </>
  );
}
