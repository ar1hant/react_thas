import React from 'react';
import "./HealthCardList.css";

const Card = (props) => {
  return(
    <div className="health_card">
      <h1>{props.title}</h1>
      <h2>you have consumed {props.cals} cals today</h2>
    </div>
  );
};

function HealthCardList() {
  return(
    <div className="health_app">
      <h1>Instructions</h1>
      <div className="health_heading">
        <ul>
          <li>Build a container</li>
          <li>Create a seperate function and use it as a component</li>
          <li>Pass props "calory and food" and call it to main component</li>
        </ul>
      </div>
      <h1>Calorie Read Only</h1>
      <div class="health_box">
        <div className="health_content">
          <Card title="Pizza" cals="56" />
          <Card title="Burger" cals="69" />
          <Card title="Coke" cals="500" />
          <Card title="Brownie" cals="180" />
          <Card title="Fried Rice" cals="90" />
          <Card title="Lassania" cals="200" />
          <Card title="Pani Puri" cals="10" />
        </div>
      </div>
    </div>
    );
}

export default HealthCardList;