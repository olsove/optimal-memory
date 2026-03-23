import React from 'react'
import { Navbar } from 'nextra-theme-docs'

const config = {
  navbar: (
    <Navbar
      logo={<span>SQL Performance</span>}
      projectLink="https://github.com/shuding/nextra-docs-template"
      chatLink="https://discord.com"
    />
  ),
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: <span>Nextra Docs Template</span>,
}

export default config
