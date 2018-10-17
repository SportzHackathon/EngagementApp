/**
 * Creates tab navigation
 */
import { createBottomTabNavigator } from "react-navigation";
import React from "react";
import { Footer, FooterTab, Button, Text, Icon } from "native-base";

export default tabs => {
    return createBottomTabNavigator(tabs, {
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
};
