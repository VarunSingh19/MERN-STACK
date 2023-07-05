import React from "react";

function TodoDelete(props) { //using the props to pass the value which we assign in the App.jsx
  return (
    <>
      <div className="todo_style">
        <button
          onClick={() => {
            props.onSelect(props.id); //here onClick on Delete Button we use the props to fetch the deleteItems Function using onSelect in this delete function we search for the id 
          }}
        >
          x
        </button>

        <li>{props.text}</li>  
        {/* here we know text is nothing but the itemval which we pass as a args in the items.map((itemval, index) of App.jsx inside the ToDoDelete Component.  */}
      </div>
    </>
  );
}
export default TodoDelete;
