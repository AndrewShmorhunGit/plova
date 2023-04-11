import styled from "styled-components";
import logo from "../logos/logo.png";
import arrowBack from "../images/design/arrowBack.svg";
import plus from "../images/menu/plusNew.svg";
import minus from "../images/menu/minusNew.svg";
import food from "../images/order/food.svg";
import hardcodedLocation from "../images/order/hardcodedLocation.png";
import { Link, useLocation } from "react-router-dom";
import {
  getCurrentCard,
  getCurrentMenu,
  // getLocalStorageMenu,
  getSlugFromLocation,
  getTotalCardAmount,
  getTotalCardPrice,
  goToTop,
  showDollarPrice,
} from "../units/functions";
import { useAppDispatch, useAppSelector } from "../hooks/useAppDispatch";
import { cartSlice } from "../store/slices/cartSlice";
import { useEffect, useMemo, useState } from "react";
import {
  AllergyModal,
  DeliveryTermsModal,
  ExitFromOrderModal,
  InValidOrderModal,
  SuccessOrderModal,
  DropdownPhone,
  DropdownAddress,
  PaymentDropdown,
  InDevelopmentModal,
} from "../components/index";

import {
  addressDropdownOptions,
  paymentDropdownOptions,
  phoneDropdownOptions,
} from "../units/data";
import { IModalState } from "../modules/modules";
import { PhoneVerifyModal } from "../components/modals/PhoneVerifyModal";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
import { userActions } from "../store/actions/userActions";

