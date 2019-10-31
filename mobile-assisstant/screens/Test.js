import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, Dimensions, StatusBar, ActivityIndicator} from 'react-native';
import Constants from 'expo-constants';
import seatGenerator from "../components/SeatGenerator";
import { WebView } from 'react-native-webview';

export default class Test extends React.Component {
  state = {
    loading:[],
  };

  wegets = ["https://l.vemcount.com/embed/widget/gBeaUYKA9tEoSjr", "https://l.vemcount.com/embed/widget/3t6hTVX05yISdMp"];

  generateAll = () => {
    let res = [];

    for(let i=0;i<this.wegets.length;i++){
      let curr = this.wegets[i];
      this.state.loading.push(true);

      res.push(
        <View style={{ flex: 1, height: 150, marginTop: 20 }}>
          {this.state.loading[i] ? (
            <View style={{marginTop:30}}>
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
          ) : (
            <View />
          )}
        
          <WebView
            source={{
              uri: curr,
            }}
            onLoadEnd= { (i) => this.setState({loading:[...this.state.loading.slice(0,i), false, ...this.state.loading.slice(i,this.state.loading.length)] }) }
            textZoom={200}
          />
        </View>
      )
    }

    return res;
  }

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