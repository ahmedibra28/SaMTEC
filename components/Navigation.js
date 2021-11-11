import Link from 'next/link'
import dynamic from 'next/dynamic'

const Navigation = () => {
  return (
    <nav className='navbar navbar-expand-sm navbar-light bg-light'>
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
      </div>
    </nav>
  )
}

export default dynamic(() => Promise.resolve(Navigation), { ssr: false })
