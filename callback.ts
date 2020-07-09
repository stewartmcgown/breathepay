export interface BreatheCallbackPayload {
    /**
     * Always A numeric code providing the outcome
     *   of the transaction:
     *   Possible values are:
     *   0 - Successful / authorised transaction.
     *   1 - Card referred – Refer to card issuer.
     *   2 - Card referred – Special condition.
     *   4 - Card declined – Keep card.
     *   5 - Card declined.
     *   Check responseMessage for more
     *   details of any error that occurred.
     *   Refer to appendix A-1 for details.
     */
    responseCode: 0 | 1 | 2 | 4 | 5;

    /**
     * Always The message received from the
     *   Acquiring bank, or any error message.
     */
    responseMessage: string;

    /**
     * Always A unique ID assigned by the Gateway.
     */
    transactionID: number;

    /**
     * Always You may store the cross reference for
     * repeat transactions.
     */
    xref: string;

    /**
     * Always Transaction state.
     * Refer to appendix A-12.2 for details.
     */
    state: string;
    /**
     * Always Time the transaction was created or last modified.
     */
    timestamp: string;

    /**
     *  If supplied Any value supplied in the initial request.
     */
    transactionUnique: any;

    /**
     *  On success Authorisation code received from Acquirer.
     */
    authorisationCode: string;

    /**
     *  If provided Telephone number supplied by Acquirer
     * to phone for voice authorisation. Most
     * Acquirers do not provide this number.
     */
    referralPhone: string;

    /**
     * On success The amount the Acquirer authorised.
     * This should always be the full amount
     * requested.
     */
    amountReceived: number;

    /**
     * If supplied Any value supplied in the initial request.
     */
    orderRef: string;

    /**
     * Always Card number masked so only the last 4 digits are visible.
     */
    cardNumberMask: string;

    /**
     *  Always The code of card used. Refer to appendix A-9 for details
     */
    cardTypeCode: string;

    /**
     * Always The description of the card used. Refer to appendix A-9 for details.
     */
    cardType: string;

    /**
     * Always The code of the card scheme used. Refer to appendix A-9 for details.
     */
    cardSchemeCode: string;

    /**
     * Always The description of the card scheme
     * used.
     * Refer to appendix A-9 for details.
     */
    cardScheme: string;

    /**
     *  Always The card issuer (when known).
     */
    cardIssuer: string;

    /**
     * Always Name of card issuing country (when
     * known).
     */
    cardIssuerCountry: string;

    /**
     *  Always ISO-3166 Alpha 2 code of the card
     * issuing country (when known).
     */
    cardIssuerCountryCode: string;
}