export const OrderPage = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const { carts } = useAppSelector((state) => state.carts);
  const { menus } = useAppSelector((state) => state.menu);
  const { user } = useAppSelector((state) => state.user);
  const slug = useMemo(() => getSlugFromLocation(location), [location]);
  const currentCart = getCurrentCard(slug, carts);
  const menu = getCurrentMenu(slug, menus);

  const [modalState, setModalState] = useState<IModalState>({
    allergy: false,
    confirmExit: false,
    deliveryTerms: false,
    phoneVerify: false,
    inValidOrder: false,
    successOrder: false,
    inDevelopment: false,
  });

  //  const [{ delAddress, delTerms, paymentMethod, allergyInfo, ...}, setOrderState];
  const [orderState, setOrderState] = useLocalStorageState("order", {
    brandName: "",
    delPrice: 0,
    delAddress: null,
    delTerms: null,
    paymentMethod: null,
    allergyInfo: "",
    cutlery: false,
    totalPrice: "0",
    promoCode: false,
    orderList: null,
    phoneNumber: (user && user?.phone) || null,
  });

  // const { delAddress, delTerms, paymentMethod, ...} = orderState;

  useEffect(() => {
    goToTop();
    if (menu !== undefined) {
      setOrderState({
        ...orderState,
        brandName: menu.brandName,
        delPrice: menu.deliveryPrice,
      });
    }
  }, [menu]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(carts));
  }, [orderState.orderList, carts]);

  const isValidOrder: boolean =
    orderState.delAddress && orderState.paymentMethod && orderState.phoneNumber;

  const productsPrice = getTotalCardPrice(slug, carts);

  const brandName = orderState.brandName;
  const smallOrderFeePrice = 1;
  const totalPrice =
    productsPrice < 5
      ? `${showDollarPrice(
          productsPrice + smallOrderFeePrice + orderState.delPrice
        )} $`
      : `${showDollarPrice(productsPrice + orderState.delPrice)} $`;

  const confirmHandle = () =>
    isValidOrder
      ? (setOrderState({
          ...orderState,
          delTerms: `${menu?.deliveryTime1}-${menu?.deliveryTime2} min`,
          orderList: currentCart,
          totalPrice: `${totalPrice}`,
        }),
        dispatch(
          userActions.pushAnOrder({
            orderId: `${
              orderState.brandName +
              "/" +
              orderState.phoneNumber +
              "-" +
              orderState.totalPrice +
              "_" +
              "id" +
              orderState.orderList?.order.length
            }`,
            orderCreationTime: `${new Date()}`,
            orderObj: orderState,
          })
        ),
        setModalState({ ...modalState, successOrder: true }))
      : setModalState({ ...modalState, inValidOrder: true });

  const increase = (productName: string) => {
    dispatch(
      cartSlice.actions.changeCartAmount({
        slug,
        name: productName,
        operation: "inc",
      })
    );
    setOrderState({ ...orderState, orderList: currentCart });
  };

  const properDecrease = (productName: string): void => {
    if (currentCart?.order.length === 1 && currentCart?.order[0].amount === 1) {
      setModalState({ ...modalState, confirmExit: true });
      return;
    } else {
      dispatch(
        cartSlice.actions.changeCartAmount({
          slug,
          name: productName,
          operation: "dec",
        })
      );
      setOrderState({ ...orderState, orderList: currentCart });
    }
  };

  const decrease = (productName: string) => {
    dispatch(
      cartSlice.actions.changeCartAmount({
        slug,
        name: productName,
        operation: "dec",
      })
    );
  };

  return (
    <>
      {/* VERIFY PHONE MODAL */}
      {modalState.phoneVerify && (
        <PhoneVerifyModal
          modalState={modalState}
          setModalState={setModalState}
          orderState={orderState}
          setOrderState={setOrderState}
        />
      )}
      {/* ALLERGY MODAL */}
      {modalState.allergy && (
        <AllergyModal
          modalState={modalState}
          setModalState={setModalState}
          orderState={orderState}
          setOrderState={setOrderState}
        />
      )}
      {/* CONFIRM EXIT MODAL */}
      {modalState && (
        <ExitFromOrderModal
          setModalState={setModalState}
          modalState={modalState}
          currentCart={currentCart}
          slug={slug}
          decrease={decrease}
        />
      )}
      {/* DELIVERY TERMS MODAL */}
      {modalState.deliveryTerms && (
        <DeliveryTermsModal
          setModalState={setModalState}
          modalState={modalState}
        />
      )}
      {modalState.inValidOrder && (
        <InValidOrderModal
          setModalState={setModalState}
          modalState={modalState}
        />
      )}
      {modalState.successOrder && (
        <SuccessOrderModal
          setModalState={setModalState}
          modalState={modalState}
        />
      )}
      {modalState.inDevelopment && (
        <InDevelopmentModal
          setModalState={setModalState}
          modalState={modalState}
        />
      )}

      <Wrapper>
        <main className="container main-container">
          <div className="order-header">
            <div className="logo-container">
              {/* <Link to="/"> */}
              <img className="logo" src={logo} alt="Plova logo" />
              {/* </Link> */}
            </div>
          </div>
          <div className="order-grid">
            <div className="info-header">
              <div className="order-header-summary">
                <Link to={`/brand/${slug}`}>
                  <img src={arrowBack} alt="arrow left" />
                </Link>
                <h2>Order summary</h2>
              </div>
              <h1>{brandName}</h1>
            </div>

            <div className="order-info">
              <div className="order-details">
                <p className="total-amount">
                  {getTotalCardAmount(slug, carts)}
                  {getTotalCardAmount(slug, carts) > 1
                    ? " products "
                    : " product "}
                  from
                  <span>{` ${brandName}`}</span>
                </p>
                <div className="cart-info">
                  {currentCart?.order.map((order) => {
                    return (
                      <div key={order.name} className="single-position">
                        <div className="single-product-info">
                          <div className="dec-btn">
                            <img
                              src={minus}
                              alt="minus in circle"
                              onClick={() => properDecrease(order.name)}
                            />
                          </div>

                          <p className="amount">{order.amount}</p>

                          <div className="inc-btn">
                            <img
                              src={plus}
                              alt="plus on circle"
                              onClick={() => increase(order.name)}
                            />
                          </div>
                          <p className="name">{order.name}</p>
                        </div>

                        <p className="price">
                          {showDollarPrice(order.price * order.amount)} $
                        </p>
                      </div>
                    );
                  })}

                  <div
                    className="allergy-info margin-top"
                    onClick={() =>
                      setModalState({
                        ...modalState,
                        allergy: !modalState.allergy,
                      })
                    }
                  >
                    <img
                      src={
                        orderState.allergyInfo === ""
                          ? "https://res.cloudinary.com/glovoapp//CX/backendCheckout/light/allergies-active"
                          : "https://res.cloudinary.com/glovoapp//CX/backendCheckout/light/allergies-checked"
                      }
                      alt="pill"
                    />
                    <div className="allergy-container">
                      <p>Any allergies?</p>
                      <img
                        src="https://res.cloudinary.com/glovoapp/image/fetch//q_auto/https://glovoapp.com/images/svg/thin-arrow--right.svg"
                        alt="thin arrow right"
                      />
                    </div>
                  </div>
                  <div className="cutlery-info">
                    <img
                      src="https://res.cloudinary.com/glovoapp//CX/backendCheckout/light/cutlery"
                      alt="fork and spoon"
                    />
                    <div className="cutlery-container">
                      <div>
                        <h4>Need any cutlery?</h4>
                        <p>Help us minimize waste.</p>
                      </div>

                      <div>
                        <label className="switch">
                          <input
                            type="checkbox"
                            name="cutlery"
                            checked={orderState.cutlery}
                            onChange={(event) => {
                              setOrderState({
                                ...orderState,
                                [event?.target.name]: event.target.checked,
                              });
                            }}
                          />
                          <span className="slider"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="delivery-details">
                <h3>Delivery details</h3>
                <img
                  className="location-image"
                  src={hardcodedLocation}
                  alt="current location on the map"
                />

                <DropdownAddress
                  options={addressDropdownOptions}
                  setModalState={setModalState}
                  modalState={modalState}
                  orderState={orderState}
                  setOrderState={setOrderState}
                />

                <div
                  className="delivery-terms"
                  onClick={() =>
                    setModalState({ ...modalState, deliveryTerms: true })
                  }
                >
                  <p>
                    <span>
                      {menu &&
                        `${menu.deliveryTime1}-${menu.deliveryTime2} min`}
                    </span>
                  </p>
                  <p> As soon as possible</p>
                </div>
                <DropdownPhone
                  setModalState={setModalState}
                  modalState={modalState}
                  options={phoneDropdownOptions}
                  orderState={orderState}
                />
              </div>
              <div className="payment-method">
                <h3>Payment method</h3>
              </div>
              <PaymentDropdown
                options={paymentDropdownOptions}
                orderState={orderState}
                setOrderState={setOrderState}
              />
            </div>
            <div className="order-summary">
              <div className="sticky-container">
                <div className="summary-title">
                  <h2>Summary</h2>
                  <img
                    src={food}
                    alt="salad and burger with bottle of beverage"
                  />
                </div>
                <div className="summary-position">
                  <p>Products</p>
                  <p> {showDollarPrice(productsPrice)} $</p>
                </div>
                <div className="summary-position">
                  <p>Delivery</p>
                  <p>{`${showDollarPrice(orderState.delPrice)} $`}</p>
                </div>
                {productsPrice < 5 ? (
                  <div className="summary-position">
                    <p>Small order</p>
                    <p> {showDollarPrice(smallOrderFeePrice)} $</p>
                  </div>
                ) : null}
                <div className="summary-position total-position">
                  <p>TOTAL</p>
                  <p>{totalPrice}</p>
                </div>
                <div className="btn-container center">
                  <button
                    className={
                      isValidOrder
                        ? `btn-confirm btn btn-active `
                        : "btn-confirm btn not-allowed"
                    }
                    // className="btn center"
                    onClick={() => confirmHandle()}
                  >
                    Confirm Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
        <div className="transition-container">
          <footer className="transition" />
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.main`
  .main-container {
    padding-bottom: 10rem;
  }

  .margin-top {
    margin-top: 3rem;
  }

  .margin-bottom {
    margin-top: 3rem;
  }

  .container {
    max-width: 145rem;
    margin: 0 auto;
    max-width: var(--max-width);
  }

  .order-header {
    position: sticky;
    top: 0;
    background: transparent;
    height: 10rem;
    z-index: -1;
  }

  .logo-container {
    position: relative;
  }

  .logo {
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translateY(50%);
    height: 4.4rem;
  }

  .order-grid {
    padding: 5rem 15rem;
    display: grid;
    grid-template-columns: 1fr 0.6fr;
    column-gap: 2rem;
  }

  .info-header {
    grid-column: 1/-1;
    min-height: 15rem;
    margin-bottom: 3.6rem;
    // min-width: 40rem;

    img {
      height: 2.4rem;
      cursor: pointer;
    }

    h2 {
      font-size: 3rem;
      font-weight: 500;
    }

    h1 {
      font-size: 4.8rem;
    }
  }

  .order-header-summary {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-bottom: 1rem;
  }

  .order-info {
    grid-column: 1/2;
  }

  .order-details {
    padding: 2rem 1rem;
    border-inline: 0.3rem solid;
    border-block-start: 0.3rem solid;
    border-image-source: radial-gradient(
      circle at 50%,
      lightgrey,
      transparent 85%
    );
    border-image-slice: 1;
  }

  .cart-info {
    padding-top: 3rem;
  }

  .total-amount {
    font-size: 1.8rem;
    font-weight: 400;
  }

  .single-position {
    display: flex;
    width: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0rem 1rem 0.5rem;
    font-size: 1.6rem;
    .price {
      font-weight: 300;
    }
  }
  
  .single-product-info {
    display: flex;
    gap: 1.4rem;
    align-items: center;
    // min-width: 45vw;
    
    .amount {
      font-weight: 600;
    }
    .name {
      font-weight: 400;
    }
  }



  .dec-btn,
  .inc-btn {
    cursor: pointer;
  }

  .location-image {
    width: 100%;
  }

  .sticky-container {
    position: sticky;
    top: 2rem;
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;
    box-shadow: 0 2px 20px rgb(0 0 0 / 10%);
    height: auto;
    padding: 3rem 3rem;
    border-block-end: 1rem solid;
    padding-block-end: 3rem;
    border-image-source: linear-gradient(110deg, #00a082, #ffc244);
    border-image-slice: 1;
  }

  .order-summary {
    grid-column: 2/3;
  }

  .summary-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 1rem;
    border-bottom: solid 1px lightgrey;

    h4 {
      font-size: 3rem;
      font-weight: 500;
    }

    img {
      height: 7rem;
    }
  }

  .summary-position {
    padding-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.8rem;
    font-weight: 400;
  }

  .total-position {
    font-size: 2rem;
    font-weight: 500;
  }

  .allergy-info,
  .delivery-info {
    height: 3.2rem;
    cursor: pointer;
    // width: 100%;
    display: flex;
    gap: 1.6rem;
  }

  .allergy-container,
  .delivery-container,
  .payment-container {
    min-width: 45dvw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 1rem;
    border-bottom: solid 1px lightgrey;

    p {
      font-weight: 400;
      font-size: 1.8rem;
    }

    img {
      height: 1.6rem;
    }
  }

  .cutlery-info {
    height: 3.2rem;
    display: flex;
    gap: 1.6rem;
    margin-top: 4rem;
  }

  .cutlery-container {
    width: 45dvw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1rem 3rem 0;
    border-bottom: solid 1px lightgrey;

    p {
      padding: 0.5rem 0;
      font-size: 1.2rem;
      font-weight: 300;
    }

    h4 {
      font-weight: 400;
    }

    img {
      height: 1.6rem;
    }

    button {
      cursor: pointer;
    }
  }

  .btn-confirm {
    margin-top: 4rem;
    width: 33.8rem;
    height: 5.4rem;
    color: white
    padding: 3rem 6rem;
    letter-spacing: 0.05rem;
    font-size: 2rem;

    p {
      color: white;
      font-weight: 600;
      font-size: 1.8rem;
    }
  }

  .not-allowed {
    background: #c1c1c1;
  }

  .not-allowed:hover {
    cursor: not-allowed;
  }

  .btn-active {
    background-color: #00a082ff;
  }

  .btn-active:hover {
    background-color: #006653ff;
  }

  .delivery-details {
    margin-top: 8rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .delivery-terms {
    margin: 0rem 0;
    padding: 2rem;
    border-radius: 1rem;
    border: solid 1px orange;
    background-color: #fff3da;
    cursor: pointer;
  }

  .payment-method {
    margin-top: 8rem;
  }

  .transition-container {
    overflow: hidden;
    width: 100dvw;
  }

  .transition {
    display: block;
    width: 110%;
    height: 12.5rem;
    background-color: #1d1d1d;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    margin: 0rem -5rem -5rem -5rem;
  }

  h3 {
    padding-bottom: 2rem;
    font-size: 3rem;
    font-weight: 500;
  }

  h4 {
    font-size: 1.8rem;
    font-weight: 500;
  }

  .single-position-exit-active {
    animation: appear 1500ms inverts;
  }

  .single-position-enter-active {
    animation: appear 500ms forwards;
  }

  @keyframes appear {
    0% {
      opacity: 0;
    }
    ,
    100% {
      opacity: 1;
    }
  }

  @media (max-width: 84.375em) {
    .order-header {
      height: 8rem;
    }
    

    .order-details {
      padding: 1rem;
    }  
    .order-grid {
      padding: 2rem 2rem 2rem 15rem;
      grid-template-columns: 75dvw;
    }

    .order-summary {
      padding-top: 5rem;
      grid-column: 1/2;
    }
    
    
    .allergy-container,
    .delivery-container,
    .payment-container,
    .cutlery-container {
      width: 100%;
    }

    .sticky-container {
      border-top-left-radius: 0rem;
      border-top-right-radius: 0rem;
      border-bottom-left-radius: 2rem;
      border-bottom-right-radius: 2rem;
      border-block-end: none;
      padding-block-end: none;
      border-block-start: 1rem solid;
      padding-block-start: 3rem;
    }

    .transition-container {
      overflow: hidden;
      width: 100vw;
    }

    .transition {
      display: block;
      width: 120%;
      height: 4.5rem;
      background-color: #1d1d1d;
      border-top-left-radius: 50%;
      border-top-right-radius: 50%;
      margin: 0rem -5rem 0rem -5rem;
    }

  }

  @media (max-width: 50em) {

    .order-header {
      max-width: 100dvw;
      height: 6rem;
      z-index: 10;
      background: white;
      border-bottom: solid 1px lightgrey;
    }

    .info-header {
      margin-bottom: 0rem;
    }
    
   .logo {
      position: absolute;
      top: 25%;
      left: 1rem;
      transform: translateY(20%);
      height: 4rem;
    }

    .single-position {
      padding: 1rem 1rem 0.5rem 0.5rem;
      font-size: 1.2rem;
     .price {
        font-weight: 300;
      }
    }

    .single-product-info {
      .name {
        max-width: 20rem;
        font-size: 1.4rem;
        font-weight: 400;
      }
    }

    .total-amount {
      font-size: 1.6rem;
    }

    .cart-info {
      padding-top: 1.6rem;
    }
    
    .order-grid {
      padding: 2rem;
      grid-template-columns: 90dvw;
    }

    .order-summary {
      padding-top: 5rem;
      grid-column: 1/2;
    }

  }

   @media (max-width: 27.5em) {
    .single-product-info {
      .name {
        max-width: 15rem;
       
      }
    }
   }

`;
