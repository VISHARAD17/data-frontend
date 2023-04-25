import './index.css';
// import { useEffect, useState } from 'react';
// import axios from 'axios';

// import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Cond1 from "./pages/Cond1";
import Cond2 from "./pages/Cond2";
import Cond3 from "./pages/Cond3";
import Cond4 from "./pages/Cond4";
import Cond5 from "./pages/Cond5";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cond1" element={<Cond1 />} />
          <Route path="cond2" element={<Cond2 />} />
          <Route path="cond3" element={<Cond3 />} />
          <Route path="cond4" element={<Cond4 />} />
          <Route path="cond5" element={<Cond5 />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// const App = () => {
//   // const [data, setData] = useState([]);

//   // const fetchUserData = async () => {
//   //   await fetch("http://localhost:4001/getAll")
//   //     .then(response => {
//   //       return response.json()
//   //     })
//   //     .then(data => {
//   //       setData(data)
//   //     })
//   // };

//   // useEffect(() => {
//   //   fetchUserData()
//   // }, []);

//   return (
//     <div className='App'>
//       <h1>All User's data - first names</h1>
//       {/* {data.length > 0 && (
//         <ul>
//           {data.map(user => (
//             <li key={user.id}>{user.first_name}</li>
//           ))}
//         </ul>
//       )} */}
//     </div>
//   );
// }

export default App;
