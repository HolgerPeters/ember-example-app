import DS from 'ember-data';

export default DS.Model.extend({
    serial: DS.attr('string'),
    email: DS.attr('string'),
});
