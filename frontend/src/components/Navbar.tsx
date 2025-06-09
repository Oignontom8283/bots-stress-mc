import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
      <nav className='bg-gray-200 border-r border-gray-300'>

        <div className='text-lg font-bold text-center mb-4 border-b border-gray-300 p-3'>
          Bots Dashboard
        </div>

        <div className='p-2'>
          <ul className="menu bg-base-200 rounded-box w-56">
            <li><Link to="/">Home</Link> </li>
            <li><Link to="/bots">Bots</Link> </li>
          </ul>
        </div>
      </nav>

  );
}
