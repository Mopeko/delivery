async function my_fetch(){
    const reponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=12528");
    const cocktails = await reponse.json();
    console.log(cocktails);
}
my_fetch();