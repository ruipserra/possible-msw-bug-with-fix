import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

function renderApp() {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}

if (process.env.NODE_ENV === 'development') {
  import('./mocks/browser').then(renderApp);
} else {
  renderApp();
}
