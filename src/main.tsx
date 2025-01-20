import ReactDOM from 'react-dom/client';
// import Start from './App';
// import ConnectWallet from "./components/connect/connect"
import './index.css';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { AuthContextProvider } from './context/AuthConext';
import AppRouter from './router';
import { ActionProvider } from './context/ActionContext';
import { DIDProvider } from "./context/DIDContext";

// this manifest is used temporarily for development purposes
const manifestUrl = 'https://raw.githubusercontent.com/ton-community/tutorials/main/03-client/test/public/tonconnect-manifest.json';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <TonConnectUIProvider manifestUrl={manifestUrl}>
    <AuthContextProvider>
      <ActionProvider>
        <DIDProvider>
          <AppRouter />
        </DIDProvider>
      </ActionProvider>
    </AuthContextProvider>
  </TonConnectUIProvider>
)