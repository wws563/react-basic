import './style/App.css'
import BottomTabs from './components/layout/bottomTabs'
import { Button } from 'antd-mobile'

function App() {
  return (
    <>     
      <h1>Eason - reactMobileDemo</h1>
      <Button color="primary">Primary Button</Button>
      <BottomTabs></BottomTabs>
    </>
  )
}

export default App
