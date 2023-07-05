// import React from "react";
// import ListComp from "./ListComp";
// import ParaComp from "./ParaComp";
// import HeadingComp from "./HeadingComp";

// function App() {
//   return (
//     <>
//       <HeadingComp />
//       <ParaComp />
//       <ListComp />
//       <HeadingComp />
//       <ParaComp />
//       <ListComp />
//       <HeadingComp />
//       <ParaComp />
//       <ListComp />
//       <HeadingComp />
//       <ParaComp />
//       <ListComp />
//     </>
//   );
// }

// export default App;

// ---------------------------------------------------

// import React from "react";
// function App() {

//   const para = {
//     color: "blue",
//     textAlign: "center",
//     textTransform: "capitalize",
//     fontWeight: "bold",
//     backgroundColor: "red",
//     border: "2px solid black",
//     borderSizing: "border box",
// };
//    let currDate = new Date();
//   currDate = currDate.getHours();
//   let greeting = '';
//   if (currDate >= 1 && currDate < 12) {
//       greeting = "Good Morning";
//   } else if (currDate >= 12 && currDate < 19) {
//       greeting = "Good Afternoon";
//   } else {
//       greeting = "Good Night";
//   }

//   return (
//     <>
//       <div>

//          <h1 style={para} className='para'>Hello Sir, {greeting}</h1>
//       </div>
//     </>

//   );
// }

// export default App;

// -------------------------------------------------------

// Modules Import In React JS.

// this is a obj.
// const names = "Varun Singh";
// const myage = 20;

// export default names;
// export {myage};

// -------------------------------------------------------

// Create Simple Calculator App In React.
// import React from "react";
// import { add, sub , mul , div} from './Cals';
// function App() {

//   function add(a,b) {
//    let sum = a + b;
//     return sum;
//   }

//   return (
//     <>
//     <ol>
//         <li>the sum is : {add(12, 53)}</li>
//         <li>the sum is : {sub(32, 3)}</li>
//         <li>the sum is : {div(24, 3)}</li>
//         <li>the sum is : {mul(23,23)}</li>
// </ol>
// </>
//   );
// }
// export default App;

// -------------------------------------------------------
// React JS Project Netflix App

// import Card from './NetflixCard';
// import Sdata from './NetflixSdata';
// import './index.css';

// // map function.
// // function ncard(curVal) {
// //     return (
// //         <Card
// //             sname={curVal.sname}
// //             imgsrc={curVal.imgsrc}
// //             title={curVal.title}
// //             links={curVal.links}
// //         />
// //     );
// // }

// const App = ()=>(
//     <>
//         <h1 className='heading_style'> Top Netflix Series.</h1>
//         {/* using Map function  */}
//         {/* {Sdata.map(ncard(curVal))} */}

//         {/* Fat Arrow function... */}
//         {/* {Sdata.map( function ncard(curVal){ */}
//         {Sdata.map((curVal) =>{
//             return (
//                 <Card
//                     key={curVal.id}
//                     sname={curVal.sname}
//                     imgsrc={curVal.imgsrc}
//                     title={curVal.title}
//                     links={curVal.links}
//                 />
//             );
//         })}

//         {/* ------------------------------------------------------- */}
//         {/* <Card
//             sname={Sdata[0].sname}
//             imgsrc={Sdata[0].imgsrc}
//             title={Sdata[0].title}
//             links={Sdata[0].links}
//         />, */}
//         {/* <Card
//             sname={Sdata[1].sname}
//             imgsrc={Sdata[1].imgsrc}
//             title={Sdata[1].title}
//             links={Sdata[1].links}
//         />,
//         <Card
//             sname={Sdata[2].sname}
//             imgsrc={Sdata[2].imgsrc}
//             title={Sdata[2].title}
//             links={Sdata[2].links}
//         /> */}

//         {/* ------------------------------------------------------- */}

//     </>
// );

// export default App;

// -------------------------------------------------------------------------

// If Else Statement in React JS | Conditional Rendering in React JS

// import "./index.css";
// import Netflix from "./Netflix";
// import Hbo from "./HBO";

// const favseries = "netflix";

// // const FavS = () => {
//     // If-else Stateent.
// //   if (favseries === "netflix") {
// //     return <Netflix />;
// //   } else {
// //     return <Hbo />;
// //     }
// // };

// const App = () => (
//     <>
//     <h1 className="heading_style"> Top Netflix Series.</h1>
//         {/* <FavS /> */}

//         {/* Ternary Statements. */}
//         {favseries === "netflix" ? <Netflix /> : <Hbo />}

//   </>
// );

// export default App;

