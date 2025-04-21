import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ColorProvider } from './ColorProvider.tsx'
import { Provider } from 'react-redux'
import { store } from './components/redux/store.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ColorProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ColorProvider>
  </StrictMode>,
)
