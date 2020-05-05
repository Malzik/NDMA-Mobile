import * as React from 'react';
import {Dimensions} from "react-native";
import {LineChart} from "react-native-line-chart";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";

class LineComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {
                labels: this.props.data.labels,
                datasets: this.props.data.datasets
            }
        }
    }

    render() {
        return (
            <LineChart
                data={this.state.data}
                width={wp(100)-20} // from react-native
                height={wp(50)}
                chartConfig={{
                    backgroundColor: '#0093ff',
                    backgroundGradientFrom: '#6d00ff',
                    backgroundGradientTo: '#00ffec',
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 5
                    }
                }}
                // bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 5
                }}
            />
        );
    }
}

export {LineComponent}
