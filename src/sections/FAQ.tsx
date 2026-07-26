import { Plus } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const QUESTIONS = [
  {
    n: '01',
    question: 'What does Cuppet do?',
    answer:
      'Connect the apps you already use, describe a routine in plain language, and choose a schedule. A Cuppet agent runs it for you.',
  },
  {
    n: '02',
    question: 'How is this different from a chatbot?',
    answer:
      'A chatbot waits for you to open it. Cuppet runs scheduled work without another prompt and keeps a log of what happened.',
  },
  {
    n: '03',
    question: 'What is a scheduled agent?',
    answer:
      'A saved task with a schedule, connected tools, and limits you approve. It could be a weekday morning brief or a weekly digest.',
  },
  {
    n: '04',
    question: 'Which apps can I connect?',
    answer:
      "We're building connectors for tools like Gmail, Calendar, Drive, Docs, Notion, and Slack. More are planned, and every connection is optional.",
  },
  {
    n: '05',
    question: 'Is my data private?',
    answer:
      'You control access. Choose which apps an agent can use, then review those permissions before approving them.',
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="border-t border-[var(--rule)] py-20 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Common questions"
          sub="Learn how Cuppet turns plain-language requests into scheduled agents, which apps you can connect, and how you stay in control of access."
          align="left"
        />

        <div className="mt-12 border-t border-[var(--rule)]">
          {QUESTIONS.map((item) => (
            <details key={item.n} className="group border-b border-[var(--rule)]">
              <summary className="flex cursor-pointer list-none items-start gap-5 py-6 marker:hidden sm:gap-8 sm:py-7">
                <span className="pt-1 text-[10px] font-semibold tracking-[0.16em] text-[var(--ink-faint)]">
                  {item.n}
                </span>
                <span className="flex-1 text-[17px] font-semibold tracking-[-0.02em] text-[var(--ink)] sm:text-lg">
                  {item.question}
                </span>
                <Plus
                  className="mt-0.5 h-5 w-5 shrink-0 text-[var(--forest-mid)] transition-transform duration-200 group-open:rotate-45"
                  strokeWidth={1.5}
                />
              </summary>
              <p className="pb-6 pl-[3.25rem] pr-8 text-sm leading-6 text-[var(--ink-soft)] sm:pb-7 sm:pl-16 sm:pr-12 sm:text-[15px] sm:leading-7">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
