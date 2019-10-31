import React, {Component} from "react";
import { Text, View , FlatList, ImageBackground, StatusBar} from "react-native";

export default class FindAPlaceRouter extends Component{

  componentDidMount() {
    StatusBar.setHidden(true);
  }

  screens = [
    {name: "Biomed"},
    {name: "Msd"},
    {name: "Baillieu"},
    {name: "ERC"},
    {name: "Giblin"},
    {name: "Law"},
  ];

  //Item separator
  FlatListItemSeparator = () => {
    return (
      <View
        style={{ height: 0.5, width: '100%', backgroundColor: '#C8C8C8' }}
      />
    );
  };

  _renderItem = ({item}) => (
    <Text style={{height:50, fontSize:30, textAlign:"center"}} onPress={() => this.props.navigation.navigate(item.name)}>
      {item.name}
    </Text>
  );

  render() {
    return (
      <View>
        <FlatList 
          data={this.screens}
          renderItem={this._renderItem}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          keyExtractor={(item) => item.name}
        />
      </View>
    );
  }
}