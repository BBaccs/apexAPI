const apex = new Apex();
const search = document.getElementById('searchUser');

search.addEventListener('keyup', function(){
    const user = search.value;
    console.log(user);
    apex.getUser()
    .then(profile => console.log(profile))
    .catch(err => console.log(err));
})

