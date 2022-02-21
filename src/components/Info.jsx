import React from 'react';
import "./Info.css";

const Info = () => {
  return (
    <>
      <h1 className="text">
        Salone Di Parrucchiere a Foligno apertura alle ore 08:30
      </h1>
        <h1 className="hello">
        ↤Orari↦
          <div className="container">
          <h1 className="gg row">
          lun:	Chiuso <br />
          mar:  08:30-19:30<br />
          mer:  08:30-19:30 <br />
          gio:  08:30-19:30 <br />
          ven:  08:30-19:30 <br />
          sab:  08:00-19:30 <br />
          dom:  Chiuso
          </h1>
          </div>
        </h1>
        <h1 className="contact row container">
        ↤Conttattaci↦
          <a className=' btn bottone' href="https://www.instagram.com/gio_hair_style_parrucchieri/"> <h1>Instagram</h1>  <br />📷</a>
          <div className="container">
          <h1 className="numero">
            340 568 5604
          </h1>
          < h1 className="email">
            giohairstyleparrucchieri83<br/>@gmail.com<br/>
          </h1>
          </div>
        </h1>
      </>
  )
}

export default Info;