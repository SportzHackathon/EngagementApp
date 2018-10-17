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
import FeedItem from "../../components/FeedItem";

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
    },
    {
        type: "image",
        header: "Beautiful day in the neighborhood",
        snippet: "Bobby Dodd is looking awfully nice tonight mkay",
        content: "Well bob, you saw what it said. Bobby Dodd is looking awfully nice tonight mkay",
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/BobbyDoddStadiumGTMiami2008.jpg/1200px-BobbyDoddStadiumGTMiami2008.jpg"
    },
    {
        type: "link",
        header: "A miracle has occurred!",
        imageUrl: "http://nique.net/wp-content/uploads/2015/10/FSU-Game-Online2.jpg",
        linkUrl: "https://youtu.be/Sm6eZ9V9RbM"
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
                        <FeedItem article={article} key={index} />
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
