import Message from './Message.js';

class MessageController {
  async create(req, res) {
    try {
      const { name, message } = req.body;
      const newMessage = await Message.create({ name, message });
      res.json(newMessage);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAll(req, res) {
    try {
      const Messages = await Message.find();
      return res.json(Messages);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new MessageController();
