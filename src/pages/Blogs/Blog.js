import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-xl font-semibold text-info hover:text-lime-400'>1. How will you improve the performance of a React Application?</h1>
            <p><span className='font-bold text-xl'>Answer:</span>
                Keeping component state local where necessary.
                Memoizing React components to prevent unnecessary re-renders.
                Code-splitting in React using dynamic import()
                Windowing or list virtualization in React.
                Lazy loading images in React.</p>

            <h1 className='text-xl font-semibold text-info hover:text-lime-400'>2. How does prototypical inheritance work?</h1>
            <p><span className='font-bold text-xl'>Answer:</span>

                The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object. getPrototypeOf and Objec
            </p>
            <h1 className='text-xl font-semibold text-info hover:text-lime-400'>3. What is a unit test? Why should write unit tests?</h1>
            <p><span className='font-bold text-xl'>Answer:</span>Unit testing allows the programmer to refactor code at a later date, and make sure the module still works correctly (i.e. Regression testing). The procedure is to write test cases for all functions and methods so that whenever a change causes a fault, it can be quickly identified and fixed</p>
            <h1 className='text-xl font-semibold text-info hover:text-lime-400'>4. You have an array of products. Each object has a name, price, description, etc. How will you implement a search to find products by name?</h1>
            <p ><span className='font-bold text-xl'>Answer:</span>
                Make sure the route backend and app.get("/route-name")  then req by params get the name .then this collection findOne by query.
            </p>
            <h1 className='text-xl font-semibold text-info hover:text-lime-400'>5. What are the different ways to manage a state in a React application?</h1>
            <p>
                <span className='font-bold text-xl'>Answer:</span>
                5 Types of Application State in React and How They Help in State Management
                The Problem. Redux, particularly, gives the developer a single place to put all their state that seems great at first.Using Localstorage,Using LocalStorage with Redux Store,Using Redux Persist,
                Using URL Params.
            </p>
        </div>

    );
};

export default Blog;