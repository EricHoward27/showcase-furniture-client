import './App.css';
import { Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
// Import Screen components
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'

function App() {

  return (
    <div>
      <Header />
      <main className="container">
        <Route path="/" component={HomeScreen} exact/>
        <Route path="/product/:id" component={ProductScreen} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
