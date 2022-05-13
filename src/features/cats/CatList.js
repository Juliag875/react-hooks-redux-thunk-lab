// write your CatList component here
import React from 'react'

function CatList({catPics}) {
  return (
    <div>
      {catPics.map((pic) => (
        <img key={pic.id} src={pic.url} alt="cat" height="200"/>
      )) 
      }
    </div>
  )
}

export default CatList