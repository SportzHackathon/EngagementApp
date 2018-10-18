/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */

import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Container } from "native-base";
import { createStackNavigator } from "react-navigation";
import Home from "./app/screens/Home";
import Article from "./app/screens/Article";
import Poll from "./app/screens/Poll";

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => ({
            header: null
        })
    },
    Article: {
        screen: Article
    },
    Poll: {
        screen: Poll
    }
};

const StackNavigator = createStackNavigator(screens, {});

export default class App extends Component {
    render() {
        return (
            <Container>
                <StackNavigator />
            </Container>
        );
    }
}

const styles = StyleSheet.create({});
