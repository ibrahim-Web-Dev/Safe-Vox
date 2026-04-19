const problems = [
    {
        value: '%95',
        label: 'Çağrı Denetimsizliği',
        desc: 'Çağrıların %95\'i hiç analiz edilmiyor — büyük bir gelişim fırsatı kaybolup gidiyor.',
    },
    {
        value: '%25–30',
        label: 'Yıllık Turnover',
        desc: 'TBB verilerine göre çeyreklik devir oranı %8. Tükenmişlik ve cezalandırıcı denetim temel neden.',
    },
    {
        value: '28',
        label: 'İş Günü Ziyanı',
        desc: 'Her ayrılış, 28 tam iş günü eğitimin çöpe gitmesi demektir. Yeni çalışanın yetişmesi 4–8 ay daha alıyor.',
    },
];

export default function ProblemStrip() {
    return (
        <section className="py-16 bg-dark-800 border-y border-white/6">
            <div className="max-w-7xl mx-auto px-6">
                <p className="text-center text-xs font-bold tracking-widest uppercase text-gray-500 mb-10">
                    Çağrı Merkezi Sektöründeki Kısır Döngü
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                    {problems.map((p, i) => (
                        <div
                            key={i}
                            className="bg-dark-900 border border-white/8 rounded-2xl p-7 hover:border-white/14 transition-all"
                        >
                            <div className="text-4xl font-bold text-white mb-2">{p.value}</div>
                            <div className="text-sm font-semibold text-gray-300 mb-3">{p.label}</div>
                            <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
                        </div>
                    ))}
                </div>
                <p className="text-center text-sm text-gray-500 mt-10">
                    SafeVox ne cezalandırır ne de işinden eder —{' '}
                    <span className="text-white font-medium">geliştirir.</span>
                </p>
            </div>
        </section>
    );
}
