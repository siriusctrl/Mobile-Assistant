import * as React from 'react';
import { ScrollView } from 'react-native';
import Constants from 'expo-constants';
import seatGenerator from "../components/SeatGenerator";

export default class Giblin extends React.Component {
  state = {
    loading:[],
  };

  wegets = [
    "https://l.vemcount.com/embed/widget/KuNYNy0mJYPh4H3",  // overview
    'https://l.vemcount.com/embed/widget/2cUEp6RMHoIMQxP',  // ground
    'https://l.vemcount.com/embed/widget/nrL3EOQyiGRf7mI',  // upper ground
    'https://l.vemcount.com/embed/widget/pasklAAB9hrLceK',  // level 1
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