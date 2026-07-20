import SiteLayout from '../components/SiteLayout'
import Hero from '../sections/Hero'
import Connectors from '../sections/Connectors'
import HowItWorks from '../sections/HowItWorks'
import Features from '../sections/Features'
import Security from '../sections/Security'
import Examples from '../sections/Examples'
import CTA from '../sections/CTA'

export default function Home() {
  return (
    <SiteLayout>
      <main>
        <Hero />
        <Connectors />
        <HowItWorks />
        <Features />
        <Security />
        <Examples />
        <CTA />
      </main>
    </SiteLayout>
  )
}
