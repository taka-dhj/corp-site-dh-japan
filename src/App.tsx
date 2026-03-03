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
  Key
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
                  {/* For Government & Business */}
                  <div className="px-4 py-2">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      {t('nav.solutionsDropdown.forBusiness')}
                    </p>
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
                      className="block w-full text-left px-2 py-2 text-gray-700 hover:bg-gray-50 hover:text-rose-600 transition-colors duration-200 rounded"
                    >
                      {t('nav.solutionsDropdown.consulting')}
                    </button>
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
                      className="block w-full text-left px-2 py-2 text-gray-700 hover:bg-gray-50 hover:text-rose-600 transition-colors duration-200 rounded"
                    >
                      {t('nav.solutionsDropdown.dx')}
                    </button>
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
                      className="block w-full text-left px-2 py-2 text-gray-700 hover:bg-gray-50 hover:text-rose-600 transition-colors duration-200 rounded"
                    >
                      {t('nav.solutionsDropdown.property')}
                    </button>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-gray-200 my-2"></div>

                  {/* For Partners & Travelers */}
                  <div className="px-4 py-2">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      {t('nav.solutionsDropdown.forPartners')}
                    </p>
                    <a
                      href="mailto:info@dh-japan.com"
                      className="block px-2 py-2 text-gray-700 hover:bg-gray-50 hover:text-rose-600 transition-colors duration-200 rounded flex items-center justify-between"
                      onClick={() => setIsSolutionsDropdownOpen(false)}
                    >
                      <span>{t('nav.solutionsDropdown.partners')}</span>
                      <Mail className="w-4 h-4 opacity-60" />
                    </a>
                    <a
                      href="https://prive.dh-japan.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-2 py-2 text-gray-700 hover:bg-gray-50 hover:text-rose-600 transition-colors duration-200 rounded flex items-center justify-between"
                      onClick={() => setIsSolutionsDropdownOpen(false)}
                    >
                      <span>{t('nav.solutionsDropdown.travelers')}</span>
                      <ExternalLink className="w-4 h-4 opacity-60" />
                    </a>
                  </div>
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
            <Trans 
              i18nKey="hero.title" 
              components={{ 
                0: <br className="hidden md:block" />
              }} 
            />
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-12 max-w-5xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 mt-12">
            <button
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('services-header');
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
              <span className="text-base md:text-lg font-medium">{t('hero.cta.forBusiness')}</span>
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href="mailto:info@dh-japan.com"
              className="group relative bg-gray-700 hover:bg-gray-600 text-white px-8 md:px-10 py-4 md:py-5 transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-2xl"
            >
              <Mail className="w-5 h-5" />
              <span className="text-base md:text-lg font-medium">{t('hero.cta.forPartners')}</span>
              <ExternalLink className="w-4 h-4 opacity-70" />
            </a>
            <a
              href="https://prive.dh-japan.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-white px-8 md:px-10 py-4 md:py-5 transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-2xl"
            >
              <Crown className="w-5 h-5" />
              <span className="text-base md:text-lg font-medium">{t('hero.cta.forTravelers')}</span>
              <ExternalLink className="w-4 h-4 opacity-70" />
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

      {/* Integrated Solutions Section */}
      <section 
        id="solutions"
        data-animate
        className={`py-24 md:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative transition-all duration-1000 ${
          visibleSections.has('solutions') 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="w-24 h-px bg-rose-600 mx-auto mb-8"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('solutions.title')}
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              {t('solutions.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Inbound Tour Planning */}
            <div 
              className="group rounded-xl bg-white/5 backdrop-blur-sm p-8 hover:bg-white/10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-white/10 hover:border-rose-500/50"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-rose-400 transition-colors">
                    {t('solutions.inbound.title')}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {t('solutions.inbound.description')}
                  </p>
                  <a
                    href="https://prive.dh-japan.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-rose-400 hover:text-rose-300 font-medium transition-colors"
                  >
                    {t('solutions.inbound.cta')}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Regional Consulting */}
            <div 
              className="group rounded-xl bg-white/5 backdrop-blur-sm p-8 hover:bg-white/10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-white/10 hover:border-blue-500/50"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {t('solutions.consulting.title')}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {t('solutions.consulting.description')}
                  </p>
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
                    }}
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors"
                  >
                    {t('solutions.consulting.cta')}
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Tourism DX Solutions */}
            <div 
              className="group rounded-xl bg-white/5 backdrop-blur-sm p-8 hover:bg-white/10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-white/10 hover:border-purple-500/50"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {t('solutions.dx.title')}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {t('solutions.dx.description')}
                  </p>
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
                    }}
                    className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-colors"
                  >
                    {t('solutions.dx.cta')}
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Property Management */}
            <div 
              className="group rounded-xl bg-white/5 backdrop-blur-sm p-8 hover:bg-white/10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-white/10 hover:border-green-500/50"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                    <Key className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                    {t('solutions.property.title')}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {t('solutions.property.description')}
                  </p>
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
                    }}
                    className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-medium transition-colors"
                  >
                    {t('solutions.property.cta')}
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section 
        id="philosophy"
        data-animate
        className={`py-32 bg-white relative transition-all duration-1000 ${
          visibleSections.has('philosophy') 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="max-w-5xl mx-auto px-4 text-center">
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

      {/* Why DHJ? Section */}
      <section 
        id="why-dhj"
        data-animate
        className={`py-24 md:py-32 bg-white relative transition-all duration-1000 ${
          visibleSections.has('why-dhj') 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="w-24 h-px bg-rose-600 mx-auto mb-8"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('whyDHJ.title')}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              {t('whyDHJ.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Reason 1 */}
            <div className="group bg-gray-50 rounded-xl p-8 hover:bg-rose-50 hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center mb-6 group-hover:bg-rose-200 transition-colors">
                  <Target className="w-8 h-8 text-rose-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {t('whyDHJ.reason1.title')}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('whyDHJ.reason1.description')}
                </p>
              </div>
            </div>

            {/* Reason 2 */}
            <div className="group bg-gray-50 rounded-xl p-8 hover:bg-blue-50 hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {t('whyDHJ.reason2.title')}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('whyDHJ.reason2.description')}
                </p>
              </div>
            </div>

            {/* Reason 3 */}
            <div className="group bg-gray-50 rounded-xl p-8 hover:bg-green-50 hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
                  <Globe className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {t('whyDHJ.reason3.title')}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('whyDHJ.reason3.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-rose-600 text-white rounded-lg">
                        {service.icon}
                      </div>
                      <div className="h-px flex-1 bg-gray-200"></div>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-normal text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-lg text-rose-600 font-medium mb-4">
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
                          <div className="flex items-center gap-3 mb-4">
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
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="mb-6 flex justify-center">
                <div className="p-6 bg-rose-600 rounded-full group-hover:scale-110 transition-transform duration-500">
                  <Globe className="w-12 h-12" />
                </div>
              </div>
              <h3 className="text-2xl font-medium mb-4">{t('strengths.global.title')}</h3>
              <p className="text-gray-300 leading-relaxed font-medium">
                {t('strengths.global.description')}
              </p>
            </div>

            <div className="text-center group">
              <div className="mb-6 flex justify-center">
                <div className="p-6 bg-rose-600 rounded-full group-hover:scale-110 transition-transform duration-500">
                  <Brain className="w-12 h-12" />
                </div>
              </div>
              <h3 className="text-2xl font-medium mb-4">{t('strengths.technology.title')}</h3>
              <p className="text-gray-300 leading-relaxed font-medium">
                {t('strengths.technology.description')}
              </p>
            </div>

            <div className="text-center group">
              <div className="mb-6 flex justify-center">
                <div className="p-6 bg-rose-600 rounded-full group-hover:scale-110 transition-transform duration-500">
                  <Users className="w-12 h-12" />
                </div>
              </div>
              <h3 className="text-2xl font-medium mb-4">{t('strengths.support.title')}</h3>
              <p className="text-gray-300 leading-relaxed font-medium">
                {t('strengths.support.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Executives Section */}
      <section
        id="executives"
        className="py-32 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div
            id="executives-header"
            data-animate
            className={`text-center mb-20 transition-all duration-1000 ${
              visibleSections.has('executives-header')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-20'
            }`}
          >
            <h2 className="text-5xl md:text-6xl font-normal text-gray-900 mb-8 tracking-tight">
              {t('executives.title')}
            </h2>
            <div className="w-24 h-px bg-rose-600 mx-auto mb-12"></div>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
              {t('executives.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {executives.map((executive, index) => (
              <div
                key={index}
                data-animate
                className={`bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg overflow-hidden shadow-xl transition-all duration-1000 delay-${index * 100} hover:transform hover:-translate-y-2 ${
                  visibleSections.has('executives-header')
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-20'
                }`}
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={executive.image}
                    alt={executive.name}
                    className="w-full h-full object-cover"
                    style={
                      executive.name === '希代 翔' || executive.name === 'Sho Kitai'
                        ? { objectPosition: 'center 35%' }
                        : executive.name === '藤本 芳浩' || executive.name === 'Yoshihiro Fujimoto'
                        ? { objectPosition: 'center 40%' }
                        : {}
                    }
                  />
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-light text-white mb-2">{executive.name}</h3>
                  <p className="text-rose-600 font-medium text-lg mb-4">{executive.position}</p>

                  <p className="text-gray-300 leading-relaxed font-normal mb-6 text-lg">
                    {executive.background}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {executive.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full font-normal">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section
        id="news"
        data-animate
        className={`py-32 bg-white transition-all duration-1000 ${
          visibleSections.has('news')
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-20'
        }`}
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
                  <div className="flex items-center gap-2 mb-4">
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
                  <tr className="border-b border-gray-200">
                    <td className="px-8 py-6 bg-gray-50 font-semibold text-gray-900">
                      {t('companyInfo.membership')}
                    </td>
                    <td className="px-8 py-6 text-gray-700 font-medium">
                      {t('companyInfo.membershipValue')}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-8 py-6 bg-gray-50 font-semibold text-gray-900">
                      {t('companyInfo.financial')}
                    </td>
                    <td className="px-8 py-6 text-gray-700 font-medium">
                      {t('companyInfo.financialValue')}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Team Section */}
            <div className="mt-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {t('team.title')}
                </h3>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                  {t('team.description')}
                </p>
              </div>
              
              <div className="mt-8 bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-blue-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {t('team.cebu.title')}
                    </h4>
                    <p className="text-gray-700">
                      {t('team.cebu.description')}
                    </p>
                  </div>
                </div>
              </div>
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