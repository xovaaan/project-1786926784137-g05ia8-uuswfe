export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Powerful AI Voice Features
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the advanced capabilities that make AIVoice the ultimate choice for voice synthesis and cloning.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="backdrop-blur-md bg-card/50 border border-border/50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Voice Cloning</h3>
            <p className="text-muted-foreground leading-relaxed">
              Create perfect voice clones from just 30 seconds of audio. Our AI learns unique vocal characteristics for natural-sounding results.
            </p>
          </div>
          
          <div className="backdrop-blur-md bg-card/50 border border-border/50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Secure Storage</h3>
            <p className="text-muted-foreground leading-relaxed">
              Your voice data is encrypted and stored securely in the cloud. Access your voice profiles from any device with enterprise-grade security.
            </p>
          </div>
          
          <div className="backdrop-blur-md bg-card/50 border border-border/50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Real-time Processing</h3>
            <p className="text-muted-foreground leading-relaxed">
              Generate voice outputs in seconds. Our optimized AI models provide instant results without compromising on quality.
            </p>
          </div>
          
          <div className="backdrop-blur-md bg-card/50 border border-border/50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Multi-language Support</h3>
            <p className="text-muted-foreground leading-relaxed">
              Generate voices in multiple languages and accents. Perfect for global content creation and international markets.
            </p>
          </div>
          
          <div className="backdrop-blur-md bg-card/50 border border-border/50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Analytics Dashboard</h3>
            <p className="text-muted-foreground leading-relaxed">
              Track performance metrics and usage analytics. Monitor voice generation statistics and optimize your workflow.
            </p>
          </div>
          
          <div className="backdrop-blur-md bg-card/50 border border-border/50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">API Integration</h3>
            <p className="text-muted-foreground leading-relaxed">
              Seamless API integration for developers. Build custom voice applications and integrate with your existing workflow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
