import React from "react";
import {useSelector,useDispatch} from "react-redux"
import {incPizza , decPizza , incBurger , decBurger} from "../Context/Actions/Action"
function Main() {
  const myPizzaState = useSelector((state) => state.changePizzaOrder);
  const myBurgerState = useSelector((state) => state.changeBurgerOrder);
  const dispatch = useDispatch();
  
  return (
    <main>
      <div className="main-content flex justify-evenly main-content-responsive">
        <div className="pizza">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://api.lorem.space/image/pizza?w=400&h=225"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Pizza
                <div className="badge badge-secondary">-30%</div>
              </h2>
              <p>Eat to the fullest</p>
              <div className="card-actions justify-end">
                <div className="btn btn-primary" onClick={myPizzaState>=1?() => dispatch(decPizza()):""}>-</div>
                <div className="how-much btn btn-ghost">{myPizzaState}</div>
                <div className="btn btn-secondary" onClick={() => dispatch(incPizza())}>+</div>
              </div>
            </div>
          </div>
        </div>
        <div className="burger">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://api.lorem.space/image/burger?w=400&h=225"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Burgers
                <div className="badge badge-secondary">-80%</div>
              </h2>
              <p>Juciest Ham out there</p>
              <div className="card-actions justify-end">
                <div className="btn btn-primary" onClick={myBurgerState>=1?()=>dispatch(decBurger()):"" }>-</div>
                <div className="how-much btn btn-ghost">{myBurgerState}</div>
                <div className="btn btn-secondary" onClick={()=>dispatch(incBurger())}>+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
