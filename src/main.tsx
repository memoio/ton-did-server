import ReactDOM from 'react-dom/client';
// import Start from './App';
// import ConnectWallet from "./components/connect/connect"
import './styles/globals.css';
import './styles/tailwind-gen.css';
import './styles/index.css';

import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { AuthContextProvider } from './context/AuthContext';
import AppRouter from './router';
import { ActionProvider } from './context/ActionContext';
import { DIDProvider } from "./context/DIDContext";
import { ReferContextProvider } from './context/ReferContext';

// this manifest is used temporarily for development purposes
const manifestUrl = 'https://raw.githubusercontent.com/ton-community/tutorials/main/03-client/test/public/tonconnect-manifest.json';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <TonConnectUIProvider manifestUrl={manifestUrl}>
    <ReferContextProvider>
      <AuthContextProvider>
        <ActionProvider>
          <DIDProvider>
            <AppRouter />
          </DIDProvider>
        </ActionProvider>
      </AuthContextProvider>
    </ReferContextProvider>
  </TonConnectUIProvider>
)