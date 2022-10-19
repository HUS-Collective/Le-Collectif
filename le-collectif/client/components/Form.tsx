import React from 'react'
import { useRef } from 'react';

type Props = {
  formType: string,
}

const Form = (props: Props) => {
  // useRef is a generic type
  // all of the HTML elements have built types
  // we also have to pass in an initial value as a parameter
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  // you need to pass a type to event, because the event is a form event, set that as it's type
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    // the question mark (optional chaining) makes it so ts looks at value, and if there is not a value, null is assigned
    const enteredText = todoTextInputRef.current?.value;

    if (enteredText?.trim().length === 0) return;
    
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor='text'>{props.formType}</label>
      <input type='text' id='text' ref={todoTextInputRef}/>
      <button>submit</button>
    </form>
  )
}
export default Form;