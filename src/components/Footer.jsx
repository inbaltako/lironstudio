import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="bg-surface-container dark:bg-primary-container text-on-surface dark:text-on-primary-fixed border-t border-outline-variant/30 transition-colors">
            <div className="flex flex-col md:flex-row justify-between items-center w-full px-margin-desktop py-gallery-gutter max-w-container-max mx-auto gap-base">
                {/* Footer Brand Logo */}
                <div className="font-headline-sm text-headline-sm text-primary" style={{ fontFamily: 'Caveat, cursive' }}>
                    {t('heroTitle')}
                </div>
                
                {/* Social Links */}
                <div className="flex gap-8">
                    <a 
                        className="font-label-caps text-label-caps text-on-surface-variant hover:text-muted-clay transition-all active-scale" 
                        href="https://www.facebook.com/liron.tako.3/photos" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        Facebook
                    </a>
                    <a 
                        className="font-label-caps text-label-caps text-on-surface-variant hover:text-muted-clay transition-all active-scale" 
                        href="https://www.instagram.com/lirtako/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        Instagram
                    </a>
                </div>
                
                {/* Copyright */}
                <p className="font-body-md text-body-md text-on-surface-variant/70">
                    {t('copyright')}
                </p>
            </div>
        </footer>
    );
};
