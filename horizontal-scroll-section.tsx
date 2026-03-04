{/* ========================================
   5-PHASE HORIZONTAL SCROLL DESIGN
   Full-width horizontal flow with large photos
   ======================================== */}

      <section 
        id="solutions"
        data-animate
        className={`py-24 md:py-32 bg-gray-900 relative overflow-hidden transition-all duration-1000 ${
          visibleSections.has('solutions') 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="max-w-full px-0">
          {/* Section Header */}
          <div className="text-center mb-16 px-4">
            <div className="w-24 h-px bg-rose-600 mx-auto mb-8"></div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight tracking-tight">
              {t('solutions.title')}
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 font-light">
              {t('solutions.subtitle')}
            </p>
          </div>

          {/* Horizontal Scroll Container */}
          <div className="relative">
            {/* Desktop: Horizontal scroll view */}
            <div className="hidden lg:block overflow-x-auto scrollbar-hide">
              <div className="flex gap-8 px-8 pb-8" style={{ width: 'max-content' }}>
                {/* Phase 1 */}
                <div className="group relative w-[600px] h-[600px] flex-shrink-0 rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1200&fit=crop" 
                    alt="Discovery Phase"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-12 text-white">
                    <div className="flex items-center gap-6 mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-rose-500 to-rose-600 rounded-xl flex items-center justify-center shadow-2xl">
                        <Search className="w-10 h-10 text-white" />
                      </div>
                      <span className="text-8xl font-light text-rose-500">01</span>
                    </div>
                    <h3 className="text-4xl font-bold mb-4">{t('solutions.phases.discovery.title')}</h3>
                    <p className="text-xl text-white/90 mb-3 leading-relaxed">{t('solutions.phases.discovery.description')}</p>
                    <p className="text-sm font-bold text-rose-400 uppercase tracking-wider">{t('solutions.phases.discovery.detail')}</p>
                  </div>
                  {/* Arrow to next */}
                  <div className="absolute right-[-40px] top-1/2 -translate-y-1/2 z-10">
                    <ArrowRight className="w-16 h-16 text-white/50" />
                  </div>
                </div>

                {/* Phase 2 */}
                <div className="group relative w-[600px] h-[600px] flex-shrink-0 rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1200&fit=crop" 
                    alt="Digitalization Phase"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-12 text-white">
                    <div className="flex items-center gap-6 mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-2xl">
                        <Cpu className="w-10 h-10 text-white" />
                      </div>
                      <span className="text-8xl font-light text-purple-500">02</span>
                    </div>
                    <h3 className="text-4xl font-bold mb-4">{t('solutions.phases.digitalization.title')}</h3>
                    <p className="text-xl text-white/90 mb-3 leading-relaxed">{t('solutions.phases.digitalization.description')}</p>
                    <p className="text-sm font-bold text-purple-400 uppercase tracking-wider">{t('solutions.phases.digitalization.detail')}</p>
                  </div>
                  <div className="absolute right-[-40px] top-1/2 -translate-y-1/2 z-10">
                    <ArrowRight className="w-16 h-16 text-white/50" />
                  </div>
                </div>

                {/* Phase 3 */}
                <div className="group relative w-[600px] h-[600px] flex-shrink-0 rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1200&fit=crop" 
                    alt="Infrastructure Phase"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-12 text-white">
                    <div className="flex items-center gap-6 mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-2xl">
                        <Building2 className="w-10 h-10 text-white" />
                      </div>
                      <span className="text-8xl font-light text-blue-500">03</span>
                    </div>
                    <h3 className="text-4xl font-bold mb-4">{t('solutions.phases.infrastructure.title')}</h3>
                    <p className="text-xl text-white/90 mb-3 leading-relaxed">{t('solutions.phases.infrastructure.description')}</p>
                    <p className="text-sm font-bold text-blue-400 uppercase tracking-wider">{t('solutions.phases.infrastructure.detail')}</p>
                  </div>
                  <div className="absolute right-[-40px] top-1/2 -translate-y-1/2 z-10">
                    <ArrowRight className="w-16 h-16 text-white/50" />
                  </div>
                </div>

                {/* Phase 4 */}
                <div className="group relative w-[600px] h-[600px] flex-shrink-0 rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1200&fit=crop" 
                    alt="Sales Phase"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-12 text-white">
                    <div className="flex items-center gap-6 mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-2xl">
                        <Send className="w-10 h-10 text-white" />
                      </div>
                      <span className="text-8xl font-light text-amber-500">04</span>
                    </div>
                    <h3 className="text-4xl font-bold mb-4">{t('solutions.phases.sales.title')}</h3>
                    <p className="text-xl text-white/90 mb-3 leading-relaxed">{t('solutions.phases.sales.description')}</p>
                    <p className="text-sm font-bold text-amber-400 uppercase tracking-wider">{t('solutions.phases.sales.detail')}</p>
                  </div>
                  <div className="absolute right-[-40px] top-1/2 -translate-y-1/2 z-10">
                    <ArrowRight className="w-16 h-16 text-white/50" />
                  </div>
                </div>

                {/* Phase 5 */}
                <div className="group relative w-[600px] h-[600px] flex-shrink-0 rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/46253/mt-fuji-sea-of-clouds-sunrise-46253.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1200&fit=crop" 
                    alt="Reinvestment Phase"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-12 text-white">
                    <div className="flex items-center gap-6 mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-2xl">
                        <RefreshCw className="w-10 h-10 text-white" />
                      </div>
                      <span className="text-8xl font-light text-green-500">05</span>
                    </div>
                    <h3 className="text-4xl font-bold mb-4">{t('solutions.phases.reinvestment.title')}</h3>
                    <p className="text-xl text-white/90 mb-3 leading-relaxed">{t('solutions.phases.reinvestment.description')}</p>
                    <p className="text-sm font-bold text-green-400 uppercase tracking-wider">{t('solutions.phases.reinvestment.detail')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile: Vertical stack */}
            <div className="lg:hidden px-4 space-y-8">
              {/* Phase 1 Mobile */}
              <div className="group relative h-[500px] rounded-2xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop" 
                  alt="Discovery Phase"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-rose-600 rounded-xl flex items-center justify-center shadow-2xl">
                      <Search className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-6xl font-light text-rose-500">01</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-3">{t('solutions.phases.discovery.title')}</h3>
                  <p className="text-lg text-white/90 mb-2">{t('solutions.phases.discovery.description')}</p>
                  <p className="text-sm font-bold text-rose-400 uppercase">{t('solutions.phases.discovery.detail')}</p>
                </div>
              </div>

              {/* Phases 2-5 Mobile (similar structure) */}
              <div className="group relative h-[500px] rounded-2xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop" 
                  alt="Digitalization Phase"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-2xl">
                      <Cpu className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-6xl font-light text-purple-500">02</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-3">{t('solutions.phases.digitalization.title')}</h3>
                  <p className="text-lg text-white/90 mb-2">{t('solutions.phases.digitalization.description')}</p>
                  <p className="text-sm font-bold text-purple-400 uppercase">{t('solutions.phases.digitalization.detail')}</p>
                </div>
              </div>

              <div className="group relative h-[500px] rounded-2xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop" 
                  alt="Infrastructure Phase"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-2xl">
                      <Building2 className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-6xl font-light text-blue-500">03</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-3">{t('solutions.phases.infrastructure.title')}</h3>
                  <p className="text-lg text-white/90 mb-2">{t('solutions.phases.infrastructure.description')}</p>
                  <p className="text-sm font-bold text-blue-400 uppercase">{t('solutions.phases.infrastructure.detail')}</p>
                </div>
              </div>

              <div className="group relative h-[500px] rounded-2xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop" 
                  alt="Sales Phase"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-2xl">
                      <Send className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-6xl font-light text-amber-500">04</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-3">{t('solutions.phases.sales.title')}</h3>
                  <p className="text-lg text-white/90 mb-2">{t('solutions.phases.sales.description')}</p>
                  <p className="text-sm font-bold text-amber-400 uppercase">{t('solutions.phases.sales.detail')}</p>
                </div>
              </div>

              <div className="group relative h-[500px] rounded-2xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/46253/mt-fuji-sea-of-clouds-sunrise-46253.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop" 
                  alt="Reinvestment Phase"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-2xl">
                      <RefreshCw className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-6xl font-light text-green-500">05</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-3">{t('solutions.phases.reinvestment.title')}</h3>
                  <p className="text-lg text-white/90 mb-2">{t('solutions.phases.reinvestment.description')}</p>
                  <p className="text-sm font-bold text-green-400 uppercase">{t('solutions.phases.reinvestment.detail')}</p>
                </div>
              </div>
            </div>

            {/* Scroll hint */}
            <div className="hidden lg:block text-center mt-8 px-4">
              <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
                <ArrowRight className="w-4 h-4" />
                横にスクロールして全フェーズを確認
                <ArrowRight className="w-4 h-4" />
              </p>
            </div>
          </div>
        </div>

        {/* Add scrollbar hide CSS */}
        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </section>
