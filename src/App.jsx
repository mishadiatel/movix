import {useEffect} from "react";
import {fetchDataFromApi} from "./utils/api.js";
import {useDispatch, useSelector} from "react-redux";
import {getApiConfiguration} from "./store/homeSlice.js";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Details from "./pages/details/Details.jsx";
import SearchResult from "./pages/searchResult/SearchResult.jsx";
import Explore from "./pages/explore/Explore.jsx";
import PageNotFound from "./pages/404/PageNotFound.jsx";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";


function App() {

    const dispatch = useDispatch();
    const {url} = useSelector(state => state.home);

    useEffect(() => {
        apiTesting();
    }, [])
   const apiTesting = () => {
       fetchDataFromApi('/movie/popular')
           .then(res => {
               console.log(res)
               dispatch(getApiConfiguration(res))
           })
   }

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path={'/'} element={<Home />} />
                <Route path="/:mediaType/:id" element={<Details />} />
                <Route path="/search/:query" element={<SearchResult />} />
                <Route path="/explore/:mediaType" element={<Explore />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App
