import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Contact = () => {
    const { t } = useLanguage();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const [isSuccess, setIsSuccess] = useState(false);
    const [showForm, setShowForm] = useState(true);
    const [formOpacity, setFormOpacity] = useState(true);
    const [successOpacity, setSuccessOpacity] = useState(false);
    const [showVisual, setShowVisual] = useState(false);

    const [blobTransform, setBlobTransform] = useState('translate(-50%, 0px)');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Hide form with transition
        setFormOpacity(false);
        
        setTimeout(() => {
            setShowForm(false);
            setIsSuccess(true);
            setShowVisual(true);
            
            // Show success container with transition
            setTimeout(() => {
                setSuccessOpacity(true);
            }, 50);
        }, 700);
    };

    const handleReset = () => {
        // Fade out success container and visual
        setSuccessOpacity(false);
        setShowVisual(false);
        
        setTimeout(() => {
            setIsSuccess(false);
            setShowForm(true);
            setName('');
            setEmail('');
            setPhone('');
            setMessage('');
            
            // Show form container
            setTimeout(() => {
                setFormOpacity(true);
                // Scroll smoothly to showcase
                document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' });
            }, 50);
        }, 700);
    };

    // Interactive mouse parallax on success blob
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (isSuccess && successOpacity) {
                const x = (e.clientX - window.innerWidth / 2) / 30;
                const y = (e.clientY - window.innerHeight / 2) / 30;
                setBlobTransform(`translate(calc(-50% + ${x}px), ${y}px)`);
            }
        };

        document.addEventListener('mousemove', handleMouseMove);
        return () => document.removeEventListener('mousemove', handleMouseMove);
    }, [isSuccess, successOpacity]);

    return (
        <>
            <section className="py-section-gap canvas-bg relative min-h-[600px] flex items-center" id="contact">
                {/* Contact Form Container */}
                {showForm && (
                    <div 
                        id="contact-form-container" 
                        className={`max-w-3xl w-full mx-auto px-margin-mobile text-center transition-all duration-700 ease-out ${
                            formOpacity ? 'opacity-100' : 'opacity-0 pointer-events-none'
                        }`}
                    >
                        <span className="font-label-caps text-label-caps text-muted-clay mb-4 block">
                            {t('getInTouch')}
                        </span>
                        <h2 className="font-display-lg text-display-lg text-primary mb-12">
                            {t('inquireCommissions')}
                        </h2>
                        
                        <form className="space-y-12 text-start" id="inquiry-form" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="group">
                                    <label className="font-label-caps text-label-caps text-on-surface-variant group-focus-within:text-ink transition-colors">
                                        {t('labelName')}
                                    </label>
                                    <input 
                                        required 
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full bg-transparent border-t-0 border-x-0 border-b border-ink/20 focus:border-ink focus:ring-0 py-4 font-body-md transition-all outline-none" 
                                        type="text"
                                    />
                                </div>
                                <div className="group">
                                    <label className="font-label-caps text-label-caps text-on-surface-variant group-focus-within:text-ink transition-colors">
                                        {t('labelEmail')}
                                    </label>
                                    <input 
                                        required 
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full bg-transparent border-t-0 border-x-0 border-b border-ink/20 focus:border-ink focus:ring-0 py-4 font-body-md transition-all outline-none" 
                                        type="email"
                                    />
                                </div>
                                <div className="group md:col-span-2">
                                    <label className="font-label-caps text-label-caps text-on-surface-variant group-focus-within:text-ink transition-colors">
                                        {t('labelPhone')}
                                    </label>
                                    <input 
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        className="w-full bg-transparent border-t-0 border-x-0 border-b border-ink/20 focus:border-ink focus:ring-0 py-4 font-body-md transition-all outline-none" 
                                        type="tel"
                                    />
                                </div>
                            </div>
                            <div className="group">
                                <label className="font-label-caps text-label-caps text-on-surface-variant group-focus-within:text-ink transition-colors">
                                    {t('labelMessage')}
                                </label>
                                <textarea 
                                    required 
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="w-full bg-transparent border-t-0 border-x-0 border-b border-ink/20 focus:border-ink focus:ring-0 py-4 font-body-md transition-all outline-none resize-none" 
                                    rows="4"
                                ></textarea>
                                </div>
                                <div className="flex justify-center pt-8">
                                    <button 
                                        className="px-12 py-4 bg-ink text-off-white font-label-caps text-label-caps tracking-[0.2em] hover:bg-muted-clay transition-all duration-300 active-scale cursor-pointer" 
                                        type="submit"
                                    >
                                        {t('sendInquiry')}
                                    </button>
                                </div>
                        </form>
                    </div>
                )}

                {/* Dynamic Success State Container */}
                {isSuccess && (
                    <div 
                        id="contact-success-container" 
                        className={`max-w-[800px] w-full mx-auto text-center px-margin-mobile transition-all duration-700 ease-out ${
                            successOpacity ? 'opacity-100' : 'opacity-0 pointer-events-none'
                        }`}
                    >
                        <div className="relative mb-16">
                            <div 
                                className="absolute -top-12 left-1/2 w-48 h-48 bg-soft-sage/20 rounded-full blur-3xl opacity-60 transition-transform duration-500 ease-out" 
                                id="success-blob"
                                style={{ transform: blobTransform }}
                            ></div>
                            {/* Done Checkmark Icon */}
                            <div className="relative z-10 inline-flex items-center justify-center w-16 h-16 rounded-full border border-soft-sage/40 mb-10">
                                <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'wght' 200" }}>
                                    done
                                </span>
                            </div>
                            {/* Message Content */}
                            <div className="space-y-6 px-4">
                                <h2 className="font-display-lg text-display-lg text-primary tracking-tight">
                                    {t('successTitle')}
                                </h2>
                                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg mx-auto leading-relaxed">
                                    {t('successMsg')}
                                </p>
                            </div>
                        </div>
                        {/* Action Button */}
                        <div className="mt-12">
                            <button 
                                id="back-to-showcase-btn" 
                                onClick={handleReset}
                                className="inline-flex items-center gap-3 px-10 py-5 bg-ink text-off-white font-label-caps text-label-caps rounded-none hover:bg-on-surface-variant transition-all duration-300 group active-scale cursor-pointer"
                            >
                                <span>{t('backToShowcase')}</span>
                                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform rtl:group-hover:-translate-x-1">
                                    arrow_forward
                                </span>
                            </button>
                        </div>
                        {/* Aesthetic signature */}
                        <div className="mt-24 opacity-40">
                            <div className="w-full h-[1px] bg-outline-variant/30 max-w-[120px] mx-auto"></div>
                            <div className="mt-4 font-label-caps text-[10px] uppercase tracking-[0.2em] text-outline">
                                {t('sanctuaryOfCraft')}
                            </div>
                        </div>
                    </div>
                )}
            </section>

            {/* Contextual Aesthetic Visual */}
            <aside 
                id="contextual-visual" 
                className={`fixed hidden lg:block pointer-events-none transition-all duration-1000 bottom-margin-desktop ltr:right-margin-desktop rtl:left-margin-desktop ltr:right-60px rtl:left-60px z-30 ${
                    showVisual ? 'opacity-20' : 'opacity-0'
                }`}
            >
                <div className="w-32 h-48 border border-ink/10 relative overflow-hidden shadow-sm">
                    <img className="w-full h-full object-cover" src="assets/images/clay-texture.jpg" alt="Clay Texture" />
                </div>
            </aside>
        </>
    );
};
