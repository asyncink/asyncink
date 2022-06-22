import React from 'react'

import Script from 'next/script'

export const Metrika: React.FC = () => (
  <>
    <Script strategy="lazyOnload" id="yandex-metrika">
      {`
        (function (d, w, c) {
          (w[c] = w[c] || []).push(function() {
            try {
              w.yaCounter87645946 = new Ya.Metrika({
                id:87645946,
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true
              });
            } catch(e) { }
          });
  
          var n = d.getElementsByTagName("script")[0],
              s = d.createElement("script"),
              f = function () { n.parentNode.insertBefore(s, n); };
          s.type = "text/javascript";
          s.async = true;
          s.src = "https://mc.yandex.ru/metrika/watch.js";
  
          if (w.opera == "[object Opera]") {
            d.addEventListener("DOMContentLoaded", f, false);
          } else { f(); }
        })(document, window, "yandex_metrika_callbacks");
      `}
    </Script>
    <noscript>
      <div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://mc.yandex.ru/watch/87645946"
          style={{ position: 'absolute', left: '-9999px' }}
          alt=""
        />
      </div>
    </noscript>
  </>
)
