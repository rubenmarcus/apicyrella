const Occurrence = require('../models/Occurrence');
const Assistance = require('../models/Assistance');


const HomeController = () => {




  const getAll = async (req, res) => {
    try {
       const occ = await Occurrence.findAll();
       const assist =  await Assistance.findAll();
        if(!occ || !assist) {
          return res.status(400).json({ msg: 'Não encontramos nenhuma dado' });
        }

        return res.status(200).json({  "Assitencias" : assist, "Ocorrencias": occ});
    } catch(err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
    }
  };




  return {
    getAll,
  };
};

module.exports = HomeController;
