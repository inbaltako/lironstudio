import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Process = () => {
    const { t } = useLanguage();

    return (
        <section className="py-section-gap bg-surface overflow-hidden">
            <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
                <div className="mb-12 text-center fade-in-scroll">
                    <span className="font-label-caps text-label-caps text-muted-clay mb-2 block uppercase tracking-widest">
                        {t('processTag')}
                    </span>
                    <h2 className="font-display-lg text-display-lg text-primary">
                        {t('processTitle')}
                    </h2>
                </div>
                <div className="relative group fade-in-scroll">
                    <div className="overflow-hidden mb-8 shadow-sm transition-all duration-700 group-hover:shadow-2xl">
                        <img 
                            className="w-full h-[600px] object-cover transition-transform duration-1000 group-hover:scale-105" 
                            src="assets/images/process.jpg" 
                            alt={t('processTitle')}
                        />
                    </div>
                    <div className="max-w-2xl mx-auto text-center">
                        <p className="font-body-lg text-body-lg text-on-surface-variant italic">
                            {t('processCaption')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
