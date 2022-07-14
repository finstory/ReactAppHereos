import { Routes, Route } from 'react-router-dom';
import { DcScreen } from '../components/dc/DcScreen';
import { Footer} from '../components/global-comp/Foter';
import { Navbar } from '../components/global-comp/Navbar';
import { HeroScreen } from '../components/hero/HeroScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { SearchScreen } from '../components/search/SearchScreen';


export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <section className="row justify-content-center mb-4">
                <Routes>

                    <Route exact path="marvel" element={<MarvelScreen />} />
                    <Route exact path="dc" element={<DcScreen />} />
                    <Route exact path="search" element={<SearchScreen />} />
                    {/* si utilizamos /:heroId, se creará una (var) en los param del (comp). */}
                    <Route exact path="hero/:heroId" element={<HeroScreen />} />
                    <Route exact path="/" element={<MarvelScreen />} />

                </Routes>
            </section>
            
            <Footer />

        </>
    )
}
