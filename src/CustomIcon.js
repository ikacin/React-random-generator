import React from 'react'
import { View, Text } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

 const Gadget = () => (
    <View>
            // if no style prefix is given, icon defaults to a solid icon -->
            <FontAwesomeIcon icon="fa-square-check" />

            <Text>Popular gadgets come from vendors like:</Text>

            // regular icon
            <FontAwesomeIcon icon="fa-regular fa-flux-capacitor" />

            // light icon
            <FontAwesomeIcon icon="fa-light fa-alien" />

            // thin icon
            <FontAwesomeIcon icon="fa-thin fa-car" />

            // duotone icon
            <FontAwesomeIcon icon="fa-duotone fa-car-bolt" />

            // sharp solid icon
            <FontAwesomeIcon icon="fa-sharp fa-solid fa-car-bolt" />
    </View>
)

export default Gadget