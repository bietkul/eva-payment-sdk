
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Text, ListItem, List, Spinner } from 'native-base'
import { getPaymentOptions } from '../services';

type Props  = {

}
enum Channel {
    ios = 'iOS',
    android = 'Android'
}
type State = {
    paymentMethods: Array<any>,
    oneClickPaymentMethods: Array<any>,
    loading: boolean,
    error: any
}
class PaymentOptions extends Component<Props, State> {
    state = {
        paymentMethods: [],
        oneClickPaymentMethods: [],
        loading: false,
        error: undefined
    }
    componentDidMount() {
        this.setState({
            loading: true
        }, async () => {
            try {
            const resInBlob = await getPaymentOptions({
                merchantAccount: 'RIT-TST-GLOBAL',
                channel: Channel.ios
            })
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
    onPressPaymentMethod = (item) => {
        console.log('SOMETHING CALLED', item)
    }
    render() {
        const { paymentMethods, loading, error } = this.state;
        console.log(loading, error)
        return(
            <ScrollView>
                {loading && <Spinner/>}
                <Text>
                    This is Payment sdk
                </Text>
                <List>
                    {
                        paymentMethods.map((item) =>
                        <ListItem onPress={() => this.onPressPaymentMethod(item)} key={item.name + item.type}>
                            <Text>{item.name}</Text>
                        </ListItem>)
                    }
                </List>
            </ScrollView>
        )
    }
}

export default PaymentOptions