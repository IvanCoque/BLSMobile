import React from 'react'
import { Text, View } from 'react-native'
import { HeaderTitle } from '../../components/HeaderTitle'
import styles from '../theme/appTheme'
export const ModalScreen = () => {
  return (
    <View>ModalScreen
        <HeaderTitle title='Modal Screen' >
            <Text style = {[{...styles.subtitle,marginVertical: 20}] }>
                    Escoja su diagnóstico
            </Text>
        </HeaderTitle>

    </View>
  )
}

