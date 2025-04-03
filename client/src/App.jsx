import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white px-4 pt-6">
      <Router>
        <header className="flex-1 flex flex-col justify-center mt-6">
          <Header />
        </header>
        <main className="flex-1 flex flex-col justify-center">
          <div className="w-full sm:w-8/12 md:w-6/12 mx-auto">
            <div className="m-h-5/6 bg-black bg-opacity-50 rounded-3xl p-6 text-center shadow-lg mb-6">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="*" element={<Home />} />
              </Routes>
            </div>
          </div>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
