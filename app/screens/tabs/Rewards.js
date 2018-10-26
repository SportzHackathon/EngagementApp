/**
 * Feed tab. Holds the game day feed
 */

import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Container, Header, Title, Body, FooterTab, Button, Text, Icon } from "native-base";
import colors from "../../styles/colors";

export default class Rewards extends Component {
    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: colors.headerColor }}>
                    <Body>
                        <Title style={{ color: colors.headerText }}>Fan Center</Title>
                    </Body>
                </Header>
                <View>
                    
                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({});
