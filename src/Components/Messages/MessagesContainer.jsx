import { sendMessageCreator, updateNewMessageBodyCreator } from '../../Redux/messagesReducer';
import Messages from './Messages';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
	return {
		messagesPage: state.messagesPage
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

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;
