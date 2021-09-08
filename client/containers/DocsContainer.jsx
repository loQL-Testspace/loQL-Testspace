import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './Docs.scss';

const webpack = `
const path = require('path');

module.exports = {
  entry: {
    bundle: './client/index.js',
    loQL: './node_modules/loql-cache/loQL.js', // Add this line!
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js',
    clean: true,
  },
  devServer: {
    static: './client',
  },
};
`;

const registration = `
  import { register } from "loql-cache";
  register({ gqlEndpoints: ["https://my-site.com/api/graphql"] });
  
  ... The rest of your application ...

`;
const DocsContainer = () => {
  return (
    <div className="main-content">
      <Container>
        <article className="main">
          <div className="splash">
            <div id="main-left">
              <h3 className="bigTitle">Docs</h3>
            </div>
          </div>
          <article className="docs">
            <p>
              At loQL, we strive to make intuitive software. If anything in this documentation is
              unclear, please drop <Link to="/team">someone on the team</Link> a message and we'll
              be happy to help out. The project is fully open source and is taking contributions on{' '}
              <a href="https://github.com/oslabs-beta/loQL/">Github</a>.
            </p>
            <section>
              <h3>Who is this package for?</h3>
              <p className="install">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi at voluptate
                voluptatibus natus beatae facere reprehenderit nemo veniam similique harum eaque
                quibusdam quisquam alias doloribus, voluptatum corrupti ipsam laudantium ut.
              </p>
              <p className="install">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, sapiente? Aspernatur
                ab enim, accusantium repudiandae, exercitationem dolore odio facilis, dolores at
                eaque nesciunt laboriosam iste voluptates fugiat optio obcaecati consequatur?
              </p>
            </section>
            <section>
              <h3>Installation</h3>
              <p>First, install the package using your favorite package manager.</p>
              <SyntaxHighlighter language="bash" style={docco}>
                $ npm install loql-cache
              </SyntaxHighlighter>
              <p>
                After you install local-cache, you'll need to tell Webpack that it's there. The
                service worker file is located inside of the loql-cache directory. With Webpack, it
                can be bundled with the rest of your assets using a single line in the configuration
                file.
              </p>
              <SyntaxHighlighter language="javascript" style={docco}>
                {webpack}
              </SyntaxHighlighter>
              <p>
                Great! When you build your site, you should now see a loQL.js file included inside
                of your public folder. Now, we need to register that service worker and set up our
                caching strategies.
              </p>
            </section>
            <section>
              <h3>Registration</h3>
              <p>
                The loQL service worker needs to be registered at some point in your project. It
                also needs to be told which GraphQL endpoints to cache data from—this is the only{' '}
                <em>required</em> configuration setting. inside of one of our Javascript files.
              </p>
              <SyntaxHighlighter language="javascript" style={docco}>
                {registration}
              </SyntaxHighlighter>
              <p>
                Congratulations, the loql-cache service worker will now cache data from that API.
                The other (optional) configuration options are detailed below.
              </p>
            </section>
            <section>
              <h3>Configuration</h3>
              <p>The service worker can be configured in a variety of ways. </p>
            </section>
            <section>
              <h3>Future Development</h3>
              <p>The package </p>
            </section>
          </article>
        </article>
      </Container>
      <Container></Container>
    </div>
  );
};

export default DocsContainer;

// # loQL

// A light, modular npm package for performant client-side GraphQL caching with Service Workers and IndexedDB.

// ## Installation

// Install via [npm](https://www.npmjs.com/package/loql)

// ```bash
// npm install loql
// ```

// ## Usage

// I. Set Configuration Object:

// a. gqlEndpoints (Required): Add GraphQL endpoint URL's to be enabled for caching. (Array of strings)

// b. useMetrics (Optional): Enable metrics collection. (Boolean)

// c. cacheMethod (Optional): Desired caching strategy. (String)

// d. cacheExpirationLimit (Optional): Interval, in milliseconds, at which to refresh cached data. (Integer)

// e. doNotCacheGlobal (Optional): Define schema-specific types/fields, whose inclusion in a query will render that query ignored by the caching logic. (Arrays of strings)

// f. doNotCacheCustom (Optional): Similar to above, but endpoint-specific. (Object where each key is an endpoint, and the corresponding value is the array of types/fields intended to bypass the cache.

// ```javascript
// {
//   gqlEndpoints: ['http://localhost:<###>/api/graphql', 'https://<abc>.com/graphql'],
//   useMetrics: false,
//   cacheExpirationLimit: 20000,
//   cacheMethod: 'cache-network',
//   doNotCacheGlobal: [],
//   doNotCacheCustom: {
//      'http://localhost:<###>/api/graphql': ['password'],
//      'https://<abc>.com/graphql': ['account', 'real_time_data'];
//   }
// }
// ```

// ## Features
// - Enables offline use: IndexedDB storage provides high-capacity and persistent storage, while keeping reads/writes asynchronous
// - Minimum-dependency: No server-side component, avoid the use of large libraries
// - Cache validation: Keep data fresh with shorter expiration limits, cache-network strategy, or both!
// - Easy-to-use: Install package, pass in Configuration Object, start caching
// - Flexible: Works with GQL queries made as both fetch POST and GET requests
//   Easily exempt, specific, desired types of queries from being cached

// ## Usage Notes
// - Caching is currently only supported for query-type operations. Mutations, subscriptions, etc will still run,
//   but will not be cached.
// - Cached data normalization feature is disabled.

// ## Supported Browsers
// - Desktop: Edge, Firefox, Chrome, Safari, Opera
// - Mobile: Firefox, Chrome, Android Browser, Samsung Internet

// ## Contributing
// Contributions are welcome. Please read CONTRIBUTE.md prior to making a Pull Request.

// ## License
// [MIT](https://choosealicense.com/licenses/mit/)
