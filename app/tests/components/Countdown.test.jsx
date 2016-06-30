var React = require('react');
var ReactDOM = require('react-dom')
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');
var Countdown = require('Countdown');

describe('Countdown',()=> {
  it('should exist', () => {
    expect(Countdown).toExist();
  });

describe('handlesetCountdown', () =>{
  it('Shoud set state to started and coutdown',(done) =>{
    var countdown = TestUtils.renderIntoDocument(<Countdown/>)
    countdown.handlesetCountdown(10);

    expect(countdown.state.count).toBe(10);
    expect(countdown.state.countdownStatus).toBe('started');

    setTimeout(() =>{
    expect(countdown.state.count).toBe(9);
      done();
    },1001)
});
    it('Shoud set state to 0 after time runs out',(done) =>{
      var countdown = TestUtils.renderIntoDocument(<Countdown/>)
      countdown.handlesetCountdown(2);

      setTimeout(() =>{
      expect(countdown.state.count).toBe(0);
        done();
      },3001)
});
it('should pause the timer when the pause button is pressed',(done)=>{
   var countdown = TestUtils.renderIntoDocument(<Countdown/>)
   countdown.handlesetCountdown(3);
   countdown.handleStatusChange('paused');

   setTimeout(()=>{
     expect(countdown.state.count).toBe(3);
     expect(countdown.state.countdownStatus).toBe('paused');
     done();
   },1001);
    });
    it('should stopped the timer when the stoop button is pressed',(done)=>{
       var countdown = TestUtils.renderIntoDocument(<Countdown/>)
       countdown.handlesetCountdown(3);
       countdown.handleStatusChange('stopped');

       setTimeout(()=>{
         expect(countdown.state.count).toBe(0);
         expect(countdown.state.countdownStatus).toBe('stopped');
         done();
       },1001);
        });
});
});
