import React from 'react'
import logo from './projektlogga.png'
import twitter from './sweTwitter.jpg'
import "./Header.css"
import { GoSearch, GoInfo, GoLocation, GoHome, GoThumbsup } from 'react-icons/go';
import Hamburgermenu from "./Hamburgermenu"
import Media from 'react-media';

class Header extends React.Component {

  constructor() {
    super();

    this.state = {
      displayMenu: false,
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
    this.handleClick = this.handleClick.bind(this);
  };

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });
  }

  handleClick(e, val) {
    e.preventDefault();
    console.log('The link was clicked. Value: ' + val);
    this.props.setActiveMainPage(val);
  }

  render() {
    return (
      <header className="main-head">

        <img className="logo" src={logo} alt="Logo" />
        <h1 className="headerText">
          WINTER OLYMPIC GAMES 2024
                </h1>
        <Media query="(max-width: 1199px)">
          {matches =>
            matches ? (
              <Hamburgermenu />
            ) : (
                <nav className="myNavbar">
                  <ul className="ul">
                    <li className="current li" ><a className="active" href="/" onClick={(e) => this.handleClick(e, 'home')}><GoHome /> Home</a></li>
                    <li className="li" ><a href="/" onClick={(e) => this.handleClick(e, 'search')}><GoSearch /*style={style} */ /> New trip</a></li>
                    <li className="li" ><a href="/" onClick={(e) => this.handleClick(e, 'info')}><GoInfo /> Information</a></li>
                    <li className="li" >
                      <a href="/" onClick={this.showDropdownMenu}><GoLocation /> Locations</a>
                      {this.state.displayMenu ? (
                        <ul>
                          <li><a className="active" href="/" onClick={(e) => this.handleClick(e, 'stockholm')}>Stockholm</a></li>
                          <li><a href="/" onClick={(e) => this.handleClick(e, 'falun')}>Falun</a></li>
                          <li><a href="/" onClick={(e) => this.handleClick(e, 'are')}>Åre</a></li>
                        </ul>
                      ) :
                        (null)
                      }
                    </li>
                    <li className="li" ><a href="/" onClick={(e) => this.handleClick(e, 'recommend')}><GoThumbsup /> Recommendations</a></li>
                  </ul>
                </nav>
              )
          }
        </Media>

      </header>
    )
  }
}

export default Header;