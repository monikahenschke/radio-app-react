import Cookies from 'js-cookie';
import { Layout } from './components/Layout';
import Content from './containers/Content';
import { setBasicRadioStationsToLS } from './utils/setBasicRadioStations';
import './styles/App.scss';

function App() {
  if (!Cookies.get('visited')) {
    Cookies.set('visited', true);
    // set basic radio stations in local storage on first visit

    setBasicRadioStationsToLS();
  }

  return (
    <Layout>
      <Content />
    </Layout>
  );
}

export default App;
