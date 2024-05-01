import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom"
import App from './App.jsx'
import './index.css'
import { RecoilRoot } from 'recoil'
import {Toaster} from "react-hot-toast"

ReactDOM.createRoot(document.getElementById('root')).render(
  <RecoilRoot>
    
    <BrowserRouter>
      <App />
      <Toaster/>
    </BrowserRouter>
  </RecoilRoot>
)
