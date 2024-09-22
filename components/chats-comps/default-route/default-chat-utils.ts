import moment from 'moment';
import {IProfileItemProps} from '../../../shared/types';

// Sorted Users
export const getSortedUsers = (
  users: IProfileItemProps[],
  userMessages: any[],
) => {
  return users
    .map(user => {
      const userChat = userMessages.find(
        message =>
          message.senderId === user.id || message.receiverId === user.id,
      );
      const lastMessageTime =
        userChat?.messages[userChat.messages.length - 1]?.timestamp || null;
      const lastMessage =
        userChat?.messages[userChat.messages.length - 1]?.content || '';

      return {...user, lastMessageTime, lastMessage};
    })
    .sort((a, b) => {
      if (!a.lastMessageTime) return 1;
      if (!b.lastMessageTime) return -1;

      const aTime = moment(a.lastMessageTime);
      const bTime = moment(b.lastMessageTime);

      return bTime.diff(aTime);
    });
};

// filter Users
export const filterUsers = (users: IProfileItemProps[], searchTerm: string) => {
  return users.filter(user =>
    user.nickname.toLowerCase().includes(searchTerm.toLowerCase()),
  );
};

// Unread Messages Count
export const getUnreadMessagesCount = (userId: number, userMessages: any[]) => {
  const chatMessages = userMessages.find(
    chat => chat.senderId === userId || chat.receiverId === userId,
  );
  if (!chatMessages) return 0;

  const loggedInUserId = 0;
  const unreadMessages = chatMessages.messages.filter(
    (message: {isRead: boolean}) =>
      !message.isRead && userId !== loggedInUserId,
  );
  return unreadMessages.length;
};
