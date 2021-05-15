import './App.css';
import Header from './components/Header'
import MastHead from './components/MastHead'
import Products from './components/Products'
import Footer from './components/Footer'

function App() {
  const productLinks = [
    { 
      name: 'Product 1',
      price: '39.99',
      image: 'https://via.placeholder.com/700x400',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
      rating: '★ ★ ★ ★ ☆'
    },
    { 
      name: 'Product 2',
      price: '39.99',
      image: 'https://via.placeholder.com/700x400',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
      rating: '★ ★ ★ ★ ☆'
    },
    { 
      name: 'Product 3',
      price: '39.99',
      image: 'https://via.placeholder.com/700x400',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
      rating: '★ ★ ★ ★ ☆'
    },
    { 
      name: 'Product 4',
      price: '39.99',
      image: 'https://via.placeholder.com/700x400',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
      rating: '★ ★ ★ ★ ☆'
    },
    { 
      name: 'Product 5',
      price: '39.99',
      image: 'https://via.placeholder.com/700x400',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
      rating: '★ ★ ★ ★ ☆'
    },
    { 
      name: 'Product 6',
      price: '39.99',
      image: 'https://via.placeholder.com/700x400',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
      rating: '★ ★ ★ ★ ☆'
    }
  ]
  return (
    <div>
      <Header />
      <div className="container">
        <MastHead />
        <Products productLinks={productLinks}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
