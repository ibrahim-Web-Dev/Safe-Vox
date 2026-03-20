import { motion } from 'framer-motion';
import { UserCheck, Heart, Zap } from 'lucide-react';

export default function About() {
    return (
        <section className="py-24 bg-dark-800 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-safe-900/20 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-safe-500/10 text-safe-400 font-bold text-sm mb-6">
                        <UserCheck className="w-4 h-4" />
                        İnsan Odaklı Vizyon
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                        Yapay Zeka Bir İkame Değil, <span className="text-safe-400">Güçlü Bir Müttefiktir</span>.
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed mb-6">
                        SafeVox, temsilcileri sürekli izleyen bir "gözetmen" değil; onların
                        potansiyelini açığa çıkaran bir <strong>"Dijital Mentor"</strong>dur.
                    </p>
                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                        Geleneksel sistemler hataları cezalandırırken, SafeVox gelişim alanlarını belirler
                        ve çalışanı yetkinleştiren eğitim yolları sunar. Tükenmişlik riskini azaltır,
                        bağlılığı artırır.
                    </p>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                            <Heart className="w-8 h-8 text-red-400 mb-3" />
                            <h4 className="font-bold text-white mb-1">Çalışan Refahı</h4>
                            <p className="text-sm text-gray-400">Stres ve yorgunluk analiziyle proaktif destek.</p>
                        </div>
                        <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                            <Zap className="w-8 h-8 text-yellow-400 mb-3" />
                            <h4 className="font-bold text-white mb-1">Kariyer Mimarı</h4>
                            <p className="text-sm text-gray-400">Kişiselleştirilmiş gelişim ve eğitim planları.</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="aspect-square rounded-full bg-gradient-to-tr from-safe-600 to-vox-600 opacity-20 absolute inset-0 blur-3xl animate-pulse" />
                    <img
                        src="/support-team.png"
                        alt="AI Powered Customer Support Team"
                        className="relative rounded-3xl shadow-2xl border border-white/10 w-full object-cover h-[500px]"
                    />

                    {/* Overlay Card */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="absolute -bottom-8 -left-8 bg-dark-900 p-6 rounded-2xl border border-white/10 shadow-xl max-w-xs"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center">
                                <span className="font-bold text-lg">98%</span>
                            </div>
                            <div>
                                <p className="text-sm text-gray-400">Çalışan Memnuniyeti</p>
                                <p className="font-bold text-white">Sektör Ortalamasının Üstünde</p>
                            </div>
                        </div>
                        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full w-[98%] bg-green-500"></div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
