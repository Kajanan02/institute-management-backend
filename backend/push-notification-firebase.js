import admin from 'firebase-admin';

// const serviceAccount = require('./pushnotifydemo-33efb-firebase-adminsdk-m6im5-9a44a68765.json'); // Replace with the path to your service account key JSON file
import serviceAccount from "../pushnotifydemo-33efb-firebase-adminsdk-m6im5-9a44a68765.json" assert {type: "json"};

const serverKey = process.env.FIREBASE_SERVER_KEY; // Replace with your Firebase server key

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});


function sendNotificationToTopic(topic, payload) {
    const message = {
        notification: {
            title: "title",
            body: "body"
        },
        topic: "topic"
    };

    admin.messaging().send(message)
        .then(response => {
            console.log('Successfully sent message:', response);
            // res.status(200).json({ message: 'Notification sent successfully' });
        })
        .catch(error => {
            console.log('Error sending message:', error);
            // res.status(500).json({ error: 'An error occurred while sending the notification' });
        });
}

export default sendNotificationToTopic;
