/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */

import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Container } from "native-base";
import Home from "./app/screens/Home";

export default class App extends Component {
    render() {
        return (
            <Container>
                <Home />
            </Container>
        );
    }
}

const styles = StyleSheet.create({});
