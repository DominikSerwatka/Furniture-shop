import React from 'react';
import { useState } from 'react';

function RegisterPage() {
  const [nameFocus, setNameFocus] = useState(false);
  const [lastNameFocus, setLastNameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [passwordButton, setPasswordButton] = useState(false);

  const slashEye = 'fa-solid fa-eye-slash';
  const eye = 'fa-solid fa-eye';

  return (
    <>
      <section className="pt-40 bg-gray-50 px-4 pb-60">
        <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow">
          <h2 className="text-2xl font-bold mb-6 text-center">Zarejestruj się</h2>
          <form onSubmit={null} className="space-y-4">
            <div className="relative">
              {nameFocus && (
                <label
                  htmlFor="firstName"
                  className="absolute left-3 -top-3 px-1 text-s text-gray-500 bg-white"
                >
                  Imię
                </label>
              )}

              <input
                type="text"
                name="firstName"
                id="firstName"
                value={null}
                onChange={null}
                onFocus={() => setNameFocus(true)}
                onBlur={() => setNameFocus(false)}
                placeholder={nameFocus ? '' : 'Imię'}
                className="mt-1 block w-full border rounded-md px-3 py-2 hover:bg-gray-50"
              />
              {/* {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>} */}
            </div>

            <div className="relative">
              {lastNameFocus && (
                <label
                  htmlFor="lastName"
                  className="absolute left-3 -top-3 px-1 text-s text-gray-500 bg-white"
                >
                  Nazwisko
                </label>
              )}
              <input
                type="text"
                name="lastName"
                value={null}
                onChange={null}
                className="mt-1 block w-full border rounded-md px-3 py-2 hover:bg-gray-50"
                onFocus={() => setLastNameFocus(true)}
                onBlur={() => setLastNameFocus(false)}
                placeholder={lastNameFocus ? '' : 'Nazwisko'}
              />
              {/* {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>} */}
            </div>

            <div className="relative">
              {emailFocus && (
                <label
                  htmlFor="email"
                  className="absolute left-3 -top-3 px-1 text-s text-gray-500 bg-white"
                >
                  Email
                </label>
              )}
              <input
                type="email"
                name="email"
                value={null}
                onChange={null}
                className="mt-1 block w-full border rounded-md px-3 py-2 hover:bg-gray-50"
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
                placeholder={emailFocus ? '' : 'Email'}
              />
              {/* {errors.email && <p className="text-red-500 text-sm">{null}</p>} */}
            </div>

            <div className="relative">
              {passwordFocus && (
                <label
                  htmlFor="Hasło"
                  className="absolute left-3 -top-3 px-1 text-s text-gray-500 bg-white"
                >
                  Hasło
                </label>
              )}
              <input
                type="password"
                name="password"
                value={null}
                onChange={null}
                className="mt-1 block w-full border rounded-md px-3 py-2 hover:bg-gray-50"
                onFocus={() => setPasswordFocus(true)}
                onBlur={() => setPasswordFocus(false)}
                placeholder={passwordFocus ? '' : 'Hasło'}
              />
              <button
                type="button"
                onClick={() => setPasswordButton((prevState) => !prevState)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-black focus:outline-none"
                tabIndex={-1}
              >
                <i className={passwordButton ? slashEye : eye}></i>
              </button>
              {/* {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>} */}
            </div>

            <button
              type="submit"
              className="w-full border border-black text-dark py-2 px-4 rounded-md hover:bg-gray-200 transition"
            >
              Zarejestruj się
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default RegisterPage;
