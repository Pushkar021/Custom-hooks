import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Lifecyclehooks from './assets/components/lifecyclehooks'
import Usememocode from './assets/components/usememo'
import C1 from './assets/components/DataFetchinghook'
import SwrComponent from './assets/components/swr'
import UserOnline from './assets/components/useronline'
import Mousepointer from './assets/components/Mousepointer'
import Dimensions from './assets/components/Dimensions'
import Interval from './assets/components/Interval'
import Debouncing from './assets/components/Debouncing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Debouncing/>
    </>
  );
}

export default App
