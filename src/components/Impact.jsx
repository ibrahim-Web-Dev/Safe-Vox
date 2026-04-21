const stats = [
    { value: '%100', label: 'Çağrı Analizi',              desc: 'Örneklem hatası olmadan tam kapsam.' },
    { value: '%20',  label: 'Müşteri Memnuniyeti Artışı', desc: 'Duygu analizi destekli çağrılarda memnuniyet artışı.' },
    { value: '%25',  label: 'Turnover Azalışı',           desc: 'AI destekli koçluk sistemleri uygulayan şirketlerde turnover 4.7 puan düşüyor.' },
    { value: '28',   label: 'İş Günü Kazanımı',           desc: 'Her ayrılışta çöpe giden eğitim süresi. SafeVox bu döngüyü kırar.' },
];

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
                <div className="text-center mb-20">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm font-medium mb-5">
                        Rakamlarla SafeVox
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
                        Ölçülebilir SafeVox Etkisi
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-14 items-start">
                    <div className="grid grid-cols-2 gap-5">
                        {stats.map((stat, i) => (
                            <div
                                key={i}
                                className="bg-dark-800/60 border border-white/8 rounded-3xl p-7 hover:border-white/14 transition-colors"
                            >
                                <div className="text-5xl font-bold mb-2 text-white">{stat.value}</div>
                                <div className="text-sm font-bold text-gray-300 mb-1">{stat.label}</div>
                                <div className="text-xs text-gray-500 leading-relaxed">{stat.desc}</div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-dark-800/70 border border-white/10 rounded-3xl p-8">
                        <p className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-2">Kurumsal Kazanımlar</p>
                        <h3 className="text-2xl font-bold text-white mb-8">
                            SafeVox sadece bir yazılım değil, stratejik bir ortaktır
                        </h3>
                        <ul className="space-y-4">
                            {gains.map((item, i) => (
                                <li key={i} className="flex items-center gap-3.5 text-gray-300 text-sm">
                                    <div className="w-6 h-6 rounded-full bg-white/8 flex items-center justify-center shrink-0 border border-white/10">
                                        <div className="w-2 h-2 rounded-full bg-white/60" />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
