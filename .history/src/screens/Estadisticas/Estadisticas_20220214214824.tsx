import React from 'react';
import { Text, View } from 'react-native';
import { VictoryBar, VictoryChart, VictoryGroup } from 'victory-native';

export const Estadisticas = () => {
    const data = {
        planned : [null, {x : 'Semana 1', y: 20}],
        actual : [
            {x : 'Semana 1', y: 50},
            {x : 'Semana 2', y: 30},
        ]
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
