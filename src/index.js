import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
// import {BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './App';
import configureStore from './store';
import { VinProvider } from './context';
const store = configureStore()

// function Root() {
//   return (
//     <BrowserRouter>
//       {/* <Provider store={store}> */}
//         <App />
//       {/* </Provider> */}
//     </BrowserRouter>


//   )
// }

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <VinProvider>
        <App/>
      </VinProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
