import { Check, X } from 'lucide-react';

const rows = [
    { feature: 'Çağrı Kapsama',             traditional: '%2–5',         global: '%60–75',          safevox: '%100' },
    { feature: 'Çalışan Psikolojisi',        traditional: false,          global: 'Müşteri Odaklı',  safevox: true },
    { feature: 'Türkçe NLP',                 traditional: false,          global: 'İngilizce Odaklı',safevox: 'QLoRA Fine-Tune' },
    { feature: 'KVKK Uyumu',                 traditional: 'Riskli',       global: 'Yurt Dışı Sunucu',safevox: 'Yerli Veri' },
    { feature: 'Geri Bildirim Hızı',         traditional: 'Haftalık',     global: '24–48 Saat',      safevox: 'Gerçek Zamanlı' },
    { feature: 'Kurs Entegrasyonu',          traditional: false,          global: 'Kısmen',          safevox: 'Kişisel' },
];

function Cell({ val }) {
    if (val === true)  return <Check className="w-5 h-5 text-safe-400 mx-auto" />;
    if (val === false) return <X className="w-5 h-5 text-red-500/60 mx-auto" />;
    return <span>{val}</span>;
}

export default function CompetitiveEdge() {
    return (
        <section className="py-24 bg-dark-800 border-t border-white/6">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-14">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm font-medium mb-5">
                        Rekabet Analizi
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        Neden{' '}
                        <span className="text-safe-300">SafeVox?</span>
                    </h2>
                    <p className="text-gray-400 mt-4 max-w-xl mx-auto">
                        Rakipler skoru ölçüyor, biz insanı analiz ediyoruz — %100 yerli ve KVKK uyumlu.
                    </p>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-white/8">
                                <th className="text-left py-4 px-5 text-gray-500 font-medium w-1/4">Özellik</th>
                                <th className="py-4 px-5 text-gray-500 font-medium text-center">Geleneksel Denetim</th>
                                <th className="py-4 px-5 text-gray-500 font-medium text-center">Verint / NICE</th>
                                <th className="py-4 px-5 font-bold text-center text-safe-300">
                                    SafeVox
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, i) => (
                                <tr
                                    key={i}
                                    className={`border-b border-white/5 transition-colors hover:bg-white/2 ${i % 2 === 0 ? '' : 'bg-white/1'}`}
                                >
                                    <td className="py-4 px-5 text-gray-300 font-medium">{row.feature}</td>
                                    <td className="py-4 px-5 text-gray-500 text-center"><Cell val={row.traditional} /></td>
                                    <td className="py-4 px-5 text-gray-500 text-center"><Cell val={row.global} /></td>
                                    <td className="py-4 px-5 text-safe-400 font-semibold text-center"><Cell val={row.safevox} /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
