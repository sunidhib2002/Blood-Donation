
function update(div)
{
    const content_1=document.getElementById("1");
    const content_2=document.getElementById("2");
    const content_3=document.getElementById("3")

 //    console.log(content_1);
 //    console.log(content_2);
 //    console.log(content_3);
	// console.log(div);
	if(div=="vice_pres")
	{
		content_1.classList.add("content_active");
		content_2.classList.remove("content_active");
		content_3.classList.remove("content_active");
	}
	else if(div=="pres")
	{
		content_2.classList.add("content_active");
		content_1.classList.remove("content_active");
		content_3.classList.remove("content_active");
	}
	else if(div=="manager")
	{
		content_3.classList.add("content_active");
		content_2.classList.remove("content_active");
		content_1.classList.remove("content_active");
	}
}


function make_it_visible(tt)
{
  // console.log(tt);
  const down=document.getElementById(tt);

  if(tt==='Q1')
  {
  	  const ans=document.getElementById('A1');
  	  ans.classList.add('make_it_visible');
  	  down.style.display="none";
  	  const up=document.getElementById('Q1_up');
  	  up.style.display="block";
  }
  else if(tt==='Q2')
  {
  	const ans=document.getElementById('A2');
  	  ans.classList.add('make_it_visible');
  	  down.style.display="none";
  	  const up=document.getElementById('Q2_up');
  	  up.style.display="block";
  }
  else if(tt==='Q3')
  {
  	const ans=document.getElementById('A3');
  	  ans.classList.add('make_it_visible');
  	  down.style.display="none";
  	  const up=document.getElementById('Q3_up');
  	  up.style.display="block";
  }
  else if(tt==='Q4')
  {
  	const ans=document.getElementById('A4');
  	  ans.classList.add('make_it_visible');
  	  down.style.display="none";
  	  const up=document.getElementById('Q4_up');
  	  up.style.display="block";
  }
  else if(tt==='Q5')
  {
  	const ans=document.getElementById('A5');
  	  ans.classList.add('make_it_visible');
  	  down.style.display="none";
  	  const up=document.getElementById('Q5_up');
  	  up.style.display="block";
  }

}

function make_it_invisible(bb)
{
	//console.log(bb);
	const up=document.getElementById(bb);
	if(bb==='Q1_up')
	{
		const ans=document.getElementById('A1');
		ans.classList.remove('make_it_visible');
		up.style.display="none";
		const down=document.getElementById('Q1');
		down.style.display="block";
	}
	else if(bb==="Q2_up")
	{
		const ans=document.getElementById('A2');
		ans.classList.remove('make_it_visible');
		up.style.display="none";
		const down=document.getElementById('Q2');
		down.style.display="block";
	}
	else if(bb==="Q3_up")
	{
		const ans=document.getElementById('A3');
		ans.classList.remove('make_it_visible');
		up.style.display="none";
		const down=document.getElementById('Q3');
		down.style.display="block";
	}
	else if(bb==="Q4_up")
	{
		const ans=document.getElementById('A4');
		ans.classList.remove('make_it_visible');
		up.style.display="none";
		const down=document.getElementById('Q4');
		down.style.display="block";
	}
	else if(bb==="Q5_up")
	{
		const ans=document.getElementById('A5');
		ans.classList.remove('make_it_visible');
		up.style.display="none";
		const down=document.getElementById('Q5');
		down.style.display="block";
	}

}

function submit()
{
	if(document.getElementById('TF1').value==' ')
	{
		alert("Please fill the form !!");
	}
	else if(document.getElementById('TF2').value==' ')
	{
		alert("Please fill the form !!");
	}
	else if(document.getElementById('TF3').value==' ')
	{
		alert("Please fill the form !!");
	}
	else if(document.getElementById('TF4').value==' ')
	{
		alert("Please fill the form !!");
	}
	else if(document.getElementById('TA').value==' ')
	{
		alert("Please fill the form !!");
	}
}
