import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
    { value: 100, suffix: '%', label: 'Çağrı Analizi',    desc: 'Örneklem hatası olmadan tam kapsam.' },
    { value: 20,  suffix: '%', label: 'Müşteri Memnuniyeti', desc: 'Duygu analizi destekli çağrılarda memnuniyet artışı.' },
    { value: 25,  suffix: '%', label: 'Turnover Azalışı',  desc: 'Çalışan bağlılığı ile düşen sirkülasyon.' },
    { value: 0,   suffix: '',  label: 'Veri İhlali',        desc: 'KVKK tam uyumlu maskeleme teknolojisi.' },
];

function AnimatedCounter({ to, suffix }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView || to === 0) return;
        const duration = 1800;
        const steps = 50;
        const increment = to / steps;
        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= to) {
                setCount(to);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, duration / steps);
        return () => clearInterval(timer);
    }, [isInView, to]);

    return (
        <span ref={ref} className="tabular-nums">
            {count}{suffix}
        </span>
    );
}

const gains = [
    'Uyumluluk risklerinin minimize edilmesi',
    'Satış zekası ile gelir artışı',
    'Eğitim ve işe alım maliyetlerinde düşüş',
    'Objektif ve şeffaf performans kültürü',
    'Marka itibarının korunması',
];

export default function Impact() {
    return (
        <section id="impact" className="py-28 relative border-y border-white/5">
            <div className="absolute inset-0 dot-grid opacity-25 pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm font-medium mb-5"
                    >
                        Rakamlarla SafeVox
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-white"
                    >
                        Ölçülebilir{' '}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-safe-400 to-vox-400">
                            SafeVox Etkisi
                        </span>
                    </motion.h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-14 items-start">
                    {/* Stats grid */}
                    <div className="grid grid-cols-2 gap-5">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-dark-800/60 border border-white/8 rounded-3xl p-7 hover:border-white/14 transition-all"
                            >
                                <div className="text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-safe-400 to-vox-400">
                                    <AnimatedCounter to={stat.value} suffix={stat.suffix} />
                                </div>
                                <div className="text-sm font-bold text-gray-300 mb-1">{stat.label}</div>
                                <div className="text-xs text-gray-500 leading-relaxed">{stat.desc}</div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Corporate gains card */}
                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-safe-600/12 to-vox-600/12 rounded-3xl blur-2xl" />
                        <div className="relative bg-dark-800/70 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                            <p className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-2">Kurumsal Kazanımlar</p>
                            <h3 className="text-2xl font-bold text-white mb-8">
                                SafeVox sadece bir yazılım değil,{' '}
                                <span className="text-safe-400">stratejik bir ortaktır</span>
                            </h3>
                            <ul className="space-y-4">
                                {gains.map((item, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: 16 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.25 + i * 0.08 }}
                                        className="flex items-center gap-3.5 text-gray-300 text-sm"
                                    >
                                        <div className="w-6 h-6 rounded-full bg-safe-500/15 flex items-center justify-center shrink-0 border border-safe-500/20">
                                            <div className="w-2 h-2 rounded-full bg-safe-500" />
                                        </div>
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
