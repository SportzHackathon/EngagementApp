/**
 * Creates tab navigation
 */
import { createMaterialTopTabNavigator } from "react-navigation";
import MySeat from "./mapTabs/MySeat";
import Locations from "./mapTabs/Locations";
import Traffic from "./mapTabs/Traffic";
import colors from "../../styles/colors";

const tabs = {
    MySeat: { screen: MySeat },
    Locations: { screen: Locations },
    Traffic: { screen: Traffic }
};

export default createMaterialTopTabNavigator(tabs, {
    tabBarOptions: {
        style: {
            backgroundColor: colors.headerColor
        }
    }
});
