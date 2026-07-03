import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Bio = () => {
    const { t } = useLanguage();

    return (
        <section className="bg-surface-container-low py-section-gap overflow-hidden" id="about">
            <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 items-center gap-20">
                {/* Visual */}
                <div className="relative fade-in-scroll">
                    <div className="w-full aspect-square bg-warm-stone overflow-hidden border-[12px] border-surface shadow-lg transition-all duration-700 hover:shadow-2xl">
                        <img 
                            className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-1000" 
                            src="assets/images/portrait.jpg" 
                            alt={t('artistName')}
                        />
                    </div>
                    <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-soft-sage opacity-20 -z-10 rounded-full blur-3xl ltr:-right-10 rtl:-left-10 ltr:right-auto rtl:left-auto"></div>
                </div>
                {/* Bio */}
                <div className="fade-in-scroll">
                    <span className="font-label-caps text-label-caps text-muted-clay mb-4 block">
                        {t('meetArtist')}
                    </span>
                    <h2 className="font-display-lg text-display-lg text-primary mb-8">
                        {t('artistName')}
                    </h2>
                    <div className="space-y-6 font-body-lg text-body-lg text-on-surface-variant">
                        <p>{t('artistBio1')}</p>
                        <p>{t('artistBio2')}</p>
                        <div className="pt-6">
                            <a 
                                className="border-b-2 border-ink pb-1 font-label-caps text-label-caps text-ink hover:text-muted-clay hover:border-muted-clay transition-all active-scale inline-block" 
                                href="#contact"
                            >
                                {t('readFullStory')}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
