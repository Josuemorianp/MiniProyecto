import React from 'react'
import { useState } from 'react'
import "./Count.css"

function Count({classtname,totalGuests}) {

    const [sumaA, setSumaA]=useState(0);
    const [sumaN, setSumaN]=useState(0);
   
    function sumarA(){
       setSumaA(sumaA+1)
       calcularTotalGuest()
    }
    
    function restarA(){
        if(sumaA>0){
            setSumaA(sumaA-1)
            calcularTotalGuest()
        }      
    }

    function sumarN(){
        setSumaN(sumaN +1)
        calcularTotalGuest()
    }

    function restarN(){
        if(sumaN>0){
            setSumaN(sumaN-1)
            calcularTotalGuest()
        }
    }

    const calcularTotalGuest=()=>{
        const guest= sumaA+sumaN;
        console.log(guest)
        totalGuests(guest);
    }

    return (
        <>
            <section className={classtname} id='contContainer'>
                <div>
                    <h6><strong>Adults</strong></h6>
                    <p>Ages 13 or above</p> 
                </div>
                <div classname='count' >        
                    <button className='botonC' onClick={sumarA}>+</button>
                    <p className='total'  >{sumaA}</p>
                    <button className='botonC' onClick={restarA}>-</button>
                </div>
                <div>
                    <div>
                        <h6><strong>Children</strong></h6>
                        <p>Ages 2-12</p>   
                    </div>
                </div>
                <div className='count'>
                    <button className='botonC' onClick={sumarN}>+</button>
                    <p className='total'  >{sumaN}</p>
                    <button className='botonC' onClick={restarN}>-</button>
                </div>
            </section>
        </>
    )
}

export default Count