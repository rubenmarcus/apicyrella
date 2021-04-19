const Occurrence = require('../models/Occurrence');

const OccurrenceController = () => {

  const ApiCall = async (Ocorrencias, res) => {
                try {
                    await Ocorrencias;
              
                    
                    if(!Ocorrencias) {
                      return res.status(400).json({ msg: 'Não encontramos nenhuma ocorrência com esse ID.' });
                    }

                    return res.status(200).json({ "Ocorrencias": Ocorrencias });
                } catch(err) {
                    console.log(err);
                    return res.status(500).json({ msg: 'Internal server error' });
                }
  }


  const getAll = async (req, res) => {

    let occurrences;
  

    
    const filter = req.query;

    

    occurrences =  await Occurrence.findAll({
      where:
       filter
      })


    return ApiCall(occurrences, res);
  };


  const getbyId = async (req, res) => {
    const { id } = req.params;

   
    const occurrencebyId = await Occurrence.findOne({
      where: {
        id,
      },
    });

    return ApiCall(occurrencebyId, res );

  }



  const destroy = async (req, res) => {
    const { id } = req.params;

    try {
      const Occorrencia = await Occurrence.findOne({
        where: {
          id,
        },
      });

      if(!Occorrencia) {
        return res.status(400).json({ msg: 'Bad Request: Model not found' })
      }

      await Occorrencia.destroy();

      return res.status(200).json({ msg: 'Ocorrência apagada com Sucesso!' });
    } catch (err) {
      console.error(err);

      return res.status(500).json({ msg: 'Internal server error' });
    }
  };




  const update = async (req, res) => {
    const { id } = req.params;


    try {
      const Occorrencia = await Occurrence.findOne({
        where: {
          id,
        },
      });

      if(!Occorrencia) {
        return res.status(400).json({ msg: 'Bad Request: Model not found' });
      }

      const updatedOccurrence = await Occorrencia.update({
        pjo_bloco: req.body.pjo_bloco,
        pjo_unidade: req.body.pjo_unidade,
        description: req.body.description,
        pjo_bandeira: req.body.pjo_bandeira,
        pjo_empreendimentoid: req.body.pjo_empreendimentoid,
        pjo_clientedaunidade: req.body.pjo_clientedaunidade,
      })

      return res.status(200).json({ "Ocorrencia": updatedOccurrence });
    } catch (err) {
      // better save it to log file
      console.error(err);

      return res.status(500).json({ msg: 'Internal server error' });
    }
  };



  const addOccurrence = async (req, res) => {

    try {
      const Occorrencia = await Occurrence.create({
        pjo_bloco: req.body.pjo_bloco,
        pjo_unidade: req.body.pjo_unidade,
        description: req.body.description,
        pjo_bandeira: req.body.pjo_bandeira,
        pjo_empreendimentoid: req.body.pjo_empreendimentoid,
        pjo_clientedaunidade: req.body.pjo_clientedaunidade,
      });

      if(!Occorrencia) {
        return res.status(400).json({ msg: 'Bad Request: Ocorrência' });
      }

      return res.status(200).json({ Occorrencia });
    } catch (err) {
      console.error(err);

      return res.status(500).json({ msg: err.message  });
    }

  }



  return {
    getAll,
    getbyId,
    addOccurrence,
    update,
    destroy
  };
};

module.exports = OccurrenceController;
