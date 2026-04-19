import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { UserCheck, Heart, Zap, Target, Eye, Shield, ArrowRight, CheckCircle } from 'lucide-react';
import { FloatingPaths } from '../components/BackgroundPaths';
import ShaderAnimationSection from '../components/ShaderAnimation';

const values = [
    {
        icon: <Heart className="w-7 h-7 text-red-400" />,
        title: 'İnsan Odaklılık',
        desc: 'Teknolojiyi bir araç olarak görüyoruz. Asıl değer, insanların potansiyelini açığa çıkarmaktır.',
    },
    {
        icon: <Shield className="w-7 h-7 text-safe-400" />,
        title: 'Güven & Şeffaflık',
        desc: 'KVKK tam uyumu ve açık veri politikasıyla çalışanların ve kurumların güvenini kazanırız.',
    },
    {
        icon: <Zap className="w-7 h-7 text-yellow-400" />,
        title: 'Sürekli Gelişim',
        desc: 'Statik çözümler değil, öğrenen ve gelişen bir yapay zeka ekosistemi sunuyoruz.',
    },
    {
        icon: <Target className="w-7 h-7 text-vox-400" />,
        title: 'Ölçülebilir Etki',
        desc: 'Her özelliğimizi somut iş çıktılarıyla destekliyoruz. Soyut vaatler değil, gerçek veriler.',
    },
];

const milestones = [
    {
        year: '2025',
        title: 'Fikrin Doğuşu',
        desc: 'Çağrı merkezlerindeki örneklem bazlı, öznel denetim sorununu çözmek için SafeVox konsepti geliştirildi.',
    },
    {
        year: '2025',
        title: 'İlk Prototip',
        desc: 'Akustik ve semantik analiz modeli test ortamında başarıyla çalıştırıldı; %100 çağrı kapsama hedefine ulaşıldı.',
    },
    {
        year: '2025',
        title: 'KVKK Altyapısı',
        desc: 'Hassas veri maskeleme (TCKN, telefon) ve tam KVKK uyum katmanı tamamlandı. Sıfır veri ihlali kaydedildi.',
    },
    {
        year: '2026',
        title: 'Turkcell Yarının Teknoloji Liderleri',
        desc: "SafeVox, Turkcell'in prestijli 'Yarının Teknoloji Liderleri' programına seçilerek ulusal sahneye taşındı.",
    },
];

