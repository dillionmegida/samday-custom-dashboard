import React from 'react';
import Styles from './OperationProduct.module.scss';

import products from './productList';
import { useParams, NavLink } from 'react-router-dom';
import Layout from '../Layout/Layout';

export default props => {
    const { order_id } = useParams();
    // Filter to get the order_passed in the url
    // then destructure the object from the filtered array
    const [ product ] = products.filter(prod => prod.order.id === order_id );
    return (
        <Layout>
            <main>
                <div className={Styles.TopDetails}>
                    <NavLink to='/operations' className={Styles.BackLink}>
                        <i className='fa fa-arrow-left'></i>
                        Back
                    </NavLink>
                    <h1><i className='fa fa-cube'></i>Production House</h1>
                </div>
                <h2>Order: #{product.item_id}</h2>
                <div className={Styles.TopInfo}>
                    <div className={Styles.BreadCrumb}>
                        Account Setup > Delivery Method
                    </div>
                    <div className={Styles.ProdStatus}>
                        Production Status
                        <span>
                            {product.prodStatus}
                        </span>
                    </div>
                </div>
                <section className={Styles.OrderDetails}> 
                    <div className={Styles.OrderValue}>
                        <h3>Order Value</h3>
                        <p>{product.order.value}</p>
                    </div>
                    <div className={Styles.OrderDate}>
                        <h3>Order Date</h3>
                        <p>{product.order.date}</p>
                    </div>
                    <div>
                        <h3>Delivery Method</h3>
                        <div className={`${Styles.Flex} ${Styles.AlignCenter}`}>
                            <p>{product.delivery.method}</p>
                            <button className={Styles.GreenText}>
                                Can Edit <i className='fa fa-caret-down'></i>
                            </button>

                        </div>
                    </div>
                    <div className={Styles.RushOpt}>
                        <h3>Rush Option</h3>
                        <p>{product.rush ? "Rush" : "No Rush"}</p>
                    </div>
                    <div className={Styles.Pending}>
                        <h3>Status</h3>
                            <p>{product.delivery.status}</p>
                    </div>
                    <div>
                        <h3>Requested By</h3>
                            <p>{product.delivery.time.date}</p>
                            <p>
                                <span className={Styles.LightGreyText}>
                                    Time left
                                </span>
                                <span className={Styles.GreenText}>
                                    {product.delivery.time.timeLeft}
                                </span>
                            </p>
                    </div>
                    <div className={Styles.ShippedDate}>
                        <h3>Shipped or Picked Date</h3>
                            <p>{product.delivery.time.date}</p>
                    </div>
                </section>
                <section className={Styles.ProdDetails}>
                    <div className={Styles.Menu}>
                        <div className={Styles.Primary}>
                            <button className={Styles.Active}>
                                Product Details
                            </button>
                            <button>
                                History / Notes
                            </button>

                        </div>
                        <div className={Styles.Secondary}>
                            <button className={Styles.Worksheet}>
                                Worksheet <i className='fa fa-caret-down'></i>
                            </button>
                            <button className={Styles.Print}>
                                Print
                            </button>
                            <button className={Styles.AddNote}>
                                Add Note
                            </button>
                            <button className={Styles.CompleteProd}>
                                Complete Production <i className='fa fa-caret-down'></i>
                            </button>
                        </div>
                    </div>
                    <div className={Styles.MoreOptions}>
                        <h3>Product</h3>
                        <button>
                            Download Artwork
                        </button>
                    </div>
                    <div className={Styles.Images}>
a
                    </div>
                </section>
            </main>
        </Layout>
    )
}