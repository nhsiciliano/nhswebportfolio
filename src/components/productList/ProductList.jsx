import './productList.css'
import Product from '../porduct/Product'
import { products } from '../../data'

const ProductList = () => {
    return (
        <div className='pl'>
            <div className="pl-texts">
                <h1 className="pl-title">Create & Inspire. It's NHS</h1>
                <p className="pl-desc">
                    Check some of my proyects. You can find out more about my code checking my <a target='_blank' rel='noopener noreferrer' href='https://github.com/nhsiciliano'>
                        Github!</a>
                </p>
            </div>
            <div className="pl-list">
                {products.map((item) => (
                    <Product key={item.id} img={item.img} link={item.link} />
                ))}
            </div>
        </div>
    )
}

export default ProductList