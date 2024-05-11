import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Reorder } from 'framer-motion'
import { Item } from "./item";

const initialItems = ["🍅 Tomato", "🥒 Cucumber", "🧀 Cheese", "🥬 Lettuce"];

function App() {
  const [count, setCount] = useState(0)

  const [items, setItems] = useState(initialItems);
  
  return (
    <Reorder.Group axis="y" onReorder={setItems} values={items}>
    {items.map((item) => (
      <Item key={item} item={item} />
    ))}
  </Reorder.Group>
  )

}

export default App