export default function AboutPage() {
    return (
        <div className="pt-24 bg-dark-900 min-h-screen">
            {/* Hero Banner */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <FloatingPaths position={1} />
                    <FloatingPaths position={-1} />
                    <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-safe-600/10 rounded-full blur-[120px]" />
                    <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-vox-600/10 rounded-full blur-[120px]" />
                </div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-safe-500/10 border border-safe-500/20 text-safe-400 text-sm font-medium mb-6">
                            <UserCheck className="w-4 h-4" />
                            Hakkımızda
                        </div>
                        <h1 className="text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                            Yapay Zekayı{' '}
                            <span className="text-safe-300">
                                İnsanın Yanına
                            </span>{' '}
                            Koyduk
                        </h1>
                        <p className="text-xl text-gray-400 leading-relaxed">
                            SafeVox, çağrı merkezi temsilcilerini geliştiren ve destekleyen
                            bir yapay zeka platformu olarak doğdu. Amacımız tek:
                            teknolojiyi insanın lehine çalıştırmak.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 bg-dark-800">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="bg-dark-900/60 border border-white/8 rounded-3xl p-10"
                        >
                            <div className="w-14 h-14 bg-safe-500/15 rounded-2xl flex items-center justify-center mb-6">
                                <Target className="w-7 h-7 text-safe-400" />
                            </div>
                            <h2 className="text-3xl font-bold text-white mb-4">Misyonumuz</h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Çağrı merkezlerinde geleneksel, cezalandırıcı denetim anlayışını ortadan kaldırmak;
                                yerine veriye dayalı, empatik ve kişiselleştirilmiş bir koçluk deneyimi sunmak.
                                Her temsilcinin en iyi versiyonuna ulaşmasını sağlamak.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="bg-dark-900/60 border border-white/8 rounded-3xl p-10"
                        >
                            <div className="w-14 h-14 bg-vox-500/15 rounded-2xl flex items-center justify-center mb-6">
                                <Eye className="w-7 h-7 text-vox-400" />
                            </div>
                            <h2 className="text-3xl font-bold text-white mb-4">Vizyonumuz</h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Türkiye'nin çağrı merkezi sektöründe yapay zeka destekli koçluğun standart hale
                                geldiği bir gelecek inşa etmek. Çalışan memnuniyeti ve operasyonel verimlilik
                                arasındaki denklemi yeniden yazmak.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20 bg-dark-900">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                            Geleneksel Denetimi Kıran{' '}
                            <span className="text-safe-400">Bir Fikrin Hikayesi</span>
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-6">
                            Çağrı merkezlerinde yaşanan en büyük sorunlardan biri, kalite denetiminin hâlâ
                            örneklem bazlı ve öznel kalmasıydı. Yüzlerce çağrıdan sadece 3-4 tanesi dinleniyor,
                            değerlendirme kişiden kişiye değişiyordu.
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            SafeVox bu körlüğe son vermek için tasarlandı. Akustik analiz, duygu zekası ve
                            otonom eğitim modülleriyle her çağrıyı değerlendiren, her temsilciye özel geri bildirim
                            veren bir sistem. Denetim değil, gelişim.
                        </p>
                        <div className="space-y-3">
                            {[
                                '%100 çağrı kapsama — örneklem hatası yok',
                                'Nesnel, veri odaklı değerlendirme',
                                'Kişiye özel gelişim yolları',
                                'KVKK uyumlu, güvenli altyapı',
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-gray-300">
                                    <CheckCircle className="w-5 h-5 text-safe-500 shrink-0" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-safe-600/15 to-vox-600/15 rounded-3xl blur-3xl" />
                        <div className="relative bg-dark-800/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl space-y-5">
                            {/* Header */}
                            <div className="flex items-center justify-between mb-2">
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">SafeVox Etkisi</p>
                                    <h3 className="text-white font-bold text-lg">Gerçek Zamanlı Özet</h3>
                                </div>
                                <div className="flex items-center gap-1.5 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full">
                                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                                    <span className="text-green-400 text-xs font-bold">Canlı</span>
                                </div>
                            </div>

                            {/* Stats row */}
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { label: 'Çağrı Kapsama', value: '%100', color: 'text-safe-400' },
                                    { label: 'Müşteri Memnuniyeti', value: '%20', color: 'text-vox-400' },
                                    { label: 'Turnover Azalışı', value: '%25', color: 'text-purple-400' },
                                    { label: 'Veri İhlali', value: '0', color: 'text-green-400' },
                                ].map((s, i) => (
                                    <div key={i} className="bg-white/3 border border-white/6 rounded-2xl p-4">
                                        <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
                                        <p className="text-xs text-gray-500 mt-1">{s.label}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Progress bars */}
                            <div className="space-y-3">
                                {[
                                    { label: 'Duygu Analizi Doğruluğu', pct: '92%', color: 'bg-gradient-to-r from-safe-500 to-vox-500' },
                                    { label: 'KVKK Uyum Skoru', pct: '100%', color: 'bg-green-500' },
                                    { label: 'Temsilci Gelişim Oranı', pct: '78%', color: 'bg-purple-500' },
                                ].map((b, i) => (
                                    <div key={i}>
                                        <div className="flex justify-between text-xs mb-1.5">
                                            <span className="text-gray-400">{b.label}</span>
                                            <span className="text-white font-bold">{b.pct}</span>
                                        </div>
                                        <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                                            <div className={`h-full ${b.color} rounded-full`} style={{ width: b.pct }} />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Footer tag */}
                            <div className="flex items-center gap-2 pt-2 border-t border-white/6">
                                <Shield className="w-4 h-4 text-safe-400" />
                                <p className="text-xs text-gray-500">KVKK tam uyumlu · Türkiye'de geliştiriliyor</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 bg-dark-800">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-14"
                    >
                        <h2 className="text-4xl font-bold mb-4">Değerlerimiz</h2>
                        <p className="text-gray-400 text-lg max-w-xl mx-auto">
                            Her kararımızı, her özelliğimizi bu değerler üzerine inşa ediyoruz.
                        </p>
                    </motion.div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((v, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-dark-900/70 border border-white/8 rounded-2xl p-7 hover:border-safe-500/30 transition-all"
                            >
                                <div className="mb-5">{v.icon}</div>
                                <h3 className="text-lg font-bold text-white mb-2">{v.title}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">{v.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Shader Animation — AI Engine Visual */}
            <ShaderAnimationSection />

            {/* Timeline */}
            <section className="py-20 bg-dark-900">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-14"
                    >
                        <h2 className="text-4xl font-bold mb-4">Yolculuğumuz</h2>
                        <p className="text-gray-400 text-lg">Fikrin doğuşundan bugüne SafeVox'un hikayesi.</p>
                    </motion.div>
                    <div className="relative">
                        <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-safe-500/50 via-vox-500/30 to-transparent" />
                        <div className="space-y-10">
                            {milestones.map((m, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.15 }}
                                    className="flex gap-8"
                                >
                                    <div className="relative shrink-0">
                                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-safe-600 to-vox-600 flex items-center justify-center shadow-lg shadow-safe-500/20">
                                            <span className="text-xs font-bold text-white">{m.year}</span>
                                        </div>
                                    </div>
                                    <div className="bg-dark-800 border border-white/8 rounded-2xl p-6 flex-1">
                                        <h3 className="text-lg font-bold text-white mb-2">{m.title}</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">{m.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-dark-800">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold mb-4">Ekibimizi Tanıyın</h2>
                        <p className="text-gray-400 text-lg mb-8">
                            SafeVox'u hayata geçiren disiplinlerarası ekip.
                        </p>
                        <Link
                            to="/ekibimiz"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-dark-900 rounded-xl font-bold hover:bg-white/90 transition-all shadow-lg shadow-white/10 group"
                        >
                            Ekibimizi Keşfet
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
