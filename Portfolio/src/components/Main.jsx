import React from 'react'
const MAIN_STYLES ={

        position:'absolute',
        width: '100%',
        backgroundColor: '#000',
        height: 'calc(100% - 70px)',
        color:'#fff',
        display:'flex',
        justifyContent:'center',
    
}
const  DIVS_STYLES={
    flex:1,
    padding:' 0 20px',
    backgroundColor:'#F5F5' ,

}
export default function Main() {
  return (
    <div style={MAIN_STYLES}>
        
        <div style={DIVS_STYLES}>PARTE1</div>
        <div style={DIVS_STYLES}>PARTE2</div>
    </div>
  )
}
