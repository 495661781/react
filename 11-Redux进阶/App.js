import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import './styles/base.css';
import './styles/index.css';

export default function App() {
  return (
    <section className="todoapp">
      <Header />
      <Main />
      <Footer />
    </section>
  );
}
