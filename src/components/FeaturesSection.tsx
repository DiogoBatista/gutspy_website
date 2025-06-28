import Link from 'next/link'
import {
  CameraIcon,
  PieChartIcon,
  TargetIcon,
  StethoscopeIcon,
  DropletIcon,
  BarChart3Icon,
} from 'lucide-react'

const features = [
  {
    title: 'AI Food Scanner',
    description:
      'Take a picture or upload your meal to get instant AI-powered insights about your food.',
    href: '/features/ai-food-scanner',
    image: '/images/ai-food-scanner.png', // Placeholder, replace with actual
    icon: CameraIcon,
  },
  {
    title: 'Macro Counter',
    description: 'Track calories and macronutrients for every meal you upload.',
    href: '/features/macro-counter',
    image: '/images/macro-counter.png',
    icon: PieChartIcon,
  },
  {
    title: 'Caloric Goals',
    description: 'Set up daily caloric goals and monitor your intake easily.',
    href: '/features/caloric-goals',
    image: '/images/caloric-goals.png',
    icon: TargetIcon,
  },
  {
    title: 'Digestion AI Tracker',
    description:
      'Upload your digestion data for AI analysis and track your gut health over time.',
    href: '/features/digestion-ai-tracker',
    image: '/images/digestion-ai-tracker.png',
    icon: StethoscopeIcon,
  },
  {
    title: 'Water Intake Tracker',
    description: 'Log your daily water intake and stay hydrated.',
    href: '/features/water-intake',
    image: '/images/water-intake.png',
    icon: DropletIcon,
  },
  {
    title: 'Progress Analysis',
    description:
      'Analyze your caloric intake with weekly, monthly, and yearly graphs.',
    href: '/features/progress-analysis',
    image: '/images/progress-analysis.png',
    icon: BarChart3Icon,
  },
]

export function FeaturesSection() {
  return (
    <section className="bg-white py-16" id="features">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
          Features
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="flex flex-col items-center rounded-xl bg-gray-50 p-6 text-center shadow"
              >
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <Icon className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mb-4 text-gray-600">{feature.description}</p>
                <Link
                  href={feature.href}
                  className="mt-auto inline-block rounded bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
                >
                  Learn more
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
