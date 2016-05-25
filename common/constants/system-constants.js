'use strict'
var keyMirror = require('keymirror');

module.exports = {
    ActionTypes:keyMirror({
		RECEIVED_ERROR_MSG:null,
        RECEIVED_STUDENT_INFO:null,
        RECEIVED_USER_INFO:null,
        POSTED_USER_LOGIN_FORM:null,
		POSTED_USER_LOGOUT_FORM:null,
		POSTED_USER_NEW_PASSWORD:null,
		POSTED_USER_FEEDBACK:null,
		RECEIVED_PROVINCES:null,
        CHANGED_ADDRESS_FORM:null,
		RECEIVED_CATEGORY:null,
		CHANGED_CATEGORY_FORM:null,
		CHANGED_DATE_PICKER_FORM:null,
        RECEIVED_ALL_DATA:null,
        RECEIVED_STUDENT_META:null
    }),
    EventTypes:keyMirror({
		RECEIVED_ERROR_MSG:null,
        RECEIVED_STUDENT_INFO:null,
        RECEIVED_USER_INFO:null,
        POSTED_USER_LOGIN_FORM:null,
		POSTED_USER_LOGOUT_FORM:null,
		POSTED_USER_NEW_PASSWORD:null,
		POSTED_USER_FEEDBACK:null,
		RECEIVED_PROVINCES:null,
        CHANGED_ADDRESS_FORM:null,
		RECEIVED_CATEGORY:null,
		CHANGED_CATEGORY_FORM:null,
		CHANGED_DATE_PICKER_FORM:null,
        RECEIVED_ALL_DATA:null,
        RECEIVED_STUDENT_META:null
    })
}
