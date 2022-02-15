import React from 'react';
import { Text, View } from 'react-native';
import { VictoryChart, VictoryGroup } from 'victory-native';

export const Estadisticas = () => {
    return (
        <View>
            <VictoryChart>
                <VictoryGroup>
                    <VictoryBar>
                        
                    </VictoryBar>
                </VictoryGroup>
            </VictoryChart>
        </View>
    );
};
