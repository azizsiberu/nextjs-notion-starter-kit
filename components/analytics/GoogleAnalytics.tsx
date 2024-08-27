import Script from 'next/script'
import React from 'react'

interface GoogleAnalyticsProps {
  measurementId: string
}

export default function GoogleAnalytics({
  measurementId
}: GoogleAnalyticsProps) {
  return (
    <React.Fragment>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy='afterInteractive'
      />
      <Script id='google-analytics' strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}');
        `}
      </Script>
    </React.Fragment>
  )
}
