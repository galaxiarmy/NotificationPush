import PushNotification from 'react-native-push-notification'

const showNotification = (title , message) => {
    PushNotification.localNotification({
        channelId: "your-channel-id",
        title: title,
        message: message
    });
};

const handleScheduleNotification = (title, message) => {
    PushNotification.localNotificationSchedule({
        title: title, 
        message: message,
        date: new Date(Date.now() + 5 * 1000),
    })
    
}

const handleNotification = () => {
    PushNotification.cancelAllLocalNotifications();
}

export{showNotification, handleNotification, handleScheduleNotification}
