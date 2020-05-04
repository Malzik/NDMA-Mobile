import {Platform, StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    buttonGrid: {
        flex: 1,
        flexDirection: 'row',
        alignContent: 'stretch',
        flexWrap: 'wrap'
    },
    sectionHeader: {
        flex: 1,
        fontSize: 15,
        fontWeight: '600',
        alignItems: 'center',
        backgroundColor: '#636e72',
        color: 'white',
        padding: 10,
    },
});
