import { Layout } from '@/components/Layout'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Progress Analysis - GutSpy',
  description:
    'Analyze your caloric intake with weekly, monthly, and yearly graphs. Visualize your progress and stay motivated on your health journey.',
  openGraph: {
    title: 'Progress Analysis - GutSpy',
    description:
      'Analyze your caloric intake with weekly, monthly, and yearly graphs. Visualize your progress and stay motivated on your health journey.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Progress Analysis - GutSpy',
    description:
      'Analyze your caloric intake with weekly, monthly, and yearly graphs. Visualize your progress and stay motivated on your health journey.',
  },
  alternates: {
    canonical: 'https://www.gutspy.com/features/progress-analysis',
  },
}

export default function ProgressAnalysisPage() {
  return (
    <Layout>
      <main className="mx-auto max-w-3xl px-4 py-12">
        <section className="mb-10 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            Progress Analysis
          </h1>
          <p className="mb-6 text-lg text-gray-700">
            Analyze your caloric intake with weekly, monthly, and yearly graphs.
            Visualize your progress and stay motivated on your health journey.
          </p>
          <div className="flex justify-center">
            <Image
              src="/images/features/progress_analysis.jpeg"
              alt="Progress Analysis screenshot"
              width={300}
              height={600}
              className="rounded-xl shadow-lg"
            />
          </div>
        </section>
        <section className="mb-8 rounded-xl bg-gray-50 p-6 shadow">
          <h2 className="mb-2 text-2xl font-semibold text-gray-900">
            How it works
          </h2>
          <ul className="mb-4 list-inside list-disc text-left text-gray-700">
            <li>Log your meals, water, and digestion data daily.</li>
            <li>
              View your caloric and macro intake in weekly, monthly, and yearly
              charts.
            </li>
            <li>Spot trends and adjust your habits for better results.</li>
          </ul>
          <h3 className="mb-2 text-xl font-semibold text-gray-900">Benefits</h3>
          <ul className="list-inside list-disc text-left text-gray-700">
            <li>See your progress at a glance.</li>
            <li>Stay motivated with clear visual feedback.</li>
            <li>Make informed decisions to reach your goals faster.</li>
          </ul>
        </section>
      </main>
    </Layout>
  )
}
