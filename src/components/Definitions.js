import React from 'react'
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import ListGroup from 'react-bootstrap/ListGroup';
import { API } from './RapidApiFetch';
import { _Headers } from '../Config';

export function Definitions(props) {

  let definition = API("https://twinword-word-graph-dictionary.p.rapidapi.com/definition/?entry=", props.word, _Headers.def_header);
  let urban = API("https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=", props.word, _Headers.urban_header);
  let examples = API("https://twinword-word-graph-dictionary.p.rapidapi.com/example/?entry=", props.word, _Headers.ex_header);
  
/*   props.search("hi", definition, urban, examples); */

  console.log(definition);
  console.log(urban);
  console.log(examples);

  return(
      <Tabs defaultActiveKey="def" id="word-info">
        <Tab eventKey="def" title="Definition">
        <ListGroup>
          { definition.meaning && definition.meaning.map(meaning => {
            console.log(meaning);
            return <li key={meaning}>{meaning}</li>;
          })}
        </ListGroup>
        </Tab>
        <Tab eventKey="urban" title="Urban Dictionary">
          { urban.list && urban.list.map(def => {
            console.log(def);
            return <li key={def}>{def}</li>;
          })}
        </Tab>
        <Tab eventKey="example" title="Example Sentences">
          {examples.example && examples.example.map(ex => {
            console.log(ex)
            return <li key={ex}>{ex}</li>})}
        </Tab>
      </Tabs>
  )
}