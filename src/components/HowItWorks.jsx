import { motion } from 'framer-motion';
import { Mic2, BrainCircuit, GraduationCap } from 'lucide-react';

const steps = [
    {
        step: '1',
        icon: Mic2,
        title: 'Çağrı Yakalama',
        description:
            'Gerçek zamanlı ses akışı güvenli altyapıya aktarılır. KVKK uyumlu maskeleme anında devreye girerek hassas veriler korunur.',
        details: ['Gerçek zamanlı ses akışı', 'Otomatik KVKK maskeleme', 'Güvenli şifreli depolama'],
        accent: 'safe',
    },
    {
        step: '2',
        icon: BrainCircuit,
        title: 'AI ile Analiz',
        description:
            'Hibrit yapay zeka modeli ses tonunu, frekans değişimlerini ve kelime seçimini milisaniyeler içinde analiz eder.',
        details: ['Akustik frekans analizi', 'Semantik anlam çıkarımı', 'Duygu & stres tespiti'],
        accent: 'vox',
    },
    {
        step: '3',
        icon: GraduationCap,
        title: 'Koçluk Verme',
        description:
            'Kişiye özel eğitim ataması ve anlık AI önerileriyle her temsilcinin gelişimi otomatik olarak yönetilir.',
        details: ['Anlık koçluk önerileri', 'Kişisel kurs ataması', 'Objektif performans raporu'],
        accent: 'purple',
    },
];

const accentMap = {
    safe: {
        bg: 'bg-safe-500/10',
        border: 'border-safe-500/20',
        text: 'text-safe-400',
        dot: 'bg-safe-500',
        line: 'from-safe-500/40',
    },
    vox: {
        bg: 'bg-vox-500/10',
        border: 'border-vox-500/20',
        text: 'text-vox-400',
        dot: 'bg-vox-500',
        line: 'via-vox-500/40',
    },
    purple: {
        bg: 'bg-purple-500/10',
        border: 'border-purple-500/20',
        text: 'text-purple-400',
        dot: 'bg-purple-500',
        line: 'to-purple-500/40',
    },
};

export default function HowItWorks() {
    return (
        <section className="py-28 relative overflow-hidden">
            <div className="absolute inset-0 grid-lines pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-6">
                {/* Section header */}
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm font-medium mb-5"
                    >
                        Nasıl Çalışır?
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-5"
                    >
                        3 Adımda{' '}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-safe-400 to-vox-400">
                            Akıllı Koçluk
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.18 }}
                        className="text-lg text-gray-400 max-w-2xl mx-auto"
                    >
                        SafeVox her çağrıyı uçtan uca otomatik olarak analiz eder,
                        gelişim fırsatlarını tespit eder ve anında harekete geçer.
                    </motion.p>
                </div>

                {/* Steps */}
                <div className="relative grid md:grid-cols-3 gap-6">
                    {/* Connecting gradient line (desktop) */}
                    <div className="hidden md:block absolute top-[3.5rem] left-[calc(16.66%+1rem)] right-[calc(16.66%+1rem)] h-px bg-gradient-to-r from-safe-500/40 via-vox-500/40 to-purple-500/40 z-0" />

                    {steps.map((step, index) => {
                        const a = accentMap[step.accent];
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.14 }}
                                className="relative z-10 bg-dark-800/60 backdrop-blur-sm border border-white/8 rounded-3xl p-8 hover:border-white/14 transition-all duration-300 hover:-translate-y-1 group"
                            >
                                {/* Step number (watermark) */}
                                <span className="absolute top-5 right-6 text-5xl font-bold text-white/30 font-display select-none">
                                    {step.step}
                                </span>

                                {/* Icon */}
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-7 ${a.bg} ${a.border} border`}>
                                    <Icon className={`w-7 h-7 ${a.text}`} />
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">{step.description}</p>

                                <ul className="space-y-2">
                                    {step.details.map((d, i) => (
                                        <li key={i} className="flex items-center gap-2.5 text-sm text-gray-500">
                                            <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${a.dot}`} />
                                            {d}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
