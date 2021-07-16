import  "../style/cart.css";
import Tumb1 from './../img-data/lap-1.jpg'
import TumbHP from './../img-data/headphone.jpg'
function Cart(){
    return(
        <>
        <div className="cart-container">
            <div className="Heading-container">
                <h6 className="card-heading">Cart</h6>
            </div>
            <div className="cartbody">
                <div className="purchase-table">
                    <table className="table table-borderless">
                        <thead>
                            <tr className="row-container">
                            <th scope="col col-first"></th>
                            <th scope="col">PRODUCT</th>
                            <th scope="col">PRICE</th>
                            <th scope="col">QTY</th>
                            <th scope="col">UNIT PRICE</th>
                            </tr>
                        </thead>
                        
                  
                        <tbody>
                            <tr className="row-container">
                            <th className="row-element" scope="row">x</th>
                            <td><img src={TumbHP} className="card-img-top t-thumb" alt="..." />Philips Hue 7W BR30 Connected Downlight Lamp</td>
                            <td>$998</td>
                            <td>
                                <div className="btn-group" role="group" aria-label="Basic example">
                                    <button type="button" className="btn btn-link">-</button>
                                    <button type="button" className="btn btn-light">2</button>
                                    <button type="button" className="btn btn-link">+</button>
                                </div>
                            </td>
                            <td>$499</td>
                           
                            </tr>
                            <tr className="row-container">
                            <th className="row-element" scope="row">x</th>
                            <td><img src={Tumb1} className="card-img-top t-thumb" alt="..." />Apple Macbook Pro</td>
                            <td>$998</td>
                            <td>
                                <div className="btn-group" role="group" aria-label="Basic example">
                                    <button type="button" className="btn btn-link">-</button>
                                    <button type="button" className="btn btn-light">2</button>
                                    <button type="button" className="btn btn-link">+</button>
                                </div>
                            </td>
                            <td>$499</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                
                <div className="bottom-cart">
                <div className="redeem-container">
                    <input className="redeem-input" typet="text" placeholder="Voucher code"></input>
                    <button className="redeem-btn" type="button">Redeem</button>
                </div>
                <div className="total-container">
                    <table className="table tot-tab table-borderless">
                  
                        <tbody>
                            <tr className="tot-row">
                            <td>Subtotal</td>
                            <td>$998</td>
                            </tr>
                            <tr className="tot-row">
                            <td>Shipping feeo</td>
                            <td>$20</td>
                           </tr>
                           <tr className="tot-row-3">
                            <td>Coupon</td>
                            <td>No</td>
                            </tr>
                            <tr className="bold-text">
                            <td>TOTAL</td>
                            <td>$1018</td>
                           </tr>
                        </tbody>
                    </table>
                    <button className="chk-btn" type="button">Check out</button>

                </div>
                </div>
            </div>
        </div>

        </>
    )
}

export default Cart;