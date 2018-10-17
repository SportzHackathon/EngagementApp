/**
 * Feed tab. Holds the game day feed
 */

import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Text, Card, CardItem, Body } from "native-base";

export default class Feed extends Component {
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

const styles = StyleSheet.create({});
