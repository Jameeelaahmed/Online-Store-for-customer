
import './App.css'
import Routespage from './Routes/Routespage'
import { Provider } from 'react-redux'
import store from './Store'
function App() {

  return (
    <Provider store={store}>
      <Routespage />
    </Provider>
  )
}

export default App
