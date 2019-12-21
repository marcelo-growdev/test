import Card from '../models/Card';

class CardController {
  async index(req, res) {
    const cards = await Card.findAll();

    return res.json(cards);
  }

  async show(req, res) {
    const card = await Card.findByPk(req.params.id);
    return res.json(card);
  }

  async store(req, res) {
    const { title, content } = req.body;

    const card = await Card.create({
      id: 5,
      title,
      content,
    });

    res.json(card);
  }

  update() {}

  delete() {}
}

export default new CardController();
