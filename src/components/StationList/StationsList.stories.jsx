import React from 'react';
import StationsList from './StationsList';

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

export default {
  title: 'StationsList',
  component: StationsList,
  argTypes: {
    stations: {
      defaultValue: radioStationsArray,
    },
  },
};

const Template = (args) => <StationsList {...args} />;

export const Default = Template.bind({});
Default.args = {
  handleSelect: () => {},
};
