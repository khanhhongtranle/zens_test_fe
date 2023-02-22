import logo from '../logo.svg';

const Header = () => {
  return (
    <header className="header layout">
      <div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className='right-logo'>
        <div>
          <p className='name-1'>Handicrafted by</p>
          <p>Jim HLS</p>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </header>
  )
}
export default Header;