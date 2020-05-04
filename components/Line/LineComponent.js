import * as React from 'react';
import {Dimensions} from "react-native";
import {LineChart} from "react-native-line-chart";

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
                width={Dimensions.get('window').width} // from react-native
                height={220}
                chartConfig={{
                    backgroundColor: '#e26a00',
                    backgroundGradientFrom: '#fb8c00',
                    backgroundGradientTo: '#ffa726',
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16
                    }
                }}
                // bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 16
                }}
            />
        );
    }
}

export {LineComponent}
