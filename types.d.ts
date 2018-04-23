enum Channel {
    ios = 'iOS',
    android = 'Android'
}
type GetPaymentOptionsPayload  = {
    merchantAccount: string,
    amount?: number,
    channel?: Channel,
    countryCode?: string,
    shopperLocale?: string,
    shopperReference?: string
}
type GetPaymentOptionsResponse = {
    oneClickPaymentMethods?: Array<any>,
    paymentMethods?: Array<any>
}
type AdditionalData = {
    [key: string]: any
}
type MakePaymentPayload = {
    amount: number,
    merchantAccount: string,
    paymentMethod: object,
    /**
     * The reference to uniquely identify a payment.
     * This reference is used in all communication with you about the payment status.
     * We recommend using a unique value per payment; however, it is not a requirement. If you need to provide multiple references for a transaction, separate them with hyphens ("-"). Maximum length: 80 characters.
     */
    reference: string,
    // The URL to return to.
    returnUrl: string,
    metadata?: AdditionalData,
    orderReference?: string,
    additionalData?: AdditionalData,
    billingAddress?: string,
    captureDelayHours?: number // Int,
    channel?: Channel,
    company?: any,
    countryCode?: string // ISO 3166-1 alpha-2 Example: NL or DE,
    dateOfBirth?: string // Format ISO-8601: YYYY-MM-DD,

}
type ResultCodes = {
    /**
     * Indicates the payment authorisation was successfully completed.
     * This state serves as an indicator to proceed with the delivery of goods and services. This is a final state.
     */
    'Authorised',
    /**
     * Indicates the payment was refused. The reason is given in the refusalReason field.
     * This is a final state.
     */
    'Refused',
    /**
     * Indicates the shopper should be redirected to an external web page or app to complete the authorisation.
     */
    'RedirectShopper',
    /**
     * Indicates the payment has successfully been received by Adyen, and will be processed.
     * This is the initial state for all payments.
     */
    'Received',
    /**
     * Indicates the payment has been cancelled (either by the shopper or the merchant) before processing was completed.
     * This is a final state.
     */
    'Cancelled',
    /**
     * Indicates that it is not possible to obtain the final status of the payment.
     * This can happen if the systems providing final status information for the payment are unavailable,or if the shopper needs to take further action to complete the payment.
     */
    'Pending',
    /**
     * Indicates an error occurred during processing of the payment.
     * The reason is given in the refusalReason field. This is a final state.
     */
    'Error'
}
type MakePaymentResponse = {
    additionalData?: AdditionalData,
    details?: Array<any>,
    fraudResult?: any,
    /**
     * When non-empty, contains a value that you must submit to the /payments/details endpoint.
     */
    paymentData?: string,
    /**
     * When the payment flow requires a redirect, this object contains information about the redirect URL.
     */
    redirect?: string,
    refusalReason?: string,
    resultCode: ResultCodes
}