import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import logo from "../../assets/img/logo.png"

import "./Nav.css"
import Busqueda from '../search/Search';
import Contador from '../count/Count';

function Nav({data,valueFiltro}) {
  const adata= data
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  const[inputvalue, setInputvalue]=useState("");

  const[selectedCity, setSelectedCity]=useState("");
  const[clicked, setClicked]=useState(true)
  const[clicked2, setClicked2]=useState(false)
  const[totalguest, setTotalguest]=useState(0)

  const handleTotalGuest=(guest)=>{
    setTotalguest(guest)
  }

  const handleClose = () => {
    setOpen(false);
    valueFiltro(inputvalue);
    console.log(newValue)
  }

  const handleCityClick=(city)=>{
    setSelectedCity(city)
    setInputvalue(city)
  }

  const handleInputChange=(event)=>{
    setInputvalue(event.target.value)
  }

  const desaparece=()=>{
    setClicked(true)
    setClicked2(false)
  }

  const desaparece2=()=>{
    setClicked2(true)
    setClicked(false)
  }

  const style = {
    position: 'absolute',
    top: '25%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height:'50%',
    width: '100%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <div className="navbarContainer">
        <div className="logoC">
          <img className="logo" src={logo} alt="" />
        </div>
        <div className="menuBusqueda">
          <input onClick={handleOpen}className="city inputSearh" placeholder='Select City'  type="text" value={inputvalue} readOnly/>
          <input onClick={handleOpen} className="inputSearh" type="text" value={"Guests "+totalguest} readOnly/>
          <Button onClick={handleOpen} ><div className="lupa fa-solid fa-magnifying-glass" type="submit"></div></Button>
        </div>
        <div>
          <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title"            aria-describedby="modal-modal-description">
            
            <Box  sx={style}>
              <div className='modalContainer'>
                <div className='inicioMo'><h5>Edit your search</h5> <button className='xB' onClick={handleClose}>X</button></div>
                <section className='searchBar'>
                  <input className="cityinputSearh"  onClick={desaparece} type="text" readOnly value={inputvalue} placeholder='Select City' onChange={handleInputChange}></input>
                  <input className="inputSearh" onClick={desaparece2} type="text" value={"Guests "+totalguest}  readOnly placeholder="Add guests" />
                  <button className='botonSearchMo' onClick={handleClose}>
                  <div className=" fa-solid fa-magnifying-glass" type="submit"></div> Search</button>
                </section>
                  
                <section className='modalMenusContainer'>
                  <Busqueda classname={`${clicked?"": "Ocultar"}`} data={adata} onCityClick={handleCityClick}>
                  </Busqueda>
                  <Contador classtname={`${clicked2 ? "":  "Ocultar"}`}totalGuests={handleTotalGuest}>
                  </Contador>
                </section>
              </div>          
            </Box>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default Nav