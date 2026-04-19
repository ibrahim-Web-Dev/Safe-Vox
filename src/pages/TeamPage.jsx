import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Linkedin, Mail, ArrowRight, Users } from 'lucide-react';
import { FloatingPaths } from '../components/BackgroundPaths';

const team = [
    {
        name: 'İbrahim Yılmaz',
        role: 'Proje Sahibi & Teknik Lider',
        image: '/ibrahim.jpeg',
        bio: 'Java Spring Boot ve AI mimarisi üzerine uzmanlaşmış, projenin teknik vizyonunu belirleyen lider. Akustik analiz altyapısından KVKK veri maskeleme katmanına kadar SafeVox\'un tüm teknik çatısını tasarladı.',
        expertise: ['Java Spring Boot', 'AI Mimarisi', 'Akustik Analiz', 'Sistem Tasarımı'],
        linkedin: 'https://www.linkedin.com/in/ibrahim-y%C4%B1lmaz-07745b29b/',
        email: 'ibrahimyilmaz0713@gmail.com',
        gradient: 'from-safe-500/20 to-safe-500/5',
        accent: 'text-safe-400',
        border: 'hover:border-safe-500/40',
    },
    {
        name: 'Selen Nuyan',
        role: 'İletişim ve Algı Yönetimi',
        image: '/selen.jpeg',
        bio: 'Müşteri psikolojisi ve iletişim stratejileri konusunda uzman. SafeVox\'un insan odaklı dilini, kurumsal iletişim çerçevesini ve pazar konumlandırmasını kurguladı.',
        expertise: ['Müşteri Psikolojisi', 'Marka İletişimi', 'İçerik Stratejisi', 'Algı Yönetimi'],
        linkedin: 'https://www.linkedin.com/in/selen-nuyan-1a1a18327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        email: 'selennuyan@gmail.com',
        gradient: 'from-vox-500/20 to-vox-500/5',
        accent: 'text-vox-400',
        border: 'hover:border-vox-500/40',
    },
    {
        name: 'Sıla Nuyan',
        role: 'Kültürel ve Dilsel Analiz',
        image: '/Sıla.jpeg',
        bio: 'Türkçenin semantik yapısı ve kültürel nüansları üzerine çalışarak yapay zekanın yerel uyumunu sağladı. Duygu analizi modelinin Türkçe hassasiyetini geliştiren temel isim.',
        expertise: ['Semantik Analiz', 'Türkçe NLP', 'Kültürel Uyum', 'Dilbilim'],
        linkedin: 'https://www.linkedin.com/in/s%C4%B1la-n-3b274932a?utm_source=share_via&utm_content=profile&utm_medium=member_android',
        email: 'silanuyan7@gmail.com',
        gradient: 'from-purple-500/20 to-purple-500/5',
        accent: 'text-purple-400',
        border: 'hover:border-purple-500/40',
    },
];

function TeamCard({ member, index }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            className={`group bg-gradient-to-br ${member.gradient} border border-white/8 ${member.border} rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-safe-500/5 hover:-translate-y-2`}
        >
            <div className="aspect-[4/3] overflow-hidden relative">
                <img
                    src={member.image}
                    alt={member.name}
                    className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${isInView ? 'grayscale-0' : 'grayscale'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent" />
            </div>
            <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                <p className={`text-sm font-semibold mb-4 uppercase tracking-wider ${member.accent}`}>
                    {member.role}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{member.bio}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                    {member.expertise.map((tag, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 font-medium">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="flex gap-4 pt-4 border-t border-white/8">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium">
                        <Linkedin className="w-4 h-4" />
                        LinkedIn
                    </a>
                    <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium">
                        <Mail className="w-4 h-4" />
                        E-posta
                    </a>
                </div>
            </div>
        </motion.div>
    );
}

export default function TeamPage() {
    return (
        <div className="pt-24 bg-dark-900 min-h-screen">
            {/* Hero Banner */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <FloatingPaths position={1} />
                    <FloatingPaths position={-1} />
                    <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-safe-600/10 rounded-full blur-[120px]" />
                    <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-vox-600/10 rounded-full blur-[120px]" />
                </div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-vox-500/10 border border-vox-500/20 text-vox-400 text-sm font-medium mb-6">
                            <Users className="w-4 h-4" />
                            Ekibimiz
                        </div>
                        <h1 className="text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                            Teknolojiyi{' '}
                            <span className="text-safe-300">
                                İnsanla Buluşturan
                            </span>{' '}
                            Ekip
                        </h1>
                        <p className="text-xl text-gray-400 leading-relaxed">
                            Mühendislik, iletişim ve dilbilim disiplinlerini bir araya getiren
                            küçük ama güçlü bir ekip. SafeVox'u hayal eden, tasarlayan ve inşa edenler.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Team Cards */}
            <section className="py-10 pb-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-8">
                        {team.map((member, index) => (
                            <TeamCard key={index} member={member} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Join Section */}
            <section className="py-20 bg-dark-800">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold mb-4">Birlikte Çalışalım</h2>
                        <p className="text-gray-400 text-lg mb-8">
                            SafeVox ailesine katılmak veya işbirliği yapmak ister misiniz?
                            Her zaman yetenekli insanlarla tanışmaya açığız.
                        </p>
                        <Link
                            to="/iletisim"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-dark-900 rounded-xl font-bold hover:bg-white/90 transition-all shadow-lg shadow-white/10 group"
                        >
                            İletişime Geç
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
