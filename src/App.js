import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";



import Navbar from "./components/navbar.component"
import BooksList from "./components/books-list.component";
import EditBook from "./components/edit-book.component";
import CreateBook from "./components/create-book.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Routes>
        <Route path="/"exact  element={<BooksList/>}></Route>
        <Route path="/edit/:id" element={<EditBook/>} />
        <Route path="/create" element={<CreateBook/>} />
        <Route path="/user" element={<CreateUser/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;