import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 lg:space-x-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Transform Your Voice with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600"> AI Power</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              Create, clone, and enhance voice recordings with our cutting-edge AI voice synthesis technology. Perfect for content creators, businesses, and podcasters.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg">
                Start Creating Voices
              </Button>
              <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-muted px-8 py-3 text-lg">
                Watch Demo
              </Button>
            </div>
            <div className="mt-12 flex items-center justify-center lg:justify-start space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">50K</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-600/20 rounded-2xl blur-3xl"></div>
              <div className="relative backdrop-blur-md bg-card/50 border border-border/50 rounded-2xl p-8 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4530999b1ae4?w=600&q=80&auto=format&fit=crop" 
                  alt="AI Voice Processing Dashboard" 
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                        <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">Voice Profile Created</div>
                        <div className="text-sm text-muted-foreground">2 minutes ago</div>
                      </div>
                    </div>
                    <div className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                      Active
                    </div>
                  </div>
                  <div className="pt-4 border-t border-border/50">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">Voice Quality</span>
                      <span className="text-sm font-medium text-foreground">98%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '98%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
