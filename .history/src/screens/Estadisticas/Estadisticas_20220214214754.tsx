import React from 'react';
import { Text, View } from 'react-native';
import { VictoryBar, VictoryChart, VictoryGroup } from 'victory-native';

export const Estadisticas = () => {
    const data = {
        planned : [null, {c}]
    }

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
