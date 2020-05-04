import {Platform, StyleSheet} from "react-native";

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
        fontSize: 35,
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

