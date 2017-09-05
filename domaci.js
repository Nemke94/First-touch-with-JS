var korisnik = prompt("Izaberi papir, kamen ili makaze");

var korisnik = korisnik.toLowerCase();

var racunar = Math.random();

console.log(racunar);

if (racunar < 0.34)
{
	racunar = "papir";
	console.log("Racunar je izabrao papir");
	alert("Racunar je izabrao papir!");
}
else if (racunar <=0.67) 
{
	racunar="kamen";
	console.log("Racunar je izabrao kamen");
	alert("Racunar je izabrao kamen!");
}
else
{
	racunar= "makaze";
	console.log("Racunar je izabrao makaze");
	alert("Racunar je izabrao makaze!");
}


if (korisnik== racunar)
{
	console.log("nereseno");
	alert("Nereseno!");
}
else if (korisnik==="papir") 
{
	if (racunar==="kamen") 
	{
		console.log("Korisnik je pobedio");
		alert("Pobedio/la si!");
	}
	else
	{
		console.log("Racunar je pobedio");
		alert("Racunar je pobedio!");
	}
}


if (korisnik== racunar)
{
	
}
else if (korisnik==="kamen") 
{
	if (racunar==="makaze") 
	{
		console.log("Korisnik je pobedio");
		alert("Pobedio/la si!");
	}
	else
	{
		console.log("Racunar je pobedio");
		alert("Racunar je pobedio!");
	}
}


if (korisnik== racunar)
{
	
}
else if (korisnik==="makaze") 
{
	if (racunar==="papir") 
	{
		console.log("Korisnik je pobedio");
		alert("Pobedio/la si!");
	}
	else
	{
		console.log("Racunar je pobedio");
		alert("Racunar je pobedio!");
	}
}

