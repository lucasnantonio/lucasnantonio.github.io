import React, { useState } from 'react'
import PhraseWithFootnote from '../components/phraseWithFootnote'

const Hello = () => {
  const [allPhrases, setAllPhrases] = useState(true)
  const [selectedPhrase, setSelectedPhrase] = useState(0)
  return (
    <div className="vh-75">
      <h1 className={`w-50-l pt4 pr4-l f3 mb6 lh-copy ${allPhrases ? 'black-50' : 'black-10'}`}>
        <span onMouseOver={() => setSelectedPhrase(0)} className={`b ${allPhrases ? 'black' : 'black-10'}`} >Lucas Neumann
        </span>
        <span > — product designer working with </span>
        <PhraseWithFootnote index={1} selectedPhrase={selectedPhrase} setSelectedPhrase={setSelectedPhrase} phrase='some of the fastest-growing startups in the world' number='1'/><br></br>
        <PhraseWithFootnote index={2} selectedPhrase={selectedPhrase} setSelectedPhrase={setSelectedPhrase} phrase='to build cultures of customer understanding,' number='2'/><br></br>
        <PhraseWithFootnote index={3} selectedPhrase={selectedPhrase} setSelectedPhrase={setSelectedPhrase} phrase=' design products that empower users,' number='3'/><br></br>
        <PhraseWithFootnote index={4} selectedPhrase={selectedPhrase} setSelectedPhrase={setSelectedPhrase} phrase=' and grow healthy, happy design teams.' number='4'/><br></br><br></br>
        <PhraseWithFootnote index={5} selectedPhrase={selectedPhrase} setSelectedPhrase={setSelectedPhrase} phrase='Available for freelance work and coffee in New York.' number='5'/></h1>
      <div className="h3" onMouseOver={() => setSelectedPhrase(0)}></div>
    </div>)
}

export default Hello
