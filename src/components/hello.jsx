import React, { useState } from 'react'
import PhraseWithFootnote from '../components/phraseWithFootnote'

const Hello = () => {
  const [selectedPhrase, setSelectedPhrase] = useState(0)
  const items = [
    { index: 1,
      phrase: 'the fastest-growing startups in the world ¹',
      links: [
        { title: 'Fintech decacorn Nubank raises $400M led by TCV', source: 'Tech Crunch', url: '#' },
        { title: 'Petal: 5th fastest growing company of 2019', source: 'Growjo.com', url: '#' },
        { title: 'Kano Ships Its First 18,000 Learn-To-Code Computer Kits, Fueled By $1.5M Kickstarter', source: 'Tech Crunch', url: '#' }] },
    { index: 2,
      phrase: ' to improve customer understanding, ²',
      links: [
        { title: 'First steps to better UX research', source: 'Medium by @lucasnantonio', url: 'https://medium.com/nubank-design/first-steps-for-better-ux-research-6fd863af7c6d' },
        { title: 'Listening to user feedback', source: 'Medium by @lucasnantonio', url: 'https://medium.com/nubank-design/listening-to-user-feedback-b8380a37e781' }] },
    { index: 3,
      phrase: ' design empowering products, ³',
      links: [
        { title: 'How we designed our bank account', source: 'Medium by @lucasnantonio', url: 'https://medium.com/nubank-design/nuconta-part-ii-685b446addc6' },
        { title: 'Kano makes building your own computer and learning to code as easy as legos', source: 'Yahoo! Finance', url: 'https://finance.yahoo.com/news/kano-makes-building-own-computer-171146207.html' }] },
    { index: 4,
      phrase: 'and grow healthy, happy design teams. ⁴',
      links: [
        { title: 'Design principles at Nubank', source: 'Medium by @lucasnantonio', url: 'https://medium.com/nubank-design/design-principles-at-nubank-d14317715bb1' },
        { title: 'Scaling a design team culture', source: 'Medium by @gneumann', url: 'https://medium.com/nubank-design/scaling-a-design-team-and-culture-bde035f50e5c' }] }
    // { index: 6,
    //   phrase: 'Available for freelance and coffee in New York.⁶',
    //   links: [
    //     { title: 'Twitter', source: '@lucasnantonio', url: 'http://twitter.com/lucasnantonio' },
    //     { title: 'Email', source: 'lucasneumann.fau@gmail.com', url: 'http://twitter.com/lucasnantonio' },
    //     { title: 'Linkedin', source: '@lucasnantonio', url: 'http://twitter.com/lucasnantonio' }] }
  ]
  return (
    <div className='pt6'>
      <div className="flex flex-column justify-between pb5">
        <div className="flex flex-column justify-between">
          <h1 className={`mt0 f2 black-50`}>
            <span className='lh-copy'> Product designer working with </span><br className="dib-l dn"></br>
            {items.filter((item) => item.index <= 6)
              .map((item) => {
                return (
                  <span key={item.index}>
                    <PhraseWithFootnote index={item.index} selectedPhrase={selectedPhrase} setSelectedPhrase={setSelectedPhrase} phrase={item.phrase} number={item.index}/><br className="dib-l dn"></br>
                    {(item.index === 4 || item.index === 5 || item.index === 7) && <br></br>}
                  </span>
                )
              })}
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Hello
