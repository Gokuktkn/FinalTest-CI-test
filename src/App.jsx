import "./App.css";
import { Route, Routes } from 'react-router-dom'
import { All } from "./page/All";
import { Active } from "./page/Active";
import { Completed } from "./page/Completed";
import { Header } from "./page/Header";

function App() {
  return (
    <div className="app">
      <h1>#todo</h1>
      <div className="body">
        <Header />
        <Routes>
          <Route path="/" element={<All />} />
          <Route path="/active" element={<Active />} />
          <Route path="/completed" element={<Completed />}>
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
