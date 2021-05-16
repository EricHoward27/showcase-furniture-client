import React from 'react'
import Product from '../components/Products'
import MastHead from '../components/MastHead'

const HomeScreen = () => {
    const productLinks = [
        { 
          id: '1',
          name: 'Product 1',
          price: '39.99',
          image: 'https://via.placeholder.com/700x400',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
          rating: '3',
          numReviews: '7'
        },
        { 
          id: '2',
          name: 'Product 2',
          price: '39.99',
          image: 'https://via.placeholder.com/700x400',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
          rating: '2',
          numReviews: '11'
        },
        { 
          id: '3',
          name: 'Product 3',
          price: '39.99',
          image: 'https://via.placeholder.com/700x400',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
          rating: '4',
          numReviews: '4'
        },
        { 
          id: '4',
          name: 'Product 4',
          price: '39.99',
          image: 'https://via.placeholder.com/700x400',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
          rating: '5',
          numReviews: '9'
        },
        { 
          id: '5',
          name: 'Product 5',
          price: '39.99',
          image: 'https://via.placeholder.com/700x400',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
          rating: '3',
          numReviews: '2'
        },
        { 
          id: '6',
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
        <MastHead />
        <Product productLinks={productLinks}/>
      </div>
    )
}
export default HomeScreen