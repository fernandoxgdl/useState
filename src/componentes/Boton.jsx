/*const [colorfondo, setColorfondo] = useState('#cccccc');

const cambio = () => {
  setColorfondo('#ffa600');
}

<div  style={{backgroundColor: colorfondo, height: '100vh'}}>
  <button onClick={cambio}>
    click aqui
  </button>
</div>*/

import React, { useState } from 'react'


function Boton() {
    const [color, setColor]= useState('#cccccc');


const rojo = ()=> {
setColor('#e24b4a');
}

const azul = ()=> {
    setColor('#378add');
}

const verde =()=>{
    setColor('#639922');
}

  return (
    <>
    <div  style={{ width: '70vw',
     border:'1px solid', 
     display: 'flex', 
     height:'50vh',
     flexDirection:'column',
      alignItems:'center',
      justifyContent:'space-evenly' }}>

       <div ><h3>ASI DEBE VERSE</h3></div>

    <div style={{border:'1px solid',
        width:'30%',
        backgroundColor:color,
        height:'30%',
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:'10%' }}>
            Color</div>


    <div style={{width:'60%',
        display: 'flex', 
        justifyContent:'space-evenly',alignItems:'center' }}>

        <button style={{width:'25%',
            border:'1px solid #e24b4a',
            color:'#e24b4a'
        }}
        onClick={rojo}>Rojo</button>

        <button style={{width:'25%',
         border:'1px solid  #378add',
            color:'#378add'  
        }}
        onClick={azul}>azul</button>

        <button style={{width:'25%',
            border:'1px solid #639922',
            color:'#639922'
        }}
        onClick={verde}>verde</button>
    </div>
    <p>El color es: {color}</p>

    </div>
    </>
  )
}

export default Boton