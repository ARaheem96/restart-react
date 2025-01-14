        //    <div id ="parent">
        //     <div id ="child1">
        //         <h1>I am the king</h1>
        //         <h2> So Don't worry </h2>
        //     </div>
        //        <div id ="child2">
        //         <h1>I am the king</h1>
        //         <h2> So Don't worry </h2>
        //      </div>
        //    </div>
           
           
        /*const parent = React.createElement("div",
            {id:"parent"},
            React.createElement("div",
                {id:"child"},
                [React.createElement("h1",{id:"abc",key:1},"Hello I am The King of React"),
                React.createElement("h2",{id:"bcd", key:2},"Hello I am The King of React it is my perspective")]
            )
        );

        console.log(parent);
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(parent);*/
           
        const parent = React.createElement("div",{id:"parent"},
            [React.createElement("div",{id:"child1"},
                [React.createElement("h1",{},"I am The King of child1"),React.createElement("h2",{},"So Don't Worry")]
            ),
        React.createElement("div",{id:"child2"},
            [React.createElement("h3",{},"I am The King of child2"),React.createElement("h4",{},"So Don't Worry")]
        )]
        );

        const root = ReactDOM.createRoot(document.getElementById("root"));

        root.render(parent);

        //    const heading = React.createElement("h1",{id:"abc"},"Hello World From React");
        //    console.log(heading);
        //     const root = ReactDOM.createRoot(document.getElementById("root"));
        //     root.render(heading);
