import React from 'react'

import { Wrapper } from "./style"

const PageWrapper = ({children}) => (
  <Wrapper>
    <div className="contents">
      {children}
    </div>
  </Wrapper>
)

export default PageWrapper; 