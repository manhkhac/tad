$(document).ready(function(){if(window.location.hostname==tmbq){var d="";function c(){t1=$(".tad-in-text1").val();$(".tad-out-text1").html(t1);t2=$(".tad-in-text2").val();$(".tad-out-text2").html(t2);const p=document.getElementById("temp");const a=p.getContext("2d");a.save();a.fillStyle="white";a.beginPath();a.arc(p.width/2,p.width/2,400,0,2*Math.PI);a.fill();a.restore();var b=t1.length;var m=t2.length;if(b==0){alert("Vui lòng nhập chữ");$(".tad-in-text1").focus();return false}if(m==0){alert("Vui lòng nhập chữ");$(".tad-in-text2").focus();return false}if(b==1){a.save();p.style.letterSpacing="0px";a.fillStyle="black";a.font="900 300px Arial-b";var q=t1.toUpperCase();var l=a.measureText(q).width;a.fillText(q,(p.width/2)-(l/2)+6,600);a.restore()}if(b==2){a.save();p.style.letterSpacing="0px";a.fillStyle="black";a.font="900 300px Arial-b";var q=t1.toUpperCase();var l=a.measureText(q).width;a.fillText(q,(p.width/2)-(l/2)+4,600);a.restore()}if(b==3){a.save();p.style.letterSpacing="0px";a.fillStyle="black";a.font="900 250px Arial-b";var q=t1.toUpperCase();var l=a.measureText(q).width;a.fillText(q,(p.width/2)-(l/2)+5,570);a.restore()}a.save();p.style.letterSpacing="10px";a.fillStyle="black";a.font="600 40px UTM-Avo";var r=t2.toUpperCase();var l=a.measureText(r).width;a.fillText(r,(p.width/2)-(l/2)+15,680);a.restore();a.save();a.globalCompositeOperation="lighten";const n=document.getElementById("scream");a.drawImage(n,0,0,p.width,p.height);a.restore();a.save();a.globalCompositeOperation="overlay";a.globalAlpha=0.2;a.fillStyle="black";a.beginPath();a.arc(p.width/2,p.width/2,400,0,2*Math.PI);a.lineWidth=50;a.stroke();a.restore();const o=p.toDataURL("image/jpeg");d=o;$("#img-out").html("<img src='"+o+"' alt='Tạo ảnh đẹp' class='img-thumbnail'/>");$(".load-anh").show(0).delay(2000).hide(0);$("#img-out,.tad-ketqua,#tad-taianhve").hide(0).delay(2000).show(0)}$(".tad-in-text2,.tad-in-text1,.tad-in-text0").click(function(){$("#tad-taoanh").removeClass("disabled")});$("#tad-taoanh").click(function(){document.fonts.load('10pt "Arial-b"','10pt "UTM-Avo"').then(c)});$("#tad-taianhve").click(function(){$(this).attr("download","taoanhdep--logo-polygon").attr("href",d)})}});