import {useState} from "react";
import "./View.css";
import {Chart} from "react-google-charts";

const Player = () => {
    const [viewChange, setViewChange] = useState(1);
    return (
        <div className="view-container">
            <div className="view-button">
                <button onClick={() => setViewChange(1)}>OverView</button>
                <button onClick={() => setViewChange(2)}>Data</button>
                <button onClick={() => setViewChange(3)}>Chart</button>
            </div>
            {viewChange == 1 && (
                <div>
                    <h1>This is View port 1</h1>
                    <Chart
                        chartType="ScatterChart"
                        data={[
                            ["Age", "Weight"],
                            [4, 5.5],
                            [8, 12],
                        ]}
                        width="100%"
                        height="80%"
                        legendToggle
                    />
                </div>
            )}
            {viewChange == 2 && <div>
                <h1>This is View port 2</h1>
                <Chart
                    chartType="ScatterChart"
                    data={[
                        ["Age", "Weight"],
                        [4, 5.5],
                        [8, 12],
                    ]}
                    width="100%"
                    height="80%"
                    legendToggle
                />
            </div>}
            {viewChange == 3 && <div>
                <h1>This is View port 3</h1>
                <Chart
                    chartType="ScatterChart"
                    data={[
                        ["Age", "Weight"],
                        [4, 5.5],
                        [8, 12],
                    ]}
                    width="100%"
                    height="50vh"
                    legendToggle
                />
            </div>}
        </div>
    );
};

export default Player;
