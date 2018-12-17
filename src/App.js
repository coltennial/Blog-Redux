import React from 'react';
import BlogForm from './components/BlogForm';
import BlogPost from './components/BlogPost';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const App = () => (
  <div>
    <Navbar />
    <BlogForm />
    <BlogPost />
    <Footer />
  </div>
)

export default App;
