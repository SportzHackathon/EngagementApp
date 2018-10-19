/**
 * Feed tab. Holds the game day feed
 */

import React, { Component } from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Container, Header, Body, Title, Left } from "native-base";
import FeedItem from "../../components/FeedItem";

const articles = [
    {
        id: 1,
        type: "text",
        title: "Tech Wins 69-1!",
        snippet: "What a great game and a damn good score.",
        content: [
            { type: "title", content: "Tech Wins 69-1!" },
            {
                type: "paragraph",
                content: { type: "text", content: "What a great game and a damn good score." }
            },
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
                            "Well bob, you saw what it said. What a great game and a damn good score. Officia nulla anim nulla ipsum veniam quis sunt. Exercitation laboris excepteur elit laborum aliqua anim sunt amet labore cupidatat qui aliquip. Deserunt do magna eu cupidatat sunt. Magna fugiat et labore est reprehenderit cupidatat sit ad cupidatat."
                    },
                    {
                        type: "text",
                        content:
                            "Part 2 of this paragraph. FOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO. Pariatur aute est commodo proident aute enim aliquip veniam cupidatat pariatur incididunt amet nisi sint. Deserunt proident dolore laboris deserunt deserunt labore cillum proident veniam proident excepteur in elit. In laborum consectetur ad dolore incididunt dolore. Nisi do labore reprehenderit consectetur culpa ut non in tempor anim Lorem."
                    }
                ]
            },
            {
                type: "paragraph",
                content: [
                    { type: "header", content: "P2 Heading" },
                    {
                        type: "text",
                        content: "Paragraph 2 baby. Look at me!!!!!!!!!!!!!!!!!!!!!!!."
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        type: "poll",
        content:
            "Incididunt enim velit occaecat anim velit tempor proident. Id id officia sint magna officia excepteur aliquip est. Lorem reprehenderit ipsum duis Lorem. Anim anim officia incididunt mollit sint sit sint enim amet dolore tempor elit aliqua.?",
        options: ["Yes", "No"],
        alreadyVoted: false,
        votes: [50, 20]
    },
    {
        id: 3,
        type: "text",
        title: "Beautiful day in the neighborhood",
        snippet: "Bobby Dodd is looking awfully nice tonight mkay",
        content: "Well bob, you saw what it said. Bobby Dodd is looking awfully nice tonight mkay"
    },
    {
        id: 4,
        type: "image",
        title: "Beautiful day in the neighborhood",
        snippet: "Bobby Dodd is looking awfully nice tonight mkay",
        content: "Well bob, you saw what it said. Bobby Dodd is looking awfully nice tonight mkay",
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/BobbyDoddStadiumGTMiami2008.jpg/1200px-BobbyDoddStadiumGTMiami2008.jpg"
    },
    {
        id: 5,
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

    constructor(props) {
        super(props);

        this.state = {
            articles
        };
    }

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
                    {this.state.articles.map((article, index) => (
                        <FeedItem
                            article={article}
                            key={index}
                            navigation={this.props.navigation}
                            onVote={option => {
                                this.state.articles[index].alreadyVoted = true;
                                this.setState({ articles: this.state.articles });
                                console.log("Voted for: " + article.options[option]);
                            }}
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
