import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

const sections = [
    {
        title: '1. Veri Sorumlusu',
        content: `Bu Gizlilik Politikası, SafeVox ("biz", "şirketimiz") tarafından yönetilen safevox.tr ve safevox.com.tr alan adlı web siteleri ile hizmetlere uygulanmaktadır. Kişisel verileriniz bakımından veri sorumlusu SafeVox'tur.`,
    },
    {
        title: '2. Toplanan Veriler',
        content: `Web sitemizi ziyaret ettiğinizde veya hizmetlerimizi kullandığınızda aşağıdaki veriler toplanabilir:\n\n• İletişim formu aracılığıyla sağladığınız ad, e-posta adresi, telefon numarası ve şirket bilgileri\n• Demo talep formlarından elde edilen iletişim bilgileri\n• Tarayıcı türü, IP adresi ve ziyaret süresi gibi otomatik teknik veriler (analitik amaçlı, anonim)`,
    },
    {
        title: '3. Verilerin Kullanım Amaçları',
        content: `Toplanan veriler şu amaçlarla kullanılmaktadır:\n\n• Demo talep ve iletişim mesajlarınıza yanıt vermek\n• Hizmetlerimizi geliştirmek ve kullanıcı deneyimini iyileştirmek\n• Yasal yükümlülüklerimizi yerine getirmek\n• Pazarlama iletişimi (açık rızanız alınmak kaydıyla)`,
    },
    {
        title: '4. Veri Güvenliği',
        content: `Kişisel verilerinizi yetkisiz erişime, kayıplara veya kötüye kullanıma karşı korumak için endüstri standardı teknik ve idari önlemler alıyoruz. SafeVox platformu, çağrı merkezi verilerini işlerken TCKN ve telefon numarası gibi hassas bilgileri milisaniyeler içinde maskeleyen KVKK uyumlu altyapı kullanmaktadır.`,
    },
    {
        title: '5. Üçüncü Taraflarla Paylaşım',
        content: `Kişisel verileriniz; yasal zorunluluk bulunmadıkça, açık rızanız olmaksızın üçüncü taraflarla paylaşılmaz, satılmaz veya kiralanmaz. Hizmet sunumu için çalıştığımız üçüncü taraf tedarikçiler yalnızca gerekli minimum veriyle sınırlı tutulur.`,
    },
    {
        title: '6. Haklarınız',
        content: `KVKK kapsamında aşağıdaki haklara sahipsiniz:\n\n• Verilerinizin işlenip işlenmediğini öğrenme\n• İşlenmişse buna ilişkin bilgi talep etme\n• İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme\n• Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme\n• Eksik veya yanlış işlenmiş verilerin düzeltilmesini isteme\n• Verilerin silinmesini veya yok edilmesini talep etme\n• Kişisel veri işlenmesi sebebiyle uğradığınız zararın tazmin edilmesini isteme\n\nBu haklarınızı kullanmak için info@safevox.tr adresine yazabilirsiniz.`,
    },
    {
        title: '7. Çerezler (Cookies)',
        content: `Web sitemiz, kullanıcı deneyimini iyileştirmek amacıyla sınırlı düzeyde çerez kullanabilir. Tarayıcı ayarlarınızdan çerezleri devre dışı bırakabilirsiniz; ancak bu durumda bazı site özellikleri düzgün çalışmayabilir.`,
    },
    {
        title: '8. Politika Güncellemeleri',
        content: `Bu Gizlilik Politikası zaman zaman güncellenebilir. Değişiklikler bu sayfada yayımlanır ve güncel tutulur. Politikayı düzenli olarak gözden geçirmenizi öneririz.`,
    },
    {
        title: '9. İletişim',
        content: `Gizlilik ile ilgili sorularınız için:\n\nE-posta: info@safevox.tr\nTelefon: 0551 158 71 45\nAdres: Çankaya, Ankara`,
    },
];

export default function PrivacyPage() {
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
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-safe-500/10 border border-safe-500/20 text-safe-400 text-sm font-medium mb-6">
                        <Shield className="w-4 h-4" />
                        Yasal Belgeler
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Gizlilik Politikası</h1>
                    <p className="text-gray-400">Son güncelleme: Mart 2025</p>
                    <p className="text-gray-400 mt-4 leading-relaxed">
                        SafeVox olarak kişisel verilerinizin gizliliğine büyük önem veriyoruz.
                        Bu politika, verilerinizi nasıl topladığımızı, kullandığımızı ve koruduğumuzu açıklar.
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
