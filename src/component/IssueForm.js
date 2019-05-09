import React, { Component } from 'react'
import IssueManager from './Issue_Manager'
import shortid from 'shortid'

export default class IssueForm extends Component {
  state = {
    id: this.props.id ,
    name: '',
    employ: '',
    status: '',
    value: [],
    ID: 1
  }
  handleIDChange = ({ target }) => {
    this.setState({
      id: target.value,
    })
  }
  dmID = () => {
    this.setState({
      ID: this.state.ID + 1
    })
  }
  handleDelete = (id) => {
    const { handleDelete } = this.props
    handleDelete(id)
  }
  handleNameChange = ({ target }) => {
    this.setState({
      name: target.value,
    })
  }
  handleStatusChange = ({ target }) => {
    this.setState({ status: target.value })
  }
  handleEmployChange = ({ target }) => {
    this.setState({ employ: target.value })
  }
  handleAdd = (e) => {
    e.preventDefault()
    const { id, name, employ, status } = this.props
    const { handleId } = this.props
    const newValue = [{
      id,
      name,
      employ,
      status
    }]
    this.dmID()
    this.setState({
      value: [newValue, ...this.state.value]
    })
    // console.log(this.state.value)
    handleId(id, name, employ, status)
  }
  render() {
    const { id, name, status, employ } = this.state
    const { value } = this.state
    return (
      <div>
        <form onSubmit={this.handleAdd}>
          <div>
            ID:<input onChange={this.handleIDChange} value={id} />
          </div>
          <div>
            Name:<input onChange={this.handleNameChange} value={name} />
          </div>
          <div>
            Employ:<input onChange={this.handleEmployChange} value={employ} />
          </div>
          <div>
            Status:<input onChange={this.handleStatusChange} value={status} />
          </div>
          <div>
            <button onClick={this.handleAdd}>Add</button>
          </div>
          
        </form>
        {value.map((e, i) => {
          return (
            <IssueManager
              onSubmit={() => this.handleAdd}
              value={e}
              id={id}
              name={name}
              employ={employ}
              status={status}
              del={i}
              key={shortid}
              handleDelete={() => {this.handleDelete(i)}}
            />
          )
        })}
      </div>
    )
  }
}