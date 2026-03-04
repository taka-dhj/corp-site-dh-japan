import React, { useState, useEffect } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import ContactForm from './components/ContactForm';
import { 
  ChevronRight, 
  Globe, 
  Users, 
  TrendingUp, 
  MapPin, 
  Building2, 
  Brain,
  Home,
  ArrowRight,
  Star,
  Award,
  Target,
  Zap,
  Camera,
  Mountain,
  Compass,
  Sparkles,
  Play,
  Calendar,
  Heart,
  Shield,
  Mail,
  Phone,
  ExternalLink,
  CheckCircle,
  Briefcase,
  GraduationCap,
  Quote,
  ChevronDown,
  Newspaper,
  Crown,
  Search,
  Cpu,
  Send,
  RefreshCw
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
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

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
    // 英語の場合はプレフィックスなし（ルートパスは/）
    
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

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hero image rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: t('services.inboundTour.title'),
      subtitle: t('services.inboundTour.subtitle'),
      description: t('services.inboundTour.description'),
      icon: <MapPin className="w-8 h-8" />,
      image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: t('services.inboundTour.features', { returnObjects: true }) as string[]
    },
    {
      title: t('services.consulting.title'),
      subtitle: t('services.consulting.subtitle'),
      description: t('services.consulting.description'),
      icon: <Building2 className="w-8 h-8" />,
      image: 'https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: t('services.consulting.features', { returnObjects: true }) as string[]
    },
    {
      title: t('services.dxSolution.title'),
      subtitle: t('services.dxSolution.subtitle'),
      description: t('services.dxSolution.description'),
      icon: <Brain className="w-8 h-8" />,
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: t('services.dxSolution.features', { returnObjects: true }) as string[]
    },
    {
      title: t('services.customTravel.title'),
      subtitle: t('services.customTravel.subtitle'),
      description: t('services.customTravel.description'),
      icon: <Users className="w-8 h-8" />,
      image: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: t('services.customTravel.features', { returnObjects: true }) as string[]
    },
    {
      title: t('services.vacationRental.title'),
      subtitle: t('services.vacationRental.subtitle'),
      description: t('services.vacationRental.description'),
      icon: <Home className="w-8 h-8" />,
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: t('services.vacationRental.features', { returnObjects: true }) as string[]
    }
  ];

  const executives = [
    {
      name: i18n.language === 'ja' ? '希代 翔' : 'Sho Kitai',
      position: 'CEO',
      image: '/Sho.png',
      background: t('executives.shoKishiro.background'),
      expertise: t('executives.shoKishiro.expertise', { returnObjects: true }) as string[]
    },
    {
      name: i18n.language === 'ja' ? '藤本 芳浩' : 'Yoshihiro Fujimoto',
      position: 'COO, CTO',
      image: '/Yoshi.png',
      background: t('executives.yoshihiroFujimoto.background'),
      expertise: t('executives.yoshihiroFujimoto.expertise', { returnObjects: true }) as string[]
    },
    {
      name: i18n.language === 'ja' ? '青木 孝嗣' : 'Takatsugu Aoki',
      position: 'CMO',
      image: '/Taka.png',
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
            <nav className="hidden md:flex items-center gap-8">
              <a
                href="#philosophy"
                className="font-light transition-colors duration-300 hover:text-rose-600 text-gray-700"
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
              >
                {t('nav.philosophy')}
              </a>
              <a 
                href="#services-header" 
                className="font-light transition-colors duration-300 hover:text-rose-600 text-gray-700"
               onClick={(e) => {
                 e.preventDefault();
                 setIsMobileMenuOpen(false);
                 setIsMobileMenuOpen(false);
                 setIsMobileMenuOpen(false);
                 setIsMobileMenuOpen(false);
                 const element = document.getElementById('services-header');
                 if (element) {
                   const offsetTop = element.offsetTop - 120;
                   window.scrollTo({
                     top: offsetTop,
                     behavior: 'smooth'
                   });
                 }
               }}
              >
                {t('nav.services')}
              </a>
              <div 
                className="relative"
                onMouseEnter={() => setIsAboutDropdownOpen(true)}
                onMouseLeave={() => setIsAboutDropdownOpen(false)}
              >
                <button 
                  className="font-light transition-colors duration-300 hover:text-rose-600 flex items-center gap-1 text-gray-700"
                >
                  {t('nav.about')}
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {/* Dropdown Menu */}
                <div className={`absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 transition-all duration-300 ${
                  isAboutDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}>
                  <a 
                    href="#strengths" 
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-rose-600 transition-colors duration-200"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById('strengths');
                      if (element) {
                        const offsetTop = element.offsetTop - 120;
                        window.scrollTo({
                          top: offsetTop,
                          behavior: 'smooth'
                        });
                      }
                    }}
                  >
                    {t('nav.strength')}
                  </a>
                  <a 
                    href="#executives-header" 
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-rose-600 transition-colors duration-200"
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
                  >
                    {t('nav.executives')}
                  </a>
                  <a
                    href="#news"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-rose-600 transition-colors duration-200"
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
                  >
                    News
                  </a>
                  <a
                    href="#company-info"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-rose-600 transition-colors duration-200"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById('company-info');
                      if (element) {
                        const offsetTop = element.offsetTop - 120;
                        window.scrollTo({
                          top: offsetTop,
                          behavior: 'smooth'
                        });
                      }
                    }}
                  >
                    Profile
                  </a>
                  <a 
                    href="#contact" 
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-rose-600 transition-colors duration-200"
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
                    }}
                  >
                    Contact
                  </a>
                </div>
              </div>
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
              className="md:hidden p-2 transition-colors duration-300 text-gray-900"
            >
              <div className="w-6 h-6 flex flex-col justify-center gap-1">
                <div className={`h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`} />
                <div className={`h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`} />
                <div className={`h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`} />
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96 pb-6' : 'max-h-0'
          }`}>
            <nav className="flex flex-col gap-4 pt-4 border-t border-gray-200">
              <a
                href="#philosophy"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMobileMenuOpen(false);
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
                {t('nav.philosophy')}
              </a>
              <a
                href="#services-header"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMobileMenuOpen(false);
                  const element = document.getElementById('services-header');
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
                {t('nav.services')}
              </a>
              <a
                href="#strengths"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMobileMenuOpen(false);
                  const element = document.getElementById('strengths');
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
                {t('nav.strength')}
              </a>
              <a
                href="#executives-header"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMobileMenuOpen(false);
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
                {t('nav.executives')}
              </a>
              <a
                href="#news"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMobileMenuOpen(false);
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
                News
              </a>
              <a
                href="#company-info"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMobileMenuOpen(false);
                  const element = document.getElementById('company-info');
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
                Profile
              </a>
              <a 
                href="#contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-light transition-colors duration-300 hover:text-rose-600 text-gray-700"
              >
                Contact
              </a>
              <button 
                onClick={() => {
                  setIsContactFormOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="text-left px-6 py-2 border-2 border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white transition-all duration-300 font-light"
              >
                {t('nav.contact')}
              </button>
              {/* Language Toggle Button for Mobile */}
              <button
                onClick={() => {
                  toggleLanguage();
                }}
                className="text-left px-6 py-2 border border-gray-300 hover:border-rose-600 text-gray-700 hover:text-rose-600 transition-all duration-300 font-light flex items-center gap-2"
              >
                <Globe className="w-4 h-4" />
                <span>{i18n.language === 'ja' ? 'English' : '日本語'}</span>
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section with Dynamic Background */}
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
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/70 to-black/90"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto py-4">
          <div className="mb-4 md:mb-12 hidden md:block">
            <div className="w-24 h-px bg-rose-600 mx-auto mb-8"></div>
            <p className="text-gray-300 text-sm tracking-[0.4em] uppercase font-light mb-4 md:mb-8">
              Discovery Hidden Japan
            </p>
          </div>

          <h1 className={`hero-title font-['Klee_One'] font-semibold text-white block mb-24 md:mb-48 ${
            i18n.language === 'en' 
              ? 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.2] sm:leading-[1.2] md:leading-[1.1] max-w-5xl mx-auto' 
              : 'text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[8rem] leading-[1.3] sm:leading-[1.3] md:leading-[1.2]'
          }`}>
            {t('hero.title')}
          </h1>

          <p className="hero-subtitle text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl text-gray-200 mb-24 sm:mb-32 md:mb-32 max-w-4xl mx-auto leading-[1.4] font-bold">
            <span className="font-extrabold">
              {t('hero.subtitle')}
            </span>
          </p>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>

          <div className="hero-buttons flex flex-col sm:flex-row gap-4 sm:gap-4 md:gap-6 justify-center items-center px-4">
            <button
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('domains');
                if (element) {
                  const offsetTop = element.offsetTop - 120;
                  window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                  });
                }
              }}
              className="hero-button group relative bg-rose-600 hover:bg-rose-700 text-white px-20 sm:px-6 md:px-8 py-10 sm:py-3 md:py-4 transition-all duration-500 flex items-center gap-2 hover:gap-3 transform hover:-translate-y-1"
            >
              <span className="text-base sm:text-sm md:text-base font-medium leading-tight">{t('hero.cta1')}</span>
              <ChevronRight className="w-5 h-5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => window.location.href = 'mailto:info@dh-japan.com'}
              className="hero-button group relative border-2 border-white/40 hover:border-white text-white hover:bg-white/10 px-20 sm:px-6 md:px-8 py-10 sm:py-3 md:py-4 transition-all duration-500 backdrop-blur-sm"
            >
              <span className="flex items-center gap-2 text-base sm:text-sm md:text-base font-medium leading-tight">
                <Mail className="w-5 h-5 sm:w-4 sm:h-4" />
                {t('hero.cta2')}
              </span>
            </button>
            <a
              href="https://prive.dh-japan.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-button group relative bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-20 sm:px-6 md:px-8 py-10 sm:py-3 md:py-4 transition-all duration-500 flex items-center gap-2 hover:gap-3 transform hover:-translate-y-1 shadow-xl"
            >
              <Crown className="w-5 h-5 sm:w-4 sm:h-4" />
              <span className="text-base sm:text-sm md:text-base font-medium leading-tight">{t('hero.cta3')}</span>
              <ExternalLink className="w-4 h-4 sm:w-3 sm:h-3" />
            </a>
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

