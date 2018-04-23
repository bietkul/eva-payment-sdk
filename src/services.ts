import { API_HOST, URLS } from './config';

export function getPaymentOptions(payload: GetPaymentOptionsPayload): Promise<any> {
    return fetch(API_HOST + URLS.GET_PAYMENT_METHODS, {
        method: 'POST',
        headers: {
            'Authorization': 'Basic d3NfNzE0NjExQENvbXBhbnkuUml0dWFsc0Nvc21ldGljczo0WH5BekA/fls3bTFFaWp6QnRccXl2eyND',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
}

export function makePayment(payload: MakePaymentPayload): Promise<any> {
    return fetch(API_HOST + URLS.MAKE_PAYMENT, {
        method: 'POST',
        headers: {
            'Authorization': 'Basic d3NfNzE0NjExQENvbXBhbnkuUml0dWFsc0Nvc21ldGljczo0WH5BekA/fls3bTFFaWp6QnRccXl2eyND',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
}