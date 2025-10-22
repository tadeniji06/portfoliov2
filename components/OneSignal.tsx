// "use client";

// import { useEffect } from 'react';
// import OneSignal from 'react-onesignal';

// export default function Page() {
//   useEffect(() => {
//     // Ensure this code runs only on the client side
//     if (typeof window !== 'undefined') {
//       OneSignal.init({
//         appId: '413a3c7c-85b4-4eb0-9cda-1e608d79a2ab',
//         // You can add other initialization options here
//         notifyButton: {
//           enable: true,
//         }
//       });
//     }
//   }, []);

//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       {/* Rest of your page content */}
//     </div>
//   );
// }