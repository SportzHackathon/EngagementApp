/**
 * Main Screen. Holds the tab navigation
 */

import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Container, Header, Title, Body, Left, Right } from "native-base";
import Feed from "./tabs/Feed";
import Map from "./tabs/Map";
import Shop from "./tabs/Shop";
import Rewards from "./tabs/Rewards";
import TabNavigationCreator from "../components/TabNavigation";

/**
 * Tab object with config info about each tab
 */
const tabs = {
    Feed: { screen: Feed, title: "Game Day Feed" },
    Map: { screen: Map, title: "Map" },
    Shop: { screen: Shop, title: "Shopping" },
    Rewards: { screen: Rewards, title: "Rewards" }
};
const TabNavigation = TabNavigationCreator(tabs);

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
