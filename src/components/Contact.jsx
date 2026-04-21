import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Mic, ArrowUpRight } from 'lucide-react';

const quickLinks = [
    { name: 'Ana Sayfa',  href: '/' },
    { name: 'Hakkımızda', href: '/hakkimizda' },
    { name: 'Ekibimiz',   href: '/ekibimiz' },
    { name: 'İletişim',   href: '/iletisim' },
];

const socialLinks = [
    { Icon: Linkedin, href: 'https://www.linkedin.com/company/safe-vox/', label: 'LinkedIn' },
];

const contactItems = [
    { Icon: Mail,   href: 'mailto:info@safevox.tr', text: 'info@safevox.tr' },
    { Icon: Phone,  href: 'tel:+905511587145',                  text: '0551 158 71 45' },
    { Icon: MapPin, href: null,                                  text: 'Çankaya, Ankara' },
];

export default function Footer() {
    return (
        <footer className="relative bg-dark-900 border-t border-white/6 pt-20 pb-10 overflow-hidden">
            {/* Subtle glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-1 lg:col-span-2">
                        <Link to="/" className="flex items-center gap-2.5 mb-5 group w-fit">
                            <div className="flex items-center justify-center w-9 h-9 bg-white/8 border border-white/15 rounded-xl transition-all duration-300 group-hover:bg-white/12">
                                <Mic className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-xl font-display font-bold tracking-tight text-white">
                                SafeVox
                            </span>
                        </Link>

                        <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-8">
                            İletişim merkezlerinde devrim yaratan yapay zeka teknolojisi.
                            Geleneksel denetimi yıkan, çalışanı güçlendiren dijital koç.
                        </p>

                        <div className="flex gap-3">
                            {socialLinks.map(({ Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    target={href !== '#' ? '_blank' : undefined}
                                    rel="noreferrer"
                                    className="w-9 h-9 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all group"
                                >
                                    <Icon className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick links */}
                    <div>
                        <h4 className="text-white font-bold text-sm mb-6 tracking-wide">Sayfalar</h4>
                        <ul className="space-y-3.5">
                            {quickLinks.map(({ name, href }) => (
                                <li key={name}>
                                    <Link
                                        to={href}
                                        className="text-sm text-gray-500 hover:text-white transition-colors flex items-center gap-1.5 group"
                                    >
                                        {name}
                                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-y-0.5 translate-x-0.5 transition-all" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold text-sm mb-6 tracking-wide">İletişim</h4>
                        <ul className="space-y-4">
                            {contactItems.map(({ Icon, href, text }) => (
                                <li key={text}>
                                    {href ? (
                                        <a
                                            href={href}
                                            className="flex items-start gap-2.5 text-gray-500 hover:text-white transition-colors group"
                                        >
                                            <Icon className="w-4 h-4 text-gray-600 shrink-0 mt-0.5 group-hover:text-gray-400 transition-colors" />
                                            <span className="text-sm">{text}</span>
                                        </a>
                                    ) : (
                                        <div className="flex items-start gap-2.5 text-gray-500">
                                            <Icon className="w-4 h-4 text-gray-600 shrink-0 mt-0.5" />
                                            <span className="text-sm">{text}</span>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
                    <p>&copy; 2025 SafeVox. Tüm hakları saklıdır.</p>
                    <div className="flex gap-6">
                        <Link to="/gizlilik-politikasi" className="hover:text-gray-400 transition-colors">Gizlilik Politikası</Link>
                        <Link to="/kullanim-kosullari" className="hover:text-gray-400 transition-colors">Kullanım Koşulları</Link>
                        <Link to="/kvkk-aydinlatma" className="hover:text-gray-400 transition-colors">KVKK Aydınlatma</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
