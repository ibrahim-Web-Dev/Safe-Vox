import { Shield, Cpu, Activity, GraduationCap, Mic, Smile } from 'lucide-react';

const features = [
    {
        icon: Mic,
        title: 'Akustik & Semantik Analiz',
        description:
            'Sadece kelimeleri değil, ses tonundaki stresi ve frekans değişimlerini de analiz eden hibrit yapı.',
        border: 'hover:border-safe-500/30',
        iconBg: 'bg-safe-500/12 border-safe-500/20',
        iconColor: 'text-safe-400',
        tag: 'Akustik',
    },
    {
        icon: Smile,
        title: 'Duygu İklimi Ölçümü',
        description:
            "Müşteri ve temsilci arasındaki duygusal atmosferi ölçerek 'denetim körlüğü'ne son verir.",
        border: 'hover:border-vox-500/30',
        iconBg: 'bg-vox-500/12 border-vox-500/20',
        iconColor: 'text-vox-400',
        tag: 'Duygu',
    },
    {
        icon: GraduationCap,
        title: 'Otonom Eğitim Modülleri',
        description:
            'Tespit edilen eksikliklere göre çeşitli eğitim platformlarından kişiye özel kurs ataması yapar.',
        border: 'hover:border-purple-500/30',
        iconBg: 'bg-purple-500/12 border-purple-500/20',
        iconColor: 'text-purple-400',
        tag: 'Koçluk',
    },
    {
        icon: Shield,
        title: 'KVKK Veri Kalkanı',
        description:
            'TCKN ve telefon gibi hassas verileri milisaniyeler içinde maskeleyerek %100 güvenli kayıt tutar.',
        border: 'hover:border-green-500/30',
        iconBg: 'bg-green-500/12 border-green-500/20',
        iconColor: 'text-green-400',
        tag: 'Güvenlik',
    },
    {
        icon: Activity,
        title: 'Tükenmişlik Tespiti',
        description:
            'Yorgunluk ve stres seviyelerini izleyerek proaktif mola önerileri sunar, çalışan refahını korur.',
        border: 'hover:border-red-500/30',
        iconBg: 'bg-red-500/12 border-red-500/20',
        iconColor: 'text-red-400',
        tag: 'Refah',
    },
    {
        icon: Cpu,
        title: 'Rasyonel Raporlama',
        description:
            'Orta kademe yöneticilere veri odaklı, objektif performans raporları sunar.',
        border: 'hover:border-amber-500/30',
        iconBg: 'bg-amber-500/12 border-amber-500/20',
        iconColor: 'text-amber-400',
        tag: 'Analitik',
    },
];

export default function Features() {
    return (
        <section id="features" className="py-28 relative bg-dark-900">
            <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm font-medium mb-5">
                        Özellikler
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
                        Geleceğin Çağrı Merkezi{' '}
                        <span className="text-safe-300">Teknolojisi</span>
                    </h2>

                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        SafeVox, sıradan bir denetim aracı değil; operasyonunuzun görünmeyen
                        risklerini yöneten bir yapay zeka ekosistemidir.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={index}
                                className={`group relative p-7 rounded-2xl bg-dark-800 border border-white/8 ${feature.border} transition-all duration-300 hover:-translate-y-1 overflow-hidden`}
                            >
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/[0.02] rounded-3xl" />

                                <span className="absolute top-5 right-5 text-[10px] font-bold tracking-widest uppercase text-gray-600">
                                    {feature.tag}
                                </span>

                                <div className={`mb-6 w-14 h-14 rounded-2xl flex items-center justify-center border ${feature.iconBg}`}>
                                    <Icon className={`w-6 h-6 ${feature.iconColor}`} />
                                </div>

                                <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm">{feature.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
