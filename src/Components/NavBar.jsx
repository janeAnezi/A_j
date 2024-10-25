import React from 'react'

export default function NavBar() {
  return (
    <div className='navbar'>
        {/* side bar */}
        <div className="wrapper">
            <span>Anezi_Jane</span>
            <div className="social">
                <a href="https://github.com/janeAnezi?tab=repositories" target="_blank" rel="noopener noreferrer"><img src="/images/github.jpeg" alt="a facebook icon" /></a>
                <a href="https://x.com/AhnnieA" target="_blank" rel="noopener noreferrer"><img src="/images/twitter.png" alt="a twitter icon" /></a>
                <a href="https://www.linkedin.com/in/jane-anezi-a9771a238/"  target="_blank" rel="noopener noreferrer"><img src="/images/linkdin.png" alt="a linkedin icon" /></a>
                <a href="tel:+2347053882420"><img src="/images/whatsapp.png" alt="a whatsapp icon" /></a>
            </div>
        </div>
      
    </div>
  )
}
