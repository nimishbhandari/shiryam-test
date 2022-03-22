import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Test from "./components/Test";

const App = () => {
  // useEffect(async () => {
  //   const res = await fetch("https://reqres.in/api/users?page=2");

  //   const { data } = await res.json();

  //   console.log(data);
  // }, []);

  // const [num, setNum] = useState(0);

  // const add = () => {
  //   setNum(num + 1);
  // };

  // const decrease = () => {
  //   setNum(num - 1);
  // };

  return (
    // <div>
    //   {num}
    //   <div>
    //     <button onClick={() => add()}>Add</button>
    //     <button onClick={() => decrease()}>Subtract</button>
    //   </div>
    // </div>

    <Router>
      <Routes>
        <Route path="/test" element={<Test />} />
      </Routes>
      <div>test</div>
    </Router>
  );
};

export default App;
