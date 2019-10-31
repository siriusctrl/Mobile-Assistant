import * as React from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';

export default function seatGenerator(that, wegets) {
  let res = [];

  for (let i = 0; i < wegets.length; i++) {
    that.state.loading.push(true);

    res.push(
      <View style={{ flex: 1, height: 150, marginTop: 20 }}>
        {that.state.loading[i] ? (
          <View style={{ marginTop: 30 }}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        ) : (
          <View />
        )}

        <WebView
          source={{
            uri: wegets[i],
          }}
          onLoadEnd={i =>
            that.setState({
              loading: [
                ...that.state.loading.slice(0, i),
                false,
                ...that.state.loading.slice(i + 1, that.state.loading.length),
              ],
            })
          }
          textZoom={200}
        />
      </View>
    );
  }

  return res;
}
