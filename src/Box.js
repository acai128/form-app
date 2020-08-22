import React from "react"; 

function Box(props) {
    return (
      <div>
        <b style={{'color' : props.color, 'width' : props.width, 
        'height' : props.height  }}>

        </b>
      </div>
    )
  }

export default Box; 

      
