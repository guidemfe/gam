import React from 'react'
import { CFooter } from '@coreui/react'
import '../scss/_custom.scss'

const AppFooter = () => {
  return (
    <CFooter className="mt-4 footer-text">
      <div>
          GAM v1.0
        <span className="ms-1 footer-text">&copy; 2024 - Guideline for Adoption Micro-Frontend. Licensed under CC BY-SA 4.0</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
