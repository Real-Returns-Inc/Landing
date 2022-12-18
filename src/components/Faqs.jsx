import Link from 'next/link'

import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: "What type of properties does Real Returns support?",
      answer: "Real Returns supports both residential and commercial properties, providing comprehensive market analysis and personalized investment recommendations for both types of investments."
      },
      {
      question: "How does Real Returns determine property values and rental amounts?",
      answer: "Real Returns uses advanced algorithms and integration with leading real estate market data sources to accurately determine property values and rental amounts in real-time, helping you make informed investment decisions."
      },
      {
      question: "Is Real Returns only available in certain locations?",
      answer: "Real Returns is available in most locations worldwide, allowing you to access the platform no matter where you are."
      },
  ],
  [
    {
      question: "Can I track and manage multiple properties with Real Returns?",
      answer: "Yes, Real Returns allows you to track and manage multiple properties in a single location, streamlining your real estate portfolio management."
      },
      {
      question: "Is there a limit to the number of properties I can track with Real Returns?",
      answer: "There is no limit to the number of properties you can track with Real Returns, giving you the ability to grow your portfolio as much as you'd like."
      },
      {
      question: "Is there a free trial available for Real Returns?",
      answer: "Yes, Real Returns offers a free trial for users to try out the platform before committing to a subscription. This allows you to see the value that Real Returns can bring to your real estate investments before making a commitment."
      },
  ],
  [
    {
      question: "Are there any long-term contracts required for Real Returns?",
      answer: "No, Real Returns offers flexible subscription plans with no long-term contracts required. You can easily cancel or upgrade your plan at any time, allowing you to adjust your subscription to fit your changing needs."
      }
  ]
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-100"
          >
            Frequently asked questions
          </h2>
          <p className="mt-2 text-lg text-gray-300">
            If you have anything else you want to ask,{' '}
            <Link
              href="mailto:info@realreturns.ai"
              className="text-gray-200 underline"
            >
              reach out to us
            </Link>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg font-semibold leading-6 text-gray-200">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-300">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
