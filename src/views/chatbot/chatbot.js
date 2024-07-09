import React, { useState } from 'react'
import ChatBot from 'react-chatbotify'
import { chatbot } from '../../layouts/full/header/data'
import { createMessage } from '../../api'
import { MessagesContext } from 'react-chatbotify'


export default function MyChatBot() {


    const [messages, setMessages] = React.useState([]);

    const sendMessage = async (params) => {
        try {
            console.log(params.userInput)
            const response = await createMessage(params.userInput, '6621dec4146fbe6b65d6cbe6'); // Replace with actual conversationId
            const newMessage = response.data.data.createMessage; // Assuming your API response structure
            //   setMessages(prevMessages => [...prevMessages, newMessage]); // Update messages state with the new message
            // } catch (error) {
            //   console.error('Error sending message:', error);
            // }
            return newMessage.chatBotMessage
            // await params.injectMessage(newMessage.chatBotMessage);
        } catch (error) {
            // await params.injectMessage("Unable to load model, is your API Key valid?");
            // hasError = true;
            return "Oh no I don't know what to say!";
        }
    };
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
        header: {
            avatar: chatbot[0].avatar,
            title: chatbot[0].title
        },
        footer: {
            text: "Powered By 🍀 E-COM"
        },
        advance: {
            useCustomMessages: true
        },
        // store this key for chat conversation
        chatHistory: { storageKey: "example_smart_conversation" }
    };

    const flow = {
        start: {
            message: "Hey! I'm Javis",
            path: "loop"
        },
        loop: {
            message: async (params) => {
                const result = await sendMessage(params);

                return result;
            },
            path: "loop",
        }
    }
    return (
        <MessagesContext.Provider value={{ messages: messages, setMessages: setMessages }}>
            <ChatBot options={options} flow={flow} />
        </MessagesContext.Provider>
    )
}
