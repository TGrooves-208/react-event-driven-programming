import "./App.css";

export default function App() {
  // Example: 1
  // This is not performant and we can address this on example 2
  // const handleClick = () => {
  //   console.log("The button was clicked pretty cool right!")
  // }
  // Example 1: Adding an anonymous function with a console log when the button is clicked
  // return (
  //   <div className="App">
  //     <button onClick={() => { console.log("the button was clicked")}}>Click Me</button>
  //   </div>
  // );
  // Example 2: Creating a function to call on the button property of "onClick"
  // Important to note that we do not add the () after the function name
  // Doing so will cause this function to be called on every render
  //   return (
  //     <div className="App">
  //       <button onClick={handleClick}>Click Me</button>
  //     </div>
  //   );
  // }
  return (
    <div className="App">
      <MyButton onClick={handleClick}>Click Me</MyButton>
    </div>
  );
}

// Example: 2
// This is a standalone function and we can change the const to function
// We move the function outside of the returned component this makes it more performant
// We take a proactive approach in addressing any issues that may come from hoisting
// function handleClick(){
//   console.log("The button was clicked pretty cool right!")
// }

// Example: 3
// This is a standalone function and we can change the const to function
// We move the function outside of the returned component this makes it more performant
// We take a proactive approach in addressing any issues that may come from hoisting
// We can also log out the events that we pass as a prop as well
// This produces a "SyntheticBased Event" with produces consistency across browsers
// If we do need a native event we can access it with dot notation on the event
// event.nativeEvent - this doesn't guarantee the behavior or expected results though
// Using the nativeEvent it will give us a PointerEvent object
function handleClick(event) {
  console.log(event);
}

// function MyButton(props) {
//   return (
//     // We really don't want to use inline styles as it affects accessibility
//     // This is just an example on the limitations of events in JSX
//     // Not using a moustaches inside the style will result in an error try it to see
//     // Trying to access the new Button Component we replaced above will now not allow a click
//     // To fix this we just add another property on the MyButton component
//     // Example: 4 No event on the new component
//     <button style={{color: "red"}}>
//       {props.children}
//     </button>
//   )
// }

// function MyButton(props) {
//   return (
//     // We really don't want to use inline styles as it affects accessibility
//     // This is just an example on the limitations of events in JSX
//     // Not using a moustaches inside the style will result in an error try it to see
//     // Trying to access the new Button Component we replaced above will now not allow a click
//     // To fix this we just add another property on the MyButton component
//     // Example: 5 No event on the new component
//     <button onClick={props.onClick} style={{ color: "red" }}>
//       {props.children}
//     </button>
//   );
function MyButton(props) {
  return (
    // We really don't want to use inline styles as it affects accessibility
    // This is just an example on the limitations of events in JSX
    // Not using a moustaches inside the style will result in an error try it to see
    // Trying to access the new Button Component we replaced above will now not allow a click
    // To fix this we just add another property on the MyButton component
    // Example: 6 No event on the new component using the spread operator
    // We no longer need to have {props.children} as we are setting the children
    // We can also have a self closing tage if we wanted to as well
    <button {...props} style={{ color: "red" }}>
    </button>
  );
}
