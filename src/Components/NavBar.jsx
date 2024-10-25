import React from 'react'

export default function NavBar() {
  return (
    <div className='navbar'>
        {/* side bar */}
        <div className="wrapper">
            <span>Anezi_Jane</span>
            <div className="social">
                <a href="http://" target="_blank" rel="noopener noreferrer"><img src="../assets/images/facebook.jpeg" alt="a facebook icon" /></a>
                <a href="http://" target="_blank" rel="noopener noreferrer"><img src="../assets/images/twitter.png" alt="a twitter icon" /></a>
                <a href="http://" target="_blank" rel="noopener noreferrer"><img src="../assets/images/linkdin.png" alt="a linkedin icon" /></a>
                <a href="http://" target="_blank" rel="noopener noreferrer"><img src="../assets/images/whatsapp.png" alt="a whatsapp icon" /></a>
            </div>
        </div>
      
    </div>
  )
}
