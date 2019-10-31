import * as React from 'react';
import { ScrollView } from 'react-native';
import Constants from 'expo-constants';
import seatGenerator from "../components/SeatGenerator";

export default class Biomed extends React.Component {
  state = {
    loading:[],
  };

  wegets = [
    "https://l.vemcount.com/embed/widget/xHjJTLAZa0cw5fR",  // overview
    'https://l.vemcount.com/embed/widget/wO5s3jc1kLDuFfl',  // basement
    'https://l.vemcount.com/embed/widget/gBeaUYKA9tEoSjr',  // ground
    'https://l.vemcount.com/embed/widget/XBBcqco5cJuZi2y',  // level 1
    'https://l.vemcount.com/embed/widget/t7mvsRnv4srnUb3',  // level 2
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