import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/pages/Main';
import Member from './components/pages/Member';
import Port from './components/pages/Port';
import Youtube from './components/pages/Youtube';
import Movie from './components/pages/Movie';
import Unsplash from './components/pages/Unsplash';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/Member" element={<Member />} />
                <Route path="/Port" element={<Port />} />
                <Route path="/Youtube" element={<Youtube />} />
                <Route path="/Movie" element={<Movie />} />
                <Route path="/Unsplash" element={<Unsplash />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
