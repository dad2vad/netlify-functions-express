import React, { Component } from 'react'
import netlifyLogo from './netlify-logo-black.svg'
import expressLogo from './express.png'
import './App.css'

const GitHubCorner = ({ url }) => {
  return (
    <a href={url} className='github-corner' aria-label='View source on GitHub'>

    </a>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <GitHubCorner url={'https://github.com/netlify-labs/netlify-functions-express'} />
        <header className="App-header">

          <div className="logo-wrapper">
            <img src={netlifyLogo} className="netlify-logo" alt="logo" />
            <span className='and'>+</span>
            <img src={expressLogo} className="express-logo" alt="logo" />

          </div>
          <h1 className="App-title">How to use express.js with Netlify functions</h1>
        </header>

        <p className="App-intro">
          <h2>Choose an example</h2>
        </p>

        <div className='content'>
          <a className='link' href="/.netlify/functions/aws-serverless-express">
            Example using `aws-serverless-express` module
          </a>
          <a className='link' href="/.netlify/functions/serverless-http">
            Example using `serverless-http` module
          </a>
        <a className='link' href="/.netlify/functions/serverless-http/users">
            Example using `serverless-http/users` module
          </a>
                      <a className='link' href="/.netlify/functions/serverless-http/hello">
            Example using `serverless-http/hello` module
          </a>
                <a className='link' href="/.netlify/functions/standalone-aws-serverless-express-example">
            Example using `serverless-http` module
          </a>
          <a className='link' href="/.netlify/functions/vue-ssr">
            Example using React serverside rendering
          </a>
          <a className='link' href="/.netlify/functions/react-express-ssr">
            Example using React serverside rendering
          </a>
        </div>
      </div>
    )
  }
}

export default App
