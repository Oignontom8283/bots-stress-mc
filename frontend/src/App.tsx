// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/home";
import Bot from "./routes/bot";
import Bots from "./routes/Bots";
import Layout from "./Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/bots" element={<Bots />} />
          <Route path="/bot/:id" element={<Bot />} />
        </Route> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
