import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { FileText, Volume2, Download, Play } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      step: '01',
      icon: FileText,
      title: 'Enter Your Text',
      description: 'Write or paste any text in 40+ languages. Our editor supports formatting, SSML tags, and real-time previews.',
    },
    {
      step: '02',
      icon: Volume2,
      title: 'Choose Your Voice',
      description: 'Select from 100+ neural voices across different languages, genders, and styles. Preview before generating.',
    },
    {
      step: '03',
      icon: Download,
      title: 'Generate & Download',
      description: 'Render your audio in seconds. Download as MP3, WAV, or AAC, or export directly to your workflow.',
    },
  ]

  return (
    <section id="how-it-works" className="w-full py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="bg-white/5 text-amber-300 border-amber-400/30 mb-4">How It Works</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Three Simple Steps
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Create studio-quality voiceovers in seconds. No technical skills required.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <Card
              key={step.title}
              className="glass border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg">
                    <step.icon className="w-6 h-5 text-white" />
                  </div>
                  <span className="text-3xl font-bold text-amber-400">{step.step}</span>
                </div>
                <CardTitle className="text-xl font-bold text-white">{step.title}</CardTitle>
                <CardDescription className="text-gray-400">
                  {step.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-gradient-to-r from-amber-400 to-orange-500 text-gray-900 font-semibold rounded-full px-8 py-3 text-lg hover:from-amber-300 hover:to-orange-400 transition-all duration-300 shadow-lg shadow-amber-500/25">
            <Play className="w-5 h-5 mr-2" />
            Watch Full Tutorial
          </Button>
        </div>
      </div>
    </section>
  )
}
