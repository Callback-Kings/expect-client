import React, { Component } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import Button from 'react-bootstrap/Button'
import { CardElement, ElementsConsumer } from '@stripe/react-stripe-js'
// import StripeCheckout from 'react-stripe-checkout'
const stripePromise = loadStripe('pk_test_51IF03kIkhqLtNmbJwOU6YIQFW7e45twsNwVBF9jeIEIJV7ftyo7ReWXTPXq8LaZZkZtpB6wGRhQGFfC5M7Kc271w00Ci70YINz')

export default class CheckoutForm extends Component {
  // const { stripe, elements } = this.props

  handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault()

    const stripe = await stripePromise
    const { elements } = this.props
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

    const response = await fetch('/create-checkout-session', {
      method: 'POST'
    })
    const session = await response.json()
    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session.id
    })
    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    }
  }

  // handleClick = async (event) => {
  //   const stripe = await stripePromise
  //   const response = await fetch('/create-checkout-session', {
  //     method: 'POST'
  //   })
  //   const session = await response.json()
  //   // When the customer clicks on the button, redirect them to Checkout.
  //   const result = await stripe.redirectToCheckout({
  //     sessionId: session.id
  //   })
  //   if (result.error) {
  //     // If `redirectToCheckout` fails due to a browser or network
  //     // error, display the localized error message to your customer
  //     // using `result.error.message`.
  //   }
  // }

  render () {
    const { stripe } = this.props
    return (
      <div onSubmit={this.handleSubmit}>
        <CardElement />
        <Button type="submit" disabled={!stripe}>
          Pay
        </Button>
      </div>
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
