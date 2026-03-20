import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, CheckCircle2 } from 'lucide-react';

const perks = [
    '24 saatte yanıt garantisi',
    'Ücretsiz demo & kurulum',
    'KVKK uyumlu altyapı',
];

export default function CTASection() {
    return (
        <section className="py-28 relative overflow-hidden">
            {/* Subtle radial bg */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(14,165,233,0.06),transparent)] pointer-events-none" />

            <div className="relative max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative bg-dark-800/70 backdrop-blur-xl border border-white/10 rounded-3xl px-10 py-16 md:px-16 overflow-hidden"
                >
                    {/* Top glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[180px] bg-safe-500/8 blur-[80px] rounded-full pointer-events-none" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[360px] h-[120px] bg-vox-500/8 blur-[60px] rounded-full pointer-events-none" />

                    {/* Badge */}
                    <motion.span
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full bg-safe-500/10 border border-safe-500/20 text-safe-300 text-sm font-medium mb-7"
                    >
                        Harekete Geçin
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.08 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
                    >
                        Çağrı Merkezinizi
                        <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-safe-400 via-vox-400 to-purple-400">
                            Dönüştürmeye Hazır mısınız?
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.14 }}
                        className="text-lg text-gray-400 mb-10 max-w-xl mx-auto"
                    >
                        SafeVox'un ücretsiz demosunu talep edin. Ekibimiz 24 saat içinde
                        sizinle iletişime geçer.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
                    >
                        <Link
                            to="/iletisim"
                            className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-safe-600 to-vox-600 rounded-xl font-bold text-white hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-lg shadow-safe-500/25 group"
                        >
                            Ücretsiz Demo Talebi
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <a
                            href="mailto:ibrahimyilmaz0713@gmail.com"
                            className="flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-bold text-white hover:bg-white/8 hover:-translate-y-0.5 transition-all"
                        >
                            <Mail className="w-5 h-5" />
                            E-posta Gönder
                        </a>
                    </motion.div>

                    {/* Perks */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.28 }}
                        className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500"
                    >
                        {perks.map((p, i) => (
                            <span key={i} className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-safe-500 shrink-0" />
                                {p}
                            </span>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
