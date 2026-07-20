import LegalDocument from '../components/LegalDocument'
import { termsContent } from '../data/termsContent'

export default function Terms() {
  return (
    <LegalDocument
      title="Terms and Conditions"
      effectiveDate="[EFFECTIVE DATE]"
      lastUpdated="[LAST UPDATED DATE]"
      content={termsContent}
    />
  )
}
