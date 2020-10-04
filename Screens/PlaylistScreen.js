import * as React from 'react';
import { Button, Text, View, ScrollView } from 'react-native';
import Card from '../Components/ImageCard';
import Data from '../Constants/Playlists';

function PlaylistScreen() {
    return (
        <View style={{ flex: 1, padding: 10 }}>
            <ScrollView>
                {Data.map((data, index) => (
                    <Card key={index} data={data} screen={data.screen} />
                ))}
            </ScrollView>
        </View>
    );
}

export default PlaylistScreen;
