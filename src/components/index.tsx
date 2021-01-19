/* eslint-disable react/no-danger */
import { connect,Head } from "frontity";
import { Connect } from "frontity/types";
import React from "react";

import MicrosoftClarity from "../../types";

/**
 * Root component of the Microsoft Clarity package.
 *
 * It renders the Microsoft Clarity tag and set up each tracking ID defined in
 * the state.
 *
 * @remarks
 * This component is automatically rendered by Frontity and it's not meant to be
 * imported and used anywhere.
 *
 * @param props - Injected props by `connect`.
 *
 * @returns Root element.
 */
export const Root: React.FC<Connect<MicrosoftClarity>> = ({ state }) => {
  // Get Tracking ids from state.
  const { trackingCode } = state.microsoftClarity;

  // Render Tracker code.
  return (
    trackingCode.length > 0 && (
      <Head>
        <script>{`
(function(c,l,a,r,i,t,y){
  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "${trackingCode}");
`}</script>
      </Head>
    )
  );
};

export default connect(Root);
