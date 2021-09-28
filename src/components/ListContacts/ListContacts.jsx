import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useEffect } from "react";
import {fetchContacts} from '../../redux/operations'
import { useSelector, useDispatch } from "react-redux";


export default function ListContacts() {
   const dispatch = useDispatch()
   useEffect(() => {
    dispatch(fetchContacts())
   }, [dispatch])

  return (<ul>
    <h2>At least</h2>
    {/* {contacts && contacts.map(({ id, name, number }) => (
      <li key={id}>
        {name} {number}
        <button onClick={() => onClick(id)} type="button">
          delete
        </button>
      </li>
    ))} */}
  </ul>)
}

// ListContacts.propTypes = {
//   contacts: PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.number,
//     PropTypes.array,
//   ]),
//   onClick: PropTypes.func.isRequired,
// };

// const filteredContactList = (fullList, filter) => {
//   const filterValueNorm = filter.toLowerCase();
//   return fullList.filter((contact) =>
//     contact.name.toLowerCase().includes(filterValueNorm)
//   );
// }

// const mapStateToProps = ({ contacts: { items, filter } }) => ({
//   contacts: filteredContactList(items, filter)
// })
// const mapDispatchTooProps = dispatch => ({
//   onClick: (id) => dispatch(ations.deleteContact(id))
// })

// export default connect(mapStateToProps, mapDispatchTooProps)(ListContacts)