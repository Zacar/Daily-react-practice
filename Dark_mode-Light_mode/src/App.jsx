import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/home";
import Blog from "./pages/blog";
import About from "./pages/about";
import Navbar from "./components/navbar";
import { ThemeProvider } from "./theme-context";

function App() {
  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
