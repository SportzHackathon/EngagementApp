/**
 * Feed tab. Holds the game day feed
 */

import React, { Component } from "react";
import { StyleSheet, ScrollView } from "react-native";
import {
    Container,
    ListItem,
    Header,
    Content,
    Footer,
    FooterTab,
    Button,
    Text,
    Icon
} from "native-base";
import TextFeedItem from "../../components/TextFeedItem";

const articles = [
    {
        type: "text",
        header: "Tech Wins 69-1!",
        snippet: "What a great game and a damn good score.",
        content: "Well bob, you saw what it said. What a great game and a damn good score."
    },
    {
        type: "text",
        header: "Beautiful day in the neighborhood",
        snippet: "Bobby Dodd is looking awfully nice tonight mkay",
        content: "Well bob, you saw what it said. Bobby Dodd is looking awfully nice tonight mkay"
    }
];

export default class Feed extends Component {
    static navigationOptions = {
        title: "Game Day Feed"
    };

    render() {
        return (
            <Container>
                <ScrollView scrollEnabled={true} bounces={true} style={styles.scrollView}>
                    {articles.map((article, index) => (
                        <TextFeedItem article={article} key={index} />
                    ))}
                </ScrollView>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    scrollView: {
        marginLeft: 5,
        marginRight: 5
    }
});
