import React, { useState, useEffect } from 'react'
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import ListGroup from 'react-bootstrap/ListGroup';
import { API } from './RapidApiFetch';
import { _Headers } from '../Config';
import './Definitions.css';

export function Definitions(props) {
  const [definitions, setDefinitions] = useState({
    definition: "",
    urban: "",
    examples: ""
  });
  const [isLoaded, setIsLoaded] = useState(false);
  
  //Asynchronously gets word information and updates the state. 
  //This is technically unsafe, should eventually use some backend to handle the APIs. 
  useEffect( () => {
    (async () => {
      let definition = await API("https://twinword-word-graph-dictionary.p.rapidapi.com/definition/?entry=", props.word, _Headers.def_header);
      let urban = await API("https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=", props.word, _Headers.urban_header);
      let examples = await  API("https://twinword-word-graph-dictionary.p.rapidapi.com/example/?entry=", props.word, _Headers.ex_header);
      setDefinitions( () => ({
        definition : definition,
        urban : urban,
        examples : examples,
      }));
      setIsLoaded(true);
    })();
  }, [props.word]);

  function urbanStringHandler (string){
    let str = string;
    str = str.replace(/\]/g, '');
    str = str.replace(/\[/g, '');
    return str;
  }
  function definitionStringHandler(string){
    let str = string;
    str = str.replace(/\(nou\)/g, 'noun:');
    str = str.replace(/\(vrb\)/g, 'verb:');
    str = str.replace(/\(adv\)/g, 'adverb:');
    str = str.replace(/\(adj\)/g, 'adjective:');
/*     str = str.replace('\n', ''); // Remove first newline */
    return str;
  }

  let defs;
  let urb;
  let exs;
  
  // Any API could fail, this ensures I'm not accessing a field that doesn't exist
  if(isLoaded) {
    try{
      defs = definitions.definition.meaning;
    }catch (e){}
    try{
      urb = definitions.urban.list;
    }catch (e){}
    try{
      exs = definitions.examples.example;
    }catch (e){}
  }
  // I technically do unsafe/inaccurate checking here. Better would be to store state instead of checking against an arbitrary api call success
  return(
    <React.Fragment>
      {isLoaded ? (
        <Tabs defaultActiveKey="def" id="word-info">
          <Tab className="tab__link" eventKey="def" title="Definition">
            <ListGroup>
              {defs && Object.entries(defs).map(meaning => {
                return <ListGroup.Item key={meaning[0]}><pre>{`${definitionStringHandler(meaning[1]) || `${meaning[0]}: n/a`}`}</pre></ListGroup.Item>
              })}
            </ListGroup>
          </Tab>
          <Tab className="tab__link" eventKey="urban" title="Urban Dictionary">
            <ListGroup>
              {urb && urb.map(def => {
                return <ListGroup.Item key={def.definition}>{urbanStringHandler(def.definition)}</ListGroup.Item>;
              })}
            </ListGroup>
          </Tab>
          <Tab className="tab__link" eventKey="example" title="Example Sentences">
            <ListGroup>
              {exs && exs.map(ex => {
                return <ListGroup.Item key={ex}>{ex}</ListGroup.Item>})}
            </ListGroup>
          </Tab>
        </Tabs>
      ): (null)}
    </React.Fragment>
  )
}