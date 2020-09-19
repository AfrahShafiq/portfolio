import React from "react"
import { Link } from "gatsby"
import '../assets/scss/nav.css'


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
      // <nav className="site-navigation crux">
      //   <button onClick={this.handleToggleClick} className={"menu-trigger" + (this.state.showMenu ? " is-active" : "")}>
      //     <div className="icon-menu-line"><RiMenu3Line/></div>
      //     <div className="icon-menu-close"><RiCloseLine/></div>
      //   </button>
      //   <ul>
      //     <div class="dropdown">
      //     <Link>// Work</Link>
      //       <div class="dropdown-content">
      //         <ul>
      //           <li><Link to={'/art'}>Art</Link></li>
      //           <li><Link to={'/cid'}>Comics | Illustrations | Design</Link></li>
      //           <li><Link to={'/film'}>Film & Video</Link></li>
      //           <li><Link to={'/workshops'}>Teachings & Workshop</Link></li>
      //           <li><Link to={'/production'}>Production</Link></li>
      //         </ul>
      //       </div>
      //     </div>
      //     {listMenuItems}
      //   </ul>
      // </nav>
      <nav className='crux'>
      <div id="logo"><Link to='/'>afrah shafiq</Link></div>

        <label for="drop" class="toggle">menu</label>
        <input type="checkbox" id="drop" />
        <ul class="menu">
          <li>
            {/* <!-- First Tier Drop Down --> */}
            <label for="drop-1" class="toggle">work +</label>
            <a href="">work</a>
            <input type="checkbox" id="drop-1"/>
            <ul>
              <li><Link to={'/art'}>art</Link></li>
              <li><Link to={'/cid'}>comics | illustrations | design | animation</Link></li>
              {/* <li><Link to={'/cid'}>illustrations</Link></li>
              <li><Link to={'/cid'}>design</Link></li>
              <li><Link to={'/cid'}>animation</Link></li> */}
              <li><Link to={'/film'}>film & video</Link></li>
              <li><Link to={'/workshops'}>teaching & workshop</Link></li>
              <li><Link to={'/production'}>production</Link></li>
            </ul> 
          </li>
          <li>
            {/* <!-- First Tier Drop Down --> */}
            <label for="drop-2" class="toggle">about +</label>
            <a href="/about">about</a>
            <input type="checkbox" id="drop-2"/>
            <ul>
                <li><a href="/about">bio + cv</a></li>
                <li><a href="/press">press</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navigation
