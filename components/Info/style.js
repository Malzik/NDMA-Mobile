import {Platform, StyleSheet} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";

export default StyleSheet.create({
    container: {
        backgroundColor: "#55F",
        width: wp(50),
        height: wp(50),
        borderRadius: 5,
        paddingLeft: 7,
        paddingRight: 7,
        alignItems: 'center',
        justifyContent: 'center'
    },
    value: {
        fontSize: 50,
        color: 'white',
    },
    title: {
        fontSize: 16,
        color: 'white',
    }
});

