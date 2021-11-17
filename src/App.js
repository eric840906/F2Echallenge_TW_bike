import { useDisclosure } from '@chakra-ui/react'
import { SideDrawer } from './Components/Drawer'
import routes from './Router/routerConfig'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  const { isOpen, onClose } = useDisclosure()
  return (
    <>
      <Router basename='/'>
        <SideDrawer onDrawerOpen={isOpen} onDrawerClose={onClose} />
        <Routes>
          {routes.map((route, i) => (
            <Route key={i} {...route} />
          ))}
        </Routes>
      </Router>
    </>
  )
}

export default App
