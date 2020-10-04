import React, { useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Button, Card, Layout, Text } from '@ui-kitten/components';
import * as WebBrowser from 'expo-web-browser';

const ImageCard = (props, { screen }) => (
    <React.Fragment>
        <Layout style={styles.topContainer} level='1'>
            <Card
                style={styles.card}
                onPress={() => WebBrowser.openBrowserAsync(props.data.link)}
            >
                <Text style={styles.text}>{props.data.title}</Text>
                <Text style={styles.lightText}>{props.data.text}</Text>
                <Image
                    style={styles.image}
                    source={{ uri: props.data.picture }}
                />
            </Card>
        </Layout>
    </React.Fragment>
);

export default ImageCard;

const styles = StyleSheet.create({
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    card: {
        flex: 1,
        margin: 2,
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    footerControl: {
        marginHorizontal: 2,
    },
    image: {
        width: 300,
        height: 180,
        marginTop: 10,
    },
    text: {
        fontWeight: 'bold',
    },
    lightText: {
        fontWeight: '900',
    },
});
