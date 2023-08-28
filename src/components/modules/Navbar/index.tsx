import ActiveLink from './ActiveLink'

const Navbar = () => (
  <nav>
    <ul className='nav'>
      <li>
        <ActiveLink url='/'>Home</ActiveLink>
      </li>
      <li>
        <ActiveLink url='/about'>About</ActiveLink>
      </li>
      <li>
        <ActiveLink url='/blog'>Blog</ActiveLink>
      </li>
    </ul>
  </nav>
)

export default Navbar
