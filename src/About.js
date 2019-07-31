import React from 'react'

export default function About() {
  const styles = {
    color: '#007bff',
  }
  return (
    <div>
      <p style={{ lineHeight: 1.8 }}>
        The purpose of this application is to provide a simple interface for looking up a word.
        Most other online dictionaries are extremely cluttered and filled with irrelevant information, like "words of the day", ads, articles, etc. 
        Oftentimes, you can't find slang in a normal dictionary, and urban dictionary isn't great for "real" definitions.
        Simple dictionary gives you both and tries to keep things simple: just the meanings and a few example sentences. 
        This site uses <a href="https://rapidapi.com/community/api/urban-dictionary" style={styles}>the unofficial urban dictionary api</a> and 
        <a href="https://rapidapi.com/twinword/api/word-dictionary" style={styles}> the word dictionary api</a> to fetch the info that's most relevant to most people.
      </p>
      <p>
        This app was purely created for my learning purposes and uses (mostly) free APIs. The dictionary is not monetized in any form.   
      </p>
    </div>
  )
}
