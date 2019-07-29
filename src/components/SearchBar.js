import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import DataFetch from './DataFetch';

export function SearchBar() {

  const inRef = React.createRef(); // refs are apparently the standard way to do this

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchTerm = inRef.current.value;
    console.log(searchTerm);
    DataFetch(searchTerm);
  }
  return (
      <Form
        onSubmit={handleSubmit}
      >
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Name"
            aria-label="Show name"
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