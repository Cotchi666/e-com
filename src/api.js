import axios from 'axios';
// const accessToken = window.localStorage.getItem('accessToken') ?? 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkRlbW8xMjNAZ21haWwuY29tIiwic3ViIjoiNjYxYTY3NWMyYTM2YTYyZmY5M2JmOWMzIiwiaWF0IjoxNzIwNDk0MzY5LCJleHAiOjE3MjA1ODA3Njl9.4AIGo5gnX0BKerLnhcXJFOz9DDPt1aH8OuJp2zLhAuI';
const openAIKey = window.localStorage.getItem('openAIKey') ?? '';
// const backendHost = process.env.REACT_APP_BACKEND_HOST ?? 'http://localhost:8000/graphql';
const backendHost = 'http://localhost:8000/graphql';
const accessToken ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkRlbW8xMjNAZ21haWwuY29tIiwic3ViIjoiNjYxYTY3NWMyYTM2YTYyZmY5M2JmOWMzIiwiaWF0IjoxNzIwNTEwMDI4LCJleHAiOjE3MjA1OTY0Mjh9.ScHBGFrmcOBi-96aHie5pgV6vPJPnB_69fsGM1_JT6E'
export const createMessage = async (messageText, conversationId) => {

  const body = {
    query: `
      mutation 
      ($createMessageInput: CreateMessageInput!)  {
        createMessage(createMessageInput: $createMessageInput) {
               id,
                message,
                chatBotMessage,
                messageStatus,
                senderId: ,
                conversationId,
                createdAt,
                updatedAt,
                deletedAt
          }
      }
  `,
    variables: {
      createMessageInput: {
        messageText: messageText,
        conversationId: '6621dec4146fbe6b65d6cbe6'
      }
    }
  };

  let config = {
    headers: {
      Authorization: 'Bearer ' + accessToken
    },
    // params: {
    //   openAIKey: openAIKey
    // }
  };

  const response = await axios.post(backendHost, body, config);
  return response;
};
