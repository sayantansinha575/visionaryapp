import Layout from "@/components/layout/Layout.jsx";

import Home from "@/features/home";

import Students from "@/features/students";

import Teachers from "@/features/teacher";

import Professionals from "@/features/professionals";

import Parents from "@/features/parents";

import Download from "@/features/download";
import AboutUs from "@/pages/AboutUs.jsx";

import TermsOfService from "@/pages/TermsOfService";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Privacy from "@/pages/privacy";

const PAGES = {
  Home: Home,

  Students: Students,

  Teachers: Teachers,

  Professionals: Professionals,

  Parents: Parents,

  Download: Download,

  TermsOfService: TermsOfService,
};

function _getCurrentPage(url) {
  if (url.endsWith("/")) {
    url = url.slice(0, -1);
  }
  let urlLastPart = url.split("/").pop();
  if (urlLastPart.includes("?")) {
    urlLastPart = urlLastPart.split("?")[0];
  }

  const pageName = Object.keys(PAGES).find(
    (page) => page.toLowerCase() === urlLastPart.toLowerCase(),
  );
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
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/privacy-policy" element={<Privacy />} />
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
