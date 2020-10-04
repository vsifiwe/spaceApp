import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Root from './Navigation/index.js';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';

export default function App() {
    return (
        <ApplicationProvider {...eva} theme={eva.light}>
            <Root />
            <StatusBar style='auto' />
        </ApplicationProvider>
    );
}
