import * as React from 'react';
import { makePayment } from '../services';

type Props  = {
    render: Function
}
type State = {
    data: MakePaymentResponse
    loading: boolean,
    error: any
}
class MakePayment extends React.Component<Props, State> {
    state = {
        loading: false,
        error: undefined,
        data: undefined
    }
    makePayment = (payload: MakePaymentPayload) => {
        this.setState({
            loading: true
        }, async () => {
            try {
            const resInBlob = await makePayment(payload)
            const resInJson = await resInBlob.json()
            this.setState({
                loading: false,
                data: resInJson
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
        return render(Object.assign({}, this.state, { makePayment: this.makePayment }))
    }
}

export default MakePayment