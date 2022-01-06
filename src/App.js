import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">Hello!</header>
      <Button
        type="button"
        children="Play"
        onClick={clickPlay}
        icon="play-large.svg"
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
