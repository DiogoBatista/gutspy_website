import { Layout } from '@/components/Layout'
import Image from 'next/image'

export default function WaterIntakePage() {
  return (
    <Layout>
      <main className="mx-auto max-w-3xl px-4 py-12">
        <section className="mb-10 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            Water Intake Tracker
          </h1>
          <p className="mb-6 text-lg text-gray-700">
            Log your daily water intake and stay hydrated. Easily track your
            progress and build healthy hydration habits.
          </p>
          <div className="flex justify-center">
            <Image
              src="/images/features/water_intake.jpeg"
              alt="Water Intake Tracker screenshot"
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
            <li>Log each glass or bottle of water you drink.</li>
            <li>See your daily progress towards your hydration goal.</li>
            <li>Get reminders to help you stay on track.</li>
          </ul>
          <h3 className="mb-2 text-xl font-semibold text-gray-900">Benefits</h3>
          <ul className="list-inside list-disc text-left text-gray-700">
            <li>Build healthy hydration habits.</li>
            <li>Stay energized and focused throughout the day.</li>
            <li>Easy to use and track over time.</li>
          </ul>
        </section>
      </main>
    </Layout>
  )
}
