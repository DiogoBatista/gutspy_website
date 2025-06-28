import { Layout } from '@/components/Layout'
import Image from 'next/image'

export default function MacroCounterPage() {
  return (
    <Layout>
      <main className="mx-auto max-w-3xl px-4 py-12">
        <section className="mb-10 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            Macro Counter
          </h1>
          <p className="mb-6 text-lg text-gray-700">
            Track calories and macronutrients for every meal you upload. Stay on
            top of your nutrition with detailed macro breakdowns and
            easy-to-read charts.
          </p>
          <div className="flex justify-center">
            <Image
              src="/images/features/macro_counter.png"
              alt="Macro Counter screenshot"
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
            <li>Upload your meal or use the AI Food Scanner.</li>
            <li>
              Get an instant breakdown of calories, proteins, fats, and carbs.
            </li>
            <li>Visualize your daily intake with intuitive charts.</li>
          </ul>
          <h3 className="mb-2 text-xl font-semibold text-gray-900">Benefits</h3>
          <ul className="list-inside list-disc text-left text-gray-700">
            <li>Effortlessly track your macros for every meal.</li>
            <li>Helps you meet your nutrition and fitness goals.</li>
            <li>See trends and adjust your diet as needed.</li>
          </ul>
        </section>
      </main>
    </Layout>
  )
}
