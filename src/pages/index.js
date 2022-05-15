import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image'
import Icon from '/src/images/icon.png'

const IndexPage = () => {
  return (
    <main>
      <StaticImage src='/src/images/icon.png' alt='' />
      <img src={Icon} alt='' />
    </main>
  )
}

export default IndexPage
