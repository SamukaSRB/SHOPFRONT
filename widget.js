
//Samuka
//JavaScript que usa Ajax através do objeto XMLHttpRequest
//Para consumir o que é retornado no arquivo json products.json
//No html há uma div com id box em que dinamicamente é criado uma div que é na
//verdade o widget em que serão carregados os dados do produto do json
//É usada uma função jquery .append para adicionar os novos elementos a div com id box
let xhr=new XMLHttpRequest();

xhr.open("GET","products.json");

xhr.send(null);

xhr.onreadystatechange=verificAjax;

function verificAjax(){
   //É verificado se os dados estão prontos para serem consumidos 
   //E se o status da requisição é 200 ou seja que ocorreu tudo bem sem erro
    if(xhr.readyState ===4 && xhr.status ===200){
        let resp=JSON.parse(xhr.responseText);
        console.log(resp);
        $("#box").append('<div class="row"><div class="col-xs-12 col-sm-6 col-md-6"><div class="well well-sm"><div class="row"><div class="col-sm-6 col-md-4"><img src="'+resp.item.imageName+'" alt="'+JSON.stringify(resp.item.imageName).split("/")[1]+'"" class="img-rounded img-responsive"/></div><div class="col-sm-6 col-md-8><h4 class="fontTitulo" >Shoppub</h4><small title="fontRobtReg">CÓDIGO '+resp.item.businessId+'<i class=""></i></small><small title="fontRobtReg">'+resp.item.name+'<i class=""></i></small><br/><small title="fontRobtReg">'+resp.item.price+'<i class=""></i></small><br/><small title="fontRobtReg">'+resp.item.oldPrice+'<i class=""></i></small><br/><small title="fontRobtReg">'+resp.item.productInfo.paymentConditions+' <i class=""></i></small><div class="btn-group"><button type="button" class="btn btn-primary">Comprar</button><i class="material-icons">add_shopping_cart</i></div></div></div></div></div>');
        
        
      resp.recommendation.forEach(v=>{
        $("#box").append('<div class="row"><div class="col-xs-12 col-sm-6 col-md-6"><div class="well well-sm"><div class="row"><div class="col-sm-6 col-md-4"><img src="'+v.imageName+'" alt="'+JSON.stringify(v.imageName).split("/")[1]+'"" class="img-rounded img-responsive" /></div><div class="col-sm-6 col-md-8><h4 class="fontTitulo" >Shoppub</h4><small title="fontRobtReg">CÓDIGO '+v.businessId+'<i class=""></i></small><small title="fontRobtReg">'+v.name+'<i class=""></i></small><br/><small title="fontRobtReg">'+v.price+'<i class=""></i></small><br/><small title="fontRobtReg">'+v.oldPrice+'<i class=""></i></small><br/><small title="fontRobtReg">'+v.productInfo.paymentConditions+' <i class=""></i></small><div class="btn-group"><button type="button" class="btn btn-primary">Comprar</button><i class="material-icons">add_shopping_cart</i></div></div></div></div>');
      });
        
       
    }
}
//Caso não esteja conseguindo visualizar os produtos use o brackets IDE para carregar o servidor no modo http
//para consumir os dados do json ou crie uma api fake através do site https://jsonplaceholder.typicode.com/
//\Samuka

