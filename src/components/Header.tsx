'use client'

import {
  Popover,
  PopoverBackdrop,
  PopoverButton,
  PopoverPanel,
  PopoverGroup,
} from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import {
  CameraIcon,
  PieChartIcon,
  TargetIcon,
  StethoscopeIcon,
  DropletIcon,
  BarChart3Icon,
  ChevronDown,
} from 'lucide-react'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'

const features = [
  {
    name: 'AI Food Scanner',
    description:
      'Take a picture or upload your meal to get instant AI-powered insights about your food.',
    href: '/features/ai-food-scanner',
    icon: CameraIcon,
  },
  {
    name: 'Macro Counter',
    description: 'Track calories and macronutrients for every meal you upload.',
    href: '/features/macro-counter',
    icon: PieChartIcon,
  },
  {
    name: 'Caloric Goals',
    description: 'Set up daily caloric goals and monitor your intake easily.',
    href: '/features/caloric-goals',
    icon: TargetIcon,
  },
  {
    name: 'Digestion AI Tracker',
    description:
      'Upload your digestion data for AI analysis and track your gut health over time.',
    href: '/features/digestion-ai-tracker',
    icon: StethoscopeIcon,
  },
  {
    name: 'Water Intake Tracker',
    description: 'Log your daily water intake and stay hydrated.',
    href: '/features/water-intake',
    icon: DropletIcon,
  },
  {
    name: 'Progress Analysis',
    description:
      'Analyze your caloric intake with weekly, monthly, and yearly graphs.',
    href: '/features/progress-analysis',
    icon: BarChart3Icon,
  },
]

const callsToAction = [
  { name: 'View all features', href: '/#features' },
  { name: 'Download app', href: 'https://apple.co/43azHhK' },
]

function MenuIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 6h14M5 18h14M5 12h14"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronUpIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M17 14l-5-5-5 5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MobileNavLink(
  props: Omit<
    React.ComponentPropsWithoutRef<typeof PopoverButton<typeof Link>>,
    'as' | 'className'
  >,
) {
  return (
    <PopoverButton
      as={Link}
      className="block text-base leading-7 tracking-tight text-gray-700"
      {...props}
    />
  )
}

export function Header() {
  return (
    <header>
      <nav>
        <Container className="relative z-50 flex justify-between py-8">
          <div className="relative z-10 flex items-center gap-16">
            <Link href="/" aria-label="Home">
              <Logo />
            </Link>
            <div className="hidden lg:flex lg:gap-10">
              <PopoverGroup className="flex gap-10">
                <Popover className="relative">
                  <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-0">
                    Features
                    <ChevronDown className="h-4 w-4 flex-none text-gray-400" />
                  </PopoverButton>

                  <PopoverPanel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                    <div className="p-4">
                      {features.map((item) => {
                        const Icon = item.icon
                        return (
                          <div
                            key={item.name}
                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm hover:bg-gray-50"
                          >
                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                              <Icon className="h-6 w-6 text-gray-600 group-hover:text-blue-600" />
                            </div>
                            <div className="flex-auto">
                              <Link
                                href={item.href}
                                className="block font-semibold text-gray-900"
                              >
                                {item.name}
                                <span className="absolute inset-0" />
                              </Link>
                              <p className="mt-1 text-gray-600">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                    <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                      {callsToAction.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="flex items-center justify-center p-3 text-sm font-semibold text-gray-900 hover:bg-gray-100"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </PopoverPanel>
                </Popover>
                <NavLinks />
              </PopoverGroup>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Popover className="lg:hidden">
              {({ open }) => (
                <>
                  <PopoverButton
                    className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 ui-not-focus-visible:outline-none"
                    aria-label="Toggle site navigation"
                  >
                    {({ open }) =>
                      open ? (
                        <ChevronUpIcon className="h-6 w-6" />
                      ) : (
                        <MenuIcon className="h-6 w-6" />
                      )
                    }
                  </PopoverButton>
                  <AnimatePresence initial={false}>
                    {open && (
                      <>
                        <PopoverBackdrop
                          static
                          as={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur"
                        />
                        <PopoverPanel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, y: -32 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{
                            opacity: 0,
                            y: -32,
                            transition: { duration: 0.2 },
                          }}
                          className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50 px-6 pb-6 pt-32 shadow-2xl shadow-gray-900/20"
                        >
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <h3 className="text-sm font-semibold text-gray-900">
                                Features
                              </h3>
                              {features.map((feature) => (
                                <MobileNavLink
                                  key={feature.name}
                                  href={feature.href}
                                >
                                  {feature.name}
                                </MobileNavLink>
                              ))}
                            </div>
                            <div className="border-t border-gray-200 pt-4">
                              <MobileNavLink href="/privacy">
                                Privacy
                              </MobileNavLink>
                              <MobileNavLink href="/#faqs">FAQs</MobileNavLink>
                              <MobileNavLink href="/posts">Blog</MobileNavLink>
                            </div>
                          </div>
                          <div className="mt-8 flex flex-col gap-4">
                            <Button href="#">Download the app</Button>
                          </div>
                        </PopoverPanel>
                      </>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>
            <Button href="#" className="hidden bg-primary lg:block">
              Download
            </Button>
          </div>
        </Container>
      </nav>
    </header>
  )
}
