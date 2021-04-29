import React from 'react';


function ArticleImage({image, description}) {
  return ([
    <div className="d-flex outer-image row">
      <div className="col-12"><img src={`../images/${image}`} alt="article" className="inner-image drop-shadow d-block"/></div>
      <div className="text-center m-auto image-description"><p>{description}</p></div>
    </div>
  ])
}

export default ArticleImage
