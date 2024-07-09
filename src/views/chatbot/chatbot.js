import React from 'react'
import ChatBot from 'react-chatbotify'
import chatbotIMG from 'src/assets/images/chatbot/javis-icon.jpg'
import chatbotIMGGIF from 'src/assets/images/chatbot/javis-icon-gif.gif'
import { chatbot } from '../../layouts/full/header/data'
const options = {
    isOpen: true,
    // ...other configurations
    theme: {
        primaryColor: '#42b0c5',
        secondaryColor: '#491d8d',
        fontFamily: 'Arial, sans-serif',
    },
    audio: {
        disabled: false,
    },
    // ...other styles
    chatButton: {
        icon: chatbot[0].avatar
    },
    header:{
        avatar:chatbot[0].avatar
    }
 
};

export default function MyChatBot() {
    return (
        <ChatBot options={options} />
    )
}
