import firebase from 'firebase';
import db from '../config/db';
import { array } from 'prop-types';

export const updateDescription = (text) => {
    return { type: 'UPDATE_DESCRIPTION', payload: text }
} 

export const sharePost = () => {
    return async (dispatch, getState) => {
        try {
            const { post, user } = getState()
            // console.log(post)
            const share = {
                  postPhoto: 'https://firebasestorage.googleapis.com/v0/b/michef-57ce4.appspot.com/o/24E25059-1FAC-4A97-9B77-9755F0E99C93.jpeg?alt=media&token=48411799-c11f-4085-954c-b6f4560e913f',
                  description: post.description,
                  uid: user.uid,
                  username: user.username,
                  photo: user.photo

            }
            const ref = await db.collection('posts').doc()
            share.id =  ref.id
            ref.set(share)
            // dispatch ({ type: 'LOGIN', payload: user.data() })
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