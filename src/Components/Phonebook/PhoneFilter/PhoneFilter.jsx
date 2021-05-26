import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { filterSelector } from "../../../redux/phonebook/contactsSelector";
import { setFilter } from "../../../redux/phonebook/phonebookActions";

const PhoneFilter = () => {
  // console.log("Check filter", filter);

  const filter = useSelector(filterSelector);
  const dispatch = useDispatch();
  const setFilterValue = (e) => dispatch(setFilter(e.target.value));
  return (
    <label>
      Filter:
      <input
        type="text"
        value={filter}
        onChange={setFilterValue}
        placeholder="John Wick or +380000000000"
        className="pt-3 pl-4 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200 hover:outline-none hover:ring-0 hover:border-black border-gray-200"
      ></input>
    </label>
  );
};

export default PhoneFilter;

PhoneFilter.propTypes = {
  filter: PropTypes.string,
  setFilter: PropTypes.func,
};

// import React from "react";
// import PropTypes from "prop-types";
// const PhoneFilter = ({ filter, setFilter }) => {
//   // console.log("Check filter", filter);
//   return (
//     <label>
//       Filter:
//       <input
//         type="text"
//         value={filter}
//         onChange={setFilter}
//         placeholder="John Wick or +380000000000"
//         className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200 hover:outline-none hover:ring-0 hover:border-black border-gray-200"
//       ></input>
//     </label>
//   );
// };

// export default PhoneFilter;

// PhoneFilter.propTypes = {
//   filter: PropTypes.string,
//   setFilter: PropTypes.func,
// };
