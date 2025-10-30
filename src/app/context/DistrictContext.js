// "use client"
// import { createContext, useState, useEffect } from "react";

// export const DistrictContext = createContext();

// export const DistrictProvider = ({ children }) => {
//   const [district, setDistrict] = useState(localStorage.getItem("user_location") || null);

//   const changeDistrict = (newDistrict) => {
//     localStorage.setItem("user_location", newDistrict);
//     setDistrict(newDistrict);
//   };

//   useEffect(() => {
//     const handleStorageChange = () => {
//       setDistrict(localStorage.getItem("user_location"));
//     };
//     window.addEventListener("storage", handleStorageChange);
//     return () => window.removeEventListener("storage", handleStorageChange);
//   }, []);

//   return (
//     <DistrictContext.Provider value={{ district, changeDistrict }}>
//       {children}
//     </DistrictContext.Provider>
//   );
// };
