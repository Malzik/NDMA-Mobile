import * as React from 'react';
import {Text, View} from 'react-native';
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
            id: this.props.route.params.id,
            temperature: null,
            unit: null,
            data: {}
        }
    }

    async componentDidMount(): void {
        await this.getSensorData(this.state.id).then(() => {
            this.props.navigation.setOptions({title: this.props.reducer.sensor.title});
            this.setState({
                temperature: this.props.reducer.sensor.temperature,
                unit: this.props.reducer.sensor.unit,
                data: this.props.reducer.sensor.data
            });
        });
    }

    async componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS): void {
        if (this.state.id !== this.props.route.params.id) {
            await this.getSensorData(this.props.route.params.id);
            this.setState({
                id: this.props.route.params.id
            })
        }
    }

    async getSensorData(id) {
        await this.props.getSensorData(id);
    }

    render() {
        if (this.state.temperature !== null) {
            return (
                <View style={styles.container}>
                    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                        <Text>{this.state.id}</Text>
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

