import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { BarChart, Bar, Brush, Cell, CartesianGrid, ReferenceLine, ReferenceDot,
  XAxis, YAxis, Tooltip, Legend, ErrorBar, LabelList, ResponsiveContainer } from 'recharts';
import NavBarContainer from "./nav_bar_container";
import { Link } from 'react-router-dom';
import { introJs } from 'intro.js';

class PollsShow extends React.Component {
  constructor(props){
    super(props);
    this.state = { id: this.props.match.params.id, got: false,};
    this.fetchPossibleResponses = this.props.fetchPossibleResponses.bind(this);
    this.handleEvents = this.handleEvents.bind(this);
    this.handleActive = this.handleActive.bind(this);
  }

  componentDidMount() {
    this.props.fetchQuestion(this.props.id);
    this.props.fetchPossibleResponses(this.props.id);
    this.props.clearErrors();
    this.channel.bind('my-event', this.handleEvents);
    this.props.fetchActive();
    introJs().start();
  }

  handleEvents(data){
    this.props.fetchPossibleResponses(this.props.id);
  }

  componentWillMount() {
    this.pusher = new Pusher('adbd6f81e6cb6851b188', {
      encrypted: true
    });

    this.channel = this.pusher.subscribe('response_channel');
  }



  componentWillReceiveProps(nextProps) {
    if(nextProps.id !== this.state.id){
      this.setState({id: nextProps.id});
      this.props.clearErrors();
      this.props.fetchQuestion(nextProps.id);
      this.props.fetchPossibleResponses(nextProps.id);
      this.props.fetchActive();
    }
  }

  componentWillUnmount() {
    this.channel.unbind();
  }

  renderErrors() {
    return this.props.errors.map((el, i) => {
      return <h1 key={i}>{el}</h1>;
    });
  }

  renderToolTip(props) {
    if (props.payload[0]){
      return(
        <div className="tool-tip">
          <h1>{props.label}</h1>
          <h2>Total Responses: {props.payload[0].payload.thisResponseCount}</h2>
          <h2>Percentage: {Math.round(props.payload[0].value * 100)}%</h2>
        </div>
        );
    }
  }

  handleActive(e) {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    if (this.props.id === this.props.activeId) {
      this.props.updateActive({question_id: null});
    } else {
      this.props.updateActive({question_id: this.props.question.id});
    }
  }

  render() {
    if(this.props.errors.length > 0) {
      return(
        <div>
          {this.renderErrors()}
        </div>
      );
    }

    if(this.props.question === undefined) {
      return(
        <h1></h1>
      );
    }
      let data = [];


      this.props.responses.forEach((resp, i) => {
        data.push(
          {
            name: resp.possible_response_name, responses: (resp.response_count) / this.props.responseCount, thisResponseCount: resp.response_count, amt: 100, time: 1
          }
        );
      });

      const ticks = [
        0, 0.2, 0.4, 0.6, 0.8, 1
      ];

      const toPercent = (decimal, fixed = 0) => {
	       return `${(decimal * 100).toFixed(fixed)}%`;
       };

    let buttonClassName = "";
    if (this.props.id === this.props.activeId) {
      buttonClassName = "active-button";
    }

    return (
      <div>
        <NavBarContainer />
        <div className="chart" >
          <h1 data-step="1" data-intro="Welcome to the polls show page!" >{this.props.question.body}</h1>
          <h2><i className="fa fa-link" aria-hidden="true"></i>  When poll is active, respond at <strong><Link to={"/" + this.props.currentUser}>omnipolls.site/#/{this.props.currentUser}</Link></strong></h2>
          <h2><strong>OR TEXT</strong> '{this.props.currentUser.toUpperCase()} YourResponseHere' to <strong>+1-609-957-6853</strong></h2>
          <h2><strong>Text answers are CaSe SeNsItIve</strong></h2>
          <div className="chart-buttons">
            <button className={buttonClassName} onClick={this.handleActive}
              data-step="2"
              data-intro='Before audience members can respond to this poll,
              <b>it must be active!</b><br /> <br />
              Click here to make your poll active.'
              >
              <i className="fa fa-link" aria-hidden="true"></i></button>
          </div>
          <div className="chart-container">
            <ResponsiveContainer width="95%" height="100%">
              <BarChart
                className="bar-chart"
                layout="vertical"
                data={data}
                textAnchor="middle"
                stackOffset="expand"
                overflow="visible"
                thisresponses="hi"
                margin={{top: 5, right: 50, left: 20, bottom: 5}}>
                <XAxis
                  domain={[0, 1]}
                  type="number"
                  ticks={ticks}
                  tickCount={5}
                  tickFormatter={toPercent}
                  stroke="#000"
                  fontSize={20 + "px"}
                  fontWeight="bold"
                  />
                <Tooltip content={this.renderToolTip}/>
                <YAxis type="category" dataKey="name" stroke="#000" fontSize={20 + "px"} fontWeight="bold" overflow="visible" />

                <Bar dataKey="responses" isAnimationActive="false" fill="rgb(60, 116, 158)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    );
  }

}

export default withRouter(PollsShow);
