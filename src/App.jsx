import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* header */}
      <Header></Header>
      <main>
        <Outlet></Outlet>
      </main>
      {/* footer */}
      <Footer></Footer>
    </>
  );
}

export default App
