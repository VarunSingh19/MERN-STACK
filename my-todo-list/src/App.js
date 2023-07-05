import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className='todo-app'>
      <TodoList />
    </div>
  );
}

export default App;

// -----------------------------------------

// useState.
// Examples...
// 1. Counter.
// import React, { useState } from 'react';
// function App() {
//   const [count, setCount] = useState(0);

//   const [text, setText] = useState('hello');

//   const [liked, setLiked] = useState(true);


//   const [name, setName] = useState('Taylor');
//   const [age, setAge] = useState(42);



  
//   function handleClick() {
//     setCount(count + 1);
//   }

//   function textChange(e) {
//     setText(e.target.value);
//   }

//   function handleCheck(e) {
//     setLiked(e.target.checked);
//   }
//   return (
//     <>
//     <button onClick={handleClick}>You Click the Button {count}</button>
//     <br />
//       <input value={text} onChange={textChange} />
//       <p>your typed : {text}</p>
//       <button onClick={() => setText("hello")}>
//         reset
//       </button>
//     <br />
//       <label>
//         <input
//           type="checkbox"
//           checked={liked}
//           onChange={handleCheck}
//         />
//         I liked this
//       </label>
//       <p>You {liked ? 'liked' : 'did not like'} this.</p>
   
//       <br />
//       <input
//         value={name}
//         onChange={e => setName(e.target.value)}
//       />
//       <button onClick={() => setAge(age + 1)}>
//         Increment age
//       </button>
//       <button onClick={() => setAge(age - 1)}>
//         Decrement age
//       </button>
//       <p>Hello, {name}. You are {age}.</p>
//     </>
    

//   );
// }

// export default App;