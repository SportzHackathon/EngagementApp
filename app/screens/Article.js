/**
 * Feed tab. Holds the game day feed
 */

import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Container, Text } from "native-base";

export default class Article extends Component {
    static navigationOptions = ({ navigation }) => {
        console.log(navigation);
        return {
            title: navigation.state.params.title,
            headerMode: "screen"
        };
    };

    render() {
        return (
            <Container>
                <Text>Article</Text>
            </Container>
        );
    }
}

const styles = StyleSheet.create({});
