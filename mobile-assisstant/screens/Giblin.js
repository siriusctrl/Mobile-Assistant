import * as React from 'react';
import { Text, View, StyleSheet, WebView, ScrollView, Dimensions, StatusBar} from 'react-native';
import Constants from 'expo-constants';

export default class Giblin extends React.Component {
  state = {
    loaded: false,
    content: 'default',
  };

  render() {
    let screenWidth = Dimensions.get('window').width;
    let screenHeight = Dimensions.get('window').height;
    //including only the biomedicion webset
    // the url could be found at https://library.unimelb.edu.au/services/find-a-seat/brownless-biomed-study-spaces
    // for biomed detail and other overviews
    return (
      <ScrollView>
        <Text style={{paddingTop:20}}>  </Text>
        <WebView
          source={{ uri: "https://l.vemcount.com/embed/widget/KuNYNy0mJYPh4H3" }}
          style={{
            marginTop: 20,
            height: 120,
          }}
        />
      </ScrollView>
    );
  }
}