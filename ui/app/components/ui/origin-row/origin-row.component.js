import React from 'react'
import PropTypes from 'prop-types'
import SiteIcon from '../site-icon'

const OriginRow = (props) => {
  const { origin, originMetadata } = props
  return (
    <div className="origin-row">
      <div className="origin-row__text">Origin:</div>
      {originMetadata?.icon ? (
        <div className="origin-row-item">
          <SiteIcon
            icon={originMetadata.icon}
            name={originMetadata.name}
            size={24}
          />
          <div className="origin-row-item__text">{origin}</div>
        </div>
      ) : (
        <div className="origin-row-item__text">{origin}</div>
      )}
    </div>
  )
}

OriginRow.propTypes = {
  origin: PropTypes.string.isRequired,
  originMetadata: PropTypes.object,
}

export default OriginRow
