import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export function SearchBar(props) {

  const inRef = React.createRef(); // refs are apparently the standard way to do this
  const callBack = props.callBack;

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchTerm = inRef.current.value;
    if (!searchTerm) {
      return;
    }
    callBack(searchTerm); // From SearchWidget, to pass search term and conditionally render Definitions.js
  }
  return (
      <Form
        onSubmit={handleSubmit}
      >
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Word"
            aria-label="Word"
            aria-describedby="basic-addon2"
            ref={inRef}
          />
          <InputGroup.Append>
            <Button variant="outline-secondary" type="submit">Search</Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>
  )
}