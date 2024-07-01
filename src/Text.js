import React from  "react"



function Text(props){
  return (
    <div className="notes">
    <h1>{props.header}</h1>
    <p>{props.info}</p>
    </div>
    
  )
}

export default Text