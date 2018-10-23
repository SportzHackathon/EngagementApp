/**
 * Feed tab. Holds the game day feed
 */

import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Container, Header, Body, Title } from "native-base";
import colors from "../../styles/colors";

export default class Stats extends Component {
    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: colors.headerColor }}>
                    <Body>
                        <Title style={{ color: colors.headerText }}>Score and Statistics</Title>
                    </Body>
                </Header>
            </Container>
        );
    }
}

const styles = StyleSheet.create({});
