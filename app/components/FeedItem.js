/**
 * Feed tab. Holds the game day feed
 */

import React, { Component } from "react";
import { StyleSheet, Image, TouchableHighlight, Linking } from "react-native";
import { Text, Card, CardItem, Body } from "native-base";

const TextFeedItem = article => {
    return (
        <Card>
            <CardItem header>
                <Text>{article.header}</Text>
            </CardItem>
            <CardItem>
                <Body>
                    <Text>{article.snippet}</Text>
                </Body>
            </CardItem>
            <CardItem footer>
                <Text>{article.footer}</Text>
            </CardItem>
        </Card>
    );
};

const ImageFeedItem = article => {
    return (
        <Card>
            <CardItem header>
                <Body>
                    <Text>{article.header}</Text>
                    <Text note>{article.snippet}</Text>
                </Body>
            </CardItem>
            <CardItem cardBody>
                <Image
                    source={{ uri: article.imageUrl }}
                    style={{ height: 200, width: null, flex: 1 }}
                />
            </CardItem>
        </Card>
    );
};

const LinkFeedItem = article => {
    return (
        <TouchableHighlight
            onPress={() => {
                Linking.openURL(article.linkUrl).catch(err =>
                    console.error("An error occurred", err)
                );
            }}
        >
            <Card>
                <CardItem header>
                    <Body>
                        <Text>{article.header}</Text>
                        <Text note>{article.snippet || "video"}</Text>
                    </Body>
                </CardItem>
                <CardItem cardBody>
                    <Image
                        source={{ uri: article.imageUrl }}
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
            return TextFeedItem(this.props.article);
        } else if (this.props.article.type === "image") {
            return ImageFeedItem(this.props.article);
        } else if (this.props.article.type === "link") {
            return LinkFeedItem(this.props.article);
        }
    }
}
const styles = StyleSheet.create({});
