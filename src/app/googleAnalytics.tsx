import Script from 'next/script'

export function GoogleAnalytics() {
  return (
    <>
      <Script id="tag_manager" strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=G-9WF73KYX2M" />
      <Script id="gtag_script_runner">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-9WF73KYX2M');
        `}
      </Script>
    </>
  )
}
