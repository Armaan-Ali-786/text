// import React from 'react'
// import { useState } from 'react'
// import  ReactDOM  from 'react-dom/client'

// export default function Module() {
//     const[text, setText] = useState({
//         brand:"ford",
//         color:"green"
//     });

//   return (
//     <>
//         <h1>
//         Hi my car is {text.brand} and its color is {setText("blue")}
//         </h1>
//     </>
//   )
// }
// const hello = ReactDOM.createRoot(document.getElementById('root'));
// hello.render(<Module />);

import React from 'react'
import { useState } from 'react'

export default function Module() {

const onLight = () => {
  if(style.color == 'white')
  {
    setStyle({color:'black',
  backgroundColor:'white'
  })
    setText("Enable Dark Mode")
  }
  else{
    setStyle({color:'white',
    backgroundColor:'black'})
    setText("Enable Light Mode")
  }
}

const[style,setStyle] = useState({
  color:'white',
  backgroundColor:'black'
})

const[text,setText] = useState("Enable Light Mode");

  return (
    <div>
      <div className='container my-3' >
                <div className="accordion" id="accordionExample" style={style}>
            <div className="accordion-item" style={style}>
              <h2 className="accordion-header">
                <button className="accordion-button" type="button"  style={style} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Accordion Item #1
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item"  style={style}>
              <h2 className="accordion-header" >
                <button className="accordion-button collapsed"   style={style} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Accordion Item #2
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" >
                <div className="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item"  style={style}>
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button"  style={style}  data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Accordion Item #3
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className='container'>
            <button className='btn btn-primary' onClick={onLight}>{text}</button>
          </div>
    </div>
  )
}




