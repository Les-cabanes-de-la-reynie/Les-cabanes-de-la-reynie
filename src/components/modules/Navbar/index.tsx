import ActiveLink from './ActiveLink'

const Navbar = () => (
  <nav>
    <style jsx>{`
      .nav-link {
        text-decoration: none;
      }

      .active:after {
        content: ' (current page)';
      }
    `}</style>
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
