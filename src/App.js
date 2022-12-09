import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Ateliers from "./pages/Ateliers";
import UsersPage from "./pages/Users";
import Atelier from "./pages/Atelier";
import Rate from "./pages/Rate";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div
      id="screen"
      className="w-screen min-h-screen flex justify-center items-center bg-gray-200 flex-col space-y-28 scroll-smooth"
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blanchisserie</title>
        <meta name="description" content="Blanchisserie application" />
      </Helmet>
      <Router>
        <Routes>
          <Route path="/rate/1/:id" element={<Rate />} />
          <Route path="/rate/2/:id" element={<Rate />} />
          <Route path="/rate/3/:id" element={<Rate />} />
          <Route path="/ateliers/:id" element={<Ateliers />} />
          <Route path="/ateliers/1/:id" element={<Atelier />} />
          <Route path="/ateliers/2/:id" element={<Atelier />} />
          <Route path="/ateliers/3/:id" element={<Atelier />} />
          <Route path="/" element={<UsersPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
