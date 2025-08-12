import { Layout } from '@/components/Layout'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Caloric Goals - GutSpy',
  description: 'Set up daily caloric goals and monitor your intake easily. Stay motivated and on track with personalized targets and progress tracking.',
  openGraph: {
    title: 'Caloric Goals - GutSpy',
    description: 'Set up daily caloric goals and monitor your intake easily. Stay motivated and on track with personalized targets and progress tracking.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Caloric Goals - GutSpy',
    description: 'Set up daily caloric goals and monitor your intake easily. Stay motivated and on track with personalized targets and progress tracking.',
  },
  alternates: {
    canonical: 'https://www.gutspy.com/features/caloric-goals',
  },
}

export default function CaloricGoalsPage() {
  return (
    <Layout>
      <main className="mx-auto max-w-3xl px-4 py-12">
        <section className="mb-10 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            Caloric Goals
          </h1>
          <p className="mb-6 text-lg text-gray-700">
            Set up daily caloric goals and monitor your intake easily. Stay
            motivated and on track with personalized targets and progress
            tracking.
          </p>
          <div className="flex justify-center">
            <Image
              src="/images/features/caloric_goals.png"
              alt="Caloric Goals screenshot"
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
            <li>Set your daily caloric goal based on your needs.</li>
            <li>Log meals and automatically track your progress.</li>
            <li>Get visual feedback on how close you are to your goal.</li>
          </ul>
          <h3 className="mb-2 text-xl font-semibold text-gray-900">Benefits</h3>
          <ul className="list-inside list-disc text-left text-gray-700">
            <li>Personalized targets keep you motivated.</li>
            <li>Helps prevent overeating or undereating.</li>
            <li>Easy to adjust as your goals change.</li>
          </ul>
        </section>
      </main>
    </Layout>
  )
}
