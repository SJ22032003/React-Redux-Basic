/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {useSelector} from "react-redux"
function Navbar() {
  
  const myPizzaState = useSelector((state) => state.changePizzaOrder)
  const myBurgerState = useSelector((state) => state.changeBurgerOrder)

  return (
    <div>
      <div className="navbar bg-base-100 back-ground text-black">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Snack Shop</a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabindex="0" className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item text-white">
                {myBurgerState+myPizzaState}
                </span>
              </div>
            </label>
            <div
              tabindex="0"
              className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg text-white">{myBurgerState+myPizzaState} Items</span>
                <span className="text-info">Burger - $4 x {myBurgerState} = ${4*myBurgerState} </span>
                <span className="text-info">Pizza - $6 x {myPizzaState} = ${6*myPizzaState} </span>
                <span className="text-primary">Subtotal: ${4*myBurgerState+6*myPizzaState}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
