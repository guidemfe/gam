import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter className="mt-4">
      <div>
          GAM v1.0-beta
        <span className="ms-1">&copy; 2024 - Guideline for Adoption Micro-Frontend.</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
