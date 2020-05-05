import {StyleSheet} from 'react-native';
import * as colors from "../../constants/Colors"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    errorMessage: {
        color: colors.default.errorText,
        fontSize: 17,
        marginLeft:10,
    }
});

export default styles
