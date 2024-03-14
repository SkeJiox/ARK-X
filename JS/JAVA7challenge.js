async function fetchUserData(){
    try{ 
     const data= await fetch ("https://dummyjson.com/users");
     const resultat= await data.json();
     processUserData(resultat.users);
    }
  catch(error) {
    console.error(error);
  }
}
 const processUserData = (users) => {
    try {
        const filtergender = users.filter(user =>user.gender === "male");
        console.log("filtre :" +filtergender);
        filtergender.forEach(user=> console.log(user));

        const fullname= filtergender.map(user => "FullName:"+ user.firstName + user.lastName + " Age :" +user.age );
        fullname.forEach(user => console.log(user));

        const sumAge = users.reduce((accumulator,user)=> accumulator+ user.age,0);
        console.log("age:"+ sumAge);
    }
    catch(error){
      console.error(error);
    }
}
fetchUserData();


