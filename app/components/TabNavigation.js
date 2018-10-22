/**
 * Creates tab navigation
 */
import { createBottomTabNavigator } from "react-navigation";
import React from "react";
import { Footer, FooterTab, Button, Text, Icon } from "native-base";
import colors from "../styles/colors";

export default tabs => {
    return createBottomTabNavigator(tabs, {
        tabBarComponent: props => {
            // Custom tabs
            return (
                <Footer>
                    <FooterTab>
                        <Button
                            style={{ backgroundColor: colors.headerColor }}
                            active={props.navigation.state.index === 0}
                            onPress={() => {
                                props.navigation.navigate("Feed");
                            }}
                        >
                            <Icon name="list" />
                            <Text>Feed</Text>
                        </Button>
                        <Button
                            style={{ backgroundColor: colors.headerColor }}
                            active={props.navigation.state.index === 1}
                            onPress={() => {
                                props.navigation.navigate("Map");
                            }}
                        >
                            <Icon name="map" />
                            <Text>Map</Text>
                        </Button>
                        <Button
                            style={{ backgroundColor: colors.headerColor }}
                            active={props.navigation.state.index === 2}
                            onPress={() => {
                                props.navigation.navigate("Shop");
                            }}
                        >
                            <Icon type="MaterialCommunityIcons" name="food" />
                            <Text>Shop</Text>
                        </Button>
                        <Button
                            style={{ backgroundColor: colors.headerColor }}
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
