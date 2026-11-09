import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { DemoNotice } from './components/DemoNotice';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { PageReveal } from './components/animations/GlobalAnimations';

const HomePage = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const DisciplinesPage = lazy(() => import('./pages/DisciplinesPage').then(m => ({ default: m.DisciplinesPage })));
const TechnologiesPage = lazy(() => import('./pages/TechnologiesPage').then(m => ({ default: m.TechnologiesPage })));
const TeamPage = lazy(() => import('./pages/TeamPage').then(m => ({ default: m.TeamPage })));
const PatientJourneyPage = lazy(() => import('./pages/PatientJourneyPage').then(m => ({ default: m.PatientJourneyPage })));
const ConsultationPage = lazy(() => import('./pages/ConsultationPage').then(m => ({ default: m.ConsultationPage })));
const MaintenancePage = lazy(() => import('./pages/MaintenancePage').then(m => ({ default: m.MaintenancePage })));
const ArticlesPage = lazy(() => import('./pages/ArticlesPage').then(m => ({ default: m.ArticlesPage })));
const GalleryPage = lazy(() => import('./pages/GalleryPage').then(m => ({ default: m.GalleryPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage').then(m => ({ default: m.PrivacyPage })));

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col bg-[#FAF8F5] dark:bg-[#0A1926] text-[#111A24] dark:text-slate-100 transition-colors">
            {/* Persistent bilingual Convertix_studio concept notice */}
            <DemoNotice />
            
            {/* Top Bar adhering to 3-zone contract */}
            <Navbar />
            
            {/* Main content viewport with Suspense for code splitting */}
            <main className="flex-1">
              <Suspense fallback={
                <div className="min-h-[60vh] flex items-center justify-center bg-[#FAF8F5] dark:bg-[#0A1926]">
                  <div className="text-center space-y-3">
                    <div className="w-8 h-8 border-2 border-[#0A1926] dark:border-[#B8924B] border-t-transparent rounded-full animate-spin mx-auto"></div>
                    <p className="text-xs uppercase tracking-widest text-[#5E6D77] dark:text-slate-400 font-medium">Laser Dental Clinic</p>
                  </div>
                </div>
              }>
                <PageReveal>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/disciplines" element={<DisciplinesPage />} />
                    <Route path="/technologies" element={<TechnologiesPage />} />
                    <Route path="/team" element={<TeamPage />} />
                    <Route path="/patient-journey" element={<PatientJourneyPage />} />
                    <Route path="/consultation" element={<ConsultationPage />} />
                    <Route path="/maintenance" element={<MaintenancePage />} />
                    <Route path="/articles" element={<ArticlesPage />} />
                    <Route path="/gallery" element={<GalleryPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/privacy" element={<PrivacyPage />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                  </Routes>
                </PageReveal>
              </Suspense>
            </main>
            
            {/* Luxury footer */}
            <Footer />
          </div>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}
