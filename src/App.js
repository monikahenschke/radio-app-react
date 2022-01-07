import Button from './components/Button';
import { ReactComponent as IconLarge } from './images/play-large.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">Hello!</header>
      <Button
        type="button"
        children="Play"
        onClick={clickPlay}
        icon={IconLarge}
        iconOnly
        size="large"
      />
    </div>
  );
}

function clickPlay() {
  console.log('play');
}

export default App;
