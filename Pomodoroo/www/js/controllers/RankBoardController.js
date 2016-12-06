module.controller('RankBoardController', function($scope, $rootScope) {
  ons.ready(function() {
    // Init code here
  });
  $scope.list_ranks = [
    {
      rank: '1',
      name: 'Tô Mạnh Hiệp',
      address: 'Thái Bình',
      avatar: 'image/rank-1.jpg',
      phone_number: '0969137941',
      gmail: 'hiep1996tb@gmail.com'
    },
    {
      rank: '2',
      name: 'Nguyễn Quang Hiếu',
      address: 'TP. Hồ Chí Minh',
      avatar: 'image/rank-2.jpg',
      phone_number: '0969137941',
      gmail: 'aaa@gmail.com'
    },
    {
      rank: '3',
      name: 'Nguyễn Minh Hiếu',
      address: 'Hải Dương',
      avatar: 'image/rank-3.jpg',
      phone_number: '0969137941',
      gmail: 'hiep1996tb@gmail.com'
    },
    {
      rank: '4',
      name: 'Hoàng Văn Hải',
      address: 'Vĩnh Phúc',
      avatar: 'image/rank-1.jpg',
      phone_number: '0969137941',
      gmail: 'hiep1996tb@gmail.com'
    },
    {
      rank: '5',
      name: 'Nguyễn Lê Hải',
      address: 'Hải Phòng',
      avatar: 'image/rank-2.jpg',
      phone_number: '0969137941',
      gmail: 'hiep1996tb@gmail.com'
    },
    {
      rank: '6',
      name: 'Nguyễn Quốc Khánh',
      address: 'Đà Nẵng',
      avatar: 'image/rank-3.jpg',
      phone_number: '0969137941',
      gmail: 'hiep1996tb@gmail.com'
    },
    {
      rank: '7',
      name: 'Nguyễn Thùy Linh',
      address: 'Nha Trang',
      avatar: 'image/rank-1.jpg',
      phone_number: '0969137941',
      gmail: 'hiep1996tb@gmail.com'
    },
    {
      rank: '8',
      name: 'Nguyễn Xuân Đức',
      address: 'TP. Hồ Chí Minh',
      avatar: 'image/rank-2.jpg',
      phone_number: '0969137941',
      gmail: 'hiep1996tb@gmail.com'
    },
    {
      rank: '9',
      name: 'Nguyễn Thanh Tùng',
      address: 'Thái Bình',
      avatar: 'image/rank-3.jpg',
      phone_number: '0969137941',
      gmail: 'hiep1996tb@gmail.com'
    },
    {
      rank: '10',
      name: 'Tô Hiệp',
      address: 'Thái Bình',
      avatar: 'image/rank-1.jpg',
      phone_number: '0969137941',
      gmail: 'hiep1996tb@gmail.com'
    }
  ];

  // $scope.current_people = 0;
  $scope.show_detail = function(index){
    $rootScope.current_people = index;
  }

  $scope.list_private_rank = [
    {
      name: "Rank Group 1",
      number_member: '4'
    },
    {
      name: 'Rank Group 2',
      number_member: '3'
    }
  ];
});
