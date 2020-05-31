import React from "react"
import { Link } from "gatsby"
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const MenuItems = [
  {
    path: "/about",
    title: "About"
  },
  {
    path: "/contact",
    title: "Contact"
  },
]

const ListLink = (props) => (<li><Link to={props.to}>{props.children}</Link></li>)


class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {showMenu: false}

    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ({      
      showMenu: !state.showMenu    
    }))
  }

  render () {
    const listMenuItems = MenuItems.map((menuItem, index) => 
      <ListLink key={index} to={menuItem.path}>{menuItem.title}</ListLink>
    )
    return (
      <nav className="site-navigation">
        <button onClick={this.handleToggleClick} className={"menu-trigger" + (this.state.showMenu ? " is-active" : "")}>
          <div className="icon-menu-line"><RiMenu3Line/></div>
          <div className="icon-menu-close"><RiCloseLine/></div>
        </button>
        <ul>
          <div class="dropdown">
          <Link>// Work</Link>
            <div class="dropdown-content">
              <ul>
                <li><Link to={'/art'}>Art</Link></li>
                <li><Link to={'/cid'}>Comics | Illustrations | Design</Link></li>
                <li><Link to={'/film'}>Film & Video</Link></li>
                <li><Link to={'/workshops'}>Teachings & Workshop</Link></li>
                <li><Link to={'/production'}>Production</Link></li>
              </ul>
            </div>
          </div>
          {listMenuItems}
        </ul>
      </nav>
    )
  }
}

export default Navigation
