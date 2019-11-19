(() => {
  function TeamMember (firstName, surName, email, thumbnail, genderCode) {
    this.firstName = firstName;
    this.surName = surName;
    this.email = email;
    this.thumbnail = thumbnail;
    this.genderCode = genderCode;
    this.toHTMLElementForList = () => `
        <div class="team-member">
          <div class="team-member__name">
            <h1>${this.firstName} ${this.surName}</h1>
          </div>
          <div class="team-member__email">
            <p>${this.email}</p>
          </div>
          <div class="team-member__picture">
            <img src="${this.thumbnail}" alt="pic">
          </div>
          <div class="team-member__gender">
            <i class="${app.getGenderIcon(this.genderCode)}"></i>
          </div>
        </div>
      `;
  }

  const app = {
    initialize () {
      this.teamElement = document.querySelector('.team');
      this.list = [];
      this.generateTeam();
      if (this.teamElement !== null) {
        this.showOnScreen();
      }
    },
    generateTeam () {
      let member = '';
      member = new TeamMember('Philippe', 'De Pauw - Waterschoot', 'philippe.depauw@arteveldehs.be', 'https://randomuser.me/api/portraits/men/15.jpg', 1);
      this.list.push(member);
      member = new TeamMember('Evelien', 'Rutsaert', 'evelien.rutsaert@arteveldehs.be', 'https://randomuser.me/api/portraits/women/21.jpg', 2);
      this.list.push(member);
      member = new TeamMember('Olibier', 'Parent', 'olivier.parent@arteveldehs.be', 'https://randomuser.me/api/portraits/men/37.jpg', 1);
      this.list.push(member);
      member = new TeamMember('Lennart', 'Dubois', 'lennart.dubois@arteveldehs.be', 'https://randomuser.me/api/portraits/men/78.jpg', 1);
      this.list.push(member);
      member = new TeamMember('Claire', 'Geeraerts', 'claire.geeraerts@arteveldehs.be', 'https://randomuser.me/api/portraits/women/54.jpg', 0);
      this.list.push(member);
      member = new TeamMember('Dieter', 'De Weirdt', 'dieter.deweirdt@arteveldehs.be', 'https://randomuser.me/api/portraits/men/58.jpg', 9);
      this.list.push(member);
      member = new TeamMember('Frederick', 'Roegiers', 'frederick.roegiers@arteveldehs.be', 'https://randomuser.me/api/portraits/men/11.jpg', 1);
      this.list.push(member);
    },
    showOnScreen () {
      let tempStr = '';
      this.list.forEach((member) => {
        tempStr += member.toHTMLElementForList();
      });
      this.teamElement.innerHTML = tempStr;
    },
    getGenderIcon (code) {
      switch (code) {
        case 1:
          return 'fas fa-mars';
        case 2:
          return 'fas fa-venus';
        case 9:
          return 'fas fa-genderless';
        case 0:
        default:
          return 'fas fa-venus-mars';
      }
    },
  };

  app.initialize();
})();
