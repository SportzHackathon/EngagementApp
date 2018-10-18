/**
 * Feed tab. Holds the game day feed
 */

import React, { Component } from "react";
import { StyleSheet, Image, ScrollView, View } from "react-native";
import { Container, Text, Body, Content, Radio, Button } from "native-base";

const screenMargin = 20;
const buttonSpacing = 8;

export default class Poll extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: "Poll",
            headerMode: "screen"
        };
    };

    constructor(props) {
        super(props);

        this.state = {
            selected: -1
        };
    }

    render() {
        let { navigation } = this.props;
        let { article } = navigation.state.params;
        console.log(article);
        return (
            <ScrollView>
                <Container>
                    <Content>
                        <Body style={{ display: "flex", alignItems: "flex-start" }}>
                            <Text style={{ margin: screenMargin }}>{article.content}</Text>
                            {article.options.map((option, index) => (
                                <View
                                    key={index}
                                    style={{
                                        display: "flex",
                                        flexDirection: "row"
                                    }}
                                >
                                    <Radio
                                        selected={this.state.selected === index}
                                        onPress={() => {
                                            this.setState({ selected: index });
                                        }}
                                        style={{
                                            paddingLeft: screenMargin,
                                            paddingRight: buttonSpacing
                                        }}
                                    />
                                    <Text>{option}</Text>
                                </View>
                            ))}
                            <Button disabled style={{ margin: screenMargin }} full>
                                <Text>Submit</Text>
                            </Button>
                        </Body>
                    </Content>
                </Container>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({});
