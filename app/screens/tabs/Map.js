/**
 * Creates tab navigation
 */

import React, { Component } from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Header, Title, Body, Container, Text } from "native-base";
import BottomSlideUpContent from "../../components/BottomSlideUpContent";
import colors from "../../styles/colors";

export default class Map extends Component {
    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: colors.headerColor }}>
                    <Body>
                        <Title style={{ color: colors.headerText }}>Map and guidance</Title>
                    </Body>
                </Header>
                <TouchableWithoutFeedback
                    onPress={() => {
                        this.retractTab();
                    }}
                >
                    <View style={{ flex: 1 }}>
                        <Text>Map (Main content)</Text>
                    </View>
                </TouchableWithoutFeedback>

                <BottomSlideUpContent
                    downHeight={120}
                    upPercentage={0.6}
                    downController={retractTab => {
                        this.retractTab = retractTab;
                    }}
                >
                    <Container>
                        <Text>
                            List of locations (This is the content of the view that slides up and
                            down)
                        </Text>
                    </Container>
                </BottomSlideUpContent>
            </Container>
        );
    }
}

const styles = StyleSheet.create({});
