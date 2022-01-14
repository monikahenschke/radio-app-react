import Button from './components/Button';
import getInstance from './utils/audio-manager';
const hardcodedRadioUrl = 'http://17573.live.streamtheworld.com/WCTKFMAAC.aac';
const hardcodedRadioUrl1 = 'http://icepool.silvacast.com/COUNTRY108.mp3';

const App = () => {
  const audioManagerInstance = getInstance(hardcodedRadioUrl);

  const handlePlay = () => {
    audioManagerInstance.play();
  };

  const handlePause = () => {
    audioManagerInstance.pause();
  };

  const handleSelect = () => {
    audioManagerInstance.select(hardcodedRadioUrl1);
  };

  return (
    <div className="App">
      <header className="App-header">Hello!</header>
      <Button type="button" children="Play" onClick={handlePlay} size="big" />
      <Button type="button" children="Pause" onClick={handlePause} size="big" />
      <Button type="button" children="Station X " onClick={handleSelect} />
    </div>
  );
};

export default App;
