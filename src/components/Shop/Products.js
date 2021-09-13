import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {id: 'p1', price: 6, title: 'My First Book', description: 'The first book I ever wrote'},
  {id: 'p2', price: 12, title:'My second Book', description: 'My Second book I wrote'}
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product)=>{
          return(
          <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />
          )
        })}
        
      </ul>
    </section>
  );
};

export default Products;
