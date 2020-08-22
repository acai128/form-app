import React, { useState } from "react"; 

// const [formData, setFormData] = useState({
//     width: "",
//     height: "", 
//     color: ""
//   });

const NewBoxForm = ({ createBox }) => {

    const INITIAL_STATE = { width: "", height: "" , color: "" };
    const [formData, setFormData] = useState(INITIAL_STATE);

  const handleSubmit = evt => {
    evt.preventDefault();
    createBox(formData);
    setFormData(INITIAL_STATE);
  };

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  };


  /** render form */

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="width">Width:</label>
      <input
        id="width"
        name="width"
        value={formData.width}
        onChange={handleChange}
      />

      <label htmlFor="height">Height:</label>
      <input
        id="height"
        name="height"
        value={formData.height}
        onChange={handleChange}
      />

      <label htmlFor="color">Color:</label>
      <input
        id="color"
        name="color"
        value={formData.color}
        onChange={handleChange}
      />
      <button>make a box</button>


      </form>
    )
}
  export default NewBoxForm; 