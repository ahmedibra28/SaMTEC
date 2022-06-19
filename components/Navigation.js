import Link from 'next/link'
import dynamic from 'next/dynamic'

const navItems = [
  { _id: 1, name: 'About Us', path: '/#about' },
  { _id: 2, name: 'Curriculum', path: '/#curriculum' },
  { _id: 3, name: 'Agribusiness', path: '/#agribusiness' },
  { _id: 4, name: 'Admissions', path: '/admission' },
  { _id: 5, name: 'Courses', path: '/courses' },
  { _id: 6, name: 'Impact', path: '/stories' },
  { _id: 8, name: 'Blog', path: '/blog' },
  { _id: 7, name: 'Contact Us', path: '/#contact' },
  { _id: 9, name: 'Login', path: 'https://dims.samtec.so' },
]

const Navigation = () => {
  return (
    <nav className='navbar navbar-expand-md navbar-dark bg-primary sticky-top'>
      <div className='container'>
        <Link href='/'>
          <a className='navbar-brand'>SaMTEC</a>
        </Link>

        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav ms-auto'>
            {navItems.map((nav) => (
              <li key={nav._id} className='nav-item'>
                <Link href={nav.path}>
                  <a className='nav-link active ' aria-current='page'>
                    {nav.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default dynamic(() => Promise.resolve(Navigation), { ssr: false })
