import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Gallery = () => {
    const { t } = useLanguage();

    return (
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap" id="showcase">
            {/* Header */}
            <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-6 border-b border-outline-variant/30 pb-8 fade-in-scroll">
                <div>
                    <span className="font-label-caps text-label-caps text-muted-clay mb-2 block tracking-widest">
                        {t('selectedWorks')}
                    </span>
                    <h2 className="font-headline-md text-headline-md text-primary">
                        {t('collectivePortfolio')}
                    </h2>
                </div>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
                    {t('portfolioIntro')}
                </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-gallery-gutter">
                {/* Item 1: Crochet */}
                <div className="md:col-span-8 group fade-in-scroll cursor-pointer">
                    <div className="overflow-hidden mb-6 relative shadow-sm transition-all duration-700 group-hover:shadow-2xl group-hover:-translate-y-1">
                        <img 
                            className="w-full h-[600px] object-cover transition-transform duration-1000 group-hover:scale-105" 
                            src="assets/images/crochet.jpg" 
                            alt={t('crochetTitle')}
                        />
                    </div>
                    <div className="flex justify-between items-baseline">
                        <div>
                            <h3 className="font-headline-sm text-headline-sm text-primary mb-1">
                                {t('crochetTitle')}
                            </h3>
                            <p className="font-label-caps text-label-caps text-on-surface-variant">
                                {t('crochetSubtitle')}
                            </p>
                        </div>
                        <span className="material-symbols-outlined text-outline group-hover:text-primary transition-all gallery-arrow">
                            north_east
                        </span>
                    </div>
                </div>

                {/* Item 2: Candles */}
                <div className="md:col-span-4 group fade-in-scroll mt-0 md:mt-20 cursor-pointer">
                    <div className="overflow-hidden mb-6 shadow-sm transition-all duration-700 group-hover:shadow-2xl group-hover:-translate-y-1">
                        <img 
                            className="w-full h-[700px] object-cover transition-transform duration-1000 group-hover:scale-105" 
                            src="assets/images/candles.jpg" 
                            alt={t('candlesTitle')}
                        />
                    </div>
                    <div className="flex justify-between items-baseline">
                        <div>
                            <h3 className="font-headline-sm text-headline-sm text-primary mb-1">
                                {t('candlesTitle')}
                            </h3>
                            <p className="font-label-caps text-label-caps text-on-surface-variant">
                                {t('candlesSubtitle')}
                            </p>
                        </div>
                        <span className="material-symbols-outlined text-outline group-hover:text-primary transition-all gallery-arrow">
                            north_east
                        </span>
                    </div>
                </div>

                {/* Item 3: 3D Printed */}
                <div className="md:col-span-5 group fade-in-scroll cursor-pointer">
                    <div className="overflow-hidden mb-6 shadow-sm transition-all duration-700 group-hover:shadow-2xl group-hover:-translate-y-1">
                        <div 
                            className="w-full h-[500px] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" 
                            style={{ backgroundImage: "url('assets/images/3d-printed.jpg')" }}
                        ></div>
                    </div>
                    <div className="flex justify-between items-baseline">
                        <div>
                            <h3 className="font-headline-sm text-headline-sm text-primary mb-1">
                                {t('printedTitle')}
                            </h3>
                            <p className="font-label-caps text-label-caps text-on-surface-variant">
                                {t('printedSubtitle')}
                            </p>
                        </div>
                        <span className="material-symbols-outlined text-outline group-hover:text-primary transition-all gallery-arrow">
                            north_east
                        </span>
                    </div>
                </div>

                {/* Item 4: Jesmonite */}
                <div className="md:col-span-7 group fade-in-scroll mt-0 md:mt-12 cursor-pointer">
                    <div className="overflow-hidden mb-6 shadow-sm transition-all duration-700 group-hover:shadow-2xl group-hover:-translate-y-1">
                        <div 
                            className="w-full h-[500px] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" 
                            style={{ backgroundImage: "url('assets/images/jesmonite.jpg')" }}
                        ></div>
                    </div>
                    <div className="flex justify-between items-baseline">
                        <div>
                            <h3 className="font-headline-sm text-headline-sm text-primary mb-1">
                                {t('jesmoniteTitle')}
                            </h3>
                            <p className="font-label-caps text-label-caps text-on-surface-variant">
                                {t('jesmoniteSubtitle')}
                            </p>
                        </div>
                        <span className="material-symbols-outlined text-outline group-hover:text-primary transition-all gallery-arrow">
                            north_east
                        </span>
                    </div>
                </div>

                {/* Item 5: Sculptural Judaica */}
                <div className="md:col-span-12 group fade-in-scroll py-12 cursor-pointer">
                    <div className="overflow-hidden mb-6 relative shadow-sm transition-all duration-700 group-hover:shadow-2xl group-hover:-translate-y-1">
                        <img 
                            className="w-full h-[1000px] object-cover transition-transform duration-1000 group-hover:scale-105" 
                            src="assets/images/judaica.jpg" 
                            alt={t('judaicaTitle')}
                        />
                    </div>
                    <div className="flex flex-col md:flex-row justify-between md:items-end gap-6">
                        <div className="max-w-2xl">
                            <h3 className="font-headline-sm text-headline-sm text-primary mb-1">
                                {t('judaicaTitle')}
                            </h3>
                            <p className="font-label-caps text-label-caps text-on-surface-variant mb-4">
                                {t('judaicaSubtitle')}
                            </p>
                            <p className="font-body-lg text-body-lg text-on-surface-variant">
                                {t('judaicaDesc')}
                            </p>
                        </div>
                        <span className="material-symbols-outlined text-outline group-hover:text-primary transition-all hidden md:block gallery-arrow">
                            north_east
                        </span>
                    </div>
                </div>

                {/* Item 6: Gift Baskets */}
                <div className="md:col-span-12 group fade-in-scroll py-12 cursor-pointer">
                    <div className="overflow-hidden mb-6 shadow-sm transition-all duration-700 group-hover:shadow-2xl group-hover:-translate-y-1">
                        <div 
                            className="w-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 h-[800px]" 
                            style={{ backgroundImage: "url('assets/images/gift-baskets.jpg')" }}
                        ></div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between md:items-center">
                        <div>
                            <h3 className="font-headline-sm text-headline-sm text-primary mb-1">
                                {t('basketTitle')}
                            </h3>
                            <p className="font-label-caps text-label-caps text-on-surface-variant">
                                {t('basketSubtitle')}
                            </p>
                        </div>
                        <a 
                            className="mt-4 md:mt-0 px-8 py-3 bg-ink text-off-white font-label-caps text-label-caps inline-block tracking-widest hover:bg-muted-clay transition-all duration-300 active-scale" 
                            href="#contact"
                        >
                            {t('requestCatalogue')}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
