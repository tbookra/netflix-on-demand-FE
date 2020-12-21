import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import { useSelector } from "react-redux";


const StripeButton = ({price, addMovie, buyMembership, tierTitle}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51I0O2lGpsgXPuGA6f3y2QMQuJTzo9Lotw6pHMNNQ4awMQ2ivqfbGE3ep6VTPaHdqlo9BGMSgcrQwdJ1XEtdGoWVa00etzMy8if'
    const { currentMovie } = useSelector((state) => state.mainApp);

const onToken = () => {

     if (tierTitle === "Buy Movie") {
        addMovie(currentMovie.id, currentMovie.poster_path)
 } else {
     buyMembership()
    };
   }

    return (
        <div>
            <StripeCheckout  
            label='PAY NOW'
            name='netflixondemandproject'
            billingAddress
            shippingAddress
            image='https://previews.123rf.com/images/andre266/andre2661102/andre266110200025/8900087-movie-elements.jpg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay NOW'
            token={onToken}
            stripeKey={publishableKey}
            />
        </div>
    )
}

export default StripeButton