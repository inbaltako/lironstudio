import React, { useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { Gallery } from './components/Gallery';
import { Process } from './components/Process';
import { Bio } from './components/Bio';
import { Contact } from './components/Contact';

function MainApp() {
    // Scroll Intersection Observer for Entrance Animations
    useEffect(() => {
        const observerOptions = {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Target all fade-in-scroll items
        const targets = document.querySelectorAll('.fade-in-scroll');
        targets.forEach(el => observer.observe(el));

        return () => {
            targets.forEach(el => observer.unobserve(el));
            observer.disconnect();
        };
    }, []);

    return (
        <Layout>
            <Hero />
            <Gallery />
            <Process />
            <Bio />
            <Contact />
        </Layout>
    );
}

export default function App() {
    return (
        <LanguageProvider>
            <MainApp />
        </LanguageProvider>
    );
}
