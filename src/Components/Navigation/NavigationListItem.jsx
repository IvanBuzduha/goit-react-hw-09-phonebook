import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { getIsAuthSelector } from "../../redux/auth/authSelector";

const NavigationListItem = ({ item, isAuth, location }) => {
  // const dispatch = useDispatch();
  // const item = () => dispatch([item]);
  // const isAuth = useSelector(getIsAuthSelector);
  // const location = useLocation();
  return (
    <>
      {!item.isPrivate && !item.isRestricted && (
        <li>
          <NavLink
            to={{
              pathname: item.path,
              state: { from: location.pathname },
            }}
            exact={item.exact}
          >
            {item.name}
          </NavLink>
        </li>
      )}

      {isAuth && item.isPrivate && !item.isRestricted && (
        <li>
          <NavLink
            to={{
              pathname: item.path,
              state: { from: location.pathname },
            }}
            exact={item.exact}
          >
            {item.name}
          </NavLink>
        </li>
      )}

      {!isAuth && !item.isPrivate && item.isRestricted && (
        <li>
          <NavLink
            to={{
              pathname: item.path,
              state: {
                from: location.pathname,
              },
            }}
            exact={item.exact}
          >
            {item.name}
          </NavLink>
        </li>
      )}
    </>
  );
};

export default NavigationListItem;
