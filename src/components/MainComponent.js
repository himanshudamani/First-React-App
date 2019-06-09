import React, { Component } from 'react';
import logo from './logo.svg';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

  onDishSelect(dishId) {
      this.setState({ selectedDish: dishId});
  }

render() {
  return (
    <Header />
      <Menu dishes={this.state.dishes}
      onClick={(dishId) => this.onDishSelect(dish)} />
      <DishDetail
      dish={this.state.dishes.filter((dish)=> dish.id == this.state.selectedDish)[0]} />

  );
}
}

export default Main;
