/**
 * Feed tab. Holds the game day feed
 */

import React, { Component } from "react";
import { StyleSheet, Image, TouchableHighlight, Linking } from "react-native";
import { Text, Card, CardItem, Body } from "native-base";

class TextFeedItem extends Component {
    render() {
        return (
            <Card>
                <CardItem header>
                    <Text>{this.props.article.header}</Text>
                </CardItem>
                <CardItem>
                    <Body>
                        <Text>{this.props.article.snippet}</Text>
                    </Body>
                </CardItem>
                <CardItem footer>
                    <Text>{this.props.article.footer}</Text>
                </CardItem>
            </Card>
        );
    }
}

class ImageFeedItem extends Component {
    render() {
        return (
            <Card>
                <CardItem header>
                    <Body>
                        <Text>{this.props.article.header}</Text>
                        <Text note>{this.props.article.snippet}</Text>
                    </Body>
                </CardItem>
                <CardItem cardBody>
                    <Image
                        source={{ uri: this.props.article.imageUrl }}
                        style={{ height: 200, width: null, flex: 1 }}
                    />
                </CardItem>
            </Card>
        );
    }
}

class LinkFeedItem extends Component {
    render() {
        return (
            <TouchableHighlight
                onPress={() => {
                    Linking.openURL(this.props.article.linkUrl).catch(err =>
                        console.error("An error occurred", err)
                    );
                }}
            >
                <Card>
                    <CardItem header>
                        <Body>
                            <Text>{this.props.article.header}</Text>
                            <Text note>{this.props.article.snippet || "video"}</Text>
                        </Body>
                    </CardItem>
                    <CardItem cardBody>
                        <Image
                            source={{ uri: this.props.article.imageUrl }}
                            style={{ height: 200, width: null, flex: 1 }}
                        />
                    </CardItem>
                </Card>
            </TouchableHighlight>
        );
    }
}

export { TextFeedItem, ImageFeedItem, LinkFeedItem };

const styles = StyleSheet.create({});
