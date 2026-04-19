import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

function AnimatedDots() {
    const dotsRef = useRef(null);

    useEffect(() => {
        const canvas = dotsRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animId;
        let time = 0;

        const resize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        const dot = 3;
        const size = 24;

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const cols = Math.ceil(canvas.width / size);
            const rows = Math.ceil(canvas.height / size);

            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    const cx = c * size + size / 2;
                    const cy = r * size + size / 2;
                    const dist = Math.sqrt(Math.pow(cx - canvas.width / 2, 2) + Math.pow(cy - canvas.height / 2, 2));
                    const maxDist = Math.sqrt(Math.pow(canvas.width / 2, 2) + Math.pow(canvas.height / 2, 2));
                    const wave = Math.sin(dist * 0.02 - time * 2) * 0.5 + 0.5;
                    const alpha = wave * (1 - dist / maxDist) * 0.6;

                    ctx.beginPath();
                    ctx.arc(cx, cy, dot / 2, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(255,255,255,${alpha})`;
                    ctx.fill();
                }
            }
            time += 0.02;
            animId = requestAnimationFrame(draw);
        };
        draw();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animId);
        };
    }, []);

    return <canvas ref={dotsRef} className="absolute inset-0 w-full h-full" />;
}

export default function DemoRequestSection() {
    const [email, setEmail] = useState('');
    const [step, setStep] = useState('email');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            setStep('success');
            setSubmitted(true);
        }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black" id="demo">
            <AnimatedDots />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.8)_0%,_transparent_100%)]" />
            <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-black to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent" />

            <div className="relative z-10 w-full max-w-sm mx-auto px-4 text-center">
                <AnimatePresence mode="wait">
                    {step === 'email' ? (
                        <motion.div
                            key="email-step"
                            initial={{ opacity: 0, x: -60 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -60 }}
                            transition={{ duration: 0.4, ease: 'easeOut' }}
                            className="space-y-6"
                        >
                            <div className="space-y-2">
                                <h2 className="text-4xl font-bold text-white font-display leading-tight">
                                    Ücretsiz Demo
                                </h2>
                                <p className="text-2xl text-white/60 font-light">
                                    24 saatte ekibimiz sizi arasın
                                </p>
                            </div>

                            <div className="flex items-center justify-center gap-3">
                                {['%100 KVKK Uyumlu', 'Ücretsiz Kurulum', '7/24 Destek'].map((badge, i) => (
                                    <span key={i} className="text-xs text-white/50 border border-white/10 rounded-full px-3 py-1">
                                        {badge}
                                    </span>
                                ))}
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-3">
                                <div className="relative">
                                    <input
                                        type="email"
                                        placeholder="kurumsal@email.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full bg-white/5 text-white border border-white/10 rounded-full py-3 px-6 focus:outline-none focus:border-safe-400/50 text-center placeholder:text-white/30 backdrop-blur-sm"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="absolute right-1.5 top-1.5 text-dark-900 w-9 h-9 flex items-center justify-center rounded-full bg-white hover:bg-white/90 transition-all group overflow-hidden"
                                    >
                                        <span className="relative w-full h-full flex items-center justify-center">
                                            <span className="absolute transition-transform duration-300 group-hover:translate-x-full">→</span>
                                            <span className="absolute transition-transform duration-300 -translate-x-full group-hover:translate-x-0">→</span>
                                        </span>
                                    </button>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-3 bg-white hover:bg-white/90 text-dark-900 rounded-full font-semibold transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-white/10"
                                >
                                    Demo Talep Et
                                </button>
                            </form>

                            <p className="text-xs text-white/30">
                                Veya{' '}
                                <Link to="/iletisim" className="underline text-white/40 hover:text-white/60 transition-colors">
                                    iletişim formumuzu
                                </Link>{' '}
                                doldurun
                            </p>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="success-step"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: 'easeOut' }}
                            className="space-y-6 text-center"
                        >
                            <motion.div
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-safe-500 to-vox-500 flex items-center justify-center"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </motion.div>
                            <h2 className="text-4xl font-bold text-white font-display">Harika!</h2>
                            <p className="text-xl text-white/60 font-light">
                                <span className="text-safe-300 font-medium">{email}</span> adresinize
                                <br />24 saat içinde dönüş yapacağız.
                            </p>
                            <motion.button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                onClick={() => { setStep('email'); setEmail(''); }}
                                className="text-sm text-white/40 hover:text-white/60 transition-colors"
                            >
                                Farklı bir e-posta ile tekrar dene
                            </motion.button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
