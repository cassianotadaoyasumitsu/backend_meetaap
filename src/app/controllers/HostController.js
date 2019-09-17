import User from '../models/User';
import File from '../models/File';

class HostController {
  async index(req, res) {
    const hosts = await User.findAll({
      where: { host: true },
      attributes: ['id', 'name', 'email', 'avatar_id'],
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['name', 'path', 'url'],
        },
      ],
    });

    return res.json(hosts);
  }
}

export default new HostController();
