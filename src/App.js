import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">Hello!</header>
      <Button
        type="button"
        children="Add new radio station"
        onClick={clickPlay}
        size="big"
      />
    </div>
  );
}

function clickPlay() {
  console.log('play');
}

export default App;
