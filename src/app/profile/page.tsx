// TODO: smh, this is not working, I need to figure out how to use firebase in nextjs

// "use client";

// import { app } from "../../../firebase/clientApp";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { redirect } from "next/navigation";
// import { useEffect, useState } from "react";

// export default function Profile() {
//   const auth = getAuth(app);
//   const [user, setUser] = useState(false);

//   useEffect(() => {
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setUser(true);
//       } else {
//       }
//     });
//   }, []); //

//   if (user) {
//     return <h1>hello world</h1>;
//   } else {
//     return <h1>not auth</h1>;
//   }
// }
