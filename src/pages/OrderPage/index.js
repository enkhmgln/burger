import React from "react";
import {connect} from 'react-redux'

import css from "./style.module.css";

import Order from "../../components/Order";
import axios from "../../axios";
import Spinner from "../../components/General/Spinner";
import * as actions from '../../redux/actions/orderAction'

class OrderPage extends React.Component {
  // state = {
  //   orders:[],
  //   spinner: false,
  // };
  componentDidMount() {
    this.props.getOrders()
    // this.setState({ spinner: true });
    // axios
    //   .get("/orders.json")
    //   .then((res) => {
    //     this.setState({ orders: Object.entries(res.data).reverse() });
    //   })
    //   .catch(err=> {
    //     console.log(err)
    //   })
    //   .finally(() => {
    //     this.setState({ spinner: false });
    //   });
  }
  render() {
    // Ирсэн json - ыг string болгодог функц ==> JSON.stringify
    // console.log(JSON.stringify(this.state.orders))
    return (
      <div className={css.OrderPage}>
        <h1>Бүх захиалгууд</h1>
        {this.props.spinner ? (
          <Spinner spinner={this.props.spinner} />
        ) : (
          this.props.orders.map((el) => {
            let address = el[1].address;
            return (
              <Order
                orts={el[1].orts}
                key={el[0]}
                price={el[1].dun}
                name={address.name}
                city={address.city}
                street={address.street}
              />
            );
          })
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    orders:state.orderReducer.orders,
    spinner : state.orderReducer.spinner
  }
}

const mapDispatchToProps =(dispatch) => {
  return {
    getOrders : ()=> {dispatch(actions.getOrders())}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(OrderPage);
