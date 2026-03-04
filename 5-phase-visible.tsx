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
            <div className="w-24 h-px bg-rose-600 mx-auto mb-8"></div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight tracking-tight">
              {t('solutions.title')}
            </h2>
            <p className="text-2xl md:text-3xl text-gray-300 font-light">
              {t('solutions.subtitle')}
            </p>
          </div>

          {/* Desktop: 5 cards in one row - all visible */}
          <div className="hidden lg:grid lg:grid-cols-5 gap-6 mb-12">
            {/* Phase 1 */}
            <div className="group relative h-[400px] rounded-2xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop" 
                alt="Discovery Phase"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-rose-500 to-rose-600 rounded-xl flex items-center justify-center shadow-2xl">
                    <Search className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-6xl font-light text-rose-400">01</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{t('solutions.phases.discovery.title')}</h3>
                <p className="text-base text-white/90 mb-2 leading-relaxed">{t('solutions.phases.discovery.description')}</p>
                <p className="text-xs font-bold text-rose-400 uppercase tracking-wider">{t('solutions.phases.discovery.detail')}</p>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="group relative h-[400px] rounded-2xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop" 
                alt="Digitalization Phase"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-2xl">
                    <Cpu className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-6xl font-light text-purple-400">02</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{t('solutions.phases.digitalization.title')}</h3>
                <p className="text-base text-white/90 mb-2 leading-relaxed">{t('solutions.phases.digitalization.description')}</p>
                <p className="text-xs font-bold text-purple-400 uppercase tracking-wider">{t('solutions.phases.digitalization.detail')}</p>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="group relative h-[400px] rounded-2xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop" 
                alt="Infrastructure Phase"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-2xl">
                    <Building2 className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-6xl font-light text-blue-400">03</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{t('solutions.phases.infrastructure.title')}</h3>
                <p className="text-base text-white/90 mb-2 leading-relaxed">{t('solutions.phases.infrastructure.description')}</p>
                <p className="text-xs font-bold text-blue-400 uppercase tracking-wider">{t('solutions.phases.infrastructure.detail')}</p>
              </div>
            </div>

            {/* Phase 4 */}
            <div className="group relative h-[400px] rounded-2xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop" 
                alt="Sales Phase"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-2xl">
                    <Send className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-6xl font-light text-amber-400">04</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{t('solutions.phases.sales.title')}</h3>
                <p className="text-base text-white/90 mb-2 leading-relaxed">{t('solutions.phases.sales.description')}</p>
                <p className="text-xs font-bold text-amber-400 uppercase tracking-wider">{t('solutions.phases.sales.detail')}</p>
              </div>
            </div>

            {/* Phase 5 */}
            <div className="group relative h-[400px] rounded-2xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/46253/mt-fuji-sea-of-clouds-sunrise-46253.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop" 
                alt="Reinvestment Phase"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-2xl">
                    <RefreshCw className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-6xl font-light text-green-400">05</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{t('solutions.phases.reinvestment.title')}</h3>
                <p className="text-base text-white/90 mb-2 leading-relaxed">{t('solutions.phases.reinvestment.description')}</p>
                <p className="text-xs font-bold text-green-400 uppercase tracking-wider">{t('solutions.phases.reinvestment.detail')}</p>
              </div>
            </div>
          </div>

          {/* Tablet: 2 rows */}
          <div className="hidden md:grid lg:hidden md:grid-cols-3 gap-6 mb-12">
            {/* Row 1: Phases 1-3 */}
            <div className="group relative h-[400px] rounded-2xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop" 
                alt="Discovery Phase"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-rose-500 to-rose-600 rounded-xl flex items-center justify-center shadow-2xl">
                    <Search className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-6xl font-light text-rose-400">01</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{t('solutions.phases.discovery.title')}</h3>
                <p className="text-base text-white/90 mb-2">{t('solutions.phases.discovery.description')}</p>
                <p className="text-xs font-bold text-rose-400 uppercase">{t('solutions.phases.discovery.detail')}</p>
              </div>
            </div>

            <div className="group relative h-[400px] rounded-2xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop" 
                alt="Digitalization Phase"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-2xl">
                    <Cpu className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-6xl font-light text-purple-400">02</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{t('solutions.phases.digitalization.title')}</h3>
                <p className="text-base text-white/90 mb-2">{t('solutions.phases.digitalization.description')}</p>
                <p className="text-xs font-bold text-purple-400 uppercase">{t('solutions.phases.digitalization.detail')}</p>
              </div>
            </div>

            <div className="group relative h-[400px] rounded-2xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop" 
                alt="Infrastructure Phase"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-2xl">
                    <Building2 className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-6xl font-light text-blue-400">03</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{t('solutions.phases.infrastructure.title')}</h3>
                <p className="text-base text-white/90 mb-2">{t('solutions.phases.infrastructure.description')}</p>
                <p className="text-xs font-bold text-blue-400 uppercase">{t('solutions.phases.infrastructure.detail')}</p>
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
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-2xl">
                    <Send className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-6xl font-light text-amber-400">04</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{t('solutions.phases.sales.title')}</h3>
                <p className="text-base text-white/90 mb-2">{t('solutions.phases.sales.description')}</p>
                <p className="text-xs font-bold text-amber-400 uppercase">{t('solutions.phases.sales.detail')}</p>
              </div>
            </div>

            <div className="group relative h-[400px] rounded-2xl overflow-hidden md:col-start-3 md:col-span-1">
              <img 
                src="https://images.pexels.com/photos/46253/mt-fuji-sea-of-clouds-sunrise-46253.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop" 
                alt="Reinvestment Phase"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-2xl">
                    <RefreshCw className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-6xl font-light text-green-400">05</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{t('solutions.phases.reinvestment.title')}</h3>
                <p className="text-base text-white/90 mb-2">{t('solutions.phases.reinvestment.description')}</p>
                <p className="text-xs font-bold text-green-400 uppercase">{t('solutions.phases.reinvestment.detail')}</p>
              </div>
            </div>
          </div>

          {/* Mobile: Vertical stack */}
          <div className="md:hidden space-y-6">
            {/* Mobile cards - same structure, 5 cards stacked */}
            <div className="group relative h-[400px] rounded-2xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop" 
                alt="Discovery Phase"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-rose-500 to-rose-600 rounded-xl flex items-center justify-center shadow-2xl">
                    <Search className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-6xl font-light text-rose-400">01</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{t('solutions.phases.discovery.title')}</h3>
                <p className="text-base text-white/90 mb-2">{t('solutions.phases.discovery.description')}</p>
                <p className="text-xs font-bold text-rose-400 uppercase">{t('solutions.phases.discovery.detail')}</p>
              </div>
            </div>

            {/* Repeat for phases 2-5 */}
            <div className="group relative h-[400px] rounded-2xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop" 
                alt="Digitalization Phase"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-2xl">
                    <Cpu className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-6xl font-light text-purple-400">02</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{t('solutions.phases.digitalization.title')}</h3>
                <p className="text-base text-white/90 mb-2">{t('solutions.phases.digitalization.description')}</p>
                <p className="text-xs font-bold text-purple-400 uppercase">{t('solutions.phases.digitalization.detail')}</p>
              </div>
            </div>

            <div className="group relative h-[400px] rounded-2xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop" 
                alt="Infrastructure Phase"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-2xl">
                    <Building2 className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-6xl font-light text-blue-400">03</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{t('solutions.phases.infrastructure.title')}</h3>
                <p className="text-base text-white/90 mb-2">{t('solutions.phases.infrastructure.description')}</p>
                <p className="text-xs font-bold text-blue-400 uppercase">{t('solutions.phases.infrastructure.detail')}</p>
              </div>
            </div>

            <div className="group relative h-[400px] rounded-2xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop" 
                alt="Sales Phase"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-2xl">
                    <Send className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-6xl font-light text-amber-400">04</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{t('solutions.phases.sales.title')}</h3>
                <p className="text-base text-white/90 mb-2">{t('solutions.phases.sales.description')}</p>
                <p className="text-xs font-bold text-amber-400 uppercase">{t('solutions.phases.sales.detail')}</p>
              </div>
            </div>

            <div className="group relative h-[400px] rounded-2xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/46253/mt-fuji-sea-of-clouds-sunrise-46253.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop" 
                alt="Reinvestment Phase"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-2xl">
                    <RefreshCw className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-6xl font-light text-green-400">05</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{t('solutions.phases.reinvestment.title')}</h3>
                <p className="text-base text-white/90 mb-2">{t('solutions.phases.reinvestment.description')}</p>
                <p className="text-xs font-bold text-green-400 uppercase">{t('solutions.phases.reinvestment.detail')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
