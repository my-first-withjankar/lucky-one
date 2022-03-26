import React from 'react';

const Question = () => {
    return (
        <div>
            <h4>qus 1:what is the difference between props and state?</h4>
            <p>ans: there are lots of difference between props and state. first of all props are immutable.	and state is mutable. then props make components reusable again and again , but state cannot make components reusable .  besides props are readable only and state changes can be asynchronous. and The state is a local data storage that is local to the component only and cannot be passed to other components. and props allow you to send data another component .</p>

            <h4>2: how does react work?</h4>
            <p>
                Ans: React is a declarative, efficient, and flexible JavaScript library for building user interfaces. React works in declarative code. To show what we mean by declarative code, we want you to imagine the following code expressed as an app.React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p>
        </div>
    );
};

export default Question;