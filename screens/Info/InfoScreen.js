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
            name: this.props.route.params.title,
            temperature: null,
            unit: null,
            data: {}
        }
    }

    async componentDidMount(): void {
        await this.getSensorData(this.state.name).then(() => {
            this.props.navigation.setOptions({title: this.state.name});

            let temperature = this.props.reducer.sensor.data[this.props.reducer.sensor.data.length - 1].value;
            this.setState({
                temperature: temperature,
                unit: this.props.reducer.sensor.unit,
                data: this.props.reducer.sensor.data
            });
        });
    }

    async componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS): void {
        if (this.state.name !== this.props.route.params.title) {
            await this.getSensorData(this.props.route.params.title);
            this.setState({
                name: this.props.route.params.title
            })
        }
    }

    async getSensorData(name) {
        await this.props.getSensorData(name);
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

