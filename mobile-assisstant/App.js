import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";
import FindAPlaceRouter from "./screens/FindAPlaceRouter";
import { fromRight, flipY } from 'react-navigation-transitions';

import Biomed from "./screens/Biomed";
import Msd from "./screens/Msd";
import Baillieu from "./screens/Baillieu";
import Giblin from "./screens/Giblin";
import Law from "./screens/Law";
import ERC from "./screens/ERC";
import Test from "./screens/Test";

const handleCustomTransition = ({ screens }) => {
  return fromRight(500);
}

const AppNavigator = createStackNavigator(
  {
    FindAPlaceRouter:{screen:FindAPlaceRouter},
    Biomed:{screen:Biomed},
    Msd:{screen:Msd},
    Baillieu:{screen:Baillieu},
    Giblin:{screen:Giblin},
    Law:{screen:Law},
    ERC:{screen:ERC},
    Test:{screen:Test}
  }, 
  {
    initialRouteName: "FindAPlaceRouter",
    transitionConfig: (screens) => handleCustomTransition(screens),
    headerMode:"none",
    defaultNavigationOptions:{
      header:null
    }
});

export default createAppContainer(AppNavigator);