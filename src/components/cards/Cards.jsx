import { useEffect, useState } from "react";
import Nav from "../nav-bar/Nav";
import "./Cards.css"

function Cards() {
  const [data, setData] = useState([]);
  
  const getData = async () => {
    try {
      const res = await fetch("stays.json");
      const resJson = await res.json();
      
      setData(resJson);
    } catch (error) {
        console.log(error);
      }
  };

  const[value, setValue]=useState("Helsinki")
  const handlevalueFiltro = (newValue)=>{
    setValue(newValue);
  };

  useEffect(() => { getData(); }, []);
    // console.log(data);

  return (
    <>
      <section className="hero">
        <header>
          <Nav 
            data={data}
            valueFiltro={handlevalueFiltro}>
          </Nav>
        </header>
        
        <h1 className="tituloP">Stays in Finland</h1>
        <section className="cardContainer">
          {data.map((el, i) => {
            if(el.city==value){
          
              return (
                <>
                  <section className="card"> 
                    <div className="photo">
                      <img  className="foto" key={[i]} src={el.photo} height={300} width={0} alt="foto"/>
                    </div>         
                    <div>
                      <div>
                        <div className="description">
                          <p className={`SuperHost ${el.superHost?"": "Ocultar"}`}>SUPER HOST</p>
                          <p key={[i]}>{el.type}.  {el.beds !== null ? el.beds + " beds": null }</p>
                          <small key={[i]}><span class="material-symbols-outlined">star</span>{el.rating}</small>
                        </div>
                      </div>
    
                      <h6 key={[i]}>{el.title}</h6>
                    </div> 
                  </section>           
                </>
              )
            }       
          })} 
        </section>
      </section>
    </>
  );
};

export default Cards