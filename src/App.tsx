import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MassPage from './pages/MassPage';
import GroupsPage from './pages/GroupsPage';
import UnionPage from './pages/groups/UnionPage';
import LiturgyPage from './pages/groups/LiturgyPage';
import ChoirPage from './pages/groups/ChoirPage';
import LegioPage from './pages/groups/LegioPage';
import GalleryPage from './pages/GalleryPage';
import PrayersPage from './pages/PrayersPage';
// import SacramentsPage from './pages/SacramentsPage'
import MassOrdinaryPage from './pages/MassOrdinaryPage';
import LocationPage from './pages/LocationPage';
import NewsletterPage from './pages/NewsletterPage';

function App() {
    return (
        <ChakraProvider>
            <Router>
                <ScrollToTop />
                <Layout>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/mass" element={<MassPage />} />
                        <Route path="/groups" element={<GroupsPage />} />
                        <Route path="/groups/union" element={<UnionPage />} />
                        <Route path="/groups/liturgy" element={<LiturgyPage />} />
                        <Route path="/groups/choir" element={<ChoirPage />} />
                        <Route path="/groups/legio" element={<LegioPage />} />
                        <Route path="/gallery" element={<GalleryPage />} />
                        <Route path="/prayers" element={<PrayersPage />} />
                        {/* <Route path="/sacraments" element={<SacramentsPage />} /> */}
                        <Route path="/mass-ordinary" element={<MassOrdinaryPage />} />
                        <Route path="/location" element={<LocationPage />} />
                        <Route path="/newsletter" element={<NewsletterPage />} />
                    </Routes>
                </Layout>
            </Router>
        </ChakraProvider>
    );
}

export default App;
