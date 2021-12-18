import AuthorizationProvider from '@contexts/Authorization';
import { CustomNavigateProvider } from '@contexts/CustomNavigate';
import { Router } from '@routes';

function App(): JSX.Element {
  return (
    <AuthorizationProvider>
      <CustomNavigateProvider>
        <Router />
      </CustomNavigateProvider>
    </AuthorizationProvider>
  );
}

export default App;
