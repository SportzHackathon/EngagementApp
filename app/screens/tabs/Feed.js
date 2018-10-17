/**
 * Feed tab. Holds the game day feed
 */

import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Container, Header, Content, Footer, FooterTab, Button, Text, Icon } from "native-base";

export default class Feed extends Component {
    static navigationOptions = {
        title: "Game Day Feed"
    };

    render() {
        return (
            <Container>
                <Text>Test Feed</Text>
            </Container>
        );
    }
}

const styles = StyleSheet.create({});
