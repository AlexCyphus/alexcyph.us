import React from 'react';

function Emoji({emoji, desc}) {
  return ([
    <span role="img" aria-label={desc}>{emoji}</span>
  ])
}

export default Emoji