{/* ========================================
   BUSINESS DOMAINS - PHOTO FIRST DESIGN
   Large photos with text overlay, Privé-inspired
   ======================================== */}

      <section 
        id="domains"
        data-animate
        className={`py-24 md:py-32 bg-white relative transition-all duration-1000 ${
          visibleSections.has('domains') 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="w-24 h-px bg-rose-600 mx-auto mb-8"></div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight tracking-tight">
              {t('domains.title')}
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-5">
              {t('domains.subtitle')}
            </p>
          </div>

          {/* Domain Grid - 2x2 with large photos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Domain 1: Inbound Tours - Full photo with text overlay */}
            <div className="group relative h-[500px] overflow-hidden rounded-2xl">
              <img 
                src="https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop" 
                alt="Inbound Tours"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full mb-5">
                  {t('domains.items.inbound.tag')}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  {t('domains.items.inbound.title')}
                </h3>
                <p className="text-lg text-white/90 leading-relaxed">
                  {t('domains.items.inbound.description')}
                </p>
              </div>
            </div>

            {/* Domain 2: Regional Consulting */}
            <div className="group relative h-[500px] overflow-hidden rounded-2xl">
              <img 
                src="https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop" 
                alt="Regional Consulting"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full mb-5">
                  {t('domains.items.consulting.tag')}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  {t('domains.items.consulting.title')}
                </h3>
                <p className="text-lg text-white/90 leading-relaxed">
                  {t('domains.items.consulting.description')}
                </p>
              </div>
            </div>

            {/* Domain 3: Tourism DX */}
            <div className="group relative h-[500px] overflow-hidden rounded-2xl">
              <img 
                src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop" 
                alt="Tourism DX"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full mb-5">
                  {t('domains.items.dx.tag')}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  {t('domains.items.dx.title')}
                </h3>
                <p className="text-lg text-white/90 leading-relaxed">
                  {t('domains.items.dx.description')}
                </p>
              </div>
            </div>

            {/* Domain 4: Property Management */}
            <div className="group relative h-[500px] overflow-hidden rounded-2xl">
              <img 
                src="https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop" 
                alt="Property Management"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full mb-5">
                  {t('domains.items.property.tag')}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  {t('domains.items.property.title')}
                </h3>
                <p className="text-lg text-white/90 leading-relaxed">
                  {t('domains.items.property.description')}
                </p>
              </div>
            </div>
          </div>

          {/* Tagline */}
          <div className="text-center mt-20">
            <p className="text-3xl md:text-4xl font-light text-gray-900 tracking-wide">
              {t('domains.tagline')}
            </p>
          </div>
        </div>
      </section>

{/* ========================================
   5-PHASE HORIZONTAL SCROLL DESIGN
   Full-width horizontal flow with large photos
   ======================================== */}

{/* 5-PHASE FLOW - ALL VISIBLE, NO SCROLL */}
      <section 
        id="solutions"
        data-animate
        className={`py-24 md:py-32 bg-gray-900 relative overflow-hidden transition-all duration-1000 ${
          visibleSections.has('solutions') 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-20">
            <p className="text-2xl md:text-3xl text-gray-300 font-light">
              {t('solutions.subtitle')}
            </p>
          </div>

          {/* Desktop: 5 cards in one row - all visible */}
          <div className="hidden lg:grid lg:grid-cols-5 gap-6 mb-12">
            {/* Phase 1 */}
            <div className="group relative h-[500px] rounded-2xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop" 
                alt="Discovery Phase"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 bg-gradient-to-br from-rose-500 to-rose-600 rounded-xl flex items-center justify-center shadow-2xl">
                    <Search className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-5xl font-light text-rose-400">01</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 leading-snug">{t('solutions.phases.discovery.title')}</h3>
                <p className="text-base text-white/90 mb-3 leading-relaxed">{t('solutions.phases.discovery.description')}</p>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="group relative h-[500px] rounded-2xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop" 
                alt="Digitalization Phase"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-2xl">
                    <Cpu className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-5xl font-light text-purple-400">02</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 leading-snug">{t('solutions.phases.digitalization.title')}</h3>
                <p className="text-base text-white/90 mb-3 leading-relaxed">{t('solutions.phases.digitalization.description')}</p>
                
              </div>
            </div>

            {/* Phase 3 */}
            <div className="group relative h-[500px] rounded-2xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop" 
                alt="Infrastructure Phase"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-2xl">
                    <Building2 className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-5xl font-light text-blue-400">03</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 leading-snug">{t('solutions.phases.infrastructure.title')}</h3>
                <p className="text-base text-white/90 mb-3 leading-relaxed">{t('solutions.phases.infrastructure.description')}</p>
                
              </div>
            </div>

            {/* Phase 4 */}
            <div className="group relative h-[500px] rounded-2xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop" 
                alt="Sales Phase"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-2xl">
                    <Send className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-5xl font-light text-amber-400">04</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 leading-snug">{t('solutions.phases.sales.title')}</h3>
                <p className="text-base text-white/90 mb-3 leading-relaxed">{t('solutions.phases.sales.description')}</p>
                
              </div>
            </div>

            {/* Phase 5 */}
            <div className="group relative h-[500px] rounded-2xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/46253/mt-fuji-sea-of-clouds-sunrise-46253.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop" 
                alt="Reinvestment Phase"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-2xl">
                    <RefreshCw className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-5xl font-light text-green-400">05</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 leading-snug">{t('solutions.phases.reinvestment.title')}</h3>
                <p className="text-base text-white/90 mb-3 leading-relaxed">{t('solutions.phases.reinvestment.description')}</p>
                
              </div>
            </div>
          </div>

          {/* Tablet: 2 rows */}
          <div className="hidden md:grid lg:hidden md:grid-cols-3 gap-6 mb-12">
            {/* Row 1: Phases 1-3 */}
            <div className="group relative h-[500px] rounded-2xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop" 
                alt="Discovery Phase"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 bg-gradient-to-br from-rose-500 to-rose-600 rounded-xl flex items-center justify-center shadow-2xl">
                    <Search className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-6xl font-light text-rose-400">01</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 leading-snug">{t('solutions.phases.discovery.title')}</h3>
                <p className="text-base text-white/90 mb-2">{t('solutions.phases.discovery.description')}</p>
                <p className="text-xs font-bold text-rose-400 uppercase">{t('solutions.phases.discovery.detail')}</p>
              </div>
            </div>

            <div className="group relative h-[500px] rounded-2xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop" 
                alt="Digitalization Phase"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-2xl">
                    <Cpu className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-5xl font-light text-purple-400">02</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 leading-snug">{t('solutions.phases.digitalization.title')}</h3>
                <p className="text-base text-white/90 mb-2">{t('solutions.phases.digitalization.description')}</p>
                <p className="text-sm font-bold text-purple-400 uppercase">{t('solutions.phases.digitalization.detail')}</p>
              </div>
            </div>

            <div className="group relative h-[500px] rounded-2xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop" 
                alt="Infrastructure Phase"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-2xl">
                    <Building2 className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-5xl font-light text-blue-400">03</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 leading-snug">{t('solutions.phases.infrastructure.title')}</h3>
                <p className="text-base text-white/90 mb-2">{t('solutions.phases.infrastructure.description')}</p>
                <p className="text-sm font-bold text-blue-400 uppercase">{t('solutions.phases.infrastructure.detail')}</p>
              </div>
            </div>

            {/* Row 2: Phases 4-5 centered */}
            <div className="group relative h-[400px] rounded-2xl overflow-hidden md:col-start-1 md:col-span-1">
              <img 
                src="https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop" 
                alt="Sales Phase"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-2xl">
                    <Send className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-5xl font-light text-amber-400">04</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 leading-snug">{t('solutions.phases.sales.title')}</h3>
                <p className="text-base text-white/90 mb-2">{t('solutions.phases.sales.description')}</p>
                <p className="text-sm font-bold text-amber-400 uppercase">{t('solutions.phases.sales.detail')}</p>
              </div>
            </div>

            <div className="group relative h-[400px] rounded-2xl overflow-hidden md:col-start-3 md:col-span-1">
              <img 
                src="https://images.pexels.com/photos/46253/mt-fuji-sea-of-clouds-sunrise-46253.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop" 
                alt="Reinvestment Phase"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-2xl">
                    <RefreshCw className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-5xl font-light text-green-400">05</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 leading-snug">{t('solutions.phases.reinvestment.title')}</h3>
                <p className="text-base text-white/90 mb-2">{t('solutions.phases.reinvestment.description')}</p>
                <p className="text-sm font-bold text-green-400 uppercase">{t('solutions.phases.reinvestment.detail')}</p>
              </div>
            </div>
          </div>

          {/* Mobile: Vertical stack */}
          <div className="md:hidden space-y-6">
            {/* Mobile cards - same structure, 5 cards stacked */}
            <div className="group relative h-[500px] rounded-2xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop" 
                alt="Discovery Phase"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 bg-gradient-to-br from-rose-500 to-rose-600 rounded-xl flex items-center justify-center shadow-2xl">
                    <Search className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-6xl font-light text-rose-400">01</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 leading-snug">{t('solutions.phases.discovery.title')}</h3>
                <p className="text-base text-white/90 mb-2">{t('solutions.phases.discovery.description')}</p>
                <p className="text-xs font-bold text-rose-400 uppercase">{t('solutions.phases.discovery.detail')}</p>
              </div>
            </div>

            {/* Repeat for phases 2-5 */}
            <div className="group relative h-[500px] rounded-2xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop" 
                alt="Digitalization Phase"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-2xl">
                    <Cpu className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-5xl font-light text-purple-400">02</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 leading-snug">{t('solutions.phases.digitalization.title')}</h3>
                <p className="text-base text-white/90 mb-2">{t('solutions.phases.digitalization.description')}</p>
                <p className="text-sm font-bold text-purple-400 uppercase">{t('solutions.phases.digitalization.detail')}</p>
              </div>
            </div>

            <div className="group relative h-[500px] rounded-2xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop" 
                alt="Infrastructure Phase"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-2xl">
                    <Building2 className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-5xl font-light text-blue-400">03</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 leading-snug">{t('solutions.phases.infrastructure.title')}</h3>
                <p className="text-base text-white/90 mb-2">{t('solutions.phases.infrastructure.description')}</p>
                <p className="text-sm font-bold text-blue-400 uppercase">{t('solutions.phases.infrastructure.detail')}</p>
              </div>
            </div>

            <div className="group relative h-[500px] rounded-2xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop" 
                alt="Sales Phase"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-2xl">
                    <Send className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-5xl font-light text-amber-400">04</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 leading-snug">{t('solutions.phases.sales.title')}</h3>
                <p className="text-base text-white/90 mb-2">{t('solutions.phases.sales.description')}</p>
                <p className="text-sm font-bold text-amber-400 uppercase">{t('solutions.phases.sales.detail')}</p>
              </div>
            </div>

            <div className="group relative h-[500px] rounded-2xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/46253/mt-fuji-sea-of-clouds-sunrise-46253.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop" 
                alt="Reinvestment Phase"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-2xl">
                    <RefreshCw className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-5xl font-light text-green-400">05</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 leading-snug">{t('solutions.phases.reinvestment.title')}</h3>
                <p className="text-base text-white/90 mb-2">{t('solutions.phases.reinvestment.description')}</p>
                <p className="text-sm font-bold text-green-400 uppercase">{t('solutions.phases.reinvestment.detail')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section 
      {/* Services Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div 
            id="services-header"
            data-animate
            className={`text-center mb-20 transition-all duration-1000 ${
              visibleSections.has('services-header') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-20'
            }`}
          >
            <h2 className="text-5xl md:text-6xl font-normal text-gray-900 mb-8 tracking-tight">
              {t('services.title')}
            </h2>
            <div className="w-24 h-px bg-rose-600 mx-auto mb-12"></div>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
              {t('services.subtitle')}
            </p>
          </div>

          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={index}
                data-animate
                className={`transition-all duration-1000 delay-${index * 100} ${
                  visibleSections.has('services-header')
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-20'
                }`}
              >
                <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                  <div className="lg:w-1/2">
                    <div className="relative h-96 overflow-hidden rounded-lg shadow-2xl group">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                  </div>

                  <div className="lg:w-1/2 space-y-6">
                    <div className="flex items-center gap-4 mb-5">
                      <div className="p-3 bg-rose-600 text-white rounded-lg">
                        {service.icon}
                      </div>
                      <div className="h-px flex-1 bg-gray-200"></div>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-normal text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-lg text-rose-600 font-medium mb-5">
                      {service.subtitle}
                    </p>
                    <p className="text-xl text-gray-700 leading-relaxed font-medium mb-6">
                      {service.description}
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full">
                          <CheckCircle className="w-4 h-4 text-rose-600" />
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* DHJ Privé CTA for Custom Travel Service */}
                    {index === 3 && (
                      <div className="mt-8 p-8 bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-xl border-2 border-rose-500 shadow-2xl relative overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                          <div className="absolute inset-0" style={{
                            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                            backgroundSize: '32px 32px'
                          }}></div>
                        </div>
                        
                        <div className="relative z-10">
                          <div className="flex items-center gap-3 mb-5">
                            <div className="p-2 bg-rose-600 rounded-lg">
                              <Crown className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-rose-400 text-sm font-bold uppercase tracking-wider">Premium Experience</span>
                          </div>
                          <h4 className="text-3xl font-light text-white mb-3">
                            DHJ Privé
                          </h4>
                          <p className="text-gray-200 mb-6 leading-relaxed text-lg">
                            {i18n.language === 'ja' 
                              ? '富裕層向けのプレミアムツアーはDHJ Privéで。一流の体験と最高のおもてなしをご提供します。'
                              : 'Premium tours for discerning travelers. Experience world-class service and exclusive journeys.'}
                          </p>
                          <a
                            href="https://prive.dh-japan.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white px-8 py-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl group text-lg font-medium"
                          >
                            <Crown className="w-5 h-5" />
                            <span>
                              {i18n.language === 'ja' ? 'DHJ Privéへ' : 'Visit DHJ Privé'}
                            </span>
                            <ExternalLink className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strengths Section */}
      <section
        id="strengths"
        data-animate
        className={`py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white transition-all duration-1000 ${
          visibleSections.has('strengths')
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-normal mb-8 tracking-tight">
              {t('strengths.title')}
            </h2>
            <div className="w-24 h-px bg-rose-600 mx-auto mb-12"></div>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-medium">
              {t('strengths.subtitle')}

        id="why-dhj"
        data-animate
        className={`py-24 md:py-32 bg-white relative overflow-hidden transition-all duration-1000 ${
          visibleSections.has('why-dhj') 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="w-24 h-px bg-rose-600 mx-auto mb-8"></div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight tracking-tight">
              {t('whyDHJ.title')}
            </h2>
            <p className="text-xl md:text-2xl text-gray-600">
              {t('whyDHJ.subtitle')}
            </p>
          </div>

          <div className="space-y-24">
            {/* Reason 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img 
                  src="https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
                  alt="End-to-end support"
                  className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
                />
              </div>
              <div className="order-1 lg:order-2 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-rose-600 rounded-full flex items-center justify-center shadow-xl">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-5xl font-light text-rose-600">01</span>
                </div>
                <p className="text-sm font-bold text-rose-600 uppercase tracking-wider">{t('whyDHJ.factors.integrated.detail')}</p>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">{t('whyDHJ.factors.integrated.title')}</h3>
                <p className="text-lg text-gray-700 leading-relaxed">{t('whyDHJ.factors.integrated.description')}</p>
              </div>
            </div>

            {/* Reason 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-5xl font-light text-purple-600">02</span>
                </div>
                <p className="text-sm font-bold text-purple-600 uppercase tracking-wider">{t('whyDHJ.factors.digital.detail')}</p>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">{t('whyDHJ.factors.digital.title')}</h3>
                <p className="text-lg text-gray-700 leading-relaxed">{t('whyDHJ.factors.digital.description')}</p>
              </div>
              <div>
                <img 
                  src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
                  alt="Digital & DX"
                  className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>

            {/* Reason 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img 
                  src="https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
                  alt="Global Network"
                  className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
                />
              </div>
              <div className="order-1 lg:order-2 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-xl">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-5xl font-light text-blue-600">03</span>
                </div>
                <p className="text-sm font-bold text-blue-600 uppercase tracking-wider">{t('whyDHJ.factors.network.detail')}</p>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">{t('whyDHJ.factors.network.title')}</h3>
                <p className="text-lg text-gray-700 leading-relaxed">{t('whyDHJ.factors.network.description')}</p>
              </div>
            </div>

            {/* Reason 4 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-xl">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-5xl font-light text-green-600">04</span>
                </div>
                <p className="text-sm font-bold text-green-600 uppercase tracking-wider">{t('whyDHJ.factors.execution.detail')}</p>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">{t('whyDHJ.factors.execution.title')}</h3>
                <p className="text-lg text-gray-700 leading-relaxed">{t('whyDHJ.factors.execution.description')}</p>
              </div>
              <div>
                <img 
                  src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
                  alt="Execution Power"
                  className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section 
        id="philosophy"
        data-animate
        className={`py-24 md:py-32 relative overflow-hidden transition-all duration-1000 ${
          visibleSections.has('philosophy') 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-20'
        }`}
      >
        {/* Large Hero Image */}
        <div className="relative h-[600px] mb-20">
          <img 
            src="https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Philosophy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <div className="mb-16">
            <p className="text-gray-400 text-sm tracking-[0.3em] uppercase font-light mb-8">
              {t('philosophy.title')}
            </p>
            <div className="w-24 h-px bg-rose-600 mx-auto mb-12"></div>
            <h2 className="text-5xl md:text-7xl font-light text-gray-900 mb-16 tracking-tight">
              <span className="font-['Klee_One'] font-normal">
                <Trans i18nKey="philosophy.heading" components={{ 0: <br />, 1: <span className="text-rose-600" /> }} />
              </span>
            </h2>
          </div>
          
          <div className="space-y-12 text-left max-w-4xl mx-auto">
            <p className="text-2xl md:text-3xl text-gray-800 leading-loose md:leading-loose font-normal">
              {t('philosophy.description1')}
            </p>
            
            <div className="w-16 h-px bg-gray-300 my-8"></div>
            
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
              {t('philosophy.description2')}
            </p>
            
            <div className="w-16 h-px bg-gray-300 my-8"></div>
            
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
              <Trans i18nKey="philosophy.description3" components={{ 0: <span className="text-rose-600 font-normal" /> }} />
            </p>
          </div>
        </div>
      </section>

      {/* Business Overview */}
      <section 
        id="overview"
        data-animate
        className={`py-24 bg-gray-50 transition-all duration-1000 delay-200 ${
          visibleSections.has('overview') 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-normal text-gray-900 mb-8 tracking-tight">
            {t('overview.title')}
          </h2>
          <div className="w-24 h-px bg-rose-600 mx-auto mb-12"></div>
          <p className="text-2xl md:text-3xl text-gray-700 max-w-4xl mx-auto leading-loose md:leading-loose font-normal">
            <Trans 
              i18nKey="overview.description" 
              components={{ 
                0: <span className="text-rose-600 font-normal" />,
                1: <span className="text-rose-600 font-normal" />,
                2: <br className="hidden md:block" />
              }} 
            />
          </p>
          
          <div className="grid md:grid-cols-3 gap-12 mt-20">
            {achievements.map((item, index) => (
              <div 
                key={index} 
                className={`group text-center transition-all duration-700 delay-${index * 100} ${
                  visibleSections.has('overview') 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="mb-8">
                  <h3 className="text-6xl md:text-7xl font-normal text-gray-900 mb-4 group-hover:text-rose-600 transition-colors duration-500">
                    {item.number}
                  </h3>
                  <p className="text-xl font-medium text-gray-800 mb-3">{item.label}</p>
                  <p className="text-gray-600 leading-relaxed font-medium">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-normal text-gray-900 mb-8 tracking-tight">
              {t('news.title')}
            </h2>
            <div className="w-24 h-px bg-rose-600 mx-auto mb-12"></div>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
              {t('news.subtitle')}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Beautiful Villages News Item */}
            <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 bg-gradient-to-br from-rose-600 to-rose-700 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <Award className="w-20 h-20 text-white mx-auto mb-4" />
                    <div className="text-white text-sm font-medium tracking-wider uppercase mb-2">
                      {t('news.items.beautifulVillages.date')}
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="flex items-center gap-2 mb-5">
                    <Newspaper className="w-5 h-5 text-rose-600" />
                    <span className="text-sm text-rose-600 font-semibold uppercase tracking-wider">Press Release</span>
                  </div>
                  <h3 className="text-2xl font-normal text-gray-900 mb-4 leading-tight">
                    {t('news.items.beautifulVillages.title')}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6 font-medium">
                    {t('news.items.beautifulVillages.description')}
                  </p>
                  <div className="flex items-center justify-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-lg border-2 border-gray-200">
                    <img 
                      src="/beautiful-villages-logo.png" 
                      alt="日本で最も美しい村 連合" 
                      className="w-full max-w-xs object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DHJ Privé CTA Section */}
      <section
        id="prive-cta"
        data-animate
        className={`py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden transition-all duration-1000 ${
          visibleSections.has('prive-cta')
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-20'
        }`}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-rose-600/20 border border-rose-600/30 px-4 py-2 rounded-full mb-8">
              <Crown className="w-5 h-5 text-rose-400" />
              <span className="text-rose-300 text-sm font-medium tracking-wider uppercase">
                {t('prive.cta.badge')}
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-normal mb-6 tracking-tight">
              {t('prive.cta.title')}
            </h2>
            <div className="w-24 h-px bg-rose-600 mx-auto mb-8"></div>
            <p className="text-3xl text-gray-300 mb-4 font-light">
              {t('prive.cta.subtitle')}
            </p>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium">
              {t('prive.cta.description')}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {(t('prive.cta.features', { returnObjects: true }) as string[]).map((feature, index) => (
              <div key={index} className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10">
                <CheckCircle className="w-5 h-5 text-rose-400" />
                <span className="text-gray-300 font-medium">{feature}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://prive.dh-japan.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white px-12 py-6 rounded-lg transition-all duration-500 transform hover:-translate-y-1 hover:shadow-2xl group text-lg font-medium"
            >
              <Crown className="w-6 h-6" />
              {t('prive.cta.button')}
              <ExternalLink className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* Company Information Section */}
      <section 
        id="company-info"
        data-animate
        className={`py-32 bg-gray-50 transition-all duration-1000 ${
          visibleSections.has('company-info') 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-normal text-gray-900 mb-8 tracking-tight">
              {t('companyInfo.title')}
            </h2>
            <div className="w-24 h-px bg-rose-600 mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <table className="w-full">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="px-8 py-6 bg-gray-50 font-medium text-gray-900 w-1/3">
                      {t('companyInfo.companyName')}
                    </td>
                    <td className="px-8 py-6 text-gray-700 font-medium">
                      {t('companyInfo.companyNameValue')}
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-8 py-6 bg-gray-50 font-semibold text-gray-900">
                      {t('companyInfo.address')}
                    </td>
                    <td className="px-8 py-6 text-gray-700 font-medium">
                      {t('companyInfo.addressValue')}
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-8 py-6 bg-gray-50 font-semibold text-gray-900">
                      {t('companyInfo.capital')}
                    </td>
                    <td className="px-8 py-6 text-gray-700 font-medium">
                      {t('companyInfo.capitalValue')}
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-8 py-6 bg-gray-50 font-semibold text-gray-900">
                      {t('companyInfo.established')}
                    </td>
                    <td className="px-8 py-6 text-gray-700 font-medium">
                      {t('companyInfo.establishedValue')}
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-8 py-6 bg-gray-50 font-semibold text-gray-900">
                      {t('companyInfo.representative')}
                    </td>
                    <td className="px-8 py-6 text-gray-700 font-medium">
                      {t('companyInfo.representativeValue')}
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-8 py-6 bg-gray-50 font-semibold text-gray-900">
                      {t('companyInfo.registration')}
                    </td>
                    <td className="px-8 py-6 text-gray-700 font-medium">
                      {t('companyInfo.registrationValue')}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-8 py-6 bg-gray-50 font-semibold text-gray-900">
                      {t('companyInfo.membership')}
                    </td>
                    <td className="px-8 py-6 text-gray-700 font-medium">
                      {t('companyInfo.membershipValue')}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact"
        data-animate
        className={`py-32 bg-white transition-all duration-1000 ${
          visibleSections.has('contact') 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-normal text-gray-900 mb-8 tracking-tight">
            {t('contact.title')}
          </h2>
          <div className="w-24 h-px bg-rose-600 mx-auto mb-12"></div>
          <p className="text-2xl text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed font-medium">
            {t('contact.subtitle')}
          </p>
          
          <div className="flex justify-center">
            <div className="flex flex-col sm:flex-row gap-6 items-center">
              <button 
                onClick={() => setIsContactFormOpen(true)}
                className="group bg-rose-600 hover:bg-rose-700 text-white px-12 py-6 transition-all duration-500 flex items-center gap-4 hover:gap-6 transform hover:-translate-y-1"
              >
                <Mail className="w-5 h-5" />
                {t('contact.button')}
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
              
              <div className="text-center">
                <p className="text-gray-600 mb-2 font-medium">{t('contact.orEmail')}</p>
                <a 
                  href={`mailto:info@dh-japan.com?subject=${encodeURIComponent(i18n.language === 'ja' ? 'お問い合わせ' : 'Inquiry')}&body=${encodeURIComponent(i18n.language === 'ja' ? 'お名前:%0D%0A会社名・団体名:%0D%0A電話番号:%0D%0A%0D%0Aお問い合わせ内容:%0D%0A' : 'Name:%0D%0ACompany/Organization:%0D%0APhone Number:%0D%0A%0D%0AInquiry:%0D%0A')}`}
                  className="text-rose-600 hover:text-rose-700 font-semibold underline"
                >
                  info@dh-japan.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-8">
              <img 
                src="/logo.png" 
                alt="Discovery Hidden Japan Logo" 
                className="w-10 h-10 object-contain"
              />
              <h3 className="text-2xl font-normal">Discovery Hidden Japan</h3>
            </div>
            
            <div className="w-24 h-px bg-rose-600 mx-auto mb-8"></div>
            
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
              {t('footer.tagline')}
            </p>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p className="font-medium">{t('footer.copyright')}</p>
          </div>
        </div>
      </footer>

      {/* Contact Form Modal */}
      <ContactForm 
        isOpen={isContactFormOpen} 
        onClose={() => setIsContactFormOpen(false)} 
      />
    </div>
  );
}

export default App;
