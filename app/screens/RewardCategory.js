import React, { Component } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { Fab, Root, Container, Icon, Toast } from "native-base";
import colors from "../styles/colors";

export default class RewardCategory extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.state.params.category.name,
            headerMode: "screen"
        };
    };

    constructor(props) {
        super(props);

        this.state = {
            items: []
        };
    }

    updateItems(items) {
        this.setState({ items });
    }

    render() {
        let { navigation } = this.props;
        let { category } = navigation.state.params;

        return (
            <Root>
                <Container>
                    <ScrollView>
                        {category.items.map((item, index) => (
                            <TouchableOpacity
                                key={index}
                                onPress={() => {
                                    Toast.show({
                                        text: "Bought item",
                                        duration: 1500
                                    });

                                    var items = this.state.items;
                                    items.push(item);
                                    this.setState({ items });
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
                                        {item.name}
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
                                            Points {item.points}
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
                    {(
                        <Fab
                            active={this.state.items.length > 0}
                            style={{
                                backgroundColor:
                                    this.state.items.length > 0 ? colors.gold : colors.lightGray
                            }}
                            position="bottomRight"
                        >
                            <TouchableOpacity
                                onPress={() => {
                                }}
                            >
                                <Icon
                                    name="shopping-cart"
                                    type="FontAwesome"
                                    style={{ color: colors.white }}
                                />
                            </TouchableOpacity>
                        </Fab>
                    )}
                </Container>
            </Root>
        );
    }
}
