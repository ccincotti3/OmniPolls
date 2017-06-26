import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { BarChart, Bar, Brush, Cell, CartesianGrid, ReferenceLine, ReferenceDot,
  XAxis, YAxis, Tooltip, Legend, ErrorBar, LabelList, ResponsiveContainer } from 'recharts';
import NavBarContainer from "./nav_bar_container";

class PollsShow extends React.Component {
  constructor(props){
    super(props);
    this.state = { id: this.props.match.params.id}
  }

  componentDidMount() {
    this.props.fetchQuestion(this.props.id)
    this.props.fetchPossibleResponses(this.props.id)
    this.props.clearErrors()
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.match.params.id !== this.state.id){
      this.setState({id: nextProps.match.params.id})
      this.props.clearErrors();
      this.props.fetchQuestion(nextProps.match.params.id);
      this.props.fetchPossibleResponses(nextProps.match.params.id);
    }
  }

  renderErrors() {
    return this.props.errors.map((el, i) => {
      return <h1 key={i}>{el}</h1>
    })
  }

  render() {
    if(this.props.errors.length > 0) {
      return(
        <div>
          {this.renderErrors()}
        </div>
      )
    }

    if(this.props.question === undefined) {
      return(
        <h1></h1>
      )
    }

    const data = [
      { name: 'food', responses: .7, amt: 100, time: 1 },
      { name: 'cosmetic', responses: .3, amt: 100, time: 2 },
      ]

      let fata = [];

      this.props.responses.forEach((resp, i) => {
        fata.push(
          {
            name: resp.possible_response_name, responses: .5, amt: 100, time: 1
          }
        )
      })

      const ticks = [
        0, 0.2, 0.4, 0.6, 0.8, 1
      ];

      const toPercent = (decimal, fixed = 0) => {
	       return `${(decimal * 100).toFixed(fixed)}%`;
       };

    return (
      <div>
        <NavBarContainer />

        <div className="chart">
          <h1>{this.props.question.body}</h1>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                layout="vertical"
                data={fata}
                textAnchor="middle"
                stackOffset="expand"
                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <XAxis
                  domain={[0, 1]}
                  type="number"
                  ticks={ticks}
                  tickCount={5}
                  tickFormatter={toPercent}
                  />
                <YAxis type="category" dataKey="name"  />
                <Bar dataKey="responses" fill="rgb(60, 116, 158)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    )
  }

}

export default withRouter(PollsShow);
