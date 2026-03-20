import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';
import About from '../components/About';
import Impact from '../components/Impact';
import CTASection from '../components/CTASection';

export default function Home() {
    return (
        <>
            <Hero />
            <HowItWorks />
            <Features />
            <About />
            <Impact />
            <CTASection />
        </>
    );
}
