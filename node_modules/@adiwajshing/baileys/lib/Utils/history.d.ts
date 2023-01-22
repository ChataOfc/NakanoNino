import { AxiosRequestConfig } from 'axios';
import { proto } from '../../WAProto';
import { Chat, Contact, InitialReceivedChatsState } from '../Types';
export declare const downloadHistory: (msg: proto.Message.IHistorySyncNotification, options: AxiosRequestConfig<any>) => Promise<proto.HistorySync>;
export declare const processHistoryMessage: (item: proto.IHistorySync, historyCache: Set<string>, recvChats: InitialReceivedChatsState) => {
    chats: Chat[];
    contacts: Contact[];
    messages: proto.IWebMessageInfo[];
    didProcess: boolean;
};
export declare const downloadAndProcessHistorySyncNotification: (msg: proto.Message.IHistorySyncNotification, historyCache: Set<string>, recvChats: InitialReceivedChatsState, options: AxiosRequestConfig<any>) => Promise<{
    chats: Chat[];
    contacts: Contact[];
    messages: proto.IWebMessageInfo[];
    didProcess: boolean;
}>;
export declare const isHistoryMsg: (message: proto.IMessage) => boolean;
