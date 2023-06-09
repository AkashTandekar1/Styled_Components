import React from 'react'

import { Navbar, NavHeader } from './Newbarstyle'

export default function Newbar() {
  return (
    <div>
     <Navbar>
      <input type="checkbox" id="nav-check"/>
      <NavHeader>
    <div class="nav-title">
      JoGeek
    </div>
   </NavHeader>
  <div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div class="nav-links">
    <a href="//github.io/jo_geek" target="_blank">Github</a>
    <a href="http://stackoverflow.com/users/4084003/" target="_blank">Stackoverflow</a>
    <a href="https://in.linkedin.com/in/jonesvinothjoseph" target="_blank">LinkedIn</a>
    <a href="https://codepen.io/jo_Geek/" target="_blank">Codepen</a>
    <a href="https://jsfiddle.net/user/jo_Geek/" target="_blank">JsFiddle</a>
  </div>

  </Navbar>

    </div>
  )
}
