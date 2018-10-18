/**
 * Feed tab. Holds the game day feed
 */

import React, { Component } from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Container, Header, Body, Title, Left } from "native-base";
import FeedItem from "../../components/FeedItem";

const articles = [
    {
        type: "text",
        title: "Tech Wins 69-1!",
        snippet: "What a great game and a damn good score.",
        content: [
            { type: "title", content: "Title" },
            {
                type: "image",
                content:
                    "http://www.rentcafe.com/dmslivecafe/UploadedImages/e44a0982-d9d2-4e92-b90f-b279eaabfe53.jpg"
            },
            {
                type: "paragraph",
                content: [
                    {
                        type: "text",
                        content:
                            "Well bob, you saw what it said. What a great game and a damn good score."
                    },
                    {
                        type: "text",
                        content:
                            "Part 2 of this paragraph. FOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO"
                    }
                ]
            },
            {
                type: "paragraph",
                content: [
                    {
                        type: "text",
                        content: "Paragraph 2 baby. Look at me!!!!!!!!!!!!!!!!!!!!!!!."
                    }
                ]
            }
        ]
    },
    {
        type: "text",
        title: "Beautiful day in the neighborhood",
        snippet: "Bobby Dodd is looking awfully nice tonight mkay",
        content: "Well bob, you saw what it said. Bobby Dodd is looking awfully nice tonight mkay"
    },
    {
        type: "image",
        title: "Beautiful day in the neighborhood",
        snippet: "Bobby Dodd is looking awfully nice tonight mkay",
        content: "Well bob, you saw what it said. Bobby Dodd is looking awfully nice tonight mkay",
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/BobbyDoddStadiumGTMiami2008.jpg/1200px-BobbyDoddStadiumGTMiami2008.jpg"
    },
    {
        type: "link",
        title: "A miracle has occurred!",
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
                <Header>
                    <Left />
                    <Body>
                        <Title>Game day feed</Title>
                    </Body>
                </Header>
                <ScrollView scrollEnabled={true} bounces={true} style={styles.scrollView}>
                    {articles.map((article, index) => (
                        <FeedItem
                            article={article}
                            key={index}
                            navigation={this.props.navigation}
                        />
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
