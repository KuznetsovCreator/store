import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./app/App.tsx";
import {IOptions} from "./entities/options";

export class AppInitializer {
  start(options: IOptions | null) {
    ReactDOM.createRoot(document.getElementById('root')!).render(
      <React.StrictMode>
        <App options={options}/>
      </React.StrictMode>
    )
  }
}

window.App = AppInitializer
