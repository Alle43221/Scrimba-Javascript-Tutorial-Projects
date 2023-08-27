let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]


for(let i=0; i<fruit.length; i++)
{if(fruit[i]==="🍎")
    document.getElementById("apple-shelf").innerText+="🍎";
    else
    document.getElementById("orange-shelf").innerText+="🍊";
}
