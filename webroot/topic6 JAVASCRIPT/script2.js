
function tableCreate()
{
	//<link rel="stylesheet" type="text/css" href="ex5StyleSheet.css">

    var body = document.body,
    tbl  = document.createElement('table');
    tbl.style.width  = '700px';
    tbl.style.border = '0.5px solid black';

	
	var tr = tbl.insertRow();
	var td = tr.insertCell();

	//td..style.width =  "400px";
    td.style.border = '5.5px solid black';
	//td.style.width ='300px';

	td.appendChild(document.createTextNode('Multiplication Table'));
	var ct=1;
	for(var i = 0; i < 17; i++)
	{
        var tr = tbl.insertRow();
		ct=1;
        for(var j = 0; j < 16; j++)
		{
				if( i==0 && j==0)
				{
					var td = tr.insertCell();
					td.appendChild(document.createTextNode('x'));
				} else if (j==0 && i!=16)
				{
					var td = tr.insertCell();
					td.appendChild(document.createTextNode(i));
					
                } else if(i>=2 && i!=16)
				{
					var td = tr.insertCell();
					td.appendChild(document.createTextNode(i*ct));
					ct++;
				} else if (i==16 && j==0)
				{
					var td = tr.insertCell();
					ok=0;
				}else if(i!=16)
				{	var td = tr.insertCell();
					td.style.width = '500px';
					td.appendChild(document.createTextNode(j));
				}
				td.style.width = '50px';
				td.style.height = '50px';
				td.style.border = '0.5px solid black';
        }
    }
    body.appendChild(tbl);
}

//window.onload=function(){
//tableCreate(style_it);
//}
