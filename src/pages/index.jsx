import Layout from "./Layout.jsx";

import Home from "./Home";

import Students from "./Students";

import Teachers from "./Teachers";

import Professionals from "./Professionals";

import Parents from "./Parents";

import Download from "./Download";

import TermsOfService from "./TermsOfService";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    
    Home: Home,
    
    Students: Students,
    
    Teachers: Teachers,
    
    Professionals: Professionals,
    
    Parents: Parents,
    
    Download: Download,
    
    TermsOfService: TermsOfService,
    
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>            
                
                    <Route path="/" element={<Home />} />
                
                
                <Route path="/Home" element={<Home />} />
                
                <Route path="/Students" element={<Students />} />
                
                <Route path="/Teachers" element={<Teachers />} />
                
                <Route path="/Professionals" element={<Professionals />} />
                
                <Route path="/Parents" element={<Parents />} />
                
                <Route path="/Download" element={<Download />} />
                
                <Route path="/terms-of-service" element={<TermsOfService />} />
                
            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}