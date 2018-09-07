	function showCreatPage() {
	    document.getElementById('creatPage').style.display = "block"
	    document.getElementById('mask').style.display = "block"
	    document.getElementById('creatBtn').style.display = "none"
	    document.getElementById('closeBtn').style.display = "block"

	}

	function closeCreatPage() {
		var newOne="<li><a href='' style='display:block;width:100%;height:100%'><span class='addone' style='width:2.5rem;height:100%;display:block'></span></a></li>"
        $('.list').prepend(newOne);
         $('.addone').each(function(){
    var x=2;
    var y=0;
    var rand=parseInt(Math.random() * (x - y + 1) + y)
    $(this).addClass('label'+rand);
	})
	    document.getElementById('creatPage').style.display = "none";
	    document.getElementById('mask').style.display = "none";
	    document.getElementById('creatBtn').style.display = "block";
	    document.getElementById('closeBtn').style.display = "none";
	}

  $(document).ready(function(){
  $(".options1").click(function(){
  $(this).addClass("select1");
  $(this).addClass("select1").siblings().removeClass("select1");
  });
});
    $(document).ready(function(){
  $(".options2").click(function(){
  $(this).addClass("select2");
  $(this).addClass("select2").siblings().removeClass("select2");
  });
});
      $(document).ready(function(){
  $(".options3").click(function(){
  $(this).addClass("select3");
  $(this).addClass("select3").siblings().removeClass("select3");
  });
});
        $(document).ready(function(){
  $(".options4").click(function(){
  $(this).addClass("select4");
  $(this).addClass("select4").siblings().removeClass("select4");
  });
});

var num=0;
function jes(num){
	//获取当前输入值
	document.getElementById("je").value+=num
}	

function tuige(){
	var arr = document.getElementById("je");
    arr.value = arr.value.substring(0, arr.value.length - 1);
}

/*$(document).ready(function(){
	$('#closeBtn').click(function(){
		$('.newOne').fadeIn("fast");
		$('.newOne').animate({
			width:'92%',
		 	opacity:'1'
		});
		})
})*/



