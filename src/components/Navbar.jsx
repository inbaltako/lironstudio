import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Navbar = () => {
    const { toggleLanguage, t } = useLanguage();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* TopNavBar */}
            <nav 
                id="top-nav"
                className={`bg-surface/0 backdrop-blur-md text-primary docked full-width top-0 sticky z-50 border-b transition-all duration-500 flat no-shadows ${
                    scrolled ? 'nav-scrolled border-outline-variant/30' : 'border-outline-variant/0'
                }`}
            >
                <div className="flex justify-between items-center w-full px-margin-desktop py-base max-w-container-max mx-auto">
                    {/* Logo */}
                    <div className="font-headline-md text-headline-md tracking-tighter text-primary" style={{ fontFamily: 'Caveat, cursive' }}>
                        Liron Tako
                    </div>
                    
                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex items-center gap-10">
                        <a className="font-label-caps text-label-caps text-primary font-bold border-b-2 border-primary pb-1 transition-all hover:text-muted-clay active-scale" href="#showcase">
                            {t('navShowcase')}
                        </a>
                        <a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-all active-scale" href="#about">
                            {t('navAbout')}
                        </a>
                        <a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-all active-scale" href="#contact">
                            {t('navContact')}
                        </a>
                    </div>
                    
                    {/* Language Switcher & Hamburger */}
                    <div className="flex items-center gap-4">
                        <button 
                            onClick={toggleLanguage} 
                            className="font-label-caps text-label-caps hover:text-primary transition-all active-scale cursor-pointer lang-toggle-btn"
                        >
                            HE/EN
                        </button>
                        <button 
                            onClick={() => setMobileOpen(true)}
                            className="md:hidden flex items-center active-scale cursor-pointer"
                            aria-label="Open navigation menu"
                        >
                            <span className="material-symbols-outlined">menu</span>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Full Screen Mobile Navigation Overlay */}
            <div 
                id="mobile-overlay" 
                className={`fixed inset-0 z-50 bg-surface flex flex-col justify-between px-margin-mobile pt-32 pb-16 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden md:hidden ${
                    mobileOpen ? 'opacity-100 translate-y-0 scale-100 active' : 'opacity-0 -translate-y-10 scale-95 pointer-events-none'
                }`}
            >
                {/* Overlay Header */}
                <div className="flex justify-between items-center w-full absolute top-0 left-0 right-0 px-margin-mobile h-20 border-b border-outline-variant/30">
                    <span className="font-headline-md text-headline-md tracking-tighter text-primary" style={{ fontFamily: 'Caveat, cursive' }}>
                        Liron Tako
                    </span>
                    <button 
                        onClick={() => setMobileOpen(false)}
                        className="active-scale p-2 cursor-pointer focus:outline-none" 
                        aria-label="Close navigation menu"
                    >
                        <span className="material-symbols-outlined text-[32px]">close</span>
                    </button>
                </div>

                {/* Mobile Menu Links */}
                <div className="flex flex-col gap-10 my-auto text-center">
                    <div className="reveal-animation">
                        <span className="font-label-caps text-label-caps text-muted-clay mb-2 block tracking-[0.2em]">{t('num01')}</span>
                        <a 
                            onClick={() => setMobileOpen(false)}
                            className="font-display-lg-mobile text-display-lg-mobile text-primary mobile-nav-link block" 
                            href="#showcase" 
                        >
                            {t('navShowcase')}
                        </a>
                    </div>
                    <div className="reveal-animation" style={{ transitionDelay: '100ms' }}>
                        <span className="font-label-caps text-label-caps text-muted-clay mb-2 block tracking-[0.2em]">{t('num02')}</span>
                        <a 
                            onClick={() => setMobileOpen(false)}
                            className="font-display-lg-mobile text-display-lg-mobile text-primary mobile-nav-link block" 
                            href="#about" 
                        >
                            {t('navAbout')}
                        </a>
                    </div>
                    <div className="reveal-animation" style={{ transitionDelay: '200ms' }}>
                        <span className="font-label-caps text-label-caps text-muted-clay mb-2 block tracking-[0.2em]">{t('num03')}</span>
                        <a 
                            onClick={() => setMobileOpen(false)}
                            className="font-display-lg-mobile text-display-lg-mobile text-primary mobile-nav-link block" 
                            href="#contact" 
                        >
                            {t('navContact')}
                        </a>
                    </div>
                </div>

                {/* Overlay Footer */}
                <div className="flex justify-between items-center w-full border-t border-outline-variant/30 pt-6">
                    <button 
                        onClick={() => {
                            toggleLanguage();
                            setMobileOpen(false);
                        }}
                        className="font-label-caps text-label-caps border border-outline-variant px-6 py-2 hover:bg-ink hover:text-off-white transition-all duration-300 active-scale lang-toggle-btn cursor-pointer"
                    >
                        HE/EN
                    </button>
                    <p className="font-label-caps text-[10px] text-on-surface-variant opacity-60 tracking-widest">
                        {t('copyright')}
                    </p>
                </div>
            </div>
        </>
    );
};
