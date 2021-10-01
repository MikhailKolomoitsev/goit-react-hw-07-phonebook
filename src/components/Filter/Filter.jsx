import React from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {changeFilter} from "redux/actions";
import { useSelector,useDispatch} from "react-redux";
import { getFilter } from "redux/selectors";

export default  function Filter (){
  const id = uuidv4();
  const dispatch=useDispatch()
  const value=useSelector(getFilter)
  const onChange=event=>{
    event.preventDefault()
    dispatch(changeFilter(event.target.value))
  }
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
