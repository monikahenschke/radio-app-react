import { StationsContextProvider } from './context/StationsContext';
import { AppWrapper } from './containers/AppWrapper/AppWrapper';
import Content from './containers/Content/Content';
import './styles/App.scss';

function App() {
  return (
    <StationsContextProvider>
      <AppWrapper>
        <Content />
      </AppWrapper>
    </StationsContextProvider>
  );
}

export default App;
