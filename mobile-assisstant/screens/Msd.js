import * as React from 'react';
import { Text, View, StyleSheet, WebView, ScrollView, Dimensions, StatusBar} from 'react-native';
import Constants from 'expo-constants';
import seatGenerator from "../components/SeatGenerator";

export default class Msd extends React.Component {
  state = {
    loading:[],
  };

  wegets = [
    "https://l.vemcount.com/embed/widget/3t6hTVX05yISdMp",  // overview
    'https://l.vemcount.com/embed/widget/8UfBJ2OyG88QfBU',  // basement
    'https://l.vemcount.com/embed/widget/lHnBxbEk3LpGA6K',  // ground
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