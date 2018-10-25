/**
 * Creates tab navigation
 */

import React, { Component } from "react";
import { Dimensions, Image, View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Header, Title, Body, Container, Text } from "native-base";
import BottomSlideUpContent from "../../components/BottomSlideUpContent";
import colors from "../../styles/colors";
import locations from "../../data/map/Map";
import ImageZoom from "react-native-image-pan-zoom";

export default class Map extends Component {
    render() {
        let { width, height } = Dimensions.get("window");
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
                        <ImageZoom
                            cropWidth={width}
                            cropHeight={320}
                            imageWidth={width}
                            imageHeight={320}
                            minScale={1}
                            style={{ position: "absolute", top: 10, height: "100%" }}
                            onClick={() => {
                                this.retractTab();
                            }}
                        >
                            <Image
                                source={locations[0].map}
                                style={{ height: 320, width: width }}
                            />
                        </ImageZoom>
                    </View>
                </TouchableWithoutFeedback>

                <BottomSlideUpContent
                    downHeight={217}
                    upPercentage={0.6}
                    downController={retractTab => {
                        this.retractTab = retractTab;
                    }}
                >
                    <Container>
                        <List>
                            <ListItem noIndent style={{ backgroundColor: "#cde1f9" }}>
                                <Left>
                                    <Text>Simon Mignolet</Text>
                                </Left>
                                <Right>
                                    <Icon name="arrow-forward" />
                                </Right>
                            </ListItem>
                            <ListItem>
                                <Left>
                                    <Text>Nathaniel Clyne</Text>
                                </Left>
                                <Right>
                                    <Icon name="arrow-forward" />
                                </Right>
                            </ListItem>
                            <ListItem>
                                <Left>
                                    <Text>Dejan Lovren</Text>
                                </Left>
                                <Right>
                                    <Icon name="arrow-forward" />
                                </Right>
                            </ListItem>
                        </List>
                    </Container>
                </BottomSlideUpContent>
            </Container>
        );
    }
}

const styles = StyleSheet.create({});
