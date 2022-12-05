const root = document.querySelector('.root');

root.appendChild(document.createElement('div')
        .appendChild(document.createElement('h2')
            .appendChild(document.createTextNode('Online Friends')).parentElement).parentElement
        .appendChild(document.createElement('ul')
            .appendChild(OnlineFriend('Liron Harel')).parentElement
            .appendChild(OnlineFriend('Adam Levi')).parentElement
            .appendChild(OnlineFriend('Michal Shefler')).parentElement).parentElement
    )

function OnlineFriend (fullName) {
    return document.createElement('li')
                .appendChild(document.createElement('img')).parentElement
                .appendChild(document.createElement('span')
                    .appendChild(document.createTextNode(fullName)).parentElement).parentElement
}

document.querySelectorAll('img').forEach(img => img.setAttribute('src', './person.png'));


// ***************************************************************************************    
// React < 17 Version for comparison
// ***************************************************************************************

// const react15Root = ReactDOM.createRoot(document.getElementById("root"));

// react15Root.render(
//     React.createElement("div", null, 
//         React.createElement("h2", null, 
//             "Online Friends:"
//         ), 
//         React.createElement("ul", null, 
//             React.createElement(OnlineFriend, {fullName: "Liron Harel"}), 
//             React.createElement(OnlineFriend, {fullName: "Adam Levi"}), 
//             React.createElement(OnlineFriend, {fullName: "Michal Shefler"})
//         )
// ));  

// ***************************************************************************************
// React >= 17 Version for comparison
// ***************************************************************************************

// const reactRoot = ReactDOM.createRoot(document.getElementById("root"));

// reactRoot.render((0, _jsxRuntime.jsxs)("div", {children: [
//         (0, _jsxRuntime.jsx)("h2", {children: 
//             "Online Friends:"
//         }), 
//         (0, _jsxRuntime.jsxs)("ul", {children: [
//             (0, _jsxRuntime.jsx)(OnlineFriend, {fullName: "Liron Harel"}), 
//             (0, _jsxRuntime.jsx)(OnlineFriend, {fullName: "Adam Levi"}), 
//             (0, _jsxRuntime.jsx)(OnlineFriend, {fullName: "Michal Shefler"})
//         ]
//     })]
// }));

