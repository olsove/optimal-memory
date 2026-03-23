import React from 'react'
import { Navbar } from 'nextra-theme-docs'

const config = {
  navbar: (
    <Navbar
      logo={<span>SQL Performance</span>}
      projectLink="https://github.com/olsove/miniature-memory"
      chatLink="https://discord.com"
    />
  ),
  docsRepositoryBase: 'https://github.com/olsove/miniature-memory',
  footer: <span>SQL Performance</span>,
}

export default config
