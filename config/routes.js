

  const occurrenceRoutes = {
    'GET /ocorrencias': 'OccurrenceController.getAll',
    'GET /ocorrencias/:id': 'OccurrenceController.getbyId',
    'POST /ocorrencias/adicionar': 'OccurrenceController.addOccurrence',
    'PUT /ocorrencias/editar/:id': 'OccurrenceController.update',
    'DELETE /ocorrencias/remover/:id': 'OccurrenceController.destroy'
  }

  const assistanceRoutes = {
    'GET /assistencias': 'AssistanceController.getAll',
    'GET /assistencias/:id': 'AssistanceController.getbyId',
    'POST /assistencias/adicionar': 'AssistanceController.addAssistance',
    'PUT /assistencias/editar/:id': 'AssistanceController.update',
    'DELETE /assistencias/remover/:id': 'AssistanceController.destroy'
  }
  
  const Routes = {
    ...occurrenceRoutes,
    ...assistanceRoutes
    };

  module.exports = Routes;
  