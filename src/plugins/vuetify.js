import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'dayspan-vuetify/dist/lib/dayspan-vuetify.min.css'
import Vue from 'vue';
import Vuetify from 'vuetify';
import DaySpanVuetify from 'dayspan-vuetify';

Vue.use(Vuetify);

Vue.use(DaySpanVuetify, {
  methods: {
    getDefaultEventColor: () => '#1976d2'
  }
});

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
});
