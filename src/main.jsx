import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css'
import Filter from './filter/Filter.jsx'
import Layout from './layouts/Layout.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="filters" element={<Filter />} />
                <Route path="layouts" element={<Layout />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
