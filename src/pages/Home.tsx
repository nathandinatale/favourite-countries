import React from 'react'
import { createContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

// import ThemePicker from '../components/ThemePicker'
import { Product, AppState } from '../types'
import { addProduct, removeProduct } from '../redux/actions'
import Sidebar from '../components/Sidebar'

const names = ['Apple', 'Orange', 'Avocado', 'Banana', 'Cucumber', 'Carrot']

export const ThemeContext = createContext<string>('')

export default function Home() {
  const [theme, setTheme] = useState('red')

  const dispatch = useDispatch()
  const products = useSelector((state: AppState) => state.product.inCart)

  const handleAddProduct = () => {
    const product: Product = {
      id: (+new Date()).toString(),
      name: names[Math.floor(Math.random() * names.length)],
      price: +(Math.random() * 10).toFixed(2),
    }
    dispatch(addProduct(product))
  }

  return (
    <ThemeContext.Provider value={theme}>
      <Sidebar setTheme={setTheme} />
      <h1>Home page</h1>
      {products.length <= 0 && <div>No products in cart</div>}
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <Link to={`/products/${p.id}`}>{`${p.name} - $${p.price}`}</Link>
            <button onClick={() => dispatch(removeProduct(p))}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={handleAddProduct}>Add product</button>
      {/* Sending the function to change the state to the child component as a prop */}
      {/* Could be a better implementation to include the setTheme as part of a custom hook along with the context*/}
      {/* <ThemePicker setTheme={setTheme} /> */}
      <div style={{ border: `4px solid ${theme}` }}>{theme}</div>
    </ThemeContext.Provider>
  )
}
