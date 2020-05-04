import * as React from 'react';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import styles from './style'

import {LineComponent} from "../../components/Line/LineComponent";
import {InfoComponent} from "../../components/Info/InfoComponent";
import {bindActionCreators} from "redux";
import * as actions from "../../store/actions/action";
import {connect} from "react-redux";

class InfoScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            temperature: null,
            unit: null,
            data: {}
        }
    }

    async componentDidMount(): void {
        await this.getSensorData().then(() => {
            this.setState({
                temperature: this.props.reducer.sensor.temperature,
                unit: this.props.reducer.sensor.unit,
                data: this.props.reducer.sensor.data
            });
        });
    }

    async getSensorData() {
        await this.props.getSensorData(1);
    }

    render() {
        if (this.state.temperature !== null) {
            return (
                <View style={styles.container}>
                    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                        <InfoComponent temperature={this.state.temperature} unit={this.state.unit}/>
                        <LineComponent data={this.state.data}/>
                    </ScrollView>
                </View>
            );
        }
        return null;
    }
}

const mapStateToProps = (state) => {
    return state
};

const mapDispatchToProps = dispatch =>
    bindActionCreators({...actions}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InfoScreen);

