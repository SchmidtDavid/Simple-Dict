import React, { useState, useEffect } from 'react'
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import ListGroup from 'react-bootstrap/ListGroup';
import { API } from './RapidApiFetch';
import { _Headers } from '../Config';

export function Definitions(props) {
  const [definitions, setDefinitions] = useState({
    definition: "",
    urban: "",
    examples: ""
  });
  
  //Asynchronously gets word information and updates the state. 
  useEffect( () => {
    (async () => {
      let definition = await API("https://twinword-word-graph-dictionary.p.rapidapi.com/definition/?entry=", props.word, _Headers.def_header);
      let urban = await API("https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=", props.word, _Headers.urban_header);
      let examples = await  API("https://twinword-word-graph-dictionary.p.rapidapi.com/example/?entry=", props.word, _Headers.ex_header);
      setDefinitions( prevState => ({
        definition : definition,
        urban : urban,
        examples : examples,
      }))
    })();
  }, [props.word]);
  
  return(
    <React.Fragment>
      {definitions.definition ? (
        <Tabs defaultActiveKey="def" id="word-info">
          <Tab eventKey="def" title="Definition">
          <ListGroup>
            {/* definitions.definition.meaning && definitions.definition.meaning.map(meaning => {
              console.log(meaning);
              return <li key={meaning}>{meaning}</li>;
            })*/}
          </ListGroup>
          </Tab>
          <Tab eventKey="urban" title="Urban Dictionary">
            {/* definitions.urban.list && definitions.urban.list.map(def => {
              console.log(def);
              return <li key={def}>{def}</li>;
            })*/}
          </Tab>
          <Tab eventKey="example" title="Example Sentences">
            {/*definitions.examples.example && definitions.examples.example.map(ex => {
              console.log(ex)
            return <li key={ex}>{ex}</li>})*/}
          </Tab>
        </Tabs>
      ): (null)}
    </React.Fragment>
  )
}