module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/hello-world/' : '/',
    css: {
      loaderOptions: {
        sass: {
            additionalData: `
            @import "@/scss/_mixins.scss";
          `
        }
      }
    }
  };