function pow (num,degree){
    if (degree == 1) {
        return num;
      } else {
        return num * pow(num, degree - 1);
      }
    }
let number = prompt('Enter number for degree');
let degree = prompt ('Enter value degree');
let result = pow(number,degree) 
alert (result)