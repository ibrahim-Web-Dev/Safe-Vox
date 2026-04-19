import { Link } from 'react-router-dom';
import { ArrowRight, Mail, CheckCircle2 } from 'lucide-react';

const perks = [
    '24 saatte yanıt garantisi',
    'Ücretsiz demo & kurulum',
    'KVKK uyumlu altyapı',
];

export default function CTASection() {
    return (
        <section className="py-28 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(14,165,233,0.06),transparent)] pointer-events-none" />

            <div className="relative max-w-4xl mx-auto px-6 text-center">
                <div className="relative bg-dark-800/70 backdrop-blur-xl border border-white/10 rounded-3xl px-10 py-16 md:px-16 overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[180px] bg-safe-500/8 blur-[80px] rounded-full pointer-events-none" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[360px] h-[120px] bg-vox-500/8 blur-[60px] rounded-full pointer-events-none" />

                    <span className="inline-block px-4 py-1.5 rounded-full bg-safe-500/10 border border-safe-500/20 text-safe-300 text-sm font-medium mb-7">
                        Harekete Geçin
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        Çağrı Merkezinizi
                        <br />
                        <span className="text-safe-300">
                            Dönüştürmeye Hazır mısınız?
                        </span>
                    </h2>

                    <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto">
                        SafeVox'un ücretsiz demosunu talep edin. Ekibimiz 24 saat içinde
                        sizinle iletişime geçsin.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                        <Link
                            to="/iletisim"
                            className="flex items-center justify-center gap-2 px-8 py-4 bg-white rounded-xl font-bold text-dark-900 hover:bg-white/90 hover:-translate-y-0.5 transition-all shadow-lg shadow-white/10 group"
                        >
                            Ücretsiz Demo Talebi
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <a
                            href="mailto:info@safevox.tr"
                            className="flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-bold text-white hover:bg-white/8 hover:-translate-y-0.5 transition-all"
                        >
                            <Mail className="w-5 h-5" />
                            E-posta Gönder
                        </a>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
                        {perks.map((p, i) => (
                            <span key={i} className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-safe-500 shrink-0" />
                                {p}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
