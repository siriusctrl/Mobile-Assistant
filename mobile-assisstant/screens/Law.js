import * as React from 'react';
import { ScrollView } from 'react-native';
import Constants from 'expo-constants';
import seatGenerator from "../components/SeatGenerator";

export default class Law extends React.Component {
  state = {
    loading:[],
  };

  wegets = [
    "https://l.vemcount.com/embed/widget/hjc3KzmKEHmKgRL",  // overview
    'https://l.vemcount.com/embed/widget/ZsDYiPSsISTZRQw',  // level 3
    'https://l.vemcount.com/embed/widget/5mj07kzlAvhxLMY',  // level 4
    'https://l.vemcount.com/embed/widget/ufmUaRROlAvDlFd',  // level 5
    'https://l.vemcount.com/embed/widget/zaJcDC7mvf7meNe',  // student study zone
  ]

  render() {
    //including only the biomedicion webset
    // the url could be found at https://library.unimelb.edu.au/services/find-a-seat/brownless-biomed-study-spaces
    // for biomed detail and other overviews
    return (
      <ScrollView>
        {seatGenerator(this, this.wegets)}
      </ScrollView>
    );
  }
}