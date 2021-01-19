import { Package } from "frontity/types";

/**
 * Analytics package to use Microsoft Clarity with Frontity.
 */
interface MicrosoftClarity extends Package {
  /**
   * Package name.
   */
  name: "microsoft-clarity";

  /**
   * The state exposed by this package.
   */
  state: {
    /**
     * State properties for the Microsoft Clarity  package.
     */
    microsoftClarity: {
      /**
       * Clarity tracking code.
       */
      trackingCode?: string;
    };
  };

}

export default MicrosoftClarity;
