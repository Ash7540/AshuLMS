import mongoose, { Document, Model, Schema } from "mongoose";

export interface  INotification {
    title: string;
    message: string;
    status: string;
    userId: string;
}

const notificationSchema = new Schema<INotification>({
    title: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
        default: "unread",
    },

}, {timestamps: true}
);
// notificationSchema.set("toJSON",{transform:(doc :Document ,ret)=>{delete ret._id}} );
const NotificationModel : Model<INotification> = mongoose.model('Notification', notificationSchema);
// export default UserModel;
export default NotificationModel;