<script>
        var xmlhttp=new XMLHttpRequest();
        xmlhttp.open("GET","http://ton_site.fr/fichier.txt",true);
        xmlhttp.send();
        xmlhttp.onreadystatechange=function(){
            if (xmlhttp.readyState==4 && xmlhttp.status==200){
                var fichier=xmlhttp.responseText;
                fichier=fichier.split("\n");
                var nb = Math.floor(Math.random() * fichier.length);
                document.getElementById('phrase').innerHTML=fichier[nb];
 
            }}
</script>