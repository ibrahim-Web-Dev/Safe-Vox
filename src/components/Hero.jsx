import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, Activity, Zap, Shield, ChevronDown } from 'lucide-react';
import VideoModal from './VideoModal';

const WAVE_HEIGHTS = [14, 28, 18, 38, 22, 46, 16, 36, 24, 44, 18, 32, 20, 42, 26, 48, 14, 36, 22, 40];

function WaveBar({ height, delay }) {
    return (
        <motion.div
            className="w-[3px] rounded-full bg-gradient-to-t from-safe-700 to-safe-400 origin-bottom"
            style={{ height: `${height}px` }}
            animate={{ scaleY: [0.25, 1, 0.4, 0.85, 0.3, 1, 0.5] }}
            transition={{ duration: 1.6, repeat: Infinity, delay, ease: 'easeInOut' }}
        />
    );
}

export default function Hero() {
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-24 sm:pt-28 pb-20 overflow-hidden">
            {/* Dot grid */}
            <div className="absolute inset-0 dot-grid opacity-50 pointer-events-none" />

            {/* Gradient blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-32 w-[560px] h-[560px] bg-safe-600/12 rounded-full blur-[130px] animate-blob" />
                <div className="absolute top-1/3 -right-20 w-[480px] h-[480px] bg-vox-600/12 rounded-full blur-[120px] animate-blob" style={{ animationDelay: '2s' }} />
                <div className="absolute -bottom-20 left-1/3 w-[400px] h-[400px] bg-purple-600/8 rounded-full blur-[100px] animate-blob" style={{ animationDelay: '4s' }} />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full">
                {/* Left — Text */}
                <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.15 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-safe-500/10 border border-safe-500/20 text-safe-300 text-sm font-medium mb-8"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-safe-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-safe-500" />
                        </span>
                        Yapay Zeka Destekli Performans Yönetimi
                    </motion.div>

                    {/* Headline */}
                    <h1 className="text-4xl sm:text-5xl lg:text-[4.5rem] font-display font-bold leading-[1.05] mb-6">
                        <span className="block text-white">Geleneksel</span>
                        <span className="block text-white">Denetimi Yıkan</span>
                        <span className="block shimmer-text">Dijital Koç</span>
                    </h1>

                    <p className="text-lg text-gray-400 mb-10 max-w-lg leading-relaxed">
                        Müşteri temsilcilerinizi{' '}
                        <span className="text-white font-medium">geliştiren</span> yapay zeka.
                        Duygu analizi, stres yönetimi ve otonom eğitim modülleriyle
                        operasyonel verimliliği zirveye çıkarın.
                    </p>

                    {/* CTA buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-12">
                        <button className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-safe-600 to-vox-600 rounded-xl font-bold text-white hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-lg shadow-safe-500/25 group">
                            Hemen Keşfet
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={() => setIsVideoOpen(true)}
                            className="flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-bold text-white hover:bg-white/8 hover:-translate-y-0.5 transition-all group"
                        >
                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                            </div>
                            Tanıtım Filmi
                        </button>
                    </div>

                    {/* Trust indicators */}
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Shield className="w-4 h-4 text-safe-400" />
                            <span>%100 KVKK Uyumlu</span>
                        </div>
                        <div className="w-px h-4 bg-white/10 hidden sm:block" />
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Activity className="w-4 h-4 text-vox-400" />
                            <span>Gerçek Zamanlı Analiz</span>
                        </div>
                        <div className="w-px h-4 bg-white/10 hidden sm:block" />
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Zap className="w-4 h-4 text-yellow-400" />
                            <span>Turkcell Entegrasyonu</span>
                        </div>
                    </div>
                </motion.div>

                {/* Right — Dashboard mockup */}
                <motion.div
                    initial={{ opacity: 0, x: 32 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
                    className="relative w-full max-w-sm mx-auto lg:max-w-none"
                >
                    {/* Main card */}
                    <div className="relative z-10 bg-dark-800/70 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl shadow-black/40">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-5 pb-5 border-b border-white/6">
                            <div className="flex items-center gap-3">
                                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-gray-700 to-gray-600 flex items-center justify-center border border-white/10 text-sm font-bold">
                                    AY
                                </div>
                                <div>
                                    <h3 className="font-bold text-white text-sm">Ahmet Yılmaz</h3>
                                    <p className="text-xs text-gray-500">Kıdemli Temsilci · Ankara</p>
                                </div>
                            </div>
                            <div className="px-3 py-1.5 bg-green-500/12 text-green-400 rounded-lg text-sm font-bold border border-green-500/20">
                                94 / 100
                            </div>
                        </div>

                        {/* Waveform */}
                        <div className="mb-4 p-3.5 bg-white/3 rounded-2xl border border-white/6">
                            <div className="flex items-center gap-2 mb-3">
                                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                                <span className="text-xs text-gray-400 font-medium tracking-wide uppercase">Canlı Ses Analizi</span>
                            </div>
                            <div className="flex items-end gap-[3px] h-12">
                                {WAVE_HEIGHTS.map((h, i) => (
                                    <WaveBar key={i} height={h} delay={i * 0.075} />
                                ))}
                            </div>
                        </div>

                        {/* Metrics */}
                        <div className="space-y-3 mb-4">
                            <div className="p-3.5 bg-white/3 rounded-2xl border border-white/6">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-xs text-gray-400">Duygu Durumu</span>
                                    <span className="text-xs text-safe-400 font-bold">Pozitif ✓</span>
                                </div>
                                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: '85%' }}
                                        transition={{ delay: 1, duration: 1.2, ease: 'easeOut' }}
                                        className="h-full bg-gradient-to-r from-safe-500 to-vox-500 rounded-full"
                                    />
                                </div>
                            </div>
                            <div className="p-3.5 bg-white/3 rounded-2xl border border-white/6">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-xs text-gray-400">Stres Seviyesi</span>
                                    <span className="text-xs text-green-400 font-bold">Düşük ✓</span>
                                </div>
                                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: '18%' }}
                                        transition={{ delay: 1.2, duration: 1.2, ease: 'easeOut' }}
                                        className="h-full bg-green-500 rounded-full"
                                    />
                                </div>
                            </div>
                            <div className="p-3.5 bg-white/3 rounded-2xl border border-white/6">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-xs text-gray-400">Yorgunluk Seviyesi</span>
                                    <span className="text-xs text-orange-400 font-bold">Yüksek !</span>
                                </div>
                                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: '78%' }}
                                        transition={{ delay: 1.4, duration: 1.2, ease: 'easeOut' }}
                                        className="h-full bg-orange-400 rounded-full"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* AI suggestion */}
                        <div className="p-3.5 bg-safe-500/8 rounded-2xl border border-safe-500/15 flex gap-3 items-start">
                            <Zap className="w-4 h-4 text-safe-400 shrink-0 mt-0.5" />
                            <div>
                                <h4 className="text-white font-bold text-xs mb-1">AI Koçluk Önerisi</h4>
                                <p className="text-gray-400 text-xs leading-relaxed">
                                    Temsilci gereğinden fazla yorulmuş görünüyor. Kısa bir kahve molası performansı artırabilir.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Floating — active calls */}
                    <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute -right-4 lg:-right-10 top-6 z-20 w-44 p-3 bg-dark-900/92 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl hidden sm:block"
                    >
                        <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-lg bg-green-500/15 flex items-center justify-center border border-green-500/20">
                                <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-white">Ses Analizi Aktif</p>
                                <p className="text-[10px] text-gray-500">247 çağrı işleniyor</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Floating — KVKK shield */}
                    <motion.div
                        animate={{ y: [0, 9, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                        className="absolute -right-4 lg:-right-10 top-20 z-20 w-44 p-3 bg-dark-900/92 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl hidden sm:block"
                    >
                        <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-lg bg-vox-500/15 flex items-center justify-center border border-vox-500/20">
                                <Shield className="w-4 h-4 text-vox-400" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-white">KVKK Kalkanı</p>
                                <p className="text-[10px] text-gray-500">Aktif maskeleme</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-safe-600/10 to-vox-600/10 rounded-3xl blur-3xl -z-10 scale-110" />
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex">
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="flex flex-col items-center gap-1.5 text-gray-600"
                >
                    <span className="text-xs font-medium tracking-widest uppercase">Keşfet</span>
                    <ChevronDown className="w-4 h-4" />
                </motion.div>
            </div>

            <VideoModal
                isOpen={isVideoOpen}
                onClose={() => setIsVideoOpen(false)}
                videoId="vROLFZpDPvw"
            />
        </section>
    );
}
