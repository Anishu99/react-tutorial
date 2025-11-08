// 1. NORMAL CODE
// <h1 id="heading">Hello World from React</h1>
const heading = React.createElement("h1", {id:"heading" , xyz: "abc"}, "Hello World from React"); // Will create object for h1 tag not the tag itself.
console.log(heading);

const root1 = ReactDOM.createRoot(document.getElementById('root')); // creating root is job of react dom
root1.render(heading); // render method will take heading obj and convert it to heading tab readable in html form

// 2.  Create Nested Elements

// <div>
//     <div>
//         <h1>Hello from H1 Tag</h1>
//     </div>
// </div>
const parent2 = React.createElement("div" , {id: "parent"} ,  React.createElement("div" , {id: "child"} , React.createElement("h1" , {id: "heading"} , "Hello from H1 Tag")));
const root2 = ReactDOM.createRoot(document.getElementById("root"));
root2.render(parent2);


// 3. Creating Array of children
// <div id="parent">
//     <div id="child">
//         <h1>Hello from H1 Tag</h1>
//         <h2>Hello from h2</h2>
//     </div>
// </div>

const parent3 = React.createElement("div" , {id: "parent"} , React.createElement("div" , {id: "child"} , [React.createElement("h1" ,{id: "heading"} , "Hello from H1" ), React.createElement("h2" ,{id: "second-heading"} , "Hello from H2" )]))
const root3 = ReactDOM.createRoot(document.getElementById('root'));
root3.render(parent3);

// 4. 