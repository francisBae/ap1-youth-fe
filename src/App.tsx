import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import { Spinner, Center } from '@chakra-ui/react';
// import SacramentsPage from './pages/SacramentsPage'

// 페이지 컴포넌트들을 지연 로딩
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const MassPage = lazy(() => import('./pages/MassPage'));
const GroupsPage = lazy(() => import('./pages/GroupsPage'));
const UnionPage = lazy(() => import('./pages/groups/UnionPage'));
const LiturgyPage = lazy(() => import('./pages/groups/LiturgyPage'));
const ChoirPage = lazy(() => import('./pages/groups/ChoirPage'));
const LegioPage = lazy(() => import('./pages/groups/LegioPage'));
// const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const PrayersPage = lazy(() => import('./pages/PrayersPage'));
// import NewsletterPage from './pages/NewsletterPage'
const MassOrdinaryPage = lazy(() => import('./pages/MassOrdinaryPage'));
const LocationPage = lazy(() => import('./pages/LocationPage'));
const WelcomePage = lazy(() => import('./pages/WelcomePage'));

// 로딩 스피너 컴포넌트
const LoadingSpinner = () => (
    <Center h="100vh">
        <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="#bfa16c"
            size="xl"
        />
    </Center>
);

function App() {
    return (
        <ChakraProvider>
            <Router>
                <ScrollToTop />
                <Layout>
                    <Suspense fallback={<LoadingSpinner />}>
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/about" element={<AboutPage />} />
                            <Route path="/mass" element={<MassPage />} />
                            <Route path="/groups" element={<GroupsPage />} />
                            <Route path="/groups/union" element={<UnionPage />} />
                            <Route path="/groups/liturgy" element={<LiturgyPage />} />
                            <Route path="/groups/choir" element={<ChoirPage />} />
                            <Route path="/groups/legio" element={<LegioPage />} />
                            {/* <Route path="/gallery" element={<GalleryPage />} /> */}
                            <Route path="/prayers" element={<PrayersPage />} />
                            {/* <Route path="/sacraments" element={<SacramentsPage />} /> */}
                            <Route path="/mass-ordinary" element={<MassOrdinaryPage />} />
                            <Route path="/location" element={<LocationPage />} />
                            <Route path="/welcome" element={<WelcomePage />} />
                            {/* <Route path="/newsletter" element={<NewsletterPage />} /> */}
                        </Routes>
                    </Suspense>
                </Layout>
            </Router>
        </ChakraProvider>
    );
}

export default App;
