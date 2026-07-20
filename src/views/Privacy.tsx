import LegalDocument from '../components/LegalDocument'
import { privacyContent } from '../data/privacyContent'

export default function Privacy() {
  return (
    <LegalDocument
      title="Privacy Policy"
      effectiveDate="[EFFECTIVE DATE]"
      lastUpdated="[LAST UPDATED DATE]"
      content={privacyContent}
    />
  )
}
