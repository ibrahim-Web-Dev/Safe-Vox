import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { Activity, Shield, Zap, BarChart2 } from 'lucide-react';

export function ContainerScroll({ titleComponent, children }) {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef });
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const scaleDimensions = () => isMobile ? [0.7, 0.9] : [1.05, 1];

    const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
    const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <div
            className="h-[60rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20"
            ref={containerRef}
        >
            <div className="py-10 md:py-40 w-full relative" style={{ perspective: '1000px' }}>
                <motion.div
                    style={{ translateY: translate }}
                    className="max-w-5xl mx-auto text-center mb-8"
                >
                    {titleComponent}
                </motion.div>
                <motion.div
                    style={{
                        rotateX: rotate,
                        scale,
                        boxShadow: '0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003',
                    }}
                    className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#2a2a2a] p-2 md:p-6 bg-[#111] rounded-[30px] shadow-2xl"
                >
                    <div className="h-full w-full overflow-hidden rounded-2xl bg-dark-800 md:rounded-2xl md:p-4">
                        {children}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

function SafeVoxDashboardMockup() {
    return (
        <div className="h-full w-full p-4 md:p-6 flex flex-col gap-4 overflow-hidden">
            <div className="flex items-center justify-between pb-3 border-b border-white/5">
                <div>
                    <h3 className="text-white font-bold text-sm md:text-base">SafeVox Dashboard</h3>
                    <p className="text-gray-500 text-xs">Gerçek zamanlı performans izleme</p>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-xs text-green-400">Canlı</span>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                    { icon: Activity, label: 'Aktif Çağrı', value: '247', color: 'safe' },
                    { icon: Shield, label: 'KVKK Koruması', value: '%100', color: 'vox' },
                    { icon: Zap, label: 'AI Analizi', value: '12ms', color: 'safe' },
                    { icon: BarChart2, label: 'Ortalama Skor', value: '87/100', color: 'vox' },
                ].map(({ icon: Icon, label, value, color }, i) => (
                    <div key={i} className={`bg-white/3 border border-white/5 rounded-xl p-3`}>
                        <Icon className={`w-4 h-4 text-${color}-400 mb-2`} />
                        <div className={`text-lg font-bold text-${color}-300`}>{value}</div>
                        <div className="text-xs text-gray-500">{label}</div>
                    </div>
                ))}
            </div>

            <div className="flex-1 grid md:grid-cols-2 gap-3">
                <div className="bg-white/3 border border-white/5 rounded-xl p-4">
                    <p className="text-xs text-gray-500 mb-3">Duygu Analizi (Son 24 saat)</p>
                    <div className="space-y-2">
                        {[
                            { label: 'Pozitif', pct: 68, color: 'safe' },
                            { label: 'Nötr', pct: 22, color: 'gray' },
                            { label: 'Negatif', pct: 10, color: 'red' },
                        ].map(({ label, pct, color }) => (
                            <div key={label}>
                                <div className="flex justify-between text-xs mb-1">
                                    <span className="text-gray-400">{label}</span>
                                    <span className="text-gray-300">%{pct}</span>
                                </div>
                                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                                    <div
                                        className={`h-full rounded-full bg-${color}-500`}
                                        style={{ width: `${pct}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white/3 border border-white/5 rounded-xl p-4">
                    <p className="text-xs text-gray-500 mb-3">AI Koçluk Önerileri</p>
                    <div className="space-y-2">
                        {[
                            { agent: 'Ahmet Y.', tip: 'Empati skorunu artır', score: 94 },
                            { agent: 'Fatma K.', tip: 'Konuşma hızını düşür', score: 88 },
                            { agent: 'Mehmet A.', tip: 'Mola zamanı geldi', score: 76 },
                        ].map(({ agent, tip, score }) => (
                            <div key={agent} className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs text-white font-medium">{agent}</p>
                                    <p className="text-xs text-gray-500">{tip}</p>
                                </div>
                                <span className={`text-xs font-bold ${score >= 90 ? 'text-safe-400' : score >= 80 ? 'text-yellow-400' : 'text-orange-400'}`}>
                                    {score}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function ContainerScrollSection() {
    return (
        <section className="relative overflow-hidden bg-dark-900">
            <ContainerScroll
                titleComponent={
                    <div className="space-y-4">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm font-medium">
                            Canlı Dashboard
                        </span>
                        <h2 className="text-4xl md:text-6xl font-bold text-white font-display">
                            Tüm Kontrolü Elinizde Tutun
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Gerçek zamanlı ses analizi, AI koçluk önerileri ve performans raporları tek ekranda.
                        </p>
                    </div>
                }
            >
                <SafeVoxDashboardMockup />
            </ContainerScroll>
        </section>
    );
}
