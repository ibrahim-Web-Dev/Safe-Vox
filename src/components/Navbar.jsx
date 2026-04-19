import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Mic, Activity } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 24);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => { setIsOpen(false); }, [location.pathname]);

    const navLinks = [
        { name: 'Ana Sayfa',  href: '/' },
        { name: 'Hakkımızda', href: '/hakkimizda' },
        { name: 'Ekibimiz',   href: '/ekibimiz' },
        { name: 'İletişim',   href: '/iletisim' },
    ];

    const isActive = (href) => location.pathname === href;

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
            <motion.nav
                initial={{ y: -24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className={cn(
                    'w-full max-w-6xl rounded-2xl transition-all duration-400',
                    scrolled
                        ? 'bg-dark-900 border border-white/10 shadow-xl shadow-black/40 py-3 px-5'
                        : 'bg-dark-900/80 border border-white/8 py-3 px-5'
                )}
            >
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2.5 group">
                        <div className="relative flex items-center justify-center w-9 h-9 bg-gradient-to-br from-safe-500 to-vox-600 rounded-xl shadow-lg shadow-safe-500/20 group-hover:shadow-safe-500/40 transition-all duration-300">
                            <Mic className="w-4 h-4 text-white absolute" />
                            <Activity className="w-4 h-4 text-white/40 absolute animate-pulse" />
                        </div>
                        <span className="text-xl font-display font-bold tracking-tight text-white">
                            Safe<span className="text-safe-400">Vox</span>
                        </span>
                    </Link>

                    {/* Desktop links */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className={cn(
                                    'px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200',
                                    isActive(link.href)
                                        ? 'text-white bg-white/10'
                                        : 'text-gray-400 hover:text-white hover:bg-white/6'
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="hidden md:block">
                        <Link
                            to="/iletisim"
                            className="px-5 py-2.5 bg-white text-dark-900 text-sm font-bold rounded-xl hover:bg-white/90 transition-all shadow-lg shadow-white/10 hover:-translate-y-0.5"
                        >
                            Demo Talebi
                        </Link>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        className="md:hidden w-9 h-9 flex items-center justify-center text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-xl transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>

                {/* Mobile menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="md:hidden overflow-hidden"
                        >
                            <div className="flex flex-col pt-4 pb-2 gap-1 border-t border-white/8 mt-3">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        to={link.href}
                                        className={cn(
                                            'px-4 py-3 rounded-xl text-sm font-medium transition-all',
                                            isActive(link.href)
                                                ? 'text-white bg-white/10'
                                                : 'text-gray-400 hover:text-white hover:bg-white/6'
                                        )}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <Link
                                    to="/iletisim"
                                    className="w-full py-3 bg-white text-dark-900 font-bold rounded-xl mt-2 text-center text-sm"
                                >
                                    Demo Talebi
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </div>
    );
}
