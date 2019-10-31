import * as React from 'react';
import {
  ScrollView,
} from 'react-native';
import { WebView } from 'react-native-webview';

import seatGenerator from '../components/SeatGenerator';

export default class Baillieu extends React.Component {
  state = {
    loading: [],
  };

  wegets = [
    'https://l.vemcount.com/embed/widget/UxRJHzLxLJ4nJtS', // overview
    'https://l.vemcount.com/embed/widget/DNgAEb69k9r7nTE', // basement
    'https://l.vemcount.com/embed/widget/tP7SWVwgRqvnEfK', // ground floor
    'https://l.vemcount.com/embed/widget/Dk5wj8eCRm5gH7j', // level 1
    'https://l.vemcount.com/embed/widget/YdNNA8RBcQym2KN', // level 2
    'https://l.vemcount.com/embed/widget/MnkQs3NWEc5VoCI', // level 3
  ];

  render() {
    return <ScrollView>{seatGenerator(this, this.wegets)}</ScrollView>;
  }
}
