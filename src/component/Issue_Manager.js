import React, { Component } from 'react'

export default class Issue_Manager extends Component {
  deleteIsssue = () => {
    const index = this.props.del
    const { handleDelete } = this.props
    handleDelete(index)
  }
  render() {
    return (
      <div>
        <div>
          <div>
            <h3>ISSUE FORM</h3>
            <p>Id:{this.props.id}</p>
            <p>Name:{this.props.name}</p>
            <p>Employ:{this.props.employ}</p>
            <p>Status:{this.props.status}</p>
            -------\ ` V ` /-------
        </div>
          <button onClick={this.deleteIsssue}>Delete</button>
        </div>
        -------( . )( . )-------
      </div>
    )
  }
}
