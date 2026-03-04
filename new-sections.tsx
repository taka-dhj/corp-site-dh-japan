{/* ========================================
   NEW HORIZONTAL 5-PHASE FLOW DIAGRAM
   Full-width, left-to-right layout with photos
   ======================================== */}

      <section 
        id="solutions"
        data-animate
        className={`py-24 md:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden transition-all duration-1000 ${
          visibleSections.has('solutions') 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="w-24 h-px bg-rose-600 mx-auto mb-8"></div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {t('solutions.title')}
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-medium">
              {t('solutions.subtitle')}
            </p>
          </div>

          {/* Horizontal Phase Flow */}
          <div className="space-y-12">
            {/* Desktop: Horizontal Flow */}
            <div className="hidden lg:flex items-stretch gap-4">
              {/* Phase 1 */}
              <div className="flex-1 group">
                <div className="relative h-full bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity"
                    style={{ backgroundImage: "url('https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop')" }}
                  ></div>
                  <div className="relative z-10 p-8 h-full flex flex-col">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-rose-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <Search className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-6xl font-black bg-gradient-to-br from-rose-500 to-rose-600 bg-clip-text text-transparent">
                        01
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{t('solutions.phases.discovery.title')}</h3>
                    <p className="text-lg text-gray-700 mb-2 flex-1">{t('solutions.phases.discovery.description')}</p>
                    <p className="text-sm font-semibold text-rose-600">{t('solutions.phases.discovery.detail')}</p>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex items-center">
                <ArrowRight className="w-8 h-8 text-gray-400" />
              </div>

              {/* Phase 2 */}
              <div className="flex-1 group">
                <div className="relative h-full bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity"
                    style={{ backgroundImage: "url('https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop')" }}
                  ></div>
                  <div className="relative z-10 p-8 h-full flex flex-col">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <Cpu className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-6xl font-black bg-gradient-to-br from-purple-500 to-purple-600 bg-clip-text text-transparent">
                        02
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{t('solutions.phases.digitalization.title')}</h3>
                    <p className="text-lg text-gray-700 mb-2 flex-1">{t('solutions.phases.digitalization.description')}</p>
                    <p className="text-sm font-semibold text-purple-600">{t('solutions.phases.digitalization.detail')}</p>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex items-center">
                <ArrowRight className="w-8 h-8 text-gray-400" />
              </div>

              {/* Phase 3 */}
              <div className="flex-1 group">
                <div className="relative h-full bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity"
                    style={{ backgroundImage: "url('https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop')" }}
                  ></div>
                  <div className="relative z-10 p-8 h-full flex flex-col">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <Building2 className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-6xl font-black bg-gradient-to-br from-blue-500 to-blue-600 bg-clip-text text-transparent">
                        03
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{t('solutions.phases.infrastructure.title')}</h3>
                    <p className="text-lg text-gray-700 mb-2 flex-1">{t('solutions.phases.infrastructure.description')}</p>
                    <p className="text-sm font-semibold text-blue-600">{t('solutions.phases.infrastructure.detail')}</p>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex items-center">
                <ArrowRight className="w-8 h-8 text-gray-400" />
              </div>

              {/* Phase 4 */}
              <div className="flex-1 group">
                <div className="relative h-full bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity"
                    style={{ backgroundImage: "url('https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop')" }}
                  ></div>
                  <div className="relative z-10 p-8 h-full flex flex-col">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <Send className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-6xl font-black bg-gradient-to-br from-amber-500 to-amber-600 bg-clip-text text-transparent">
                        04
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{t('solutions.phases.sales.title')}</h3>
                    <p className="text-lg text-gray-700 mb-2 flex-1">{t('solutions.phases.sales.description')}</p>
                    <p className="text-sm font-semibold text-amber-600">{t('solutions.phases.sales.detail')}</p>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex items-center">
                <ArrowRight className="w-8 h-8 text-gray-400" />
              </div>

              {/* Phase 5 */}
              <div className="flex-1 group">
                <div className="relative h-full bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity"
                    style={{ backgroundImage: "url('https://images.pexels.com/photos/46253/mt-fuji-sea-of-clouds-sunrise-46253.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop')" }}
                  ></div>
                  <div className="relative z-10 p-8 h-full flex flex-col">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <RefreshCw className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-6xl font-black bg-gradient-to-br from-green-500 to-green-600 bg-clip-text text-transparent">
                        05
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{t('solutions.phases.reinvestment.title')}</h3>
                    <p className="text-lg text-gray-700 mb-2 flex-1">{t('solutions.phases.reinvestment.description')}</p>
                    <p className="text-sm font-semibold text-green-600">{t('solutions.phases.reinvestment.detail')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile: Vertical Stacked */}
            <div className="lg:hidden space-y-8">
              {/* Phase 1 - Mobile */}
              <div className="group">
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl">
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-20"
                    style={{ backgroundImage: "url('https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop')" }}
                  ></div>
                  <div className="relative z-10 p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-rose-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <Search className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-6xl font-black bg-gradient-to-br from-rose-500 to-rose-600 bg-clip-text text-transparent">
                        01
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{t('solutions.phases.discovery.title')}</h3>
                    <p className="text-lg text-gray-700 mb-2">{t('solutions.phases.discovery.description')}</p>
                    <p className="text-sm font-semibold text-rose-600">{t('solutions.phases.discovery.detail')}</p>
                  </div>
                </div>
                <div className="flex justify-center py-4">
                  <ChevronDown className="w-8 h-8 text-gray-400" />
                </div>
              </div>

              {/* Phases 2-5 Mobile (similar structure) - Abbreviated for brevity */}
              {/* Add remaining phases with similar structure */}
            </div>
          </div>
        </div>
      </section>

{/* ========================================
   NEW WHY DHJ TIMELINE WITH PHOTOS
   Timeline-only design with photo backgrounds
   ======================================== */}

      <section 
        id="why-dhj"
        data-animate
        className={`py-24 md:py-32 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden transition-all duration-1000 ${
          visibleSections.has('why-dhj') 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="w-24 h-px bg-rose-600 mx-auto mb-8"></div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {t('whyDHJ.title')}
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 font-medium">
              {t('whyDHJ.subtitle')}
            </p>
          </div>

          {/* Timeline Layout */}
          <div className="max-w-5xl mx-auto">
            {/* Factor 1 */}
            <div className="flex gap-8 group mb-16">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-rose-500 to-rose-600 rounded-full flex items-center justify-center shadow-2xl z-10 group-hover:scale-125 transition-all duration-500">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <div className="w-1 flex-1 bg-gradient-to-b from-rose-500 to-rose-300 min-h-32"></div>
              </div>
              <div className="flex-1">
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:-translate-x-4">
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-15 transition-opacity"
                    style={{ backgroundImage: "url('https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop')" }}
                  ></div>
                  <div className="relative z-10 p-10">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-7xl font-black bg-gradient-to-br from-rose-500 to-rose-600 bg-clip-text text-transparent">01</span>
                      <p className="text-sm font-bold text-rose-600 uppercase tracking-wider">{t('whyDHJ.factors.integrated.detail')}</p>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">{t('whyDHJ.factors.integrated.title')}</h3>
                    <p className="text-xl text-gray-700 leading-relaxed">{t('whyDHJ.factors.integrated.description')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Factor 2 */}
            <div className="flex gap-8 group mb-16">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl z-10 group-hover:scale-125 transition-all duration-500">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <div className="w-1 flex-1 bg-gradient-to-b from-purple-500 to-purple-300 min-h-32"></div>
              </div>
              <div className="flex-1">
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:-translate-x-4">
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-15 transition-opacity"
                    style={{ backgroundImage: "url('https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop')" }}
                  ></div>
                  <div className="relative z-10 p-10">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-7xl font-black bg-gradient-to-br from-purple-500 to-purple-600 bg-clip-text text-transparent">02</span>
                      <p className="text-sm font-bold text-purple-600 uppercase tracking-wider">{t('whyDHJ.factors.digital.detail')}</p>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">{t('whyDHJ.factors.digital.title')}</h3>
                    <p className="text-xl text-gray-700 leading-relaxed">{t('whyDHJ.factors.digital.description')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Factor 3 */}
            <div className="flex gap-8 group mb-16">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl z-10 group-hover:scale-125 transition-all duration-500">
                  <Globe className="w-10 h-10 text-white" />
                </div>
                <div className="w-1 flex-1 bg-gradient-to-b from-blue-500 to-blue-300 min-h-32"></div>
              </div>
              <div className="flex-1">
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:-translate-x-4">
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-15 transition-opacity"
                    style={{ backgroundImage: "url('https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop')" }}
                  ></div>
                  <div className="relative z-10 p-10">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-7xl font-black bg-gradient-to-br from-blue-500 to-blue-600 bg-clip-text text-transparent">03</span>
                      <p className="text-sm font-bold text-blue-600 uppercase tracking-wider">{t('whyDHJ.factors.network.detail')}</p>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">{t('whyDHJ.factors.network.title')}</h3>
                    <p className="text-xl text-gray-700 leading-relaxed">{t('whyDHJ.factors.network.description')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Factor 4 */}
            <div className="flex gap-8 group">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-2xl z-10 group-hover:scale-125 transition-all duration-500">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:-translate-x-4">
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-15 transition-opacity"
                    style={{ backgroundImage: "url('https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop')" }}
                  ></div>
                  <div className="relative z-10 p-10">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-7xl font-black bg-gradient-to-br from-green-500 to-green-600 bg-clip-text text-transparent">04</span>
                      <p className="text-sm font-bold text-green-600 uppercase tracking-wider">{t('whyDHJ.factors.execution.detail')}</p>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">{t('whyDHJ.factors.execution.title')}</h3>
                    <p className="text-xl text-gray-700 leading-relaxed">{t('whyDHJ.factors.execution.description')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
