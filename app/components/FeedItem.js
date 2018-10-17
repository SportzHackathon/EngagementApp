/**
 * Feed tab. Holds the game day feed
 */

import React, { Component } from "react";
import { StyleSheet, Image, TouchableHighlight, Linking } from "react-native";
import { Text, Card, CardItem, Body } from "native-base";

function openArticle(navigation, article) {
    navigation.navigate("Article", {
        title: article.title
    });
}

const TextFeedItem = props => {
    return (
        <TouchableHighlight onPress={openArticle.bind(this, props.navigation, props.article)}>
            <Card>
                <CardItem header>
                    <Text>{props.article.title}</Text>
                </CardItem>
                <CardItem>
                    <Body>
                        <Text>{props.article.snippet}</Text>
                    </Body>
                </CardItem>
                <CardItem footer>
                    <Text>{props.article.footer}</Text>
                </CardItem>
            </Card>
        </TouchableHighlight>
    );
};

const ImageFeedItem = props => {
    return (
        <TouchableHighlight onPress={openArticle.bind(this, props.navigation, props.article)}>
            <Card>
                <CardItem header>
                    <Body>
                        <Text>{props.article.title}</Text>
                        <Text note>{props.article.snippet}</Text>
                    </Body>
                </CardItem>
                <CardItem cardBody>
                    <Image
                        source={{ uri: props.article.imageUrl }}
                        style={{ height: 200, width: null, flex: 1 }}
                    />
                </CardItem>
            </Card>
        </TouchableHighlight>
    );
};

const LinkFeedItem = props => {
    return (
        <TouchableHighlight
            onPress={() => {
                Linking.openURL(props.article.linkUrl).catch(err =>
                    console.error("An error occurred", err)
                );
            }}
        >
            <Card>
                <CardItem header>
                    <Body>
                        <Text>{props.article.title}</Text>
                        <Text note>{props.article.snippet || "video"}</Text>
                    </Body>
                </CardItem>
                <CardItem cardBody>
                    <Image
                        source={{ uri: props.article.imageUrl }}
                        style={{ height: 200, width: null, flex: 1 }}
                    />
                </CardItem>
            </Card>
        </TouchableHighlight>
    );
};

export default class FeedItem extends Component {
    render() {
        if (this.props.article.type === "text") {
            return TextFeedItem(this.props);
        } else if (this.props.article.type === "image") {
            return ImageFeedItem(this.props);
        } else if (this.props.article.type === "link") {
            return LinkFeedItem(this.props);
        }
    }
}
const styles = StyleSheet.create({});
