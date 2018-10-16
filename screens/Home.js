/**
 * Main Screen. Holds the tab navigation
 */

import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Container, Header, Content, Footer, FooterTab, Button, Text, Icon } from "native-base";

export default class Home extends Component {
    render() {
        return (
            <Container>
                <Header />
                <Content />
                <Footer>
                    <FooterTab>
                        <Button active>
                            <Icon name="list" />
                            <Text>Feed</Text>
                        </Button>
                        <Button>
                            <Icon name="map" />
                            <Text>Map</Text>
                        </Button>
                        <Button>
                            <Icon type="MaterialCommunityIcons" name="food" />
                            <Text>Shop</Text>
                        </Button>
                        <Button>
                            <Icon name="trophy" />
                            <Text>Rewards</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

const styles = StyleSheet.create({});
