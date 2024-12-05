let form   = document.getElementById('form');
let texto  = document.getElementById('texto-lista');
let i = 0;

form.addEventListener("submit", function(e)
{
    e.preventDefault();
    let option = true;
    let entradaUser = document.querySelector('#input').value;
    //
    let criar = document.createElement("p");
    criar.classList.add('textos');
    criar.innerHTML = `- ${entradaUser}`;
    criar.style.cursor = "pointer";
    //
    if(i == 10)
    {
        alert('Não é possivel adicionar mais!');
        return;
    }


    //
    criar.addEventListener("click", function()
    {
    if(!option)
    {
        option = true;
        criar.style.textDecoration = "none"; 
    }
    else
    {
        option = false;
        criar.style.textDecoration = "line-through"; 
    }
    })

    //
    criar.addEventListener("dblclick", function()
    {
       let respostaUser = confirm("Deseja mesmo apagar o conteudo?")
       if(respostaUser == true)
       {
        criar.remove();
        i--;
       }
    })
    //
    texto.appendChild(criar);
    i++;
    document.querySelector('#input').value = "";
})





