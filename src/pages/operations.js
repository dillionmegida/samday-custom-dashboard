import React from 'react';
import Styles from '../styles/operations.module.scss';

import { NavLink } from "react-router-dom";
import products from '../components/Products/productList';
import Layout from '../components/Layout/Layout';

export default props => {
    return (
        <Layout>
            <main>
                <div className={Styles.TopOptions}>
                    <h1><i className='fa fa-cube'></i>Production House</h1>
                    <div className={Styles.TopMenu}>
                        <button>
                            Categories <i className='fa fa-caret-down'></i>
                        </button>
                        <div tabIndex='-1'>
                            <i className='fa fa-search'></i>
                            <input type='search'/>
                        </div>
                    </div>

                </div>
                <div className={Styles.TableContents}>
                    <div className={Styles.Options}>
                        <button className={Styles.AllProd}>
                            All Productions
                            <span>
                                192
                            </span>
                        </button>
                        <button className={Styles.AwaitProd}>
                            Awaiting Production
                            <span>
                                19
                            </span>
                        </button>
                        <button className={Styles.Completed}>
                            Completed
                        </button>
                        <button className={Styles.PrWorksheet}>
                            Print Worksheet
                        </button>
                        <button className={Styles.MkAsComplete}>
                            Mark as Complete <i className='fa fa-caret-down'></i>
                        </button>
                        <button style={{backgroundColor: "var(--inactiveColor"}} className={Styles.Save}>
                            Save
                        </button>
                    </div>
                    <table cellPadding='5px'>
                        <thead>
                            <tr>
                                <th>
                                    <input type='checkbox' />
                                </th>
                                <th>Order #</th>
                                <th>Item #</th>
                                <th>Details</th>
                                <th>Colors</th>
                                <th>Qty</th>
                                <th>Print Type</th>
                                <th>Delivery Method</th>
                                <th>Delivery Time</th>
                                <th>Production Status</th>
                            </tr>

                        </thead>
                        <tbody>
                            {products.map((prod, i) => (
                                <tr key={i}>
                                    <td>
                                        <input type='checkbox' />
                                    </td>
                                    <td>
                                        <NavLink to={`operation/${prod.order.id}`}>
                                            #{prod.order.id}
                                        </NavLink>   
                                    </td>
                                    <td>{prod.item_id}</td>
                                    <td className={Styles.Details}>
                                        <div className={Styles.Image}>

                                        </div>
                                        <div className={Styles.Info}>
                                            {prod.details.info}
                                        </div>
                                    </td>
                                    <td className={Styles.Colors}>
                                        <div style={{backgroundColor: prod.color}}>
                                            s
                                        </div>
                                    </td>
                                    <td>{prod.qty}</td>
                                    <td>{prod.printType}</td>
                                    <td>
                                        {prod.delivery.method}
                                    </td>
                                    <td className={Styles.DeliveryTime}>
                                        {prod.delivery.time.date}<br/><br/>
                                        <span className={Styles.LightGreyText}>
                                            Time Left
                                        </span>
                                        <span className={`${Styles.GreenText} ${Styles.BoldText}`}>
                                            {prod.delivery.time.timeLeft}
                                        </span>
                                    </td>
                                    <td className={`${Styles.GreenText} ${Styles.BoldText}`}>
                                        {prod.prodStatus}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </Layout>
    )
}