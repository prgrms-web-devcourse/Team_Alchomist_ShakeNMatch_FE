import AuthorizationProvider from '@contexts/Authorization';
import { Router } from '@routes';

function App(): JSX.Element {
  return (
    <AuthorizationProvider>
      <Router />
    </AuthorizationProvider>
  );
}

export default App;
