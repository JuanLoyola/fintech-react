import React, { Component } from 'react'

export default class Loader extends Component {
  render() {
    return (
      <div className='h-screen w-full bg-white flex justify-center items-center absolute top-0 right-0 left-0 bottom-0 z-50'>
        <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_E9gQ5b.json" mode="bounce" background="transparent" speed="1" autoplay></lottie-player>
      </div>
    )
  }
}
