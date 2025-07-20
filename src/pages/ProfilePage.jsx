import React from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

function ProfilePage() {
  const { isLoggedIn, currentUser } = useAuth();

  if (isLoggedIn) {
    return (
      <section className="pt-40 bg-gray-50 min-h-screen px-4 pb-20">
        <div className="max-w-6xl mx-auto bg-white rounded-md shadow flex">
          <aside className="w-1/4 border-r p-6 space-y-4">
            <h2 className="text-xl font-semibold mb-4">Witaj, {currentUser.name}</h2>
            <nav className="py-1">
              <Link
                to="/orders"
               className="block w-full text-left px-3 py-3 rounded hover:bg-gray-100" 
              >
                Moje zamówienia
              </Link>
              <Link
                to="/returns"
                className="block w-full text-left px-3 py-3 rounded hover:bg-gray-100"
              >
                Zwroty i reklamacje
              </Link>
              <Link
                to="/settings"
                className="block w-full text-left px-3 py-3 rounded hover:bg-gray-100"
              >
                Ustawienia konta
              </Link>
              <Link
                to="/payments"
                className="block w-full text-left px-3 py-3 rounded hover:bg-gray-100"
              >
                Adressy i płatności
              </Link>
              <Link
                to="/opinions"
                className="block w-full text-left px-3 py-3 rounded hover:bg-gray-100"
              >
                Opinie
              </Link>             
            </nav>
          </aside>

          <main className="w-3/4 p-6">
            <Outlet />
          </main>
        </div>
      </section>
    );
  } else {
    return (
      <section className="pt-40 bg-white px-4">
        <h2 className="text-xl font-bold text-center">Użytkownik nie jest zalogowany</h2>
      </section>
    );
  }
}

export default ProfilePage;
