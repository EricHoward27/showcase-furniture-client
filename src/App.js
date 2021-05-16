import './App.css';
import { Route } from 'react-router-dom';
import Header from './components/Header'
import MastHead from './components/MastHead'
import Products from './components/Products'
import Footer from './components/Footer'
// Import Screen components
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'

function App() {
  const productLinks = [
    { 
      name: 'Product 1',
      price: '39.99',
      image: 'https://via.placeholder.com/700x400',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
      rating: '3',
      numReviews: '7'
    },
    { 
      name: 'Product 2',
      price: '39.99',
      image: 'https://via.placeholder.com/700x400',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
      rating: '2',
      numReviews: '11'
    },
    { 
      name: 'Product 3',
      price: '39.99',
      image: 'https://via.placeholder.com/700x400',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
      rating: '4',
      numReviews: '4'
    },
    { 
      name: 'Product 4',
      price: '39.99',
      image: 'https://via.placeholder.com/700x400',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
      rating: '5',
      numReviews: '9'
    },
    { 
      name: 'Product 5',
      price: '39.99',
      image: 'https://via.placeholder.com/700x400',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
      rating: '3',
      numReviews: '2'
    },
    { 
      name: 'Product 6',
      price: '39.99',
      image: 'https://via.placeholder.com/700x400',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
      rating: '1',
      numReviews: '13'
    }
  ]
  return (
    <div>
      <Header />
      <main className="container">
        <MastHead />
        <Route path="/" component={HomeScreen} exact/>
        <Route path="/product/:id" component={ProductScreen} />
        <Products productLinks={productLinks}/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
