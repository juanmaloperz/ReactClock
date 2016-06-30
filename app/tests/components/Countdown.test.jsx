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

describe('handleSetCountdown', () =>{
  it('Shoud set state to started and coutdown',(done) =>{
    var countdown = TestUtils.renderIntoDocument(<Countdown/>)
    countdown.handleSetCountdown(10);

    expect(countdown.state.count).toBe(10);
    expect(countdown.state.countdownstatus).toBe('started');

    setTimeOut(() =>{
    expect(countdown.state.count).toBe(9);
      done();
    },1001)
});
    it('Shoud set state to 0 after time runs out',(done) =>{
      var countdown = TestUtils.renderIntoDocument(<Countdown/>)
      countdown.handleSetCountdown(2);

      setTimeOut(() =>{
      expect(countdown.state.count).toBe(0);
        done();
      },3001)
});
});
});