import React from 'react'

export default function Scroll(props) {
  return (
    <div style={{overflowY:"scroll",border:"1px solid black", height:"500px"}}>
      {props.children}
    </div>
  );
}
