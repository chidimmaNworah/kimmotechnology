import React from 'react'
import {BsTwitter, BsInstagram, BsLinkedin} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
      <a href="https://twitter.com/kimmotech" target="_blank">
        <BsTwitter />
      </a>
      </div>
      <div>
      <a href="https://www.linkedin.com/company/kimmotech/" target="_blank">
        <BsLinkedin />
      </a>
      </div>
      <div>
      <a href="https://www.facebook.com/profile.php?id=100084215682240" target="_blank">
        <FaFacebookF />
        </a>
      </div>
      <div>
      <a href="https://www.instagram.com/kimmotech/" target="_blank">
        <BsInstagram />
        </a>
      </div>
    </div>
  )
}

export default SocialMedia
