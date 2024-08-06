import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebaseconfig";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../utils/userSlice";
const Header = () => {
  const user = useSelector((store) => store.user);
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigation("/");
        dispatch(removeUser());
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <>
      <section className="sticky top-0 h-auto min-h-16 z-[1]">
        <div
          className="main-header has-billboard menu-navigation flex items-center relative z-[2] h-16 bg-gradient-to-b from-black"
          role="navigation"
        >
          <div className="w-44">
            <img
              src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
              alt="logo"
            />
          </div>

          <a
            href="/browse"
            className="logo icon-logoUpdate active"
            aria-label="Netflix"
          />
          {user && (
            <>
              <ul className="tabbed-primary-navigation  items-center m-0 p-0 hidden sm:flex">
                <li className="navigation-menu ml-5 block custom:hidden">
                  <a
                    className="menu-trigger"
                    role="button"
                    aria-haspopup="true"
                    href="/browse"
                    tabIndex={0}
                  >
                    Browse
                  </a>
                </li>
                <li className="navigation-tab ml-5">
                  <a href="/browse" className="current active">
                    Home
                  </a>
                </li>
                <li className="navigation-tab ml-5">
                  <a href="/browse/genre/83">TV Shows</a>
                </li>
                <li className="navigation-tab ml-5">
                  <a href="/browse/genre/34399">Movies</a>
                </li>
                <li className="navigation-tab ml-5">
                  <a href="/latest">New &amp; Popular</a>
                </li>
                <li className="navigation-tab ml-5">
                  <a href="/browse/my-list">My List</a>
                </li>
                <li className="navigation-tab ml-5">
                  <a href="/browse/original-audio">Browse by Languages</a>
                </li>
              </ul>
              <div className="secondary-navigation hidden">
                <div className="nav-element">
                  <div className="searchBox">
                    <button
                      className="searchTab"
                      tabIndex={0}
                      aria-label="Search"
                      data-uia="search-box-launcher"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        role="img"
                        data-icon="MagnifyingGlassStandard"
                        aria-hidden="true"
                        className="search-icon"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10ZM15.6177 17.0319C14.078 18.2635 12.125 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 12.125 18.2635 14.078 17.0319 15.6177L22.7071 21.2929L21.2929 22.7071L15.6177 17.0319Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="nav-element show-kids">
                  <a href="/Kids">Children</a>
                </div>
                <div className="nav-element">
                  <span className="notifications">
                    <button
                      className="notifications-menu"
                      aria-haspopup="true"
                      aria-expanded="false"
                      aria-label="Notifications"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        role="img"
                        data-icon="BellStandard"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13.0002 4.07092C16.3924 4.55624 19 7.4736 19 11V15.2538C20.0489 15.3307 21.0851 15.4245 22.1072 15.5347L21.8928 17.5232C18.7222 17.1813 15.4092 17 12 17C8.59081 17 5.27788 17.1813 2.10723 17.5232L1.89282 15.5347C2.91498 15.4245 3.95119 15.3307 5.00003 15.2538V11C5.00003 7.47345 7.60784 4.55599 11.0002 4.07086V2H13.0002V4.07092ZM17 15.1287V11C17 8.23858 14.7614 6 12 6C9.2386 6 7.00003 8.23858 7.00003 11V15.1287C8.64066 15.0437 10.3091 15 12 15C13.691 15 15.3594 15.0437 17 15.1287ZM8.62593 19.3712C8.66235 20.5173 10.1512 22 11.9996 22C13.848 22 15.3368 20.5173 15.3732 19.3712C15.3803 19.1489 15.1758 19 14.9533 19H9.0458C8.82333 19 8.61886 19.1489 8.62593 19.3712Z"
                          fill="currentColor"
                        />
                      </svg>
                      <span className="notification-pill">9</span>
                    </button>
                  </span>
                </div>
                <div className="nav-element">
                  <div className="account-menu-item">
                    <div className="account-dropdown-button">
                      <a
                        href="/YourAccount"
                        role="button"
                        tabIndex={0}
                        aria-haspopup="true"
                        aria-expanded="false"
                        aria-label="Ragul – Account & Settings"
                      >
                        <span className="profile-link" role="presentation">
                          <img
                            className="profile-icon"
                            src="https://occ-0-3252-1009.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXYofKdCJceEP7pdxcEZ9wt80GsxEyXIbnG_QM8znksNz3JexvRbDLr0_AcNKr2SJtT-MLr1eCOA-e7xlDHsx4Jmmsi5HL8.png?r=1d4"
                            alt=""
                          />
                        </span>
                      </a>
                      <span className="caret" role="presentation" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute lg:right-16 inline-block text-left z-[3]">
                <div className="flex items-center">
                  <span className="mr-4 text-white">Children</span>
                  <span className="relative mr-4">
                    <span className="absolute top-[-8px] right-[-8px] inline-block w-[17px] h-[17px] bg-red-600 text-white text-xs leading-tight rounded-full">
                      10
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      role="img"
                      data-icon="BellStandard"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.0002 4.07092C16.3924 4.55624 19 7.4736 19 11V15.2538C20.0489 15.3307 21.0851 15.4245 22.1072 15.5347L21.8928 17.5232C18.7222 17.1813 15.4092 17 12 17C8.59081 17 5.27788 17.1813 2.10723 17.5232L1.89282 15.5347C2.91498 15.4245 3.95119 15.3307 5.00003 15.2538V11C5.00003 7.47345 7.60784 4.55599 11.0002 4.07086V2H13.0002V4.07092ZM17 15.1287V11C17 8.23858 14.7614 6 12 6C9.2386 6 7.00003 8.23858 7.00003 11V15.1287C8.64066 15.0437 10.3091 15 12 15C13.691 15 15.3594 15.0437 17 15.1287ZM8.62593 19.3712C8.66235 20.5173 10.1512 22 11.9996 22C13.848 22 15.3368 20.5173 15.3732 19.3712C15.3803 19.1489 15.1758 19 14.9533 19H9.0458C8.82333 19 8.61886 19.1489 8.62593 19.3712Z"
                        fill="white"
                      ></path>
                    </svg>
                  </span>
                  <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm  bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
                    id="options-menu"
                  >
                    <img
                      className="profile-icon"
                      src="https://occ-0-3252-1009.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXYofKdCJceEP7pdxcEZ9wt80GsxEyXIbnG_QM8znksNz3JexvRbDLr0_AcNKr2SJtT-MLr1eCOA-e7xlDHsx4Jmmsi5HL8.png?r=1d4"
                      alt="profile-icon"
                    ></img>
                  </button>
                </div>

                <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-black  ring-1 ring-black ring-opacity-5  transition-opacity duration-200">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <a
                      href="/"
                      className="flex items-center px-4 py-2 text-sm text-white hover:cursor-pointer"
                      role="menuitem"
                    >
                      <span className="inline-block w-4 h-4 bg-pink-500 rounded-full mr-2"></span>
                      Kids
                    </a>
                    <a
                      href="/"
                      className="flex items-center px-4 py-2 text-sm text-white hover:cursor-pointer"
                      role="menuitem"
                    >
                      <svg
                        className="w-5 h-5 mr-2 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 11H7m10 0a5 5 0 00-5-5v0a5 5 0 00-5 5m10 0v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6"
                        ></path>
                      </svg>
                      Manage Profiles
                    </a>
                    <a
                      href="/"
                      className="flex items-center px-4 py-2 text-sm text-white hover:cursor-pointer"
                      role="menuitem"
                    >
                      <svg
                        className="w-5 h-5 mr-2 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12h-3m3 0a2 2 0 01-2 2 2 2 0 01-2-2m4 0H7m4 0a2 2 0 01-2-2 2 2 0 012-2m0 4v6m0-6a2 2 0 01-2-2 2 2 0 012-2m0 0v6m0-6a2 2 0 012-2 2 2 0 012 2v0a2 2 0 01-2 2m0-4v6m0-6a2 2 0 00-2-2 2 2 0 00-2 2v0a2 2 0 002 2m0-4v6"
                        ></path>
                      </svg>
                      Transfer Profile
                    </a>
                    <a
                      href="/"
                      className="flex items-center px-4 py-2 text-sm text-white hover:cursor-pointer"
                      role="menuitem"
                    >
                      <svg
                        className="w-5 h-5 mr-2 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M11 17h2a2 2 0 002-2v-1a2 2 0 012-2h1a2 2 0 002-2V7a2 2 0 00-2-2h-1a2 2 0 01-2-2V2a2 2 0 00-2-2h-2a2 2 0 00-2 2v1a2 2 0 01-2 2H7a2 2 0 00-2 2v1a2 2 0 01-2 2H2a2 2 0 00-2 2v2a2 2 0 002 2h1a2 2 0 012 2v1a2 2 0 002 2h2z"
                        ></path>
                      </svg>
                      Account
                    </a>
                    <a
                      href="/"
                      className="flex items-center px-4 py-2 text-sm text-white hover:cursor-pointer"
                      role="menuitem"
                    >
                      <svg
                        className="w-5 h-5 mr-2 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 11h4m-2-2v4m-6-4h1a2 2 0 012 2v1m0-1a2 2 0 012 2v1m0-1a2 2 0 012 2v1m0-1a2 2 0 012 2v1m0-1a2 2 0 012 2v1m0-1a2 2 0 012 2v1m0-1a2 2 0 012 2v1m0-1a2 2 0 012 2v1m0-1a2 2 0 012 2v1m0-1a2 2 0 012 2v1m0-1a2 2 0 012 2v1m0-1a2 2 0 012 2v1m0-1a2 2 0 012 2v1m0-1a2 2 0 012 2v1m0-1a2 2 0 012 2v1m0-1a2 2 0 012 2v1m0-1a2 2 0 012 2v1m0-1a2 2 0 012 2v1m0-1a2 2 0 012 2v1m0-1a2 2 0 012 2v1m0-1a2 2 0 012 2v1m0-1a2 2 0 012 2v1m0-1a2 2 0 012 2v1m0-1a2 2 0 012 2v1"
                        ></path>
                      </svg>
                      Help Centre
                    </a>
                    <div className="border-t border-gray-100"></div>
                    <a
                      href="/#"
                      onClick={() => handleSignout()}
                      className="block px-4 py-2 text-sm text-white hover:cursor-pointer"
                      role="menuitem"
                    >
                      Sign out of Netflix
                    </a>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Header;
