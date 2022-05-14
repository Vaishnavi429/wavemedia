import React from 'react'
import { Button } from 'react-bootstrap'

import './Categories.scss'

export default function Categories() {
let Categories=['Entertainment','News','Story','Poem','Sport','Education','Tweet','Stock','Entertainment','News','Story','Poem','Sport','Education','Tweet','Stock','Entertainment','News','Story','Poem','Sport','Education','Tweet','Stock']
  return (
    <div className='Categories'>
        {
     Categories.map((item,index)=>
      <Button className="CategoriesBtn" key={index}>{item}</Button>
    )  }
    </div>
  )
}
