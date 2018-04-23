import * as React from 'react';
import { getPaymentOptions } from '../services';

type Props  = {
    render: Function,
    payload: GetPaymentOptionsPayload
}
type State = {
    paymentMethods: Array<any>,
    oneClickPaymentMethods: Array<any>,
    loading: boolean,
    error: any
}
class PaymentOptions extends React.Component<Props, State> {
    state = {
        paymentMethods: [],
        oneClickPaymentMethods: [],
        loading: false,
        error: undefined
    }
    componentDidMount() {
        const { payload } = this.props
        this.setState({
            loading: true
        }, async () => {
            try {
            const resInBlob = await getPaymentOptions(payload)
            const resInJson = await resInBlob.json()
            this.setState({
                loading: false,
                paymentMethods: resInJson.paymentMethods,
                oneClickPaymentMethods: resInJson.oneClickPaymentMethods
            })
        } catch (e) {
            this.setState({
                loading: false,
                error: e
            })
        }
        })
    }
    render() {
        const { render } = this.props
        return render(this.state)
    }
}

export default PaymentOptions