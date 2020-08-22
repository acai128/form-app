import React,{ useState } from 'react';
import Box from "./Box"; 
import NewBoxForm from "./NewBoxForm"


function BoxList(){
    const [items, setItems] = useState([]);

    const renderItems = () => {

   return(
       <ul>
           {items.map(item => (
          <li>
            {item.width}, {item.height}, {item.color}
          </li>
        ))}
       </ul>
   )

      /** Create new box. */
      const createBox = item => {
        let newBox = { ...item };
        setItems(items => [...items, newBox]);
      };
  return (
    <div>
      <NewBoxForm createBox={createBox} />
      {renderItems()}
    </div>
  );
};
// end
    



    return(
        <div>
            <h1>colorBoxMaker</h1>
            <Box />
            <NewBoxForm />
        </div>
    )
    
}

export default BoxList; 