/**
 * Shop tab.
 */

import React, { Component } from "react";
import { StyleSheet, Image, Text, View, TouchableOpacity, ScrollView } from "react-native";
import { Container, Header, Title, Body, Icon } from "native-base";
import colors from "../../styles/colors";
import { material } from "react-native-typography";

const foodShops = [
    {
        name: "ChickFilA",
        options: [],
        imgUrl: "https://pbs.twimg.com/profile_images/458694452551229440/FhyI8Y50_400x400.png",
        items: [
            {
                name: "Chicken Sandwich",
                amount: 3.52
            },
            {
                name: "8 count Chicken Nuggets",
                amount: 6.32
            }
        ]
    },
    {
        name: "Burdell's",
        options: [{ name: "Delivery", upCharge: 0.99 }, { name: "Pickup", upCharge: 0 }],
        imgUrl:
            "http://ramblinwreck.com/wp-content/uploads/2018/08/STH-Concession-Discount-300x300.png",
        items: [
            {
                name: "Hot dog",
                amount: 3
            },
            {
                name: "Pretzel",
                amount: 2
            }
        ]
    }
];

export default class Shop extends Component {
    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: colors.headerColor }}>
                    <Body>
                        <Title style={{ color: colors.headerText }}>Shop</Title>
                    </Body>
                </Header>
                <View>
                    <ScrollView keyboardShouldPersistTaps="always">
                        {foodShops.map((food, index) => (
                            <TouchableOpacity
                                key={index}
                                onPress={() => {
                                    this.props.navigation.navigate("Store", { store: food });
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
                                            source={{ uri: food.imgUrl }}
                                            style={{ height: 50, width: 50 }}
                                        />
                                        <Text
                                            style={{
                                                ...material.subheadingObject,
                                                color: colors.darkGray,
                                                paddingLeft: 5
                                            }}
                                        >
                                            {food.name}
                                        </Text>
                                        {food.options.length > 0 ? (
                                            <Text
                                                style={{
                                                    paddingLeft: 5,
                                                    color: colors.gray
                                                }}
                                            >
                                                (
                                                {food.options.map(option => option.name).join(", ")}
                                                )
                                            </Text>
                                        ) : (
                                            <View />
                                        )}
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
            </Container>
        );
    }
}

const styles = StyleSheet.create({});
