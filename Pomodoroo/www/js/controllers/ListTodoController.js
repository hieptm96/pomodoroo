module.controller('ListTodoController', function($scope, $rootScope) {
  ons.ready(function() {
    // Init code here
  });
  $scope.pending = true;

  $scope.confirm = function(material) {
    var mod = material ? 'material' : undefined;
    ons.notification.confirm({
      message: 'Are you sure you want to delete?',
      modifier: mod,
      callback: function(idx) {
        switch (idx) {
          case 0:
            // ons.notification.alert({
            //   message: 'You pressed "Cancel".',
            //   modifier: mod
            // });
            break;
          case 1:
            ons.notification.alert({
              message: 'You have been deleted.',
              modifier: mod
            });
            break;
        }
      }
    });
  }

  $scope.amination_right = function($event){
    angular.element($event.target).addClass('hide-children');
    angular.element($event.target).addClass('animation-swipe-right');
  }

  $scope.timer = function(){
    var second_down = 60;
    var progress = 0;
    var minute_down = 24;
    setInterval(function(){
        second_down--;
        if(second_down == 0){
          minute_down--;
          second_down = 59;
        }
        progress++;
        if(second_down < 10){
          $('.second').text('0' + second_down);
        } else {
          $('.second').text(second_down);
        }
        $('.minute').text(minute_down);
        if(progress % 15 == 0){
          $('.second').parent().parent().removeClass('p' +(progress/15 -1)).addClass('p'+progress/15);
        }
    },1000);
  }
});
