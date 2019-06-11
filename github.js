class GitHub{
  constructor(){
    this.client_id = 'c8902029fb6796a7c0ef';
    this.client_secret = 'b5f8f5fa9603d5fcd904b403184034d4963044ca';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';  
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    return{
      profile,
      repos
    }
  }
}