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
            selected: -1,
            article: this.props.navigation.state.params.article
        };
    }

    renderPoll() {
        let { navigation } = this.props;
        let { article } = this.state;
        let buttonType = this.state.selected === -1 ? { disabled: true } : { primary: true };

        return (
            <View>
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
                <Button
                    onPress={() => {
                        this.setState({ article: { ...this.state.article, alreadyVoted: true } });
                        navigation.state.params.onVote(this.state.selected);
                    }}
                    {...buttonType}
                    style={{ margin: screenMargin }}
                    full
                >
                    <Text>Submit</Text>
                </Button>
            </View>
        );
    }

    renderResults() {
        let { article } = this.state;

        return (
            <View>
                {article.options.map((option, index) => (
                    <Text>
                        {option} got {article.votes[index]} votes
                    </Text>
                ))}
            </View>
        );
    }

    render() {
        let { article } = this.state;
        console.log(article);
        return (
            <ScrollView>
                <Container>
                    <Content>
                        <Body style={{ display: "flex", alignItems: "flex-start" }}>
                            <Text style={{ margin: screenMargin }}>{article.content}</Text>
                            {article.alreadyVoted ? this.renderResults() : this.renderPoll()}
                        </Body>
                    </Content>
                </Container>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({});
