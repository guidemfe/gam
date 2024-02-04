import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
          GAM V1.0-beta
        <span className="ms-1">&copy; 2024 - Guideline for Adoption Micro-Frontend.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Developed by</span>
          Giovanni Amorim
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
