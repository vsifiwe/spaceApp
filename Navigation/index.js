import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import HomeScreen from '../Screens/HomeScreen';
import PlaylistScreen from '../Screens/PlaylistScreen';
import PictureScreen from '../Screens/PictureScreen';

function SettingsScreen({ navigation }) {
    return (
        <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
            <Text>Settings screen</Text>
            <Button
                title='Go to Playlist'
                onPress={() => navigation.navigate('Playlist')}
            />
        </View>
    );
}

const HomeStack = createStackNavigator();

function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name='Videos' component={HomeScreen} />
            <HomeStack.Screen name='Playlist' component={PlaylistScreen} />
        </HomeStack.Navigator>
    );
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen name='Settings' component={SettingsScreen} />
            <SettingsStack.Screen name='Playlist' component={PlaylistScreen} />
        </SettingsStack.Navigator>
    );
}

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Videos') {
                            iconName = focused
                                ? 'ios-videocam'
                                : 'ios-videocam';
                        } else if (route.name === 'Playlist') {
                            iconName = focused ? 'ios-list-box' : 'ios-list';
                        } else if (route.name === 'Pictures') {
                            iconName = focused ? 'ios-albums' : 'ios-albums';
                        }

                        // You can return any component that you like here!
                        return (
                            <Ionicons
                                name={iconName}
                                size={size}
                                color={color}
                            />
                        );
                    },
                })}
                tabBarOptions={{
                    activeTintColor: '#000080',
                    inactiveTintColor: 'gray',
                }}
            >
                <Tab.Screen name='Videos' component={HomeStackScreen} />
                <Tab.Screen name='Playlist' component={PlaylistScreen} />
                <Tab.Screen name='Pictures' component={PictureScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
