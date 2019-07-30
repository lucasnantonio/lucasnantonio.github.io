import React, { useState } from 'react'
import PhraseWithFootnote from '../components/phraseWithFootnote'

const Hello = () => {
  const [allPhrases, setAllPhrases] = useState(true)
  return (
    <div className="vh-75">
      <h1 className={`w-50-l pt4 pr4-l f3 mb6 lh-copy ${allPhrases ? 'black-50' : 'black-10'}`}>
        <span className={`b ${allPhrases ? 'black' : 'black-10'}`} >Lucas Neumann
          <span style={{ verticalAlign: '-.1em' }}> • </span>
        </span>
        <span className=""> product designer, has been helping some of the </span>
        <PhraseWithFootnote allPhrases={allPhrases} setAllPhrases={setAllPhrases} phrase='fastest-growing startups in the world' number='1'/>
        <PhraseWithFootnote allPhrases={allPhrases} setAllPhrases={setAllPhrases} phrase='build cultures of customer understanding,' number='2'/>
        <PhraseWithFootnote allPhrases={allPhrases} setAllPhrases={setAllPhrases} phrase=' design products that empower users,' number='3'/>
        <PhraseWithFootnote allPhrases={allPhrases} setAllPhrases={setAllPhrases} phrase=' and grow healthy, happy design teams.' number='4'/><br></br><br></br>
        <PhraseWithFootnote allPhrases={allPhrases} setAllPhrases={setAllPhrases} phrase='Available for freelance work and coffee in New York.' number='5'/></h1>
    </div>)
}

export default Hello
