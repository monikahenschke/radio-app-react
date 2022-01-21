import Button from './components/Button';
import StationsList from './components/StationsList';
import getAudioManager from './utils/audio-manager';
const hardcodedRadioUrl = 'http://17573.live.streamtheworld.com/WCTKFMAAC.aac';
const hardcodedRadioUrl1 = 'http://icepool.silvacast.com/COUNTRY108.mp3';
const radioStationsArray = [
  {
    id: 'cat-country',
    name: 'Cat County 98.1',
    link: 'http://17573.live.streamtheworld.com/WCTKFMAAC.aac',
  },
  {
    id: 'americas-country',
    name: "America's Country",
    link: 'https://ais-sa2.cdnstream1.com/1976_128.mp3',
  },
  {
    id: 'ktwb-big-country',
    name: 'KTWB Big Country 92.5',
    link: 'https://14083.live.streamtheworld.com/KTWBFMAAC.aac',
  },
  {
    id: 'country-208',
    name: 'Country 108',
    link: 'http://icepool.silvacast.com/COUNTRY108.mp3',
  },
  {
    id: 'kickin-country',
    name: "Kickin' Country 181.fm",
    link: 'https://listen.181fm.com/181-kickincountry_128k.mp3',
  },
];
const App = () => {
  const audioManagerInstance = getAudioManager(hardcodedRadioUrl);

  const handlePlay = () => {
    audioManagerInstance.play();
  };

  const handlePause = () => {
    audioManagerInstance.pause();
  };

  const handleSelect = (selectedStation) => {
    console.log(selectedStation);
    audioManagerInstance.select(selectedStation);
  };

  return (
    <div className="App">
      <header className="App-header">Hello!</header>
      <StationsList stations={radioStationsArray} handleSelect={handleSelect} />
      <Button type="button" children="Play" onClick={handlePlay} size="big" />
      <Button type="button" children="Pause" onClick={handlePause} size="big" />
      <Button type="button" children="Station X " onClick={handleSelect} />
    </div>
  );
};

export default App;
