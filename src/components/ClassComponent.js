import React from 'react';
import Row from './Row';
import { ThemeContext, LocaleContext } from '../lib/context';

/*
  Context is kind of global variable for a subtree it's useful for read
  current theme or language that the user is using. and useful to avoid 
  passing everything to props if you need all components to be able to 
  read some value 
*/

/*
  Lifecycle method the commonly use case for lifecycle methods is you want to
  perform some side effect such us firing off the request.
*/

export class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Mary",
      surname: "Oudom",
      width: window.innerWidth
    }
  }

  onHandleNameChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  onHandleSurnameChange = (e) => {
    this.setState({
      surname: e.target.value
    })
  }


  componentDidMount(){
    document.title = this.state.name + ' ' + this.state.surname;
    window.addEventListener('resize', this.handleResize)
  }

  componentDidUpdate(){
    document.title = this.state.name + ' ' + this.state.surname;
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.handleResize)
  }
  
  handleResize = () => {
    this.setState({ width: window.innerWidth })    
  }

  render() {
    return (
      <>
        <ThemeContext.Consumer>
          {
            theme => (
              <section className={theme}>
                <h1>Class Component</h1>
                <Row label="Name">
                  <input value={this.state.name} onChange={this.onHandleNameChange} />
                </Row>
                <Row label="Surname">
                  <input value={this.state.surname} onChange={this.onHandleSurnameChange} />
                </Row>
                <LocaleContext.Consumer>
                  {
                    locale => (
                      <Row label="Language">
                        {
                          locale
                        }
                      </Row>
                    )
                  }
                </LocaleContext.Consumer>

                <Row label="Width">
                  {
                    this.state.width
                  }
                </Row>
              </section>
            )
          }
        </ThemeContext.Consumer>

      </>
    )
  }
}