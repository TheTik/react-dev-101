// Class Components | Functional Components
// componentDidMount
// componentDidUpdate
// componentWillUnmount
// render

import React, { Component } from 'react';

class CounterClass extends React.Component {

  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  // componentDidMount() จะถูกเรียกใช้งานทันทีหลังการ render() 
  // เหมาะสำหรับการดึงข้อมูลจาก API การ set up subscriptions ต่าง ๆ 
  // และถ้าเราทำการ subscription แล้วอย่าลืม unsubscription ใน componentWillUnmount()
  componentDidMount() {
    console.log('Component DID MOUNT.');
  }

  // componentDidUpdate(prevProps, prevState) จะทำงานหลังการ render() 
  // แต่ไม่ถูกเรียกใช้ในการ render ครั้งแรก เราสามารถจัดการ DOM หรือ โหลดข้อมูลจาก API ได้ใน method นี้ 
  // และเราสามารถเช็คค่า props และ state ก่อนหน้านี้ได้ด้วย prevProps และ prevState
  // Side Effect
  componentDidUpdate(prevProps, prevState) {
    console.log('Component DID UPDATE.');

    // You can access the previous props and state here
    console.log('Previous state:', prevState);
    console.log('Current state:', this.state);
  }

  // componentWillUnmount() method นี้จะถูกเรียกใช้งานก่อนที่ component จะถูก unmount 
  // ทิ้งไปโดยปกติเราจะใช้เพื่อ reset ค่า network request, subscription
  componentWillUnmount() {
    console.log('Component WILL UNMOUNTED!');
  }

  // This method will be called when the "Increment" button is clicked
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  // render() เมื่อเรียกใช้มันจะทำการ return ค่าตาม this.props และ this.state
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
      </div>
    );
  }
}

export default CounterClass;