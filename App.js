import React from 'react';
import { StackNavigator } from 'react-navigation';
import Splash from './Splash';
import Main from './Main';

console.disableYellowBox = true;

const Navigation  = StackNavigator({
    Home:{
        screen: Splash,
    },
    main:{
        screen: Main
    }
})

export default Navigation;


