import React from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import actions from "redux/actions";

export default  function Filter ({ value, onChange }){
  const id = uuidv4();
  return (
    <>
      <label htmlFor={id}>   </label>
      <input id={id} type="text" value={value} onChange={onChange} />
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

// const mapStateToProps = (state) => ({
//   value: state.contacts.filter,

// })

// const mapDispatchToProps = dispatch => ({
//   onChange: (e) => dispatch(actions.changeFilter(e.target.value))
// })

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);
