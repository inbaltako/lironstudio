import React, { useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Hero = () => {
    const { t } = useLanguage();
    const bgRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY;
            if (bgRef.current && scrolled < window.innerHeight) {
                bgRef.current.style.transform = `translateY(${scrolled * 0.15}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="relative w-full h-screen overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div 
                    ref={bgRef}
                    className="w-full h-[110%] bg-cover bg-center hero-parallax" 
                    id="hero-bg" 
                    style={{ 
                        backgroundImage: "url('assets/images/hero.jpg')", 
                        transform: 'translateY(0)' 
                    }}
                ></div>
            </div>
            <div className="absolute inset-0 flex flex-col items-start text-start z-10 px-margin-mobile md:px-margin-desktop bg-ink/20 justify-end pb-24">
                <div className="fade-in-scroll visible">
                    {/* Brand Name - stays Liron Tako in Caveat font */}
                    <h1 className="font-handwritten text-5xl md:text-[96px] text-off-white mb-4">
                        {t('heroTitle')}
                    </h1>
                    <p className="font-label-caps text-label-caps text-off-white/90 tracking-[0.3em] uppercase">
                        {t('heroSubtitle')}
                    </p>
                </div>
            </div>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
                <a href="#showcase" className="text-off-white">
                    <span className="material-symbols-outlined animate-bounce text-3xl">expand_more</span>
                </a>
            </div>
        </header>
    );
};
