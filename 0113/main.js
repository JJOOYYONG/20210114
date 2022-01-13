    var eye_method = function(selector){
        var eye = document.querySelector(selector),
        pupil = eye.querySelector('.pupil');
        console.log(eye);
        /*해당객체의 크기 및 위치정보를 가지고오는 함수 사용*/
        eye_area = eye.getBoundingClientRect();
    

        var roll_eye = function(mouseX,mouseY){
            var radian = Math.atan2(mouseY-(eye_area.y+eye_area.height*0.5),mouseX-(eye_area.x-eye_area.width*0.5));
            pupil.style.transform ='rotate('+(180*radian/Math.PI -90)+'deg)';
            
        }; 
        return{
            roll_eye : roll_eye
        };
    };
    
    var eye1=eye_method('.eye_1');
    var eye2=eye_method('.eye_2');
   
    /*마우스 좌표 가져오기*/ 
    window.addEventListener('mousemove',function(e){
        eye1.roll_eye(e.pageX,e.pageY);
        eye2.roll_eye(e.pageX,e.pageY);
    });
