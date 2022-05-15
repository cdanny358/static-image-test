import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image'
import Icon from '/src/images/icon.png'

const IndexPage = () => {
  return (
    <main>
      <StaticImage src='/src/images/icon.png' alt='' /> {/* FAILS */}
      <StaticImage src='../images/icon.png' alt='' /> {/* WORKS */}
      <img src={Icon} alt='' /> {/* WORKS */}
    </main>
  )
}

export default IndexPage
