angular
  .module('rolodex')
  .controller('RoloController', function($scope, $auth){
    $scope.authenticate = function(provider) {
      $auth.authenticate(provider);
    };
  });

function RoloController($scope){
  $scope.self = {}
  $scope.self.people = [{
    name: "Brandon",
    occupation: "Developer",
    skills: ['Angular', 'Node', 'PostgreSQL', 'CSS3'],
    email: "brandon@hello.com",
    phone: "303-999-0292",
    meton: "09/22/95",
    metvia: "Slack",
    availability: "Moonlight",
    hours: "20+",
    notes:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Gra"
  },
  {
    name: "Randy",
    occupation: "Designer",
    skills: ['Angular', 'PHP', 'MongoDB', 'CSS3', 'Bootstrap', 'Photoshop'],
    email: "randy@hello.com",
    phone: "303-999-0292",
    meton: "09/22/95",
    metvia: "Meetup",
    availability: "Any",
    hours: "30+",
    notes:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Gra"
  },{
    name: "Arnold",
    occupation: "Developer",
    skills: ['UX', 'UI', 'javascript', 'CSS3', 'responsive design'],
    email: "brandon@hello.com",
    phone: "303-999-0292",
    meton: "09/22/95",
    metvia: "Slack",
    availability: "Moonlight",
    hours: "20+",
    notes:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Gra"
  },{
    name: "Bobby",
    occupation: "Developer",
    skills: ['Swift', 'iOS', 'Cocoa Pods', 'UI'],
    email: "brandon@hello.com",
    phone: "303-999-0292",
    meton: "09/22/95",
    metvia: "Slack",
    availability: "Moonlight",
    hours: "20+",
    notes:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Gra"
  },{
    name: "Jamie",
    occupation: "Designer",
    skills: ['HTML5', 'Ruby', 'Wordpress', 'CSS3', 'Socket.io', 'Java'],
    email: "brandon@hello.com",
    phone: "303-999-0292",
    meton: "09/22/95",
    metvia: "Slack",
    availability: "Moonlight",
    hours: "20+",
    notes:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Gra"
  },{
    name: "Van",
    occupation: "Developer",
    skills: ['Python', 'Node', 'PostgreSQL', 'Flask', 'Django', 'PouchDB'],
    email: "brandon@hello.com",
    phone: "303-999-0292",
    meton: "09/22/95",
    metvia: "Slack",
    availability: "Moonlight",
    hours: "20+",
    notes:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Gra"
  },{
    name: "Rhianna",
    occupation: "Designer",
    skills: ['Angular', 'Ruby', 'Dreamweaver', 'Rails'],
    email: "brandon@hello.com",
    phone: "303-999-0292",
    meton: "09/22/95",
    metvia: "Slack",
    availability: "Moonlight",
    hours: "20+",
    notes:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Gra"
  },{
    name: "Taylor",
    occupation: "Developer",
    skills: ['React', 'Node', 'mySQL', 'Photoshop', 'Foundation', 'jQuery'],
    email: "brandon@hello.com",
    phone: "303-999-0292",
    meton: "09/22/95",
    metvia: "Slack",
    availability: "Moonlight",
    hours: "10+",
    notes:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Gra"
  }]

}
