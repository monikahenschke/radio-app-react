import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">Hello!</header>
      <Button
        children="Play"
        onClick={clickPlay}
        icon="play-large.svg"
        iconOnly={true}
        size="large"
      />
      <Button
        children="Play2"
        iconOnly={true}
        icon="play-medium.svg"
        onClick={clickPlay2}
      />
      <Button
        children="Play2"
        iconOnly={true}
        icon="play-medium.svg"
        onClick={clickPlay2}
        size="small"
      />
    </div>
  );
}

function clickPlay() {
  console.log('play');
}

function clickPlay2() {
  console.log('play2');
}

export default App;
