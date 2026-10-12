import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
const root = document.getElementById('root')
const app = <React.StrictMode><App /></React.StrictMode>
// The build supplies static content for first paint and crawlers. React owns the
// interactive tree after loading, including browser-specific routing behavior.
ReactDOM.createRoot(root).render(app)
