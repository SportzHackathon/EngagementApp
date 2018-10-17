/**
 * Main Screen. Holds the tab navigation
 */

import { StyleSheet } from "react-native";
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
export default TabNavigationCreator(tabs);

const styles = StyleSheet.create({});
