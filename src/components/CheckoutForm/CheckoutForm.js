import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import { CardElement, ElementsConsumer } from '@stripe/react-stripe-js'

export default class CheckoutForm extends Component {
  handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault()

    const { stripe, elements } = this.props

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement)

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement
    })

    if (error) {
      console.log('[error]', error)
    } else {
      console.log('[PaymentMethod]', paymentMethod)
    }
  }

  render () {
    const { stripe } = this.props
    return (
      <form onSubmit={this.handleSubmit}>
        <CardElement />
        <Button type="submit" disabled={!stripe}>
          Pay
        </Button>
      </form>
    )
  }
}

export const InjectedCheckoutForm = () => {
  return (
    <ElementsConsumer>
      {({ elements, stripe }) => (
        <CheckoutForm elements={elements} stripe={stripe} />
      )}
    </ElementsConsumer>
  )
}
