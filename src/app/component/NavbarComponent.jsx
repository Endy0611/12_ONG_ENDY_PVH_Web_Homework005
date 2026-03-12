"use client"
import React from 'react'

export default function NavbarComponent() {
  return (
    <div>
      <div className="container-fluid m-auto flex justify-between bg-gray-900 p-2 shadow-2xs">
        <div className="flex justify-center align-center">
          <img
            src="https://preview.redd.it/random-question-but-does-anyone-have-versions-of-this-cat-v0-ya8qikz9kn0f1.png?width=640&crop=smart&auto=webp&s=2487b53aa5d4ac4e710f7717a6850c83562272ab"
            className="rounded-[50%] border-2 border-white w-12 h-12"
            alt=""
          />
          <p className="text-2xl p-2 font-bold">Dashboard</p>
        </div>
        <input
          id="taskInput"
          type="text"
          placeholder="search by item name..."
          className="block w-[15%] border-2 border-blue-800/60 rounded-xl px-5 py-2.5 outline-none focus:border-blue-600"
        />
      </div>
    </div>
  )
}