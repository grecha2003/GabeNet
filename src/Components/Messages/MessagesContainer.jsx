import { sendMessageCreator, updateNewMessageBodyCreator } from '../../Redux/messagesReducer';
import Messages from './Messages';
import { connect } from 'react-redux';
import { AuthRedirect } from '../../hoc/AuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
	return {
		messagesPage: state.messagesPage,
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		sendMessage: () => {
			dispatch(sendMessageCreator())
		},
		updateNewMessageBody: (body) => {
			dispatch(updateNewMessageBodyCreator(body))
		}
	}
}

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	AuthRedirect
)(Messages)
