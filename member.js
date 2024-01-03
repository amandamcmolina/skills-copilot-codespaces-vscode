function skillsMember() {
    return {
        restrict: 'E',
        scope: {
        member: '='
        },
        templateUrl: 'app/components/member/member.html',
        controller: 'MemberController',
        controllerAs: 'vm',
        bindToController: true
    };
}