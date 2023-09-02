import React from "react";

const HEADER_STYLES={
height:'70px',
display:'flex',
justifyContent:'space-between',
alignItems:'center',
margin:'0 20px',
backgroundColor:'#590BD8',
color:'#fff'
}
const NOME_STYLES={

    fontFamily: 'Teko, sans-serif',
    fontSize: '1.8em',
    
}

export default function Header(){
    return (
        <div style={HEADER_STYLES}>
               
            <div><h3 style={NOME_STYLES}>Gilmar Alves</h3></div>
            <div><h2 style={NOME_STYLES}>FRONTEND</h2></div>
            <div><h2 style={NOME_STYLES}>Contato</h2></div>
        </div>
    )
}


