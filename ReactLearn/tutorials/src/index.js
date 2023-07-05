import React from 'react';
import ReactDOM from 'react-dom/client';


// Module 1.
// -------------------------------------------------------
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <div>


//   <h1>Netfix</h1>
//     <p>This Is a best Webseries, i would love to recommend</p> 
//     <ul>
//       <li>GameOfThrones</li>
//       <li>TWD</li>
//       <li>Wednesday</li>
//       <li>SquidGame</li>
//       <li>DeathNote</li>
//     </ul>
//   </div>

// );
// -------------------------------------------------------

// Module 2.
// ------------------------------------------------------
// Expression in JSX

// const name = "Varun Singh";
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   // here we use curly braces to access the name.
//   <>
//   <h1>User Name is {name}.</h1>
//     <p>The Sum Of 2 and 3 is {2 + 3}</p>
//     <p>The random Lucky Number For You : {Math.random()}</p>

//   </>
// );
// --------------------------------------------------------


// Module 3.
// -------------------------------------------------------
// Template Literals.
// const fname = "Varun";
// const lname = "Singh";
// const fullname = fname + lname;

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <>
//     <h1>{fullname}</h1>
//     <h1>my first name {fname} and last name is {lname} together is { fname+" "+lname}</h1>

//     <h1>my name {`${fname} ${lname}`}</h1>
//   </>


// );

// );
// --------------------------------------------------------


// Module 4.
// -------------------------------------------------------
// Display current date and time
// const root = ReactDOM.createRoot(document.getElementById('root'));
// const date = new Date();
// const time = new Date();
// root.render(
//     <>
//         <h1>This Is Varun Singh</h1>
//         <p>The Current date is : {date.getDate()}</p>
//         <p>The Current Time Is :  {time.getHours()+"/"+time.getMinutes()+"/"+time.getSeconds() }</p>
//     </>
// );

// --------------------------------------------------------


// Module 5.
// -------------------------------------------------------
// JSX Attributes In react.

// HTML Global Attributes
// accesskey - Specify a shortcut key to activate/focus an element
// dir - Specify the text direction for the content in an element
// draggable - Indicates that the element can be dragged
// hidden - Hides the element
// id - Assigns a unique id to an element
// lang - Specifies the language of the element's content
// spellcheck - Specifies whether the element's content should be checked for spelling errors
// style - Specifies styles for an element
// tabindex - Specifies the tab order of an element
// title - Specifies extra information about an element
// Translates - Translates the element's content


// const root = ReactDOM.createRoot(document.getElementById('root'));
// const name = "Varun";
// const image = "https://picsum.photos/200/250";
// const image2 = "https://picsum.photos/200/300";
// const image3 = "https://picsum.photos/200/350";
// const links = "https://www.google.com";
// root.render(
//     <>
//         <h1 contentEditable>My Name is {name}</h1>
//         <img src={image} />
//         <img src={image2} />
//         <a href={links} target='_blank'>

//         <img src={image3}/>
//         </a>
//     </>

// );


// --------------------------------------------------------


// Module 6.
// -------------------------------------------------------
// CSS Styling & Impoting CSS files in React js.
// import './index.css';

// const root = ReactDOM.createRoot(document.getElementById('root'));

// const name = "Varun";
// const image = "https://picsum.photos/200/250";
// const image2 = "https://picsum.photos/200/251";
// const image3 = "https://picsum.photos/200/252";
// const links = "https://www.google.com";
// root.render(
//     <>
//         <h1 className="heading" contentEditable>My Name is {name}</h1>
//         <div className="images">

//          <img src={image} />
//          <img src={image2} />
//          <a href={links} target='_blank'>

//          <img src={image3}/>
//          </a>
//         </div>

//     </>
// );
// --------------------------------------------------------


// Module 7.
// -------------------------------------------------------
// Internal CSS & Inline CSS Styling in React js.
// const root = ReactDOM.createRoot(document.getElementById('root'));
// const heading = {
//     color: "blue",
//     textAlign: "center",
//     textTransform: "capitalize",
//     fontWeight: "bold",
// };
// root.render(
//     <>
//     <h1 style={heading}>This is a Heading</h1>
//     </>
// );
// --------------------------------------------------------


// Module 8.
// -------------------------------------------------------
// Mini-Project: Create a simple greeting website.

// const root = ReactDOM.createRoot(document.getElementById("root"));
// const para = {
//     color: "blue",
//     textAlign: "center",
//     textTransform: "capitalize",
//     fontWeight: "bold",
//     backgroundColor: "red",
//     border: "2px solid black",
//     borderSizing: "border box",
// };


// let currDate = new Date();
// currDate = currDate.getHours();
// let greeting = ''
// if (currDate >= 1 && currDate < 12) {
//     greeting = "Good Morning";
// } else if (currDate >= 12 && currDate < 19) {
//     greeting = "Good Afternoon";
// } else {
//     greeting = "Good Night";
// }
// root.render(
//     <>
//         <h1 style={para} className='para'>Hello Sir, {greeting}</h1>

//     </>
// );


// --------------------------------------------------------


// Module 9.
// -------------------------------------------------------
// Functional Component in React JS 
// import HeadingComp from './HeadingComp';
// import ParaComp from './ParaComp';
// import ListComp from './ListComp';
// import App from './App';


// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//     <>
//        <App />
//     </>

// );

// --------------------------------------------------------


// Module 10.
// --------------------------------------------------------
// Modules Import Export In React JS.

// import names, { myage } from './App';
// import * as ques from './App';

// here names is a obj thats why we can access it using {}.
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//     <>
//         <ol>
//             <li>hello Bro </li>
//             {/* <li>{names}</li> */}
//             {/* <li>{myage}</li> */}
//             <li>{ques.default}</li>
//             <li>{ques.myage}</li>
//         </ol>

//     </>

// );

// --------------------------------------------------------


// Module 11.
// --------------------------------------------------------
// Create Simple Calculator App In React.
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//     <>
//     <App />
//     </>
// );

// --------------------------------------------------------


// Module 12.
//Project: Netflix Page Simple.

// import App from './App';
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//     <>
//         <App />
//     </>



// );

// --------------------------------------------------------


// Module 13.
// If Else Statement in React JS | Conditional Rendering in React JS 
// import App from './App';
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//     <>
//       <App />
//     </>

// );


// --------------------------------------------------------


// Module 14.
// useState in Hook in React JS
// 1. Hooks are the new feature introduced in the React 16.8 version.
// 2. It allows you to use state and other React Feature without writing a class. hooks are the 
// function which "Hook Into" React state and lifecycle feature from function components.
// 3. it does not work inside classes.
// 4. hooks should always be used at the top level of the react Function.
// 
import App from './App';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <App />
  </>

);



// --------------------------------------------------------
//  What does "..." three dots do in ReactJS

// const fullname = ['varun', 'singh'];
// const data = [1, ...fullname, 26, "male"];
// // console.log(fullname);
// // console.log(data);

// const num = [1, 2, 3, 4, 5, 6];
// const alpha = ['a', 'b', 'c', 'd', 'e'];

// const both = [...num, ...alpha];
// // console.log(both);
// var new1 = both[6];
// // console.log("Accesing Combined Data :" + new1);

// // Destructuring of an array.
// var data1 = ["google", "facebook", "instagram", "notion", "medium"];
// var [first, ...remaining] = data1;
// console.log(first);
// console.log(remaining);

// ----------------------------------------------------------
// const fullname = {
//   fname: "varun",
//   lname: "singh",
// };

// const data = {
//   id: 1,
//   ...fullname,
//   age: 20,
//   gender: "male",
// };

// console.log(data);