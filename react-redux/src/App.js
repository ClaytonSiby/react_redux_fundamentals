import { Provider } from 'react-redux';
import store from './redux/store';
import CakeContainer from './components/CakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <h3>*************** HOOKS IN ACTION **************</h3>
        <HooksCakeContainer />
        <h3>+++++++++++++++ IceCreams ++++++++++++++++++++</h3>
        <IceCreamContainer />
      </div>
    </Provider>
  );
}

export default App;