// -------------------------------------------------------------------------
// Slot Machine Game in React JS
// import "./index.css";
// import SlotM from "./SlotM";
// const App = () => {
//   return (
//     <>
//       <h1 className="heading_style">
//         Welcome to{" "}
//         <span
//           style={{
//             fontWeight: "bold",
//           }}
//         >
//           {" "}
//           Slot Machine Game
//         </span>
//       </h1>
//           <SlotM x="😀" y="😀" z="😀" />
//           <hr />
//           <SlotM x="😀" y="😀" z="😂" />
//           <hr/>
//           <SlotM x="😀" y="😧" z="😀" />
//           <hr/>
//           <SlotM x="😀" y="😀" z="😀" />
//     </>
//   );
// };

// export default App;

// -------------------------------------------------------------------------
// import React, { useState } from "react";
// import "./index.css";

// const App = () => {
//     // const state = useState();
//     // console.log(state);
//     // let count = 1;
//     const [count, setCount] = useState(0)
//     const IncNum = () => {
//         setCount(count + 1);
//         // console.log("Clicked" + count++);
//     }
//     return (
//         <>
//             <h1> {count} </h1>
//             <button onClick={IncNum}>Click Me</button>
//         </>
//     );
// };
// export default App;

// ---------------------------------------------------------------
// React Hooks Challenge #6: Get Time on Refreshing and Clicking Button using useState Hook.

// import React, { useState } from "react";
// import "./index.css";
// const App = () => {
//   const time = new Date();
//   let CurrTime =
//     time.getHours() + " : " + time.getMinutes() + " : " + time.getSeconds();
//   const [Nowtime, setTime] = useState(CurrTime);
//   const UpdateTime = () => {
//     CurrTime =time.getHours() + " : " + time.getMinutes() + " : " + time.getSeconds();
//     setTime(CurrTime);
//     };

//   return (
//     <>
//       <h1> {Nowtime} </h1>
//       <button onClick={UpdateTime}>Get Time</button>
//     </>
//   );
// };
// export default App;

// ---------------------------------------------------------
// Live Watch.
// import React, { useState } from "react";
// import "./index.css";
// const App = () => {
//   let time = new Date().toLocaleTimeString();
//   const [ctime, setTime] = useState(time);
//   const UpdateTime = () => {
//     time = new Date().toLocaleTimeString();
//     setTime(time);
//   };
//     setInterval(UpdateTime, 1000);
//   return (
//     <>
//       <h1> {ctime} </h1>
//       <button onClick={UpdateTime}>Get Time</button>
//     </>
//   );
// };
// export default App;

// --------------------------------------------------------------

// import React, { useState } from "react";
// import "./index.css";
// const App = () => {
//   const purple = "#8e44ad";
//   const names = "Click Me";
//   const [bg, setBg] = useState(purple);
//   const [name, setName] = useState(names);
//   const bgchange = () => {
//     let newbg = "#34495e";
//     let names = "Ohhhh!!! 😀";
//     setBg(newbg);
//     setName(names);
//   };

//   return (
//     <>
//       <div style={{ backgroundColor: bg }}>
//         <button onClick={bgchange}>{name}</button>
//       </div>
//     </>
//   );
// };
// export default App;
// -----------------------------------------------------------------------
// Forms in React JS || React Controlled Vs Uncontrolled Component

import React, { useState } from "react";
import "./TodoStyle.css";
import TodoDelete from "./TodoDelete";

const App = () => {
  const [inputlist, setInputlist] = useState(""); //to put data into list tag.
  const [items, setItems] = useState([]);  //to add data into list using a function.

  const itemEvent = (event) => {
    setInputlist(event.target.value);
  };

  const listOfItems = () => {
    setItems((olditems) => { //here we pass the args as olditems which will save the data of list from the inputlist.
      return [...olditems, inputlist]; // copying inputlist data into the ...olditems (this is an )
    });
    setInputlist(""); //here we initialize the null value of list.
  };

  const deleteItems = (id) => {
    setItems((olditems) => { //Olditems Which Is A Array. 
      return olditems.filter((arrElem, index) => { //here in short we only deleting those index which are equal to id which is all i mean the condition is true everytime. 
        return index !== id; // this is just a satisfaction which will never become true...
      });
    });
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />

          <input
            type="text"
            placeholder="enter your todos"
            
            value={inputlist} // here i used the useState to destructuring the stuff means when user write something is input we can see the same in para or list field in real time.
            onChange={itemEvent} // its a function which set the input field data in the para or list. basically idhar ka maal udhar. just by using the property.
          />
          <button onClick={listOfItems}> + </button> 
          {/*This is function which will trig-ger when user click on button.  */}

          <ol>
            {/* <li>{inputlist}</li> */}

            {items.map((itemval, index) => {  //using map to wrap upn the data.
              return (
                <TodoDelete  // A Component.
                  key={index}
                  id={index} //this is index
                  text={itemval} //this is the data
                  onSelect={deleteItems} //tbis is a function.
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};
export default App;
