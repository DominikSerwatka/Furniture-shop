import Navbar from './components/Navbar'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Hero from './components/Hero'
import HomeCollectionCards from './components/HomeCollectionCards'
import HomePageProductListings from './components/HomePageProductListings'


const App = () => {
  return (
    <>
    <Navbar />
    <Hero title='Nowa Kolekcja Mebli Dębowych' />
    <HomeCollectionCards />
    <HomePageProductListings />
    </>
  )
}

export default App