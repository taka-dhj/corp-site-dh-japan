import React, { useState, useEffect } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import ContactForm from './components/ContactForm';
import { 
  ChevronRight, 
  Globe, 
  Building2, 
  Brain,
  Home as HomeIcon,
  TrendingUp, 
  MapPin,
  Target,
  Zap,
  Mail,
  ExternalLink,
  ChevronDown,
  Newspaper,
  ArrowRight,
  Users,
  Award,
  CheckCircle,
  Repeat
} from 'lucide-react';

function App() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [scrollY, setScrollY] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsDropdownOpen, setIsSolutionsDropdownOpen] = useState(false);

  // URLから言語を検出してi18nを同期
  useEffect(() => {
    const path = location.pathname;
    const currentLang = path.startsWith('/ja') ? 'ja' : 'en';
    
    if (i18n.language !== currentLang) {
      i18n.changeLanguage(currentLang);
      document.documentElement.lang = currentLang;
    }
  }, [location.pathname, i18n]);

  // 言語変更時にHTMLのlang属性を更新
  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ja' ? 'en' : 'ja';
    const currentPath = location.pathname;
    
    // 現在のパスから言語プレフィックスを除去
    let newPath = currentPath.replace(/^\/ja/, '').replace(/^\/en/, '') || '/';
    
    // 日本語の場合は/jaプレフィックスを追加
    if (newLang === 'ja') {
      newPath = newPath === '/' ? '/ja' : `/ja${newPath}`;
    }
    
    // URLを更新
    navigate(newPath, { replace: true });
    
    // i18nの言語も更新
    i18n.changeLanguage(newLang);
    document.documentElement.lang = newLang;
  };

  const heroImages = [
    'https://images.pexels.com/photos/46253/mt-fuji-sea-of-clouds-sunrise-46253.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    'https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop'
  ];

  // Preload images
  useEffect(() => {
    heroImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Image rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Scroll handling
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Intersection Observer for animations
      const sections = document.querySelectorAll('[data-animate]');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setVisibleSections(prev => new Set([...prev, section.id]));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Executives data
  const executives = [
    {
      name: i18n.language === 'ja' ? '希代 翔' : 'Sho Kishiro',
      position: i18n.language === 'ja' ? '代表取締役' : 'CEO',
      image: '/Sho.png',
      background: t('executives.shoKishiro.background'),
      expertise: t('executives.shoKishiro.expertise', { returnObjects: true }) as string[]
    },
    {
      name: i18n.language === 'ja' ? '藤本 義弘' : 'Yoshihiro Fujimoto',
      position: i18n.language === 'ja' ? '取締役' : 'Director',
      image: '/Yoshihiro.png',
      background: t('executives.yoshihiroFujimoto.background'),
      expertise: t('executives.yoshihiroFujimoto.expertise', { returnObjects: true }) as string[]
    },
    {
      name: i18n.language === 'ja' ? '青木 尊' : 'Takashi Aoki',
      position: i18n.language === 'ja' ? '取締役' : 'Director',
      image: '/Takashi.png',
      background: t('executives.takashiAoki.background'),
      expertise: t('executives.takashiAoki.expertise', { returnObjects: true }) as string[]
    },
    {
      name: i18n.language === 'ja' ? '岡部 純子' : 'Junko Okabe',
      position: i18n.language === 'ja' ? '役員' : 'Director',
      image: '/Junko.png',
      background: t('executives.junkoOkabe.background'),
      expertise: t('executives.junkoOkabe.expertise', { returnObjects: true }) as string[]
    },
    {
      name: i18n.language === 'ja' ? '藤本 綾乃' : 'Ayano Fujimoto',
      position: i18n.language === 'ja' ? '役員' : 'Director',
      image: '/image.png',
      background: t('executives.ayanoFujimoto.background'),
      expertise: t('executives.ayanoFujimoto.expertise', { returnObjects: true }) as string[]
    }
  ];

  const achievements = [
    { 
      number: '98%', 
      label: t('achievements.customerSatisfaction.label'), 
      description: t('achievements.customerSatisfaction.description')
    },
    { 
      number: '50+', 
      label: t('achievements.partnerLocalGov.label'), 
      description: t('achievements.partnerLocalGov.description')
    },
    { 
      number: '20+', 
      label: t('achievements.partnerCompanies.label'), 
      description: t('achievements.partnerCompanies.description')
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden font-body">
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="Discovery Hidden Japan Logo" 
                className="w-10 h-10 object-contain"
              />
              <span className="text-xl font-light text-gray-900">
                Discovery Hidden Japan
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {/* Home */}
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="font-light transition-colors duration-300 hover:text-rose-600 text-gray-700"
              >
                {t('nav.home')}
              </button>

              {/* About DHJ */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('philosophy');
                  if (element) {
                    const offsetTop = element.offsetTop - 120;
                    window.scrollTo({
                      top: offsetTop,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="font-light transition-colors duration-300 hover:text-rose-600 text-gray-700"
              >
                {t('nav.aboutDHJ')}
              </button>

              {/* Solutions Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsSolutionsDropdownOpen(true)}
                onMouseLeave={() => setIsSolutionsDropdownOpen(false)}
              >
                <button 
                  className="font-light transition-colors duration-300 hover:text-rose-600 flex items-center gap-1 text-gray-700"
                >
                  {t('nav.solutions')}
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {/* Solutions Dropdown Menu */}
                <div className={`absolute top-full left-0 mt-2 w-72 bg-white shadow-xl rounded-lg py-3 transition-all duration-300 ${
                  isSolutionsDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById('solutions');
                      if (element) {
                        const offsetTop = element.offsetTop - 120;
                        window.scrollTo({
                          top: offsetTop,
                          behavior: 'smooth'
                        });
                      }
                      setIsSolutionsDropdownOpen(false);
                    }}
                    className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-rose-600 transition-colors duration-200 font-medium"
                  >
                    {t('nav.solutionsDropdown.integrated')}
                  </button>

                  <div className="border-t border-gray-200 my-2"></div>

                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById('contact');
                      if (element) {
                        const offsetTop = element.offsetTop - 120;
                        window.scrollTo({
                          top: offsetTop,
                          behavior: 'smooth'
                        });
                      }
                      setIsSolutionsDropdownOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-rose-600 transition-colors duration-200"
                  >
                    {t('nav.solutionsDropdown.forBusiness')}
                  </button>
                  
                  <a
                    href="mailto:info@dh-japan.com"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-rose-600 transition-colors duration-200 flex items-center justify-between"
                    onClick={() => setIsSolutionsDropdownOpen(false)}
                  >
                    <span>{t('nav.solutionsDropdown.forPartners')}</span>
                    <Mail className="w-4 h-4 opacity-60" />
                  </a>
                  
                  <a
                    href="https://prive.dh-japan.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-rose-600 transition-colors duration-200 flex items-center justify-between"
                    onClick={() => setIsSolutionsDropdownOpen(false)}
                  >
                    <span>{t('nav.solutionsDropdown.forTravelers')}</span>
                    <ExternalLink className="w-4 h-4 opacity-60" />
                  </a>
                </div>
              </div>

              {/* Results */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('overview');
                  if (element) {
                    const offsetTop = element.offsetTop - 120;
                    window.scrollTo({
                      top: offsetTop,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="font-light transition-colors duration-300 hover:text-rose-600 text-gray-700"
              >
                {t('nav.results')}
              </button>

              {/* Team */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('executives-header');
                  if (element) {
                    const offsetTop = element.offsetTop - 120;
                    window.scrollTo({
                      top: offsetTop,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="font-light transition-colors duration-300 hover:text-rose-600 text-gray-700"
              >
                {t('nav.team')}
              </button>

              {/* News */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('news');
                  if (element) {
                    const offsetTop = element.offsetTop - 120;
                    window.scrollTo({
                      top: offsetTop,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="font-light transition-colors duration-300 hover:text-rose-600 text-gray-700"
              >
                {t('nav.news')}
              </button>

              {/* Contact Button */}
              <button 
                onClick={() => setIsContactFormOpen(true)}
                className="px-6 py-2 border-2 border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white transition-all duration-300 font-light"
              >
                {t('nav.contact')}
              </button>

              {/* Language Toggle Button */}
              <button
                onClick={toggleLanguage}
                className="px-4 py-2 border border-gray-300 hover:border-rose-600 text-gray-700 hover:text-rose-600 transition-all duration-300 font-light flex items-center gap-2"
                title={i18n.language === 'ja' ? 'English' : '日本語'}
              >
                <Globe className="w-4 h-4" />
                <span>{i18n.language === 'ja' ? 'EN' : 'JA'}</span>
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-rose-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-2 space-y-1">
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-rose-600"
              >
                {t('nav.home')}
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('philosophy');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-rose-600"
              >
                {t('nav.aboutDHJ')}
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('solutions');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-rose-600"
              >
                {t('nav.solutions')}
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('overview');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-rose-600"
              >
                {t('nav.results')}
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('executives-header');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-rose-600"
              >
                {t('nav.team')}
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('news');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-rose-600"
              >
                {t('nav.news')}
              </button>
              <button 
                onClick={() => {
                  setIsContactFormOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-rose-600 hover:bg-gray-50 font-medium"
              >
                {t('nav.contact')}
              </button>
              <button
                onClick={() => {
                  toggleLanguage();
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-rose-600"
              >
                {i18n.language === 'ja' ? 'English' : '日本語'}
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="hero-section relative h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Dynamic Background Images */}
        {heroImages.map((image, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-[3000ms] ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div 
              className="absolute inset-0 grayscale"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transform: `scale(1.15) translateY(${scrollY * 0.2}px)`
              }}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-gray-900/80 to-black/90"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-7xl mx-auto py-24 md:py-32">
          <div className="mb-8 md:mb-12">
            <div className="w-24 h-px bg-rose-600 mx-auto mb-8"></div>
            <p className="text-gray-300 text-sm tracking-[0.4em] uppercase font-light mb-8">
              Discovery Hidden Japan
            </p>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {t('hero.title')}
          </h1>

          <p className="text-2xl md:text-3xl text-white mb-4 font-medium">
            {t('hero.subtitle')}
          </p>

          <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-5xl mx-auto leading-relaxed">
            <Trans 
              i18nKey="hero.description" 
              components={{ 
                0: <br className="hidden md:block" />
              }} 
            />
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 mt-12">
            <button
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('solutions');
                if (element) {
                  const offsetTop = element.offsetTop - 120;
                  window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                  });
                }
              }}
              className="group relative bg-rose-600 hover:bg-rose-700 text-white px-8 md:px-10 py-4 md:py-5 transition-all duration-300 flex items-center gap-3 hover:gap-4 transform hover:-translate-y-1 shadow-lg hover:shadow-2xl"
            >
              <span className="text-base md:text-lg font-medium">{t('hero.cta.solutions')}</span>
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => setIsContactFormOpen(true)}
              className="group relative border-2 border-white/40 hover:border-white text-white hover:bg-white/10 px-8 md:px-10 py-4 md:py-5 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-2xl"
            >
              <span className="flex items-center gap-3 text-base md:text-lg font-medium">
                <Mail className="w-5 h-5" />
                {t('hero.cta.contact')}
              </span>
            </button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center animate-bounce">
            <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center mb-2">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
            <p className="text-white/60 text-xs tracking-widest">{t('common.scroll')}</p>
          </div>
        </div>
      </section>

      {/* Integrated Solutions Section */}
      <section id="solutions" className="py-24 md:py-32 bg-gradient-to-b from-gray-900 via-gray-800 to-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t('solutions.title')}</h2>
            <p className="text-xl text-gray-300">{t('solutions.subtitle')}</p>
          </div>

          {/* 5-Phase Circular Diagram */}
          <div className="relative max-w-5xl mx-auto mb-24">
            {/* Central Circle */}
            <div className="relative aspect-square max-w-3xl mx-auto">
              {/* Center Text */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
                <div className="bg-gradient-to-br from-rose-600 to-rose-800 rounded-full w-32 h-32 md:w-48 md:h-48 flex items-center justify-center shadow-2xl">
                  <div className="text-white">
                    <Repeat className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-2 animate-spin-slow" />
                    <p className="text-sm md:text-base font-bold">
                      {i18n.language === 'ja' ? '価値循環' : 'Value<br/>Circulation'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Phase Cards arranged in a circle */}
              <div className="absolute inset-0">
                {/* Phase 1 - Discovery (Top) */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 w-48 md:w-64 hover:bg-white/20 hover:scale-110 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-4xl">🔍</div>
                      <div className="text-blue-400 font-bold text-sm">Phase 1</div>
                    </div>
                    <h3 className="text-white font-bold text-sm md:text-base mb-2">{t('solutions.phase1.title')}</h3>
                    <p className="text-gray-300 text-xs">{t('solutions.phase1.description')}</p>
                  </div>
                </div>

                {/* Phase 2 - Digitalization (Top Right) */}
                <div className="absolute top-[15%] right-0 transform translate-x-1/4 group">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 w-48 md:w-64 hover:bg-white/20 hover:scale-110 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-4xl">🤖</div>
                      <div className="text-purple-400 font-bold text-sm">Phase 2</div>
                    </div>
                    <h3 className="text-white font-bold text-sm md:text-base mb-2">{t('solutions.phase2.title')}</h3>
                    <p className="text-gray-300 text-xs mb-2">{t('solutions.phase2.description')}</p>
                    <p className="text-purple-300 text-xs italic">{t('solutions.phase2.note')}</p>
                  </div>
                </div>

                {/* Phase 3 - Experience (Bottom Right) */}
                <div className="absolute bottom-[15%] right-0 transform translate-x-1/4 group">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 w-48 md:w-64 hover:bg-white/20 hover:scale-110 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/20">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-4xl">🏠</div>
                      <div className="text-amber-400 font-bold text-sm">Phase 3</div>
                    </div>
                    <h3 className="text-white font-bold text-sm md:text-base mb-2">{t('solutions.phase3.title')}</h3>
                    <p className="text-gray-300 text-xs">{t('solutions.phase3.description')}</p>
                  </div>
                </div>

                {/* Phase 4 - Global Sales (Bottom Left) */}
                <div className="absolute bottom-[15%] left-0 transform -translate-x-1/4 group">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 w-48 md:w-64 hover:bg-white/20 hover:scale-110 transition-all duration-300 hover:shadow-2xl hover:shadow-rose-500/20">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-4xl">✈️</div>
                      <div className="text-rose-400 font-bold text-sm">Phase 4</div>
                    </div>
                    <h3 className="text-white font-bold text-sm md:text-base mb-2">{t('solutions.phase4.title')}</h3>
                    <p className="text-gray-300 text-xs mb-2">{t('solutions.phase4.description')}</p>
                    <p className="text-rose-300 text-xs italic">{t('solutions.phase4.note')}</p>
                  </div>
                </div>

                {/* Phase 5 - Profit Return (Top Left) */}
                <div className="absolute top-[15%] left-0 transform -translate-x-1/4 group">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 w-48 md:w-64 hover:bg-white/20 hover:scale-110 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-4xl">🔄</div>
                      <div className="text-green-400 font-bold text-sm">Phase 5</div>
                    </div>
                    <h3 className="text-white font-bold text-sm md:text-base mb-2">{t('solutions.phase5.title')}</h3>
                    <p className="text-gray-300 text-xs">{t('solutions.phase5.description')}</p>
                  </div>
                </div>

                {/* Connecting lines/arrows (decorative) */}
                <svg className="absolute inset-0 w-full h-full -z-10 opacity-20" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50%" cy="50%" r="40%" fill="none" stroke="url(#gradient)" strokeWidth="2" strokeDasharray="8 4" />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="50%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>

          {/* Value Circulation Example */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">{t('solutions.valueCircle.title')}</h3>
            <p className="text-gray-300 mb-8 text-center">{t('solutions.valueCircle.intro')}</p>
            
            <div className="space-y-4">
              {[
                { step: 'step1', icon: '🔍', color: 'blue' },
                { step: 'step2', icon: '🤖', color: 'purple' },
                { step: 'step3', icon: '🏠', color: 'amber' },
                { step: 'step4', icon: '✈️', color: 'rose' },
                { step: 'step5', icon: '🔄', color: 'green' }
              ].map(({ step, icon, color }) => (
                <div key={step} className="flex items-start gap-4 group">
                  <div className={`text-3xl flex-shrink-0 group-hover:scale-125 transition-transform duration-300`}>{icon}</div>
                  <div className="flex-1">
                    <p className={`text-${color}-400 group-hover:text-${color}-300 transition-colors duration-300`}>
                      {t(`solutions.valueCircle.${step}`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-xl text-center font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                → {t('solutions.valueCircle.conclusion')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why DHJ Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-black via-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t('whyDHJ.title')}</h2>
            <p className="text-xl text-gray-300">{t('whyDHJ.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Reason 1 - Digital Execution */}
            <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-rose-500/50 hover:shadow-2xl hover:shadow-rose-500/20 hover:-translate-y-2 transition-all duration-300">
              <div className="text-5xl mb-6">💎</div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-rose-400 transition-colors">
                {t('whyDHJ.reason1.title')}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {t('whyDHJ.reason1.description')}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {['Meta', 'Google'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-rose-600/20 text-rose-300 rounded-full text-sm border border-rose-500/30">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Reason 2 - Regional Partnership */}
            <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 transition-all duration-300">
              <div className="text-5xl mb-6">🤝</div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                {t('whyDHJ.reason2.title')}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {t('whyDHJ.reason2.description')}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {(i18n.language === 'ja' ? ['伊豆半島', '島根県'] : ['Izu', 'Shimane']).map(tag => (
                  <span key={tag} className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm border border-blue-500/30">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Reason 3 - Global Operations */}
            <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-green-500/50 hover:shadow-2xl hover:shadow-green-500/20 hover:-translate-y-2 transition-all duration-300">
              <div className="text-5xl mb-6">🌏</div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                {t('whyDHJ.reason3.title')}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {t('whyDHJ.reason3.description')}
              </p>
              <div className="mt-6">
                <span className="px-3 py-1 bg-green-600/20 text-green-300 rounded-full text-sm border border-green-500/30">
                  🇵🇭 Philippines Hub
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-gray-800 via-gray-900 to-black">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              {t('philosophy.title')}
            </h2>
            <h3 className="text-3xl md:text-4xl text-gray-200 mb-12 font-light leading-relaxed">
              <Trans 
                i18nKey="philosophy.heading" 
                components={{ 
                  0: <br />,
                  1: <span className="text-rose-400 font-medium" />
                }} 
              />
            </h3>
            <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
              <p>{t('philosophy.description1')}</p>
              <p>{t('philosophy.description2')}</p>
              <p>
                <Trans 
                  i18nKey="philosophy.description3" 
                  components={{ 
                    0: <span className="text-rose-400 font-medium" />
                  }} 
                />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview & Achievements Section */}
      <section id="overview" className="py-24 md:py-32 bg-gradient-to-b from-black via-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t('overview.title')}</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              <Trans 
                i18nKey="overview.description" 
                components={{ 
                  0: <span className="text-rose-400 font-medium" />,
                  1: <span className="text-blue-400 font-medium" />,
                  2: <br />
                }} 
              />
            </p>
          </div>

          {/* Achievement Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300">
              <div className="text-5xl md:text-6xl font-bold text-rose-400 mb-4">98%</div>
              <h3 className="text-xl font-bold text-white mb-2">{t('achievements.customerSatisfaction.label')}</h3>
              <p className="text-gray-400">{t('achievements.customerSatisfaction.description')}</p>
            </div>

            <div className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300">
              <div className="text-5xl md:text-6xl font-bold text-blue-400 mb-4">50+</div>
              <h3 className="text-xl font-bold text-white mb-2">{t('achievements.partnerLocalGov.label')}</h3>
              <p className="text-gray-400">{t('achievements.partnerLocalGov.description')}</p>
            </div>

            <div className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300">
              <div className="text-5xl md:text-6xl font-bold text-green-400 mb-4">20+</div>
              <h3 className="text-xl font-bold text-white mb-2">{t('achievements.partnerCompanies.label')}</h3>
              <p className="text-gray-400">{t('achievements.partnerCompanies.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="executives" className="py-24 md:py-32 bg-gradient-to-b from-gray-800 via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t('executives.title')}</h2>
            <p className="text-xl text-gray-300">{t('executives.subtitle')}</p>
          </div>

          {/* Team Members */}
          <div className="space-y-8 max-w-4xl mx-auto">
            {/* Sho Kishiro */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-rose-500/30 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="text-5xl">👨‍💼</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {i18n.language === 'ja' ? '希代 翔（Sho Kishiro）' : 'Sho Kishiro'}
                  </h3>
                  <p className="text-rose-400 mb-3">
                    {i18n.language === 'ja' ? '代表取締役 / Meta出身' : 'CEO / Meta Alumni'}
                  </p>
                  <p className="text-gray-300 mb-4">{t('executives.shoKishiro.background')}</p>
                  <div className="flex flex-wrap gap-2">
                    {t('executives.shoKishiro.expertise', { returnObjects: true }).map((skill: string) => (
                      <span key={skill} className="px-3 py-1 bg-rose-600/20 text-rose-300 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Yoshihiro Fujimoto */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="text-5xl">👨‍💻</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {i18n.language === 'ja' ? '藤本 義弘（Yoshihiro Fujimoto）' : 'Yoshihiro Fujimoto'}
                  </h3>
                  <p className="text-blue-400 mb-3">
                    {i18n.language === 'ja' ? '取締役 / Google出身' : 'Director / Google Alumni'}
                  </p>
                  <p className="text-gray-300 mb-4">{t('executives.yoshihiroFujimoto.background')}</p>
                  <div className="flex flex-wrap gap-2">
                    {t('executives.yoshihiroFujimoto.expertise', { returnObjects: true }).map((skill: string) => (
                      <span key={skill} className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Takashi Aoki */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-green-500/30 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="text-5xl">👨‍✈️</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {i18n.language === 'ja' ? '青木 隆志（Takashi Aoki）' : 'Takashi Aoki'}
                  </h3>
                  <p className="text-green-400 mb-3">
                    {i18n.language === 'ja' ? '取締役 / JTB出身' : 'Director / JTB Alumni'}
                  </p>
                  <p className="text-gray-300 mb-4">{t('executives.takashiAoki.background')}</p>
                  <div className="flex flex-wrap gap-2">
                    {t('executives.takashiAoki.expertise', { returnObjects: true }).map((skill: string) => (
                      <span key={skill} className="px-3 py-1 bg-green-600/20 text-green-300 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Junko Okabe */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-amber-500/30 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="text-5xl">👩‍💼</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {i18n.language === 'ja' ? '岡部 順子（Junko Okabe）' : 'Junko Okabe'}
                  </h3>
                  <p className="text-amber-400 mb-3">
                    {i18n.language === 'ja' ? '取締役' : 'Director'}
                  </p>
                  <p className="text-gray-300 mb-4">{t('executives.junkoOkabe.background')}</p>
                  <div className="flex flex-wrap gap-2">
                    {t('executives.junkoOkabe.expertise', { returnObjects: true }).map((skill: string) => (
                      <span key={skill} className="px-3 py-1 bg-amber-600/20 text-amber-300 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Ayano Fujimoto */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="text-5xl">👩‍💻</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {i18n.language === 'ja' ? '藤本 あやの（Ayano Fujimoto）' : 'Ayano Fujimoto'}
                  </h3>
                  <p className="text-purple-400 mb-3">
                    {i18n.language === 'ja' ? '取締役 / Microsoft出身' : 'Director / Microsoft Alumni'}
                  </p>
                  <p className="text-gray-300 mb-4">{t('executives.ayanoFujimoto.background')}</p>
                  <div className="flex flex-wrap gap-2">
                    {t('executives.ayanoFujimoto.expertise', { returnObjects: true }).map((skill: string) => (
                      <span key={skill} className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Global Operations Center */}
          <div className="mt-16 bg-gradient-to-br from-green-900/30 to-blue-900/30 backdrop-blur-sm border border-green-500/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-4xl">🌏</div>
              <h3 className="text-2xl font-bold text-white">
                {i18n.language === 'ja' ? 'グローバルオペレーションセンター' : 'Global Operations Center'}
              </h3>
            </div>
            <p className="text-gray-300">
              {i18n.language === 'ja' 
                ? 'フィリピン・セブ島に拠点を持ち、24時間体制で世界市場をサポート。海外富裕層への直接販路と、多言語対応のカスタマーサポートを提供しています。'
                : 'Based in Cebu, Philippines, providing 24/7 support for global markets. Direct sales channels to affluent international travelers and multilingual customer support.'
              }
            </p>
          </div>

          {/* Company Information */}
          <div className="mt-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">{t('companyInfo.title')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-gray-300">
              <div className="flex gap-3">
                <span className="font-semibold text-white min-w-32">{t('companyInfo.companyName')}</span>
                <span>{t('companyInfo.companyNameValue')}</span>
              </div>
              <div className="flex gap-3">
                <span className="font-semibold text-white min-w-32">{t('companyInfo.established')}</span>
                <span>{t('companyInfo.establishedValue')}</span>
              </div>
              <div className="flex gap-3">
                <span className="font-semibold text-white min-w-32">{t('companyInfo.address')}</span>
                <span>{t('companyInfo.addressValue')}</span>
              </div>
              <div className="flex gap-3">
                <span className="font-semibold text-white min-w-32">{t('companyInfo.representative')}</span>
                <span>{t('companyInfo.representativeValue')}</span>
              </div>
              <div className="flex gap-3 md:col-span-2">
                <span className="font-semibold text-white min-w-32">{t('companyInfo.financial')}</span>
                <span>{t('companyInfo.financialValue')}</span>
              </div>
              <div className="flex gap-3 md:col-span-2">
                <span className="font-semibold text-white min-w-32">{t('companyInfo.registration')}</span>
                <span>{t('companyInfo.registrationValue')}</span>
              </div>
              <div className="flex gap-3 md:col-span-2">
                <span className="font-semibold text-white min-w-32">{t('companyInfo.membership')}</span>
                <span>{t('companyInfo.membershipValue')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-24 md:py-32 bg-gradient-to-b from-black via-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t('news.title')}</h2>
            <p className="text-xl text-gray-300">{t('news.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Beautiful Villages News */}
            <div className="bg-gradient-to-br from-green-900/20 to-blue-900/20 backdrop-blur-sm border border-green-500/30 rounded-2xl p-8 hover:border-green-400/50 hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-center justify-center mb-6">
                <img 
                  src="/beautiful-villages-logo.png" 
                  alt="日本で最も美しい村" 
                  className="max-w-[280px] w-full h-auto"
                />
              </div>
              <div className="space-y-3">
                <div className="text-green-400 text-sm font-semibold">{t('news.items.beautifulVillages.date')}</div>
                <h3 className="text-xl font-bold text-white">{t('news.items.beautifulVillages.title')}</h3>
                <p className="text-gray-300 leading-relaxed">{t('news.items.beautifulVillages.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-gray-800 via-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t('contact.title')}</h2>
          <p className="text-xl text-gray-300 mb-12">{t('contact.subtitle')}</p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => setIsContactFormOpen(true)}
              className="group bg-rose-600 hover:bg-rose-700 text-white px-10 py-5 text-lg transition-all duration-300 flex items-center gap-3 hover:gap-4 transform hover:-translate-y-1 shadow-lg hover:shadow-2xl"
            >
              <Mail className="w-6 h-6" />
              <span className="font-medium">{t('contact.button')}</span>
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            
            <a
              href="mailto:info@dh-japan.com"
              className="group border-2 border-white/40 hover:border-white text-white hover:bg-white/10 px-10 py-5 text-lg transition-all duration-300 backdrop-blur-sm flex items-center gap-3 shadow-lg hover:shadow-2xl"
            >
              <Mail className="w-6 h-6" />
              <span className="font-medium">{t('contact.emailPrompt')}</span>
              <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold text-white">{t('common.companyName')}</h3>
            <p className="text-gray-400">{t('footer.tagline')}</p>
            <div className="flex justify-center gap-8 text-gray-400">
              <a href="mailto:info@dh-japan.com" className="hover:text-rose-400 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
              <a href="https://prive.dh-japan.com/" target="_blank" rel="noopener noreferrer" className="hover:text-rose-400 transition-colors">
                <ExternalLink className="w-6 h-6" />
              </a>
            </div>
            <div className="pt-6 border-t border-white/10">
              <p className="text-gray-500 text-sm">{t('footer.copyright')}</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Contact Form Modal */}
      {isContactFormOpen && (
        <ContactForm
          onClose={() => setIsContactFormOpen(false)}
        />
      )}
    </div>
  );
}

export default App;
