import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import './Docs.scss';

import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import bash from 'react-syntax-highlighter/dist/esm/languages/hljs/bash';
import dracula from 'react-syntax-highlighter/dist/esm/styles/hljs/dracula';

SyntaxHighlighter.registerLanguage('javascript', js);
SyntaxHighlighter.registerLanguage('bash', bash);

const webpack = `const path = require('path');

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
};`;

const registration = `import { register } from "loql-cache";
  register({ gqlEndpoints: ["https://my-site.com/api/graphql"] });
  
  ... The rest of your application ...`;
const DocsContainer = () => {
  return (
    <div className="main-content">
      <Container>
        <article className="main">
          <div className="splash">
            <div id="main-left">
              <h1>Documentation</h1>
            </div>
          </div>
          <article className="docs">
            <p>
              At loQL, we strive to make intuitive software. If anything in this documentation is
              unclear, please <Link to="/team">contact the team</Link> and we'll be happy to help
              out. The project is fully open source and is taking contributions on{' '}
              <a href="https://github.com/oslabs-beta/loQL/">Github</a>.
            </p>
            <section>
              <h3>Who is this package for?</h3>
              <p className="install">
                This package was designed to make offline caching easier for anyone using a GraphQL
                API. The package is extremely small, because it leverages existing browser-native
                APIs like{' '}
                <a href="https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API">
                  service workers
                </a>{' '}
                and{' '}
                <a href="https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API">
                  {' '}
                  IndexedDB{' '}
                </a>{' '}
                It's a great choice for developers looking for an out-of-the-box offline caching
                solution, and who don't wan't to use a heavier alternative like Apollo Client.
              </p>
              <p className="install">
                The package is capable of caching GraphQL queries made via GET or POST requests.
              </p>
            </section>
            <section>
              <h3>Installation</h3>
              <p>First, install the package using your favorite package manager.</p>
              <SyntaxHighlighter language="bash" style={dracula}>
                $ npm install loql-cache
              </SyntaxHighlighter>
              <p>
                After installing loql, you'll need to tell your bundler to include the service
                worker file with your code. With Webpack, this can be accomplished a single line in
                the configuration file.
              </p>
              <SyntaxHighlighter language="javascript" style={dracula}>
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
                <em>required</em> configuration setting.
              </p>
              <SyntaxHighlighter language="javascript" style={dracula}>
                {registration}
              </SyntaxHighlighter>
              <p>
                Your service worker will now cache data from the GraphQL API. By default, the
                service worker will employ a "cache-first" network strategy. This can be configured
                during the registration step. The full list of configuration options are detailed
                below.
              </p>
            </section>
            <section>
              <h3>Configuration</h3>
              <p>
                The loQL service worker is designed to be highly configurable. Each of these values
                can be passed into the register function and will be used when the worker is first
                registered to the page.
              </p>
              <div>
                <div className="args">
                  <span className="name">gqlEndpoints:</span>
                  <span className="type">string[]</span>
                  <span className="isRequired">Required</span>
                  <p className="description">
                    Enable caching for specific GraphQL endpoint URLs. Network calls from the
                    browser to any URL not listed here will be ignored by the service worker and the
                    response data will not be cached.
                  </p>
                </div>
                <div className="args">
                  <span className="name">useMetrics:</span>
                  <span className="type">boolean</span>
                  <span className="isOptional">Optional</span>
                  <p className="description">
                    Enable metrics collection. The metrics will store the overall speed of cached
                    and uncached API calls, and the average amount of time saved in IndexedDB.
                    Should be disabled when deploying your application to a production environment.
                  </p>
                </div>
                <div className="args">
                  <span className="name">cacheMethod:</span>
                  <span className="type">string</span>
                  <span className="isOptional">Optional</span>
                  <p className="description">
                    Desired caching strategy. The loql-cache package supports both "cache-first" and
                    "cache-network" policies.
                  </p>
                </div>
                <div className="args">
                  <span className="name">cacheExpirationLimit:</span>
                  <span className="type">Integer</span>
                  <span className="isOptional">Optional</span>
                  <p className="description">
                    The interval, in milliseconds, after which cached data is considered stale. The
                    service worker will refetch the data from your API if the data is found to be
                    stale and will update the cache.
                  </p>
                </div>
                <div className="args">
                  <span className="name">doNotCacheGlobal:</span>
                  <span className="type">string[]</span>
                  <span className="isOptional">Optional</span>
                  <p className="description">
                    Fields on a GraphQL query that will prevent the query from being cached, no
                    matter the endpoint. For instance, you may have constantly-changing data that
                    you do not want the service worker to cache at all, or sensitive fields that
                    should not be cached in the browser. In order to define endpoint-specific fields
                    that should not be cached, see the <i>doNotCacheCustom</i> setting.
                  </p>
                </div>
                <div className="args">
                  <span className="name">doNotCacheCustom:</span>
                  <span className="type">&#123; [url]: string[] &#125; </span>
                  <span className="isOptional">Optional</span>
                  <p className="description">
                    This setting is like <i>doNotCacheGlobal</i>, but can be used on a per-endpoint
                    basis. The object associates URLs (as keys in the object) with a list of GraphQL
                    fields. Queries made to the URLs that contain any of those fields will not be
                    cached.
                  </p>
                </div>
              </div>
            </section>
            <section>
              <h3>Usage Notes</h3>
              <p>
                This package is still in beta, and currently does not support mutations, directives,
                and subscriptions. The team is currently developing a normalized caching solution
                that will enable mutation support.
              </p>
            </section>
          </article>
        </article>
      </Container>
      <Container></Container>
    </div>
  );
};

export default DocsContainer;
