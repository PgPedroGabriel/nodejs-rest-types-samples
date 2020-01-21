class ObjectMiddleware {
  constructor(model) {
    this.model = model;
  }

  async find(req, res, next) {
    const { id } = req.params;

    if (!id) {
      return res.status(401).json({ error: 'invalid param' });
    }

    const currentObject = await this.model.findByPk(id);

    if (!currentObject) {
      return res.status(404).json({ error: 'invalid param' });
    }

    req.currentObject = currentObject;

    return next();
  }
}

export default ObjectMiddleware;
