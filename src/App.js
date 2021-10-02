// // import React from 'react';
// // import 'bulma/css/bulma.css';
// import Navbar from './navbar/navbar.js';
// import FormField from "./formfield/FormField";
// import CoolButton from "./coolbutton/CoolButton.js";

// // const App = () => {
// //   return{
// //     <>
// //     <Navbar>
// // <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
// // <CoolButton isSmall isSuccess>Button 2</CoolButton>
// //   }
// //  </Navbar>
// // };

// // export default App;

// import React from "react";
// // import Login from "./login/Login";
// import Signup from "./signup/Signup";
// import "bulma/css/bulma.css";

// const App = () => {
//   return (
//     <div>
//       <Navbar />

//       <FormField label="Name" type="text" placeholder="e.g Dria Thomas" />
//       <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />


//       {/* <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
//       <CoolButton isSmall isSuccess>Button 2</CoolButton> */}
//       {/* <Signup /> */}


//     </div>
//   );
// };

// export default App;


import React from "react";
import Signup from "./signup/Signup";
import "bulma/css/bulma.css";

const App = () => {
  return (
    <div>
      <Signup />
    </div>
  );
};

export default App;