const Assistance = require('../models/Assistance');

const AssistanceController = () => {

  const getAll = async (req, res) => {
    try {

      const filter = req.query;

      if(filter) {
       const filteredValue =  await Assistance.findAll({
          where:
           filter
          })

          return res.status(200).json({ "Assistencias" : filteredValue });
      }

      const assistances = await Assistance.findAll();

      return res.status(200).json({ "Assistencias" : assistances });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  const getbyId = async (req, res) => {
    const { id } = req.params;

  
    try {
      const assistancebyId = await Assistance.findOne({
        where: {
          id,
        },
      });

      if(!assistancebyId) {
        return res.status(400).json({ msg: 'Não encontramos nenhuma assistência com esse ID.' });
      }

      return res.status(200).json({ "Assistencia" : assistancebyId });
    } catch (err) {
      console.error(err);

      return res.status(500).json({ msg: 'Internal server error' });
    }

  }


  const destroy = async (req, res) => {
    const { id } = req.params;

    try {
      const Assistencia = await Assistance.findOne({
        where: {
          id,
        },
      });

      if(!Assistencia) {
        return res.status(400).json({ msg: 'Bad Request: Assistência não encontrada.' })
      }

      await Assistencia.destroy();

      return res.status(200).json({ msg: 'Assistência apagada com Sucesso!' });
    } catch (err) {
      console.error(err);

      return res.status(500).json({ msg: 'Internal server error' });
    }
  };



  const update = async (req, res) => {
    const { id } = req.params;

    try {
      const Assistencia = await Assistance.findOne({
        where: {
          id,
        },
      });

      if(!Assistencia) {
        return res.status(400).json({ msg: 'Bad Request: Assistência não encontrada.' });
      }

      const updatedAssistance = await Assistencia.update({
        actualstart: req.body.actualstart,
        actualend: req.body.actualend,
        pjo_tipodeatividade: req.body.pjo_tipodeatividade,
        subject: req.body.subject,
        pjo_empreendimentoid: req.body.pjo_empreendimentoid,
        pjo_blocoid: req.body.pjo_blocoid,
        pjo_unidadeid: req.body.pjo_unidadeid,

      })

      return res.status(200).json({ updatedAssistance });
    } catch (err) {
      console.error(err);

      return res.status(500).json({ msg: 'Internal server error' - err.msg });
    }
  };




  const addAssistance = async (req, res) => {
       
    const values = {
        actualstart: req.body.actualstart,
        actualend: req.body.actualend,
        pjo_tipodeatividade: req.body.pjo_tipodeatividade,
        subject: req.body.subject,
        pjo_empreendimentoid: req.body.pjo_empreendimentoid,
        pjo_blocoid: req.body.pjo_blocoid,
        pjo_unidadeid: req.body.pjo_unidadeid,
      }
  

    try {
      
        const Assistencia = await Assistance.create(values);

        if(!Assistencia) {
          return res.status(400).json({ msg: 'Bad Request: Assistência não encontrada.' });
        }

        return res.status(200).json({ Assistencia });
    
         

    

    } catch (err) {
      console.error(err);
       
      return res.status(500).json({ msg: err.message  });
    }

  }

  return {
    getAll,
    getbyId,
    addAssistance,
    update,
    destroy
  };
};

module.exports = AssistanceController;