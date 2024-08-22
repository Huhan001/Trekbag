import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


//you need to import the css file as well for it to be caught
//Watch out for the directory changes
//.. for accesing diffrent file root, . for accessing file on same family root