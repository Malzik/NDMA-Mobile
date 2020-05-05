import {Platform, StyleSheet} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";

export default StyleSheet.create({
    gridView: {
        marginTop: 20,
        flex: 1,
    },
    itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 5,
        padding: 10,
        height: 150,
    },
    itemValue: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        fontWeight: '600',
    },
    itemName: {
        fontWeight: '600',
        fontSize: 16,
        textAlign: 'center',
        color: '#fff',
    },
    image: {
        width: 50,
        height: 50
    }
});

