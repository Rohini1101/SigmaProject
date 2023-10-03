import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CookiesProvider } from 'react-cookie';

// C:\Users\Asus\Desktop\React App\rohinidb\node_modules\bootstrap\dist\css\bootstrap.css

import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
// import { Netflixindex } from './Netflix/netflix-index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<CookiesProvider defaultSetOptions={{path:"/"}}>
<App/>

</CookiesProvider>
  );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
