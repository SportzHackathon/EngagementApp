/**
 * Main Screen. Holds the tab navigation
 */

import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
    Container,
    Header,
    Content,
    Footer,
    FooterTab,
    Button,
    Text,
    Icon,
    Title,
    Body,
    Left,
    Right
} from "native-base";
import { createBottomTabNavigator } from "react-navigation";
import Feed from "./tabs/Feed";
import Map from "./tabs/Map";
import Shop from "./tabs/Shop";
import Rewards from "./tabs/Rewards";

/**
 * Tab object with config info about each tab
 */
const tabs = {
    Feed: { screen: Feed, title: "Game Day Feed" },
    Map: { screen: Map, title: "Map" },
    Shop: { screen: Shop, title: "Shopping" },
    Rewards: { screen: Rewards, title: "Rewards" }
};

/**
 * Creates tab navigation
 */
const TabNavigation = createBottomTabNavigator(tabs, {
    tabBarComponent: props => {
        // Custom tabs
        return (
            <Footer>
                <FooterTab>
                    <Button
                        active={props.navigation.state.index === 0}
                        onPress={() => {
                            props.navigation.navigate("Feed");
                        }}
                    >
                        <Icon name="list" />
                        <Text>Feed</Text>
                    </Button>
                    <Button
                        active={props.navigation.state.index === 1}
                        onPress={() => {
                            props.navigation.navigate("Map");
                        }}
                    >
                        <Icon name="map" />
                        <Text>Map</Text>
                    </Button>
                    <Button
                        active={props.navigation.state.index === 2}
                        onPress={() => {
                            props.navigation.navigate("Shop");
                        }}
                    >
                        <Icon type="MaterialCommunityIcons" name="food" />
                        <Text>Shop</Text>
                    </Button>
                    <Button
                        active={props.navigation.state.index === 3}
                        onPress={() => {
                            props.navigation.navigate("Rewards");
                        }}
                    >
                        <Icon name="trophy" />
                        <Text>Rewards</Text>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
});

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Game Day Feed"
        };
    }

    /**
     * Called when the tab is changed
     */
    onTabChange(previousState, newState) {
        // Change header when tab is changed
        this.setState({ title: tabs[newState.routes[newState.index].key].title });
    }

    render() {
        return (
            <Container>
                <Header>
                    <Left />
                    <Body>
                        <Title>{this.state.title}</Title>
                    </Body>
                    <Right />
                </Header>
                <TabNavigation onNavigationStateChange={this.onTabChange.bind(this)} />
            </Container>
        );
    }
}

const styles = StyleSheet.create({});
