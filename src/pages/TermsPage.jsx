import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

const sections = [
    {
        title: '1. Kabul ve Kapsam',
        content: `Bu Kullanım Koşulları ("Koşullar"), safevox.tr ve safevox.com.tr alan adlı web sitelerini ve SafeVox hizmetlerini kullanan tüm kullanıcılar için geçerlidir. Siteyi ziyaret ederek veya hizmetlerimizi kullanarak bu koşulları kabul etmiş sayılırsınız.`,
    },
    {
        title: '2. Hizmet Tanımı',
        content: `SafeVox, çağrı merkezleri için yapay zeka destekli performans yönetimi ve koçluk çözümleri sunan bir teknoloji platformudur. Web sitemiz; ürün tanıtımı, demo talebi, ekip bilgileri ve iletişim gibi bilgilendirme hizmetleri içermektedir.`,
    },
    {
        title: '3. Kullanım Kuralları',
        content: `Hizmetlerimizi kullanırken aşağıdaki kurallara uymayı kabul edersiniz:\n\n• Siteyi yasalara aykırı amaçlarla kullanmamak\n• Diğer kullanıcıların veya sistemlerin güvenliğini tehlikeye atacak eylemlerden kaçınmak\n• Yanlış veya yanıltıcı bilgi vermemek\n• SafeVox'un yazılı izni olmaksızın içeriklerimizi kopyalamamak, dağıtmamak veya ticari amaçla kullanmamak\n• Otomatik araçlar, botlar veya scraperlar aracılığıyla içerik çekmemek`,
    },
    {
        title: '4. Fikri Mülkiyet',
        content: `SafeVox markası, logosu, tasarımları, yazılımı ve tüm içerikleri SafeVox'a ait olup fikri mülkiyet hakları kapsamında korunmaktadır. Aksi belirtilmedikçe kullanıcılara hiçbir lisans veya hak devredilmez.\n\nWeb sitemizde görünen içerikleri yalnızca kişisel ve ticari olmayan amaçlarla görüntüleyebilirsiniz.`,
    },
    {
        title: '5. Sorumluluk Sınırlaması',
        content: `SafeVox, web sitesinin kesintisiz veya hatasız çalışacağını garanti etmez. Teknik arızalar, bakım çalışmaları veya mücbir sebepler nedeniyle erişim geçici olarak kesilebilir.\n\nSite üzerinden sağlanan bilgiler genel bilgilendirme amaçlıdır ve profesyonel danışmanlık hizmeti niteliği taşımaz. Bu bilgilere dayanılarak alınan kararlardan SafeVox sorumlu tutulamaz.`,
    },
    {
        title: '6. Üçüncü Taraf Bağlantıları',
        content: `Web sitemiz, üçüncü taraf web sitelerine bağlantılar içerebilir. Bu siteler SafeVox'un kontrolünde değildir ve içerikleri, gizlilik politikaları veya uygulamaları hakkında sorumluluk kabul etmeyiz.`,
    },
    {
        title: '7. Değişiklikler',
        content: `SafeVox bu Kullanım Koşulları'nı herhangi bir zamanda güncelleme hakkını saklı tutar. Güncellemeler bu sayfada yayımlanır. Hizmetleri kullanmaya devam etmeniz, güncel koşulları kabul ettiğiniz anlamına gelir.`,
    },
    {
        title: '8. Uygulanacak Hukuk',
        content: `Bu Koşullar, Türkiye Cumhuriyeti hukukuna tabidir. Herhangi bir uyuşmazlık durumunda Ankara mahkemeleri ve icra daireleri yetkilidir.`,
    },
    {
        title: '9. İletişim',
        content: `Bu Kullanım Koşulları hakkındaki sorularınız için:\n\nE-posta: ibrahimyilmaz0713@gmail.com\nTelefon: 0551 158 71 45\nAdres: Çankaya, Ankara`,
    },
];

export default function TermsPage() {
    return (
        <div className="pt-28 pb-20 bg-dark-900 min-h-screen">
            <div className="max-w-3xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-14"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-vox-500/10 border border-vox-500/20 text-vox-400 text-sm font-medium mb-6">
                        <FileText className="w-4 h-4" />
                        Yasal Belgeler
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Kullanım Koşulları</h1>
                    <p className="text-gray-400">Son güncelleme: Mart 2025</p>
                    <p className="text-gray-400 mt-4 leading-relaxed">
                        Lütfen SafeVox hizmetlerini kullanmadan önce bu koşulları dikkatlice okuyunuz.
                        Hizmetlerimizi kullanarak bu koşulları kabul etmiş sayılırsınız.
                    </p>
                </motion.div>

                {/* Sections */}
                <div className="space-y-8">
                    {sections.map((sec, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="bg-dark-800/60 border border-white/8 rounded-2xl p-7"
                        >
                            <h2 className="text-lg font-bold text-white mb-4">{sec.title}</h2>
                            <p className="text-gray-400 text-sm leading-relaxed whitespace-pre-line">{sec.content}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
