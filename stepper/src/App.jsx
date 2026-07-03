import "./App.css";
import CheckoutStepper from "./components/stepper";

const CHECKOUT_STEPS = [
  {
    name: "Customer Info",
    Component: () => <div>Provide your contanct Details. </div>,
  },
  {
    name: "Shipping Info",
    Component: () => <div>Enter your shipping address. </div>,
  },
  {
    name: "Payment Info",
    Component: () => <div>Complete payment for your order. </div>,
  },
  {
    name: "Delivered Info",
    Component: () => <div>Your order has been delivered. </div>,
  },
];

function App() {
  return (
    <>
      <h2>CheckOut</h2>
      <CheckoutStepper stepsConfig={CHECKOUT_STEPS}></CheckoutStepper>
    </>
  );
}

export default App;
