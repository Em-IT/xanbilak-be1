import express from 'express';
import { testEnvironmentVariable } from '../settings';
import { messagesPage } from './messages';
import { modifyMessage, performAsyncAction } from '../middleware';
import { addMessage } from '../controllers/messages';
import { readShoppingItems } from './shoppingItems';

const indexRouter = express.Router();

/* GET home page. */
indexRouter.get('/', (req, res) => res.status(200).json({ message: (`Welcome to Xanbilak 1st API, Message : ${testEnvironmentVariable}`) }));
indexRouter.get('/messages', messagesPage);
indexRouter.post('/messages', modifyMessage, performAsyncAction, addMessage);
indexRouter.get('/sic', readShoppingItems);

export default indexRouter;
