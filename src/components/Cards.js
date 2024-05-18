import React from 'react'
import Card from './Card'
import image1 from '../Assets/1.jpg'
import image2 from '../Assets/Java.jpg'
import image3 from '../Assets/Python.png'
const cards=[
    {
        id:1,
        title:'Nginx',
        image:image1,
        instructor:' Lisset Vega',
        url:'https//clasesdiplomado.mx',

    },
    {
        id:2,
        title:'Java',
        image:image2,
        instructor:' Samuel Benito'
    },
    {
        id:2,
        title:'Python',
        image:image3,
        instructor:' Angela Rios'
    }
]


export default function Cards() {
  return (
    <div className='container d-flex justify-content-center aling-item-center h-100'>
        <div className='row'>
            
        {
            cards.map(c => (
                <div className='col-md-4' key={cards.id}>
                    <Card
                    key={c.id}
                    id={c.id}
                    image={c.image}
                    instructor={c.instructor}
                    />
                    </div>
            ))
        }
        

                
            </div>
         
            </div>

  )
}
