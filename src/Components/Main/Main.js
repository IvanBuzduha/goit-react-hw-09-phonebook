import React, { Suspense, useEffect } from "react";
import Loader from "react-loader-spinner";
import { connect, useDispatch, useSelector } from "react-redux";
import { Switch } from "react-router-dom";
import { clearError } from "../../redux/auth/authActions";
import {
  errorSelector,
  getIsAuthSelector,
} from "../../redux/auth/authSelector";
import mainRoutes from "../../routes/mainRoutes";
import PrivateRoute from "../../routes/PrivateRoute";
import PublicRoute from "../../routes/PublicRoute";

const Main = () => {
  const isAuth = useSelector(getIsAuthSelector);
  const error = useSelector(errorSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        dispatch(clearError());
      }, 3000);
    }
  }, [error, dispatch]);

  return (
    <>
      <Suspense
        fallback={
          <Loader
            type="Oval"
            color="rgb(16, 185, 129)"
            height={50}
            width={50}
            className="  flex flex-wrap justify-center items-center/"
          />
        }
      >
        {error && <h3 className="text-red-500">{error}</h3>}
        <Switch>
          {mainRoutes.map((item) =>
            item.isPrivate ? (
              <PrivateRoute {...item} key={item.path} isAuth={isAuth} />
            ) : (
              <PublicRoute {...item} key={item.path} isAuth={isAuth} />
            )
          )}
        </Switch>
      </Suspense>
    </>
  );
};
export default Main;

// const Main = ({ isAuth, error, clearError }) => {
//   useEffect(() => {
//     if (error) {
//       setTimeout(() => {
//         clearError();
//       }, 3000);
//     }
//   }, [error, clearError]);

//   return (
//     <>
//       <Suspense
//         fallback={
//           <Loader
//             type="Oval"
//             color="rgb(16, 185, 129)"
//             height={50}
//             width={50}
//             className="  flex flex-wrap justify-center items-center/"
//           />
//         }
//       >
//         {error && <h3 className="text-red-500">{error}</h3>}
//         <Switch>
//           {mainRoutes.map((item) =>
//             item.isPrivate ? (
//               <PrivateRoute {...item} key={item.path} isAuth={isAuth} />
//             ) : (
//               <PublicRoute {...item} key={item.path} isAuth={isAuth} />
//             )
//           )}
//         </Switch>
//       </Suspense>
//     </>
//   );
// };

// const mapStateToProps = (state) => ({
//   isAuth: state.auth.token?.idToken,
//   error: errorSelector(state),
// });
// const mapDispatchToProps = (dispatch) => {
//   return {
//     clearError: () => {
//       dispatch(clearError());
//     },
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Main);
