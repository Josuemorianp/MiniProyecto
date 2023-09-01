import React from 'react'
import "./Search.css"


function Busqueda({data, onCityClick, classname}) {
  const ciudadesUnicasObj ={}
  data.forEach(objeto => {
    const ciudad = objeto.city;
    if (!ciudadesUnicasObj[ciudad]) {
      ciudadesUnicasObj[ciudad] = true;
    }
  });
      
  const ciudadesu =Object.keys(ciudadesUnicasObj) 

  return (
    <>  
      <section className='ListContainer'>
        <ul id="lista" className={classname}>
          {ciudadesu.map((ciudad,index)=>(
          <li className='elist' key={index} onClick={()=>onCityClick(ciudad)} > <span class="mapa material-symbols-outlined">location_on</span> {ciudad}, Finland </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default Busqueda