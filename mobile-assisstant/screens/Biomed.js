import * as React from 'react';
import { Text, View, StyleSheet, WebView, ScrollView, Dimensions, StatusBar} from 'react-native';
import Constants from 'expo-constants';

export default class Biomed extends React.Component {
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
          source={{ uri: "https://l.vemcount.com/embed/widget/xHjJTLAZa0cw5fR" }}
          style={{
            marginTop: 20,
            height: 150,
          }}
        />
        <Text>  </Text>

        <WebView
          source={{ uri: "https://l.vemcount.com/embed/widget/wO5s3jc1kLDuFfl" }}
          style={{
            marginTop: 20,
            height: 150,
          }}
        />
        <Text>  </Text>
        <WebView
          source={{ uri: "https://l.vemcount.com/embed/widget/gBeaUYKA9tEoSjr" }}
          style={{
            marginTop: 20,
            height: 150,
          }}
        />

        <Text>  </Text>
        <WebView
          source={{uri:"https://l.vemcount.com/embed/widget/XBBcqco5cJuZi2y"}}
          style={{
            marginTop:20,
            height:150
          }}
        />


        <Text>  </Text>
        <WebView
          source={{uri:"https://l.vemcount.com/embed/widget/t7mvsRnv4srnUb3"}}
          style={{
            marginTop:20,
            height:150
          }}
        />

        <Text>  </Text>
      </ScrollView>
    );
  }
}