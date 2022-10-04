import { Provider } from 'react-redux';
import { makeStore } from './redux/store';

function App() {
  return (
    <Provider store={makeStore()}>
      <div className="App">
        <h1>Hello, replace this with your component</h1>
      </div>
    </Provider>
  );
}

export default App;
