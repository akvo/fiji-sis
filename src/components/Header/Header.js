import React from 'react'

import { Wrapper } from "./style"

const Header = () => (
  <Wrapper>
      <div className="brand-txt">
        <img className="brand-logo" src="/reddfiji_logo.png"/>
      </div>
      <div className="tab-title">Safeguard Information System (SIS)</div>
  </Wrapper>
)

export default Header;