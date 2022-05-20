import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
            <div className="ques my-4">
                <h3 className='p-4'>1. Difference between javascript and node js ?</h3>
                <div className="ans p-4">
                    <p>Javascript is a computer language that may be used to create website scripts. Javascript is only available in browsers. It's mostly used on the client's end. In frontend development, Javascript is used.</p>
                    <p>NodeJS is a runtime environment for Javascript. With the help of NodeJS, we can run Javascript outside of the browser. It's primarily utilized on the server. In server-side development, Nodejs is employed.</p>
                </div>
            </div>
            <div className="ques my-4">
                <h3 className='p-4'>2. When should you use node js and when should you use mongodb ?</h3>
                <div className="ans p-4">
                    <p>Because of its single-threaded nature, Node. js is best suited for non-blocking, event-driven servers. It was created with real-time, push-based architectures in mind and is utilized for standard web sites and back-end API applications.</p>
                    <p>When your data is document-centric and doesn't fit well into the schema of a relational database, when you need to support vast scalability, when you're fast prototyping, and a few other use cases, NoSQL databases like MongoDB are an excellent alternative.</p>
                </div>
            </div>
            <div className="ques my-4">
                <h3 className='p-4'>3. Differences between sql and nosql databases ?</h3>
                <div className="ans p-4">
                    <p>SQL is a database management system for relational databases (RDBMS). These databases have a predefined or fixed schema. These databases are not designed to store hierarchical data. Complex queries are best served by these databases.</p>
                    <p>A distributed or non-relational database system. They have a flexible schema. These databases are great for storing hierarchical data. Complex queries are not well served by these databases.</p>
                </div>
            </div>
            <div className="ques my-4">
                <h3 className='p-4'>4. What is the purpose of jwt and how does it work ?</h3>
                <div className="ans p-4">
                    <p>JWT (JSON Web Token) is an open standard that allows two parties — a client and a server — to share security information. JSON items, containing a set of claims, are encoded in each JWT. JWTs use a cryptographic technique to ensure that the claims cannot be changed after the token has been issued.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;