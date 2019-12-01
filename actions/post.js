import firebase from 'firebase';
import uuid from 'uuid';
import db from '../config/db';

export const updateDescription = (text) => {
    return { type: 'UPDATE_DESCRIPTION', payload: text }
} 
export const updatePhoto = (input) => {
    return { type: 'UPDATE_PHOTO', payload: input }
} 
export const updateLocation = (input) => {
    return { type: 'UPDATE_LOCATION', payload: input }
} 
export const sharePost = () => {
    return async (dispatch, getState) => {
        try {
            const { post, user } = getState()
            const id = uuid.v4()
            // console.log(post)
            const share = {
                id: id,
                postPhoto: post.photo,
                description: post.description,
                postLocation: post.location,
                uid: user.uid,
                username: user.username,
                userPhoto: user.photo
            }
            db.collection('posts').doc(id).set(share)
        }
        catch (e){ 
            alert(e)
        } 
    }
} 

export const getPosts = () => {
    return async (dispatch, getState) => {
        try {
            const posts = await db.collection('posts') .get()
            ar = []
            posts.forEach((post) => {
                ar.push(post.data())
            })  
            console.log(ar)
            dispatch ({ type: 'GET_POSTS', payload: ar })
        }
        catch (e){ 
            alert(e)
        } 
    }
} 