import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../locales/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [currentLang, setCurrentLang] = useState('en');

    useEffect(() => {
        // Set HTML attributes dynamically
        document.documentElement.lang = currentLang;
        document.documentElement.dir = currentLang === 'he' ? 'rtl' : 'ltr';

        if (currentLang === 'he') {
            document.body.classList.add('rtl-active');
        } else {
            document.body.classList.remove('rtl-active');
        }
    }, [currentLang]);

    const toggleLanguage = () => {
        setCurrentLang((prev) => (prev === 'en' ? 'he' : 'en'));
    };

    const t = (key) => {
        return translations[currentLang]?.[key] || key;
    };

    return (
        <LanguageContext.Provider value={{ currentLang, setLanguage: setCurrentLang, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
