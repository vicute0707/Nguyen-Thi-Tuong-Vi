$(document).ready(function(){
    var i=1;
    $("#btnModal").click(function(){
        $("#myModal").modal('show');
    })

    function kiemTraMa(){
        var mauKT=/[0-9]{9}$/;
        if(mauKT.test($("#txtMa").val())==true){
            // alert("Bạn nhập đúng")
        }
        else{
        // alert("Bạn nhập sai")
        }
    }
    
    
    $("#txtMa").blur(kiemTraMa)
    
    function kiemTraHT(){
        var kt =/(^[A-Z]{1})([a-z]+)(\s[A-Z]{1}([a-z]+))*$/;
        if($("#txtTen").val()==""){
            $("#tbTen").html("*Bắt buộc nhập !! ");
            $("#tbTen").addClass("text-danger");
            return false
        }
        if(!kt.test($("#txtTen").val())){
            $("#tbTen").html("* chữ cái đầu của mỗi từ phải viết hoa !!");
            $("#tbTen").addClass("text-danger")
            return false
        }
        $("#tbTen").html("*");
        return true;
    }
    $("#txtTen").blur(kiemTraHT);
    
    function kiemTraDC(){
    var mauKT1=/^[a-z0-9-_]{3,15}$/;
    var mauKT=/(abc)$/;
    if($("#txtDC").val()==""){
        $("#tbDC").html("Bắt buộc nhập !!");
        $("#tbDC").addClass("text-danger")
        return false
    }
    if(mauKT.test($("#txtDC").val())){
        $("#tbDC").html("*Chữ cái đầu của mỗi từ phải viết hoa !!");
        $("#tbDC").addClass("text-danger");
        return false
    }
        $("#tbDC").html("*");
        return true
    }
    
    $("#txtDC").blur(kiemTraDC);
    //Lấy giá trị của section
    
    
    
    $("#slGia").change(function(){
        $("#slGia option:selected").each(function(){
            alert($(this).val());
            //gán giá trị cho text box txt GiaDV
            $("#txtGiaDV").val($(this).val())
        })
        
    });
    $(".chkDoDung").click(function(){
             var tong=0;
            var n=$(".chkDoDung:checked").length;
               if(n>0){
                $(".chkDoDung:checked").each(function(){
                    tong+=parseFloat($(this).val());
                    $("#txtKQ").val(tong);
                });
               }
            });
    
    $("input[name='giam']").change(function(){
        var tong = parseFloat($("#txtKQ").val())+parseFloat($("#txtGiaDV").val()) - parseFloat($(this).val());
        $("#txtTong").val(tong)
    });
     $("#btnSave").click(function(){
        
        alert("HI")
        var ma=$("#txtMa").val();
        var ht=$("#txtTen").val();
        var dc=$("#txtDC").val();
        var tdv=$("#txtGiaDV").val();  
        var tdd=$("#txtKQ").val();
        var giam=$("input[name='giam']").val();
        var tong=$("#txtTong").val();
        var them =`
        <tr>
        <td>${++i}</td>
        <td>${ma}</td>
        <td>${ht}</td>
        <td>${dc}</td>
        <td>${tdv}</td>
        <td>${tdd}</td>
        <td>${giam}</td>
        <td>${tong}</td>
        </tr>
        `
        $("table tbody").append(them);
        $("#myModal").modal("hide");
        console.log(them)
        return true
     })
    }) 



