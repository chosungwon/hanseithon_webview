import React, {Fragment} from 'react';
import { StyleSheet, Image } from 'react-native';


export default class App extends React.Component {
    static navigationOptions = {
        header: null
    }
    componentWillMount()
    {
        setTimeout(()=>{
            this.props.navigation.navigate('main');
        }, 3000)
    }
    render() {
        return (
            <Fragment>
                <Image source={require('./assets/splash.png')}
                       style={styles.backgroundImage}>
                </Image>
            </Fragment>

        );
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },
});


