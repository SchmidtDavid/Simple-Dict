//import React from 'react'
import { _Config } from "../Config";

//Fetches Definition, Urban Dictionary Def, and Example sentences
export default async function DataFetch(word, def, urban, example) {
  fetch(`https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${word}`, {
    method: 'GET',
    headers: {'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com', 'X-RapidAPI-Key': `${_Config.RAPID_API_KEY}`},
  })
  .then(res => res.json())
  .then(data => Object.assign(urban, data))
  .catch(error => console.log(error))

  // Generates the definition of a word
  fetch(`https://twinword-word-graph-dictionary.p.rapidapi.com/definition/?entry=${word}`, {
    method: 'GET',
    headers: {'X-RapidAPI-Host': 'twinword-word-graph-dictionary.p.rapidapi.com', 'X-RapidAPI-Key': `${_Config.RAPID_API_KEY}`},
  })
  .then(res => res.json())
  .then(data => Object.assign(def, data))
  .catch(error => console.log(error))

  // Generates an example sentence
  fetch(`https://twinword-word-graph-dictionary.p.rapidapi.com/example/?entry=${word}`, {
    method: 'GET',
    headers: {'X-RapidAPI-Host': 'twinword-word-graph-dictionary.p.rapidapi.com', 'X-RapidAPI-Key': `${_Config.RAPID_API_KEY}`},
  })
  .then(res => res.json())
  .then(data => Object.assign(example, data))
  .catch(error => console.log(error))
}