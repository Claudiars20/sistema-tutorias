
import './App.css';

import { Provider } from 'react-redux';
import { store } from './components/Login/store/store';

import AppRouter from './components/Login/Routes/AppRouter';


function App() {
  
  return (
   
    <Provider store={store}>
      <AppRouter></AppRouter>
    </Provider>
    
  );
}

export default App;
