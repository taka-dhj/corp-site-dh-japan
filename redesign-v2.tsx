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
            <p className="text-xl md:text-2xl text-gray-600 mb-4">
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
                <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full mb-4">
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
                <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full mb-4">
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
                <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full mb-4">
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
                <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full mb-4">
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
   5-PHASE FLOW - HORIZONTAL WITH LARGE PHOTOS
   Clean separation: Photo block + Text block
   ======================================== */}

      <section 
        id="solutions"
        data-animate
        className={`py-24 md:py-32 bg-gray-50 relative overflow-hidden transition-all duration-1000 ${
          visibleSections.has('solutions') 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="w-24 h-px bg-rose-600 mx-auto mb-8"></div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight tracking-tight">
              {t('solutions.title')}
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 font-light">
              {t('solutions.subtitle')}
            </p>
          </div>

          {/* Phase Flow - Alternating photo/text layout */}
          <div className="space-y-24">
            {/* Phase 1 - Photo Left, Text Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img 
                  src="https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
                  alt="Discovery Phase"
                  className="w-full h-[400px] lg:h-[500px] object-cover rounded-2xl shadow-2xl"
                />
              </div>
              <div className="order-1 lg:order-2 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-rose-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Search className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-5xl font-light text-rose-600">01</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">{t('solutions.phases.discovery.title')}</h3>
                <p className="text-xl text-gray-700 leading-relaxed">{t('solutions.phases.discovery.description')}</p>
                <p className="text-sm font-semibold text-rose-600 uppercase tracking-wider">{t('solutions.phases.discovery.detail')}</p>
              </div>
            </div>

            {/* Phase 2 - Photo Right, Text Left */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Cpu className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-5xl font-light text-purple-600">02</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">{t('solutions.phases.digitalization.title')}</h3>
                <p className="text-xl text-gray-700 leading-relaxed">{t('solutions.phases.digitalization.description')}</p>
                <p className="text-sm font-semibold text-purple-600 uppercase tracking-wider">{t('solutions.phases.digitalization.detail')}</p>
              </div>
              <div>
                <img 
                  src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
                  alt="Digitalization Phase"
                  className="w-full h-[400px] lg:h-[500px] object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>

            {/* Phase 3 - Photo Left, Text Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img 
                  src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
                  alt="Infrastructure Phase"
                  className="w-full h-[400px] lg:h-[500px] object-cover rounded-2xl shadow-2xl"
                />
              </div>
              <div className="order-1 lg:order-2 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-5xl font-light text-blue-600">03</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">{t('solutions.phases.infrastructure.title')}</h3>
                <p className="text-xl text-gray-700 leading-relaxed">{t('solutions.phases.infrastructure.description')}</p>
                <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">{t('solutions.phases.infrastructure.detail')}</p>
              </div>
            </div>

            {/* Phase 4 - Photo Right, Text Left */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Send className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-5xl font-light text-amber-600">04</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">{t('solutions.phases.sales.title')}</h3>
                <p className="text-xl text-gray-700 leading-relaxed">{t('solutions.phases.sales.description')}</p>
                <p className="text-sm font-semibold text-amber-600 uppercase tracking-wider">{t('solutions.phases.sales.detail')}</p>
              </div>
              <div>
                <img 
                  src="https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
                  alt="Sales Phase"
                  className="w-full h-[400px] lg:h-[500px] object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>

            {/* Phase 5 - Photo Left, Text Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img 
                  src="https://images.pexels.com/photos/46253/mt-fuji-sea-of-clouds-sunrise-46253.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
                  alt="Reinvestment Phase"
                  className="w-full h-[400px] lg:h-[500px] object-cover rounded-2xl shadow-2xl"
                />
              </div>
              <div className="order-1 lg:order-2 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                    <RefreshCw className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-5xl font-light text-green-600">05</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">{t('solutions.phases.reinvestment.title')}</h3>
                <p className="text-xl text-gray-700 leading-relaxed">{t('solutions.phases.reinvestment.description')}</p>
                <p className="text-sm font-semibold text-green-600 uppercase tracking-wider">{t('solutions.phases.reinvestment.detail')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* ========================================
   WHY DHJ - PHOTO + TEXT SPLIT LAYOUT
   Each reason gets a dedicated photo block
   ======================================== */}

      <section 
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
                  <span className="text-6xl font-light text-rose-600">01</span>
                </div>
                <p className="text-sm font-bold text-rose-600 uppercase tracking-wider">{t('whyDHJ.factors.integrated.detail')}</p>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">{t('whyDHJ.factors.integrated.title')}</h3>
                <p className="text-xl text-gray-700 leading-relaxed">{t('whyDHJ.factors.integrated.description')}</p>
              </div>
            </div>

            {/* Reason 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-6xl font-light text-purple-600">02</span>
                </div>
                <p className="text-sm font-bold text-purple-600 uppercase tracking-wider">{t('whyDHJ.factors.digital.detail')}</p>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">{t('whyDHJ.factors.digital.title')}</h3>
                <p className="text-xl text-gray-700 leading-relaxed">{t('whyDHJ.factors.digital.description')}</p>
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
                  <span className="text-6xl font-light text-blue-600">03</span>
                </div>
                <p className="text-sm font-bold text-blue-600 uppercase tracking-wider">{t('whyDHJ.factors.network.detail')}</p>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">{t('whyDHJ.factors.network.title')}</h3>
                <p className="text-xl text-gray-700 leading-relaxed">{t('whyDHJ.factors.network.description')}</p>
              </div>
            </div>

            {/* Reason 4 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-xl">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-6xl font-light text-green-600">04</span>
                </div>
                <p className="text-sm font-bold text-green-600 uppercase tracking-wider">{t('whyDHJ.factors.execution.detail')}</p>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">{t('whyDHJ.factors.execution.title')}</h3>
                <p className="text-xl text-gray-700 leading-relaxed">{t('whyDHJ.factors.execution.description')}</p>
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
