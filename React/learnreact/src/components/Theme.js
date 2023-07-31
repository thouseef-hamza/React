import React, { useState } from 'react'

const white={backgroundColor:"white"}
const dark = {
  backgroundColor: "black",
  width: '100%',
  height: '100vh',  
}
export const Theme = () => {
  const [theme,setTheme] = useState(white)
  return (
    <div  style={theme}>
      <button  onClick={()=> theme===white? setTheme(dark) : setTheme(white)}> {theme===white? "Switch to Dark" : "Switch to White"}</button>
    </div>
  )
}