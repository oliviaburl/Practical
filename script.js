var numbers=[-30, 14, 66, 21, 72, -4];
var incs = [];


function main(number) {
  var that = this;
    
  this.number = numbers[i];
  this.element = document.createElement("div");
  this.numEle = document.createElement("a");
  this.mesEle = document.createElement("a");
  this.numEle.innerHTML = "The number is #  " + this.number;
  
  if (this.number < 0) {this.mesEle.innerHTML += " and is below 0.";
  }
  else if (this.number > 50) {this.mesEle.innerHTML += " and is greater than 50.";
  }
  else if (this.number === 14) {this.mesEle.innerHTML += " and is equal to 14.";
  }
  else {this.mesEle.innerHTML += ".";
  }
  this.numEle.addEventListener("click", function(){that.increaseNumber();    
    })
  
  
  this.element.appendChild(this.numEle);
  this.element.appendChild(this.mesEle);
  document.body.appendChild(this.element);  
}
main.prototype.increaseNumber = function(){
  this.number = this.number + 1;  
  this.numEle.innerHTML = "The number is " + this.number;

}
for (var i = 0; i < numbers.length; i++) {incs.push(new main(numbers[i]))
}