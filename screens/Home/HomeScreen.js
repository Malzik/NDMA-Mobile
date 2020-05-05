import * as React from 'react';
import {RefreshControl, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import styles from './style'

import {Home} from "../../components/Home/HomeComponent"
import {bindActionCreators} from "redux";
import * as actions from "../../store/actions/action";
import {connect} from "react-redux";

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
           arrayData: []
        }
    }

    async componentDidMount() {
        await this.getData().then(() => {
            const arrayData = [];
            this.props.reducer.data.forEach(sensor => {
                arrayData.push({
                    value: sensor.value,
                    unit: sensor.unit,
                    title: sensor.name,
                    color: "#" + ((1 << 24) * Math.random() | 0).toString(16),
                    type: sensor.name === ("HUM") ? "humidity" : "temperature"
                })
            });
            this.setState({
                arrayData,
                refreshing:false
            });
        });
    }

    async getData() {
        await this.props.getData();
    }

    doRefresh() {
        alert("hello");
    }

    render() {
        if(this.state.arrayData.length > 0){
            return (
                <View style={styles.container}>
                    <ScrollView
                        style={styles.container}
                        contentContainerStyle={styles.contentContainer}
                        refreshControl={<RefreshControl refreshing={this.state.refreshing} onRefresh={this.doRefresh}/>}
                    >
                        <Home data={this.state.arrayData} navigation={this.props.navigation}/>
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
)(HomeScreen);

HomeScreen.navigationOptions = {
  header: null,
};

