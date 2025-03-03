import { Container } from '@/components/Container'

function FAQSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold text-text mb-6">{title}</h2>
      <div className="space-y-8">{children}</div>
    </section>
  )
}

function Question({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-lg font-medium text-text-secondary mb-3">{title}</h3>
      <div className="text-gray-600 prose prose-gray">{children}</div>
    </div>
  )
}

export default function FAQ() {
  return (
    <div className="py-16 sm:py-20">
      <Container>
        <h1 className="text-3xl font-bold tracking-tight text-text mb-6">
          Frequently Asked Questions
        </h1>

        <div className="prose prose-lg prose-gray mb-12">
          <p>
            GutSpy is your personal digestive health companion, designed to help you track, understand, and improve your gut health.
            By monitoring your nutrition, water intake, and digestive patterns, you can identify trends and make informed decisions about your diet and lifestyle.
          </p>
        </div>

        <FAQSection title="Meals & Nutrition">
          <Question title="What are macronutrients and why are they important?">
            <p>
              Macronutrients are the three main categories of nutrients your body needs in large amounts:
            </p>
            <ul>
              <li>Proteins (4 calories per gram) - essential for muscle building and repair</li>
              <li>Carbohydrates (4 calories per gram) - primary energy source</li>
              <li>Fats (9 calories per gram) - important for hormone production and nutrient absorption</li>
            </ul>
          </Question>

          <Question title="What's the recommended macro distribution?">
            <p>A balanced diet typically includes:</p>
            <ul>
              <li>Proteins: 10-35% of total calories</li>
              <li>Carbohydrates: 45-65% of total calories</li>
              <li>Fats: 20-35% of total calories</li>
            </ul>
          </Question>

          <Question title="What are good sources of each macronutrient?">
            <div className="space-y-4">
              <div>
                <p className="font-medium">Protein-Rich Foods:</p>
                <ul>
                  <li>Meat: beef, chicken, pork, lamb</li>
                  <li>Fish: salmon, tuna, cod</li>
                  <li>Eggs and dairy products</li>
                  <li>Plant-based: lentils, beans, tofu</li>
                </ul>
              </div>
              <div>
                <p className="font-medium">Carbohydrate Sources:</p>
                <ul>
                  <li>Grains: rice, bread, pasta</li>
                  <li>Fruits: apples, bananas, berries</li>
                  <li>Starchy vegetables: potatoes, corn</li>
                  <li>Legumes: beans, chickpeas</li>
                </ul>
              </div>
              <div>
                <p className="font-medium">Healthy Fat Sources:</p>
                <ul>
                  <li>Avocados</li>
                  <li>Nuts and seeds</li>
                  <li>Olive oil and coconut oil</li>
                  <li>Fatty fish</li>
                </ul>
              </div>
            </div>
          </Question>
        </FAQSection>

        <FAQSection title="Water Intake">
          <Question title="How much water should I drink daily?">
            <p>The recommended daily water intake varies by individual:</p>
            <ul>
              <li>Average adult: 2000-2500ml per day</li>
              <li>Athletes or active individuals: 3000-4000ml per day</li>
            </ul>
          </Question>

          <Question title="What are the benefits of proper hydration?">
            <p>Staying properly hydrated is crucial for your health. Benefits include:</p>
            <ul>
              <li>Maintains body temperature</li>
              <li>Aids digestion</li>
              <li>Supports nutrient absorption</li>
              <li>Improves cognitive function</li>
            </ul>
          </Question>
        </FAQSection>

        <FAQSection title="Understanding Your Digestive Health">
          <Question title="What is the Bristol Scale?">
            <p>
              The Bristol Stool Scale is a diagnostic medical tool that classifies human stool into seven categories.
              It helps assess digestive health and transit time. Types 3 and 4 are considered ideal, indicating a healthy digestive system.
            </p>
          </Question>

          <Question title="What indicates healthy digestion?">
            <p>A healthy digestive system typically shows these signs:</p>
            <ul>
              <li>Regular bowel movements (Types 3-4 on Bristol Scale)</li>
              <li>Proper fiber intake</li>
              <li>Good hydration</li>
              <li>Normal transit time</li>
              <li>Healthy gut function</li>
            </ul>
          </Question>
        </FAQSection>
      </Container>
    </div>
  )
}
