import * as React from 'react';
import { Image, View, ScrollView, StyleSheet, Text } from 'react-native';
import Images from '../Constants/Images';

function PictureScreen() {
    return (
        <View style={{ flex: 1, padding: 10, backgroundColor: '#000000' }}>
            <ScrollView>
                {Images.map((image, index) => (
                    <View>
                        <Image
                            key={index}
                            style={styles.image}
                            source={{ uri: image.link }}
                        />
                        <Text key={index + 1} style={styles.text}>
                            {image.text}
                        </Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

export default PictureScreen;

const styles = StyleSheet.create({
    image: {
        height: 300,
        width: 350,
    },
    text: {
        color: '#ffffff',
        paddingLeft: 30,
    },
});
