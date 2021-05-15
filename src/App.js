import './App.css';
import Header from './components/Header'
import MastHead from './components/MastHead'
import Products from './components/Products'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <MastHead />
        <Products />
      </div>
      <Footer />
    </div>
  );
}

export default App;
