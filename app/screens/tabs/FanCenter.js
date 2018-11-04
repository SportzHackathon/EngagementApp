/**
 * Fan Center tab
 */

// TODO figure out how to switch between tabs and add toast

import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput } from "react-native";
import { Container, Header, Title, Body, Icon } from "native-base";
import colors from "../../styles/colors";
import { material, robotoWeights } from "react-native-typography";
import SegmentedControlTab from 'react-native-segmented-control-tab'

const rewards = [
    {
        name: "Chicken Sandwich",
        points: 3.52
    },
    {
        name: "8 count Chicken Nuggets",
        points: 6.32
    },
    {
        name: "Hot dog",
        points: 3
    },
    {
        name: "Pretzel",
        points: 2
    }
];

export default class FanCenter extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedIndex: 0,
          points: 5
        };
      }

    handleIndexChange = (index) => {
        this.setState({
            ...this.state,
            selectedIndex: index,
        });
    }

    renderPoints() {
        return (
            <View
                style={{
                    backgroundColor: "#A9A9A9",
                    margin: 15,
                    padding: 10,
                    flex: 1,
                    alignItems: "center"
                }}
            >
                <Text
                    style={{
                        ...material.headlineWhiteObject,
                        ...robotoWeights.bold,
                        paddingTop: 10
                    }}
                >
                    {this.state.points}
                </Text>
                <Text style={{ ...material.subheadingWhiteObject }}>POINTS AVALIABLE</Text>
            </View>
        );
    }

    renderRewards() {
        return (
            <View>
                <ScrollView>
                    {rewards.map((reward, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => {
                                if (reward.points <= this.state.points) {
                                    this.setState({
                                        ...this.state,
                                        points: this.state.points - reward.points,
                                    });
                                    // ADD SOME TOAST
                                } else {
                                    // ADD SOME TOAST
                                }
                            }}
                        >
                            <View
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    alignContent: "center",
                                    padding: 14,
                                    borderBottomWidth: 1,
                                    borderBottomColor: colors.lightGray
                                }}
                            >
                                <Text
                                    style={{
                                        color: colors.darkGray
                                    }}
                                >
                                    {reward.name}
                                </Text>
                                <View
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        alignContent: "center"
                                    }}
                                >
                                    <Text
                                        style={{
                                            color: colors.gray,
                                            paddingRight: 5
                                        }}
                                    >
                                        Points: {reward.points}
                                    </Text>
                                    <Icon
                                        style={{
                                            fontSize: 20,
                                            color: colors.lightGray
                                        }}
                                        type="Entypo"
                                        name="plus"
                                    />
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        )
    }

    renderInput() {
        return (
            <View>
                <Text>Input Code:</Text>
                <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={(text) => {
                    if (text == 'code') {
                        this.setState({
                        ...this.state,
                        points: this.state.points += 50,
                        })
                    }
                }}
                value={this.state.text}
                />
            </View>

        );
    }

    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: colors.headerColor }}>
                    <Body>
                        <Title style={{ color: colors.headerText }}>Fan Center</Title>
                    </Body>
                </Header>
                <View>
                    <SegmentedControlTab
                        values={['Rewards', 'Enter Code', 'Game']}
                        selectedIndex={this.state.selectedIndex}
                        onTabPress={this.handleIndexChange}
                        />
                </View>
                <View
                    style={{
                        paddingTop: 5,
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-around",
                        flexWrap: "wrap",
                        borderBottomColor: colors.lightGray,
                        borderBottomWidth: 1
                    }}
                >
                    {this.renderPoints()}
                </View>
                <View>
                    {this.renderInput()}
                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({});
