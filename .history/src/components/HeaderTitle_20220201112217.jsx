import React from 'react';
import { styles } from '../theme/appTheme';
import {useSa}
export const HeaderTitle = () => {
    
    const {top} = useSafeAreaInsets();
    return(
        <View style = {{
            marginTop : top+20,
            marginBottom : 20
        }}>
            <Text style = {styles.title}>
                {title}
            </Text>
        </View>
    );
};
