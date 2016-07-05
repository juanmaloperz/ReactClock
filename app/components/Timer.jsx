var React = require('react');
var Controls = require('Controls');
var Clock = require('Clock');

var Timer = React.createClass({
  getInitialState: function (){
    return {  count: 0,
      countupStatus: 'stopped'
    };
  },

  componentDidUpdate: function(prevProps, prevState){
       if(this.state.countupStatus != prevState.countupStatus){
         switch (this.state.countupStatus) {
           case 'started':
             this.starTime();
             break;
             case 'stopped':
             this.setState({count:0});
             case('paused'):
             clearInterval(this.timer)
             this.timer = undefined;
             break;
         }
       }
  },
  componentWillUnmount: function(){
    clearInterval(this.timer)
  },

  starTime: function(){
      this.timer = setInterval(()=>{
    var newCount = this.state.count+1;
    this.setState({
      count: newCount
    });
  },1000);
},
   handleStatusChange: function(newStatus){
this.setState({countupStatus :newStatus});
   },

/*  handlesetCountup: function(seconds){
    this.setState({
      count:seconds
    })
  },  */
render: function(){
  var {count , countupStatus} = this.state;
  return(
    <div>
      <h1 className="page-tittle"> Timer APP </h1>
       <Clock totalSeconds={count}/>
       <Controls countupStatus={countupStatus} onStatusChange={this.handleStatusChange}/>
    </div>
  )
},
});

module.exports = Timer;
