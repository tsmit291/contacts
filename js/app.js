app = angular.module('rolodex', ['ui.materialize', 'satellizer'])
app.config(function($authProvider){
  $authProvider.linkedin({
    url: 'http://localhost:3000/auth/linkedin',
    clientId: '780xk3ywmloce7',
    authorizationEndpoint: 'https://www.linkedin.com/uas/oauth2/authorization',
    redirectUri: 'http://localhost:8080/',
    popupOptions: {width: 527, height: 582}
  });
});
