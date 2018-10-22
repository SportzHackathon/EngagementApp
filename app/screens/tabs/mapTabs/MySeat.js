/**
 * mySeat tab
 */

import React, { Component } from "react";
import { View, TouchableWithoutFeedback, StyleSheet } from "react-native";
import { Container, Header, Content, Footer, FooterTab, Button, Text, Icon } from "native-base";
import BottomSlideUpContent from "../../../components/BottomSlideUpContent";

export default class MySeat extends Component {
    render() {
        return (
            <Container>
                <TouchableWithoutFeedback
                    onPress={() => {
                        this.retractTab();
                    }}
                >
                    <View style={{ flex: 1 }}>
                        <Text>Map</Text>
                    </View>
                </TouchableWithoutFeedback>

                <BottomSlideUpContent
                    downHeight={120}
                    downController={retractTab => {
                        this.retractTab = retractTab;
                    }}
                >
                    <Container>
                        <Text>List of String directions</Text>
                    </Container>
                </BottomSlideUpContent>
            </Container>
        );
    }
}

const styles = StyleSheet.create({});
