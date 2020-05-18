import * as React from 'react';
import {LineChart} from "react-native-line-chart";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import * as moment from "moment";

class LineComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {
                labels: [],
                datasets: []
            }
        }
    }

    componentDidMount(): void {
        const labelsArray = [];
        const datasetsArray = [];
        this.props.data.forEach(value => {
            console.log(value);
            const date = moment(new Date(value.date.date)).format('H:m');
            labelsArray.push(date);
            datasetsArray.push(value.value)
        });
        this.setState({
            data: {
                labels: labelsArray,
                datasets: [{
                    data: datasetsArray
                }]
            }
        });
    }

    render() {
        if (this.state.data.labels.length > 0) {
            console.log(this.state.data);
            return (
                <LineChart
                    data={this.state.data}
                    width={wp(100) - 20} // from react-native
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
        return null;
    }
}

export {LineComponent}
