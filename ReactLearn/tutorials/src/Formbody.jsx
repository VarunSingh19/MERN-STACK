// import React, { useState } from "react";

// function Formbody() {
//   // first name
//   const [name, setName] = useState("");
//   const [fistname, setFirstname] = useState();
//   // -------------------------------------------------------
//   // last name
//   const [lastname, setLastname] = useState();
//   const [lastNameNew, setlastNameNew] = useState();
//   // ---------------------------------------------------------
//   // email
//   const [email, setemail] = useState();
//   const [emailNew, setemailNew] = useState();
//   // -------------------------------------------------------------
//   // phone number
//   const [phonenum, setPhonenum] = useState();
//   const [phonenumNew, setPhonenumNew] = useState();
//   // ----------------------------------------------------------
//   // first name
//   const inputevent = (event) => {
//     console.log(event.target.value);
//     setName(event.target.value);
//   };
//   // ---------------------------------------------------------------
//   // last name
//   const inputeventTwo = (event) => {
//     console.log(event.target.value);
//     setLastname(event.target.value);
//   };
//   // ----------------------------------------------------------------
//   // email
//   const inputeventThree = (event) => {
//     console.log(event.target.value);
//     setemail(event.target.value);
//   };
//   // --------------------------------------------------------------
//   // phone num
//   const inputeventFour = (event) => {
//     console.log(event.target.value);
//     setPhonenum(event.target.value);
//   };

//   // on submit
//   const onSubmit = (event) => {
//     event.preventDefault();

//     setFirstname(name);
//     setlastNameNew(lastname);
//     setemailNew(email);
//     setPhonenumNew(phonenum);
//   };
//   return (
//     <>
//       <div>
//         <form onSubmit={onSubmit}>
//           <h1>
//             hello{", "+fistname} {lastNameNew}
//           </h1>
//           <br />
//           <span>{emailNew}</span>
//           <br />
//           <span style={{ color: "blue" }}>{phonenumNew}</span>
//           <br />

//           <input
//             type="text"
//             placeholder="Enter Your First Name"
//             onChange={inputevent}
//             value={name}
//           />
//           <br />
//           <input
//             type="text"
//             placeholder="Enter Your Last Name"
//             onChange={inputeventTwo}
//             value={lastname}
//           />
//           <br />
//           <input
//             type="text"
//             placeholder="Enter Your Email"
//             onChange={inputeventThree}
//             value={email}
//           />
//           <br />
//           <input
//             type="number"
//             placeholder="Enter Your Last Name"
//             onChange={inputeventFour}
//             value={phonenum}
//           />

//           <button onClick={onSubmit}>Submit</button>
//         </form>
//       </div>
//     </>
//   );
// }
// export default Formbody;

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

// or

import React, { useState } from "react";

function Formbody() {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });

  const inputevent = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);

    // const value = event.target.value;
    // const name = event.target.name;

    const { value, name } = event.target;
    setFullName((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };

      // if (name === "fname") {
      //   return {
      //     fname: value,
      //     lname: preValue.lname,
      //     email: preValue.email,
      //     phone: preValue.phone,
      //   };
      // } else if (name === "lname") {
      //   return {
      //     fname: preValue.fname,
      //     lname: value,
      //     email: preValue.email,
      //     phone: preValue.phone,
      //   };
      // } else if (name === "email") {
      //   return {
      //     fname: preValue.fname,
      //     lname: preValue.lname,
      //     email: value,
      //     phone: preValue.phone,
      //   };
      // } else if (name === "phone") {
      //   return {
      //     fname: preValue.fname,
      //     lname: preValue.lname,
      //     email: preValue.email,
      //     phone: value,
      //   };
      // } else {
      //   return preValue;
      // }
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    alert("Form Submited");
  };

  return (
    <>
      <div>
        <form onSubmit={onSubmit}>
          <h1>
            {" "}
            hello {fullName.fname} {fullName.lname}{" "}
          </h1>
          <br />
          <span>{fullName.email}</span>
          <br />
          <span style={{ color: "blue" }}>{fullName.phone}</span>
          <br />

          <input
            type="text"
            placeholder="Enter Your First Name"
            onChange={inputevent}
            value={fullName.fname}
            name="fname"
          />
          <br />
          <input
            type="text"
            placeholder="Enter Your Last Name"
            onChange={inputevent}
            value={fullName.lname}
            name="lname"
          />
          <br />
          <input
            type="text"
            placeholder="Enter Your Email"
            onChange={inputevent}
            value={fullName.email}
            name="email"
          />
          <br />
          <input
            type="number"
            placeholder="Enter Your Phone Number"
            onChange={inputevent}
            value={fullName.phone}
            name="phone"
          />

          <button onClick={onSubmit}>Submit</button>
        </form>
      </div>
    </>
  );
}

export default Formbody;
