import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Landing from "./Components/Landing/Landing";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Blog from "./Components/Blog/Blog";
import Research from "./Components/Research/Research";
import NoPage from "./Components/NoPage/NoPage";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='blog' element={<Blog />} />
          <Route path='research' element={<Research />} />
          <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));