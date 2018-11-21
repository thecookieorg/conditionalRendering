import React, { Component } from 'react';
import { View } from 'react-native';
import Home from './Home';
import Login from './Login';

class App extends Component {
    state = {
        isLoggedIn: false
    };

    renderScreen() {
        if (this.state.isLoggedIn) {
            return (
                <Home />
            );
        }

        return <Login />;
    }
    
    render() {
        const { containerStyle } = styles;

        return (
            <View style={containerStyle}>
                {this.renderScreen()}
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
};

export default App;
