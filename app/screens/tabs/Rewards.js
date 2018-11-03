/**
 * Rewards tab
 */

import React, { Component } from "react";
import { StyleSheet, Image, Text, View, TouchableOpacity, ScrollView } from "react-native";
import { Container, Header, Title, Body, Icon } from "native-base";
import colors from "../../styles/colors";
import { material, robotoWeights } from "react-native-typography";
import SegmentedControlTab from 'react-native-segmented-control-tab'

const rewardCategories = [
    {
        name: "Chick-Fil-A",
        imgUrl: "https://pbs.twimg.com/profile_images/458694452551229440/FhyI8Y50_400x400.png",
        items: [
            {
                name: "Chicken Sandwich",
                points: 3.52
            },
            {
                name: "8 count Chicken Nuggets",
                points: 6.32
            }
        ]
    },
    {
        name: "Burdell's",
        imgUrl:
            "http://ramblinwreck.com/wp-content/uploads/2018/08/STH-Concession-Discount-300x300.png",
        items: [
            {
                name: "Hot dog",
                points: 3
            },
            {
                name: "Pretzel",
                points: 2
            }
        ]
    }
];


export default class Rewards extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedIndex: 0,
          points: 50
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
                <ScrollView keyboardShouldPersistTaps="always">
                    {rewardCategories.map((category, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => {
                                this.props.navigation.navigate("RewardCategory", { category: category });
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
                                <View
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center"
                                    }}
                                >
                                    <Image
                                        key={index}
                                        source={{ uri: category.imgUrl }}
                                        style={{ height: 50, width: 50 }}
                                    />
                                    <Text
                                        style={{
                                            ...material.subheadingObject,
                                            color: colors.darkGray,
                                            paddingLeft: 5
                                        }}
                                    >
                                        {category.name}
                                    </Text>
                                </View>
                                <Icon
                                    style={{
                                        fontSize: 20,
                                        color: colors.lightGray
                                    }}
                                    type="Entypo"
                                    name="chevron-right"
                                />
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        )
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
                        values={['Rewards', 'Enter Code']}
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
                    {this.renderRewards()}
                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({});
