import React from 'react'

import Table from './Table'
import FromTo from './FromTo'
import Invoice from './Invoice'

import printer from './printer.svg'
import save from './save.svg'
import mail from './mail.png'

class Home extends React.PureComponent {
  state = {
    title: localStorage.getItem('title') || 'Invoice',
    saved: 0,
  }

  updateTitle = (event) => {
    const title = event.target.textContent
    this.setState({ title })
    localStorage.setItem('title', title)
    this.onUpdateState()
  }

  onUpdateState = () => {
    this.setState({ saved: 0 })
    setTimeout(() => {
      this.setState({
        saved: Date.now() + 2 * 1000,
      })
      setTimeout(() => {
        if (Date.now() > this.state.saved) {
          this.setState({ saved: 0 })
        }
      }, 2500)
    }, 300)
  }
  handleMail = () => {
    this.props.history.push('/send')
  }
  render() {
    return (
      <div>
        <div className='App'>
          <div className='page'>
            <h1 contentEditable onBlur={this.updateTitle}>
              {this.state.title}
            </h1>
            <FromTo onUpdateState={this.onUpdateState} />
            <Invoice onUpdateState={this.onUpdateState} />
            <Table onUpdateState={this.onUpdateState} />
          </div>
          <img
            className='print'
            src={printer}
            onClick={() => window.print()}
            alt='print'
          />

          <img
            src={mail}
            alt='mail'
            className='mail-btn'
            onClick={() => this.handleMail()}
          />
        </div>
        {!!this.state.saved && <img className='save' src={save} alt='save' />}
      </div> //last div
    )
  }
}

export default Home
