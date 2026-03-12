import React from 'react'
import CardComponent from './CardComponent'
import BookmarkRowComponent from './BookmarkRowComponent'
import DynamicCardComponent from './DynamicCardComponent';

const MainComponent = ({items}) => {
  return (
    <>
    <DynamicCardComponent items={items}/>
    </>
    
  )
}

export default MainComponent