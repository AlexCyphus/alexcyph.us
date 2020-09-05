import React from 'react';
import Emoji from './Emoji'


function Footer() {
  return ([
    <div className="inner-footer m-auto">
      <p className='m-0'><Emoji emoji="🛠" desc="tools"/> ️made from scratch with <Emoji emoji="💖" desc="heart"/> in berlin <Emoji emoji="🇩🇪" desc="german-flag"/></p>
      <p className='m-0 d-none'><Emoji emoji="🌚" desc="dark-moon"/> dark mode coming soon</p>
    </div>
  ])
}

export default Footer
