import React, { Component } from 'react'

export default class Hero extends Component {
    render() {
        return (
            <div className='w-full h-screen flex justify-center items-center'>
                <div className='w-full lg:max-w-3xl flex justify-between items-center px-12 text-sm'>
                    <span className="flex flex-col">
                        <h1>Compare and apply free</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, sapiente? Atque accusantium praesentium doloribus maxime! Illo, mollitia.</p>
                    </span>
                </div>
            </div>
        )
    }
}
