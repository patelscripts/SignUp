import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./SignUp";
import Details from "./Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </BrowserRouter>

  )
}
export default App;