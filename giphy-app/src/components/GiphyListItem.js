import React from 'react'

const GiphyListItem = ({gif}) => {
  const gifImageInfo = gif.images.fixed_height_small
  return (
    <div className="GiphyItem">
      <img src={gifImageInfo.url} alt='giphy'></img>
    </div>
  )
}

export default GiphyListItem
