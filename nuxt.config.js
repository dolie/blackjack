const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router : {
    base : '/blackjack/'
  }
} : {};

export default {
  ...routerBase,
  head : {
    titleTemplate : 'Blackjack Basic Strategy',
    meta          : [
      { charset : 'utf-8' },
      { name : 'viewport', content : 'width=device-width, initial-scale=1' },
      {
      name    : 'description',
      content : 'Application d\'apprentissage de la stratégie de base du Blackjack, adaptée pour les casinos français'
      }
    ],
    link : [
      { rel : 'icon', type : 'image/png', href : 'blackjack.png' }
    ]
  },
  css : [
    '~/assets/css/main.scss'
  ],
  server : {
    port : 8000, // default: 3000
    host : '0.0.0.0' // default: localhost
  },
  build : {
    extend : (config) => {
      const svgRule = config.module.rules.find((rule) => rule.test.test('.svg'));

      svgRule.test = /\.(png|jpe?g|gif|webp)$/;

      config.module.rules.push({
        test   : /\.svg$/,
        loader : 'vue-svg-loader'
      });
    }
  }
};
