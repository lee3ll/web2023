//단축키 (rfce)
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './components/pages/Home';
import Member from './components/pages/Member';
import Port from './components/pages/Port';
import Youtube from './components/pages/Youtube';
import Movie from './components/pages/Movie';
import Unsplash from './components/pages/Unsplash';

function App() {
  return (
    <BrowserRouter>
    <Header attr={['header__wrap', 'gmarket5', 'bg-blue']}/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/member" element={<Member />} />
            <Route path="/port" element={<Port />} />
            <Route path="/youtube" element={<Youtube />} />
            <Route path="/movie" element={<Movie />} />
            <Route path="/unsplash" element={<Unsplash />} />
        </Routes>
        <Footer attr={'footer__wrap gmarket5 section bg-blue'} />
    </BrowserRouter>
);
}

export default App