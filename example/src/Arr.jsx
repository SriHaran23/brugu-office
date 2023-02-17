import React, { useState } from 'react'

function Arr() {
    const [arr]= useState([
        {name: "haran",age: 22,mobile: 9312345678},
        {name: "gopi",age: 22,mobile: 9312345678},
        {name: "venky",age: 22,mobile: 9312345678},
        {name: "mohan",age: 22,mobile: 9312345678},
        {name: "loki",age: 22,mobile: 9312345678},
        {name: "ramesh",age: 22,mobile: 9312345678},
        {name: "haran",age: 22,mobile: 9312345678},
        {name: "gopi",age: 22,mobile: 9312345678},
        {name: "venky",age: 22,mobile: 9312345678},
        {name: "mohan",age: 22,mobile: 9312345678},
        {name: "loki",age: 22,mobile: 9312345678},
        {name: "ramesh",age: 22,mobile: 9312345678},
        {name: "haran",age: 22,mobile: 9312345678},
        {name: "gopi",age: 22,mobile: 9312345678},
        {name: "venky",age: 22,mobile: 9312345678},
        {name: "mohan",age: 22,mobile: 9312345678},
        {name: "loki",age: 22,mobile: 9312345678},
        {name: "ramesh",age: 22,mobile: 9312345678},
        {name: "haran",age: 22,mobile: 9312345678},
        {name: "gopi",age: 22,mobile: 9312345678},
        {name: "venky",age: 22,mobile: 9312345678},
        {name: "mohan",age: 22,mobile: 9312345678},
        {name: "loki",age: 22,mobile: 9312345678},
        {name: "ramesh",age: 22,mobile: 9312345678},
        {name: "haran",age: 22,mobile: 9312345678},
        {name: "gopi",age: 22,mobile: 9312345678},
        {name: "venky",age: 22,mobile: 9312345678},
        {name: "mohan",age: 22,mobile: 9312345678},
        {name: "loki",age: 22,mobile: 9312345678},
        {name: "ramesh",age: 22,mobile: 9312345678}
    ])
  return (
    <div>
        {
            arr.map((n,i)=>{
                return <div>
                    <ul type='none' className='border border-2 border-info m-5 p-5 w-25 position-relative top-25 start-50 translate-middle'>
                        <li>{"Name :"+n.name}</li>
                        <li>{"age :"+n.age}</li>
                        <li>{"mobile :"+n.mobile}</li>
                    </ul>
                    <div>
                        {/* if-else function */}
                        {/* {
                            (i+1)%5===0
                            ? <p className='border border-2 border-info m-5 p-5 w-25 position-relative top-25 start-50 translate-middle'>This text is printed after 5 lists.</p>
                            :""
                        } */}
                        {/* using includes */}
                        {"loki".includes(n.name) && 
                            <p className='border border-2 border-info m-5 p-5 w-25 position-relative top-25 start-50 translate-middle'>This text is printed after 5 lists.</p>
                        }
                    </div>
                </div>
                    
            })
        }
    </div>
  )
}

export default Arr