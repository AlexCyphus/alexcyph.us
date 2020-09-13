import React from 'react';
import {Link} from 'react-router-dom'

function Header({frame, iterateFrame, specId}) {
  let frameNum = "/images/frame-" + frame + ".png"
  return ([
    <div className="inner-header m-auto">
      <img id={specId} src={frameNum} className="header-image"></img>
    </div>
  ])
}

export default Header


//     <Link to={link} style={{ textDecoration: 'none', color: "black"}} className="outer-header d-flex">
//       <div className="inner-header m-auto">
//         <h1 className="alexcyphus text-center">
//           <span className="red">a</span>
//           <span className="blue">l</span>
//           <span className="purple">e</span>
//           <span className="green">x</span>
//           <span className="blue">c</span>
//           <span className="purple">y</span>
//           <span className="green">p</span>
//           <span className="red">h</span>
//           <span className="sm-font">.</span>
//           <span className="yellow">us</span>
//         </h1>
//       </div>
//     </Link>
//   ])
// }
