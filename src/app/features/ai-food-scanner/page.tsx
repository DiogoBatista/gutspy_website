import { Layout } from '@/components/Layout'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'AI Food Scanner - GutSpy',
  description:
    'Snap a picture or upload your meal and get instant, AI-powered insights about your food. Discover calories, macros, and more with a single tap.',
  openGraph: {
    title: 'AI Food Scanner - GutSpy',
    description:
      'Snap a picture or upload your meal and get instant, AI-powered insights about your food. Discover calories, macros, and more with a single tap.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Food Scanner - GutSpy',
    description:
      'Snap a picture or upload your meal and get instant, AI-powered insights about your food. Discover calories, macros, and more with a single tap.',
  },
  alternates: {
    canonical: 'https://www.gutspy.com/features/ai-food-scanner',
  },
}

export default function AIFoodScannerPage() {
  return (
    <Layout>
      <main className="mx-auto max-w-3xl px-4 py-12">
        <section className="mb-10 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            AI Food Scanner
          </h1>
          <p className="mb-6 text-lg text-gray-700">
            Snap a picture or upload your meal and get instant, AI-powered
            insights about your food. Discover calories, macros, and more with a
            single tap.
          </p>
          <div className="flex justify-center">
            <Image
              src="/images/features/ai_food_tracker.png"
              alt="AI Food Scanner screenshot"
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
            <li>Take a photo or upload an image of your meal.</li>
            <li>
              Our AI analyzes the image to identify foods and estimate calories
              and macros.
            </li>
            <li>Get instant feedback and add the meal to your daily log.</li>
          </ul>
          <h3 className="mb-2 text-xl font-semibold text-gray-900">Benefits</h3>
          <ul className="list-inside list-disc text-left text-gray-700">
            <li>No manual entry—just snap and track.</li>
            <li>Accurate calorie and macro estimates.</li>
            <li>Helps you stay on top of your nutrition goals effortlessly.</li>
          </ul>
        </section>
      </main>
    </Layout>
  )
}
