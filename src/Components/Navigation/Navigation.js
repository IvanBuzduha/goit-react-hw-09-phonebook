import React from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import mainRoutes from "../../routes/mainRoutes";
import { logout } from "../../redux/auth/authActions";
import NavigationListItem from "./NavigationListItem";
import UserInfo from "../UserInfo/UserInfo";
import { getIsAuthSelector } from "../../redux/auth/authSelector";

const Navigation = () => {
  const dispatch = useDispatch();
  const signOut = () => {
    dispatch(logout());
    window.location.reload();
  };
  const isAuth = useSelector(getIsAuthSelector);
  const location = useLocation();
  return (
    <>
      <ul className="flex justify-between items-center">
        {mainRoutes.map((item) => (
          <NavigationListItem
            item={item}
            location={location}
            key={item.path}
            isAuth={isAuth}
          />
        ))}
        {isAuth && (
          <li className="flex items-center">
            <UserInfo />
            <button
              className="w-full px-6 py-1  text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-green-500 hover:bg-green-800 hover:shadow-lg focus:outline-none"
              type="button"
              onClick={signOut}
            >
              Log out
            </button>
          </li>
        )}
      </ul>
    </>
  );
};
export default Navigation;
// const mapStateToProps = (state) => ({
//   isAuth: state.auth.token.idToken,
// });

// export default connect(mapStateToProps, { logout })(withRouter(Navigation));
