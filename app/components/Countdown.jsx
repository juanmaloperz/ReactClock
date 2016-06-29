var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({
   getInitialState:function () {
     return { count:0,
     countdownStatus: 'stopped'
     };
   },

 componentDidUpdate: function(prevProps, prevState){
    if(this.state.countdownStatus !== prevState.countdownStatus){
      switch (this.state.countdownStatus){
        case 'started':
        this.starTimer();
        break;
      }
    }
 },
starTimer: function(){
  this.timer = setInterval(()=>{
    var newCount = this.state.count-1;
    this.setState({
      count: newCount >= 0 ? newCount : 0
    });
  },1000);
},
  handlesetCountdown:function(seconds){
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });
  },
render: function(){
  var {count} = this.state;
  return(
    <div>
       <Clock totalSeconds={count}/>
       <CountdownForm onSetCountdown={this.handlesetCountdown}/>
    </div>
  )

},
});

module.exports = Countdown;
