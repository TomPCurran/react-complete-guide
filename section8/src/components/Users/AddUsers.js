import React, { useState, useRef } from 'react';
import Card from '../UI/Card';
import classes from './AddUsers.module.css';
import ErrorModal from '../UI/ErrorModal';
import Button from '../UI/Button';
import Wrapper from '../Helpers/Wrapper';

const AddUsers = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  //const [enteredUserName, setEnteredUserName] = useState('');
  //const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredUserName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({ title: 'Invalid Input', message: 'Enter valid name and age' });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter valid age',
      });
      return;
    }
    props.onAddUser(enteredUserName, enteredAge);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const errorHandler = () => {
    setError(null);
  };

  /*
  const usernameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

            value={enteredUserName}
            onChange={usernameChangeHandler}
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

            value={enteredAge}
            onChange={ageChangeHandler}
*/
  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label className={classes.input.label} htmlFor="username">
            Username:
          </label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age</label>
          <input label="age" type="number" ref={ageInputRef} />
          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUsers;
