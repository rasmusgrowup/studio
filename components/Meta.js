import Head from 'next/head'

function Meta({ title, keywords, description }) {
  return (
    <Head>
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="description" content={description} key='description'/>
      <meta name="keywords" content={keywords} key='keywords' />
      <meta name="og:title" content={title} key='title'/>
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'Growup Studio | Odenseansk designstudie | React, Next.js og Shopify-løsninger',
  keywords: 'Webdesign, webudvikling, hjemmeside, netbutik, webshop, react, next.js, shopify, grafisk design, identitetsdesign, billig hjemmeside, skræddersyet, tilpasset, redesign, visuel identitet, identitetsdesign, billeder, video, art direction, SEO, optimering, vurdering, salg, produkter, packshots, billedstil, webbureau, konsultation, digitale løsninger, apps, hosting, webløsning, tilbud, headless, javascript',
  description: 'Vi er et lille, nærværende designteam fra Odense C. Vi har 4 års erfaring i at levere smukke hjemmesider og visuelt design, skræddersyet til kunden.'
}

export default Meta
