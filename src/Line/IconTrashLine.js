import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'

export default class IconTrashLine extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconTrashLine"
        viewBox="0 0 1920 1920"
      >
        <svg version="1.1" viewBox="0 0 1920 1920">
	<path d="M1581.176 1750.588c0 31.06-25.411 56.47-56.47 56.47H395.294c-31.059 0-56.47-25.41-56.47-56.47V564.706H225.882v1185.882c0 93.403 76.01 169.412 169.412 169.412h1129.412c93.402 0 169.412-76.01 169.412-169.412V564.706h-112.942v1185.882zm-903.529-169.412h112.941V677.647h-112.94v903.53zm451.765 0h112.94V677.647h-112.94v903.53zm211.211-1242.352L1217.065 0H694.6L571.268 338.824H.01v112.94h1920v-112.94h-579.388zm-649.299 0l82.334-225.883h364.462l82.334 225.883h-529.13z" stroke="none" strokeWidth="1"/>
</svg>
      </SVGIcon>
    )
  }
}