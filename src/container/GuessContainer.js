import IssueForm from '../component'
import { connect } from 'react-redux'
import { getIssueAction, deleteAction } from '../action/GetValue'

const mapStateToProps = (state) => {
  const { valuer } = state
  const { value } = valuer
  // const { id, name, employ, status } = value
  return {
  
    value,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleId: function (id, name, employ, state) {
      const action = getIssueAction(id, name, employ, state)
      dispatch(action)
    },
    handleDelete: function(index){
      const action = deleteAction(index)
      dispatch(action)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(IssueForm)