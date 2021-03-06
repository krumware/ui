import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: ['targetType'],
  targetType:  'none',

  actions: {
    refreshModel() {
      this.send('refresh');
    }
  }
});
