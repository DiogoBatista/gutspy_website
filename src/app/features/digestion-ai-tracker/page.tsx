import { Layout } from '@/components/Layout'
import Image from 'next/image'

export default function DigestionAITrackerPage() {
  return (
    <Layout>
      <main className="mx-auto max-w-3xl px-4 py-12">
        <section className="mb-10 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            Digestion AI Tracker
          </h1>
          <p className="mb-6 text-lg text-gray-700">
            Upload your digestion data for AI analysis and track your gut health
            over time. Get personalized insights and recommendations for your
            digestive health.
          </p>
          <div className="flex justify-center">
            <Image
              src="/images/features/digestion_ai_tracker.png"
              alt="Digestion AI Tracker screenshot"
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
            <li>Upload a photo or enter details about your digestion.</li>
            <li>
              AI analyzes the data and provides a Bristol scale, color, and
              consistency analysis.
            </li>
            <li>
              Track your digestive health trends and receive actionable
              recommendations.
            </li>
          </ul>
          <h3 className="mb-2 text-xl font-semibold text-gray-900">Benefits</h3>
          <ul className="list-inside list-disc text-left text-gray-700">
            <li>Monitor your gut health over time.</li>
            <li>Get personalized, science-backed recommendations.</li>
            <li>Spot trends and address concerns early.</li>
          </ul>
        </section>
      </main>
    </Layout>
  )
}
