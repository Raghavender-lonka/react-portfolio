import { slide as Menu } from "react-burger-menu"
import React from "react"
import Nav from "../../assests/R-logos/R-logos_black.png"
import SideBarContent from "./SideBarContent"

class Example extends React.Component {
  showSettings(event) {
    event.preventDefault()
  }
  // customBurgerIcon={<img src={Nav} />}
  render() {
    return (
      <Menu customBurgerIcon={<img src={Nav} alt="Nav" />}>
        <SideBarContent />
      </Menu>
    )
  }
}

export default Example
