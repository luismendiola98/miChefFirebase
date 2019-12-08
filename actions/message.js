import firebase from 'firebase';
import db from '../config/db';
import _ from 'lodash';

export const addMessage = (id, text) => {
    return async (dispatch, getState) => {
        const { uid, username, photo } = getState().user
        try {
            const message = {
                members: [id, uid].sort(),
                message: text,
                uid: uid,
                username: username,
                photo: photo,
                date: new Date().getTime(),
            }
            db.collection('messages').doc().set(message)
            dispatch(getMessages())
        }
        catch (e){
            console.error(e)
        }
    }
} 

export const getMessages = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().user
        let messages = []
        try {
            const query = await db.collection('messages').where('members', 'array-contains', uid).get()
            // console.log(query)
            query.forEach((response) => {
                let message = response.data()
                messages.push(message)
            })
            // console.log(messages)
            dispatch({type: 'GET_MESSAGES', payload: _.orderBy(messages, 'date', 'desc')})

        }
        catch (e){
            console.error(e)
        }
    }
} 