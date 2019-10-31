import * as React from 'react';
import { ScrollView } from 'react-native';
import Constants from 'expo-constants';
import seatGenerator from "../components/SeatGenerator";

export default class ERC extends React.Component {
  state = {
    loading:[],
  };

  wegets = [
    "https://l.vemcount.com/embed/widget/16ETt79NyQKUtAJ",  // overview
    'https://l.vemcount.com/embed/widget/H1zePEZtAT71yez',  // level 1
    'https://l.vemcount.com/embed/widget/MdvoNC22o2d17BO',  // level 2
    'https://l.vemcount.com/embed/widget/wfxmBL1uA9TXTKT',  // level 3
    'https://l.vemcount.com/embed/widget/Aix2bUXwbGnAZ7a',  // level 4
    'https://l.vemcount.com/embed/widget/5LkMSgewuLcihEo',  // level 5
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