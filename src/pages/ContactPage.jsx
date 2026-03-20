import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, MessageSquare } from 'lucide-react';

const contactInfo = [
    {
        icon: <Mail className="w-6 h-6 text-safe-400" />,
        label: 'E-posta',
        value: 'ibrahimyilmaz0713@gmail.com',
        href: 'mailto:ibrahimyilmaz0713@gmail.com',
    },
    {
        icon: <Phone className="w-6 h-6 text-vox-400" />,
        label: 'Telefon',
        value: '0551 158 71 45',
        href: 'tel:+905511587145',
    },
    {
        icon: <MapPin className="w-6 h-6 text-purple-400" />,
        label: 'Konum',
        value: 'Çankaya, Ankara',
        href: null,
    },
];

export default function ContactPage() {
    const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', subject: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        // Mailto fallback — no backend needed for static hosting
        const body = `Ad Soyad: ${form.name}%0AŞirket: ${form.company}%0ATelefon: ${form.phone}%0AKonu: ${form.subject}%0A%0AMesaj:%0A${form.message}`;
        window.location.href = `mailto:ibrahimyilmaz0713@gmail.com?subject=SafeVox - ${encodeURIComponent(form.subject)}&body=${body}`;
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
        }, 800);
    };

    return (
        <div className="pt-24 bg-dark-900 min-h-screen">
            {/* Hero Banner */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-safe-600/15 rounded-full blur-[120px]" />
                    <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-vox-600/15 rounded-full blur-[120px]" />
                </div>
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="max-w-2xl mx-auto"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-safe-500/10 border border-safe-500/20 text-safe-400 text-sm font-medium mb-6">
                            <MessageSquare className="w-4 h-4" />
                            İletişim
                        </div>
                        <h1 className="text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                            Sizinle{' '}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-safe-400 to-vox-400">
                                Konuşalım
                            </span>
                        </h1>
                        <p className="text-xl text-gray-400 leading-relaxed">
                            Demo talebi, iş birliği veya herhangi bir sorunuz için bize ulaşın.
                            En kısa sürede geri dönüş yapacağız.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="pb-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-5 gap-12">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="lg:col-span-2 space-y-6"
                        >
                            <div className="bg-dark-800 border border-white/8 rounded-3xl p-8">
                                <h2 className="text-2xl font-bold text-white mb-6">İletişim Bilgileri</h2>
                                <div className="space-y-6">
                                    {contactInfo.map((item, i) => (
                                        <div key={i} className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center shrink-0">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">
                                                    {item.label}
                                                </p>
                                                {item.href ? (
                                                    <a
                                                        href={item.href}
                                                        className="text-gray-300 hover:text-white transition-colors font-medium"
                                                    >
                                                        {item.value}
                                                    </a>
                                                ) : (
                                                    <p className="text-gray-300 font-medium">{item.value}</p>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Quick info boxes */}
                            <div className="bg-gradient-to-br from-safe-500/10 to-vox-500/10 border border-safe-500/20 rounded-3xl p-8">
                                <h3 className="text-lg font-bold text-white mb-3">Demo Talebi</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                    SafeVox'u kurumunuzda nasıl kullanabileceğinizi görmek için
                                    ücretsiz demo talep edebilirsiniz. 30 dakikalık online
                                    toplantıyla sistemi canlı tanıyın.
                                </p>
                                <div className="flex items-center gap-2 text-safe-400 text-sm font-medium">
                                    <CheckCircle className="w-4 h-4" />
                                    <span>Ücretsiz &amp; Taahhütsüz</span>
                                </div>
                            </div>

                            <div className="bg-dark-800 border border-white/8 rounded-3xl p-8">
                                <h3 className="text-lg font-bold text-white mb-3">Yanıt Süresi</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Tüm taleplere <strong className="text-white">24 saat</strong> içinde
                                    yanıt veriyoruz. Acil durumlarda doğrudan arayabilirsiniz.
                                </p>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="lg:col-span-3"
                        >
                            <div className="bg-dark-800 border border-white/8 rounded-3xl p-8">
                                {submitted ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="flex flex-col items-center justify-center py-16 text-center"
                                    >
                                        <div className="w-20 h-20 rounded-full bg-safe-500/20 flex items-center justify-center mb-6">
                                            <CheckCircle className="w-10 h-10 text-safe-400" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-3">Mesajınız İletildi!</h3>
                                        <p className="text-gray-400 max-w-sm">
                                            En kısa sürede size geri döneceğiz. Bizi tercih ettiğiniz için teşekkürler.
                                        </p>
                                    </motion.div>
                                ) : (
                                    <>
                                        <h2 className="text-2xl font-bold text-white mb-8">Mesaj Gönder</h2>
                                        <form onSubmit={handleSubmit} className="space-y-5">
                                            <div className="grid md:grid-cols-2 gap-5">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-400 mb-2">
                                                        Ad Soyad <span className="text-safe-400">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        required
                                                        value={form.name}
                                                        onChange={handleChange}
                                                        placeholder="Adınız Soyadınız"
                                                        className="w-full bg-dark-900/60 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-safe-500/60 transition-colors text-sm"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-400 mb-2">
                                                        E-posta <span className="text-safe-400">*</span>
                                                    </label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        required
                                                        value={form.email}
                                                        onChange={handleChange}
                                                        placeholder="ornek@sirket.com"
                                                        className="w-full bg-dark-900/60 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-safe-500/60 transition-colors text-sm"
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-5">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-400 mb-2">
                                                        Şirket
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="company"
                                                        value={form.company}
                                                        onChange={handleChange}
                                                        placeholder="Şirket Adı"
                                                        className="w-full bg-dark-900/60 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-safe-500/60 transition-colors text-sm"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-400 mb-2">
                                                        Telefon
                                                    </label>
                                                    <input
                                                        type="tel"
                                                        name="phone"
                                                        value={form.phone}
                                                        onChange={handleChange}
                                                        placeholder="0XXX XXX XX XX"
                                                        className="w-full bg-dark-900/60 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-safe-500/60 transition-colors text-sm"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-400 mb-2">
                                                    Konu <span className="text-safe-400">*</span>
                                                </label>
                                                <select
                                                    name="subject"
                                                    required
                                                    value={form.subject}
                                                    onChange={handleChange}
                                                    className="w-full bg-dark-900/60 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-safe-500/60 transition-colors text-sm appearance-none"
                                                >
                                                    <option value="" className="bg-dark-800">Konu Seçin</option>
                                                    <option value="Demo Talebi" className="bg-dark-800">Demo Talebi</option>
                                                    <option value="İş Birliği" className="bg-dark-800">İş Birliği</option>
                                                    <option value="Fiyat Bilgisi" className="bg-dark-800">Fiyat Bilgisi</option>
                                                    <option value="Teknik Destek" className="bg-dark-800">Teknik Destek</option>
                                                    <option value="Genel" className="bg-dark-800">Genel Soru</option>
                                                </select>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-400 mb-2">
                                                    Mesajınız <span className="text-safe-400">*</span>
                                                </label>
                                                <textarea
                                                    name="message"
                                                    required
                                                    rows={5}
                                                    value={form.message}
                                                    onChange={handleChange}
                                                    placeholder="Mesajınızı buraya yazın..."
                                                    className="w-full bg-dark-900/60 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-safe-500/60 transition-colors text-sm resize-none"
                                                />
                                            </div>

                                            <button
                                                type="submit"
                                                disabled={loading}
                                                className="w-full flex items-center justify-center gap-3 py-4 bg-gradient-to-r from-safe-600 to-vox-600 rounded-xl font-bold text-white hover:opacity-90 transition-all shadow-lg shadow-safe-500/25 disabled:opacity-60 disabled:cursor-not-allowed"
                                            >
                                                {loading ? (
                                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                ) : (
                                                    <Send className="w-5 h-5" />
                                                )}
                                                {loading ? 'Gönderiliyor...' : 'Mesajı Gönder'}
                                            </button>
                                        </form>
                                    </>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
